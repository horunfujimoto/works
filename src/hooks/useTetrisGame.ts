import { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { TETROMINOS, getRandomTetromino, getPortfolioTetrominos } from '../utils/tetrominos';
import type { TetrominoData } from '../utils/tetrominos'; 

// Game constants
const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;
const DROP_INTERVAL = 1000; // 1 second

// Cell data structure
interface Cell {
  filled: boolean;
  color: string;
  text?: string;
  onClick?: () => void;
  isPortfolio?: boolean;
}

// Current piece state
interface CurrentPiece {
  tetromino: TetrominoData;
  shape: number[][];
  x: number;
  y: number;
  rotation: number;
}

// Game state
interface GameState {
  board: Cell[][];
  currentPiece: CurrentPiece | null;
  nextPiece: TetrominoData | null;
  score: number;
  level: number;
  linesCleared: number;
  isPlaying: boolean;
  isPaused: boolean;
  gameOver: boolean;
}

// Initialize empty board
const createEmptyBoard = (): Cell[][] => {
  return Array(BOARD_HEIGHT).fill(null).map(() =>
    Array(BOARD_WIDTH).fill(null).map(() => ({
      filled: false,
      color: '#000000'
    }))
  );
};

// Get a new piece (prioritize portfolio pieces)
const getNewPiece = (): TetrominoData => {
  // 70% chance for portfolio pieces, 30% for regular pieces
  if (Math.random() < 0.7) {
    const portfolioPieces = getPortfolioTetrominos();
    return portfolioPieces[Math.floor(Math.random() * portfolioPieces.length)];
  }
  return getRandomTetromino();
};

export const useTetrisGame = (onNavigate?: (page: string) => void) => {
  const [gameState, setGameState] = useState<GameState>({
    board: createEmptyBoard(),
    currentPiece: null,
    nextPiece: null,
    score: 0,
    level: 1,
    linesCleared: 0,
    isPlaying: false,
    isPaused: false,
    gameOver: false
  });

  // ここを修正: `NodeJS.Timeout` ではなく `number` を明示的に指定します
  const dropIntervalRef = useRef<number | null>(null);

  // Check if position is valid (no collision)
  const isValidPosition = useCallback((
    board: Cell[][],
    shape: number[][],
    x: number,
    y: number
  ): boolean => {
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (shape[row][col] === 1) {
          const newX = x + col;
          const newY = y + row;

          // Check boundaries
          if (newX < 0 || newX >= BOARD_WIDTH || newY >= BOARD_HEIGHT) {
            return false;
          }

          // Check collision with existing blocks
          if (newY >= 0 && board[newY][newX].filled) {
            return false;
          }
        }
      }
    }
    return true;
  }, []);

  // Place piece on board
  const placePiece = useCallback((
    board: Cell[][],
    piece: CurrentPiece
  ): Cell[][] => {
    const newBoard = board.map(row => row.map(cell => ({ ...cell })));

    for (let row = 0; row < piece.shape.length; row++) {
      for (let col = 0; col < piece.shape[row].length; col++) {
        if (piece.shape[row][col] === 1) {
          const x = piece.x + col;
          const y = piece.y + row;

          if (y >= 0) {
            newBoard[y][x] = {
              filled: true,
              color: piece.tetromino.color,
              text: piece.tetromino.text,
              onClick: piece.tetromino.portfolioPage 
                ? () => onNavigate?.(piece.tetromino.portfolioPage!)
                : undefined,
              isPortfolio: !!piece.tetromino.portfolioPage
            };
          }
        }
      }
    }

    return newBoard;
  }, [onNavigate]);

  // Clear completed lines
  const clearLines = useCallback((board: Cell[][]): { newBoard: Cell[][], linesCleared: number } => {
    const linesToClear: number[] = [];

    // Find completed lines
    for (let row = 0; row < BOARD_HEIGHT; row++) {
      if (board[row].every(cell => cell.filled)) {
        linesToClear.push(row);
      }
    }

    if (linesToClear.length === 0) {
      return { newBoard: board, linesCleared: 0 };
    }

    // Remove completed lines and add empty lines at top
    const newBoard = board.filter((_, index) => !linesToClear.includes(index));
    
    // Add empty lines at the top
    for (let i = 0; i < linesToClear.length; i++) {
      newBoard.unshift(
        Array(BOARD_WIDTH).fill(null).map(() => ({
          filled: false,
          color: '#000000'
        }))
      );
    }

    return { newBoard, linesCleared: linesToClear.length };
  }, []);

  // Spawn new piece
  const spawnPiece = useCallback((tetromino: TetrominoData): CurrentPiece => {
    const shape = tetromino.shape;
    const x = Math.floor((BOARD_WIDTH - shape[0].length) / 2);
    const y = 0;

    return {
      tetromino,
      shape,
      x,
      y,
      rotation: 0
    };
  }, []);

  // Move piece
  const movePiece = useCallback((direction: 'left' | 'right' | 'down') => {
    setGameState(prevState => {
      if (!prevState.currentPiece || !prevState.isPlaying || prevState.isPaused) {
        return prevState;
      }

      const { currentPiece, board } = prevState;
      let newX = currentPiece.x;
      let newY = currentPiece.y;

      switch (direction) {
        case 'left':
          newX -= 1;
          break;
        case 'right':
          newX += 1;
          break;
        case 'down':
          newY += 1;
          break;
      }

      if (isValidPosition(board, currentPiece.shape, newX, newY)) {
        return {
          ...prevState,
          currentPiece: {
            ...currentPiece,
            x: newX,
            y: newY
          }
        };
      }

      // If can't move down, place the piece
      if (direction === 'down') {
        const newBoard = placePiece(board, currentPiece);
        const { newBoard: clearedBoard, linesCleared } = clearLines(newBoard);
        
        const newScore = prevState.score + (linesCleared * 100 * prevState.level);
        const newLinesCleared = prevState.linesCleared + linesCleared;
        const newLevel = Math.floor(newLinesCleared / 10) + 1;

        // Check for game over
        const nextTetromino = prevState.nextPiece || getNewPiece();
        const newPiece = spawnPiece(nextTetromino);
        
        if (!isValidPosition(clearedBoard, newPiece.shape, newPiece.x, newPiece.y)) {
          return {
            ...prevState,
            board: clearedBoard,
            gameOver: true,
            isPlaying: false,
            currentPiece: null
          };
        }

        return {
          ...prevState,
          board: clearedBoard,
          currentPiece: newPiece,
          nextPiece: getNewPiece(),
          score: newScore,
          level: newLevel,
          linesCleared: newLinesCleared
        };
      }

      return prevState;
    });
  }, [isValidPosition, placePiece, clearLines, spawnPiece]);

  // Rotate piece
  const rotatePiece = useCallback(() => {
    setGameState(prevState => {
      if (!prevState.currentPiece || !prevState.isPlaying || prevState.isPaused) {
        return prevState;
      }

      const { currentPiece, board } = prevState;
      const newRotation = (currentPiece.rotation + 1) % 4;
      const newShape = currentPiece.tetromino.rotations[newRotation];

      if (isValidPosition(board, newShape, currentPiece.x, currentPiece.y)) {
        return {
          ...prevState,
          currentPiece: {
            ...currentPiece,
            shape: newShape,
            rotation: newRotation
          }
        };
      }

      return prevState;
    });
  }, [isValidPosition]);

  // Hard drop
  const hardDrop = useCallback(() => {
    setGameState(prevState => {
      if (!prevState.currentPiece || !prevState.isPlaying || prevState.isPaused) {
        return prevState;
      }

      const { currentPiece, board } = prevState;
      let newY = currentPiece.y;

      // Find the lowest valid position
      while (isValidPosition(board, currentPiece.shape, currentPiece.x, newY + 1)) {
        newY += 1;
      }

      const droppedPiece = { ...currentPiece, y: newY };
      const newBoard = placePiece(board, droppedPiece);
      const { newBoard: clearedBoard, linesCleared } = clearLines(newBoard);

      const dropBonus = (newY - currentPiece.y) * 2;
      const newScore = prevState.score + (linesCleared * 100 * prevState.level) + dropBonus;
      const newLinesCleared = prevState.linesCleared + linesCleared;
      const newLevel = Math.floor(newLinesCleared / 10) + 1;

      // Spawn next piece
      const nextTetromino = prevState.nextPiece || getNewPiece();
      const newPiece = spawnPiece(nextTetromino);

      if (!isValidPosition(clearedBoard, newPiece.shape, newPiece.x, newPiece.y)) {
        return {
          ...prevState,
          board: clearedBoard,
          gameOver: true,
          isPlaying: false,
          currentPiece: null
        };
      }

      return {
        ...prevState,
        board: clearedBoard,
        currentPiece: newPiece,
        nextPiece: getNewPiece(),
        score: newScore,
        level: newLevel,
        linesCleared: newLinesCleared
      };
    });
  }, [isValidPosition, placePiece, clearLines, spawnPiece]);

  // Start game
  const startGame = useCallback(() => {
    const firstPiece = getNewPiece();
    const nextPiece = getNewPiece();

    setGameState({
      board: createEmptyBoard(),
      currentPiece: spawnPiece(firstPiece),
      nextPiece,
      score: 0,
      level: 1,
      linesCleared: 0,
      isPlaying: true,
      isPaused: false,
      gameOver: false
    });
  }, [spawnPiece]);

  // Pause/Resume game
  const togglePause = useCallback(() => {
    setGameState(prevState => ({
      ...prevState,
      isPaused: !prevState.isPaused
    }));
  }, []);

  // Reset game
  const resetGame = useCallback(() => {
    setGameState({
      board: createEmptyBoard(),
      currentPiece: null,
      nextPiece: null,
      score: 0,
      level: 1,
      linesCleared: 0,
      isPlaying: false,
      isPaused: false,
      gameOver: false
    });
  }, []);

  // Auto drop effect
  useEffect(() => {
    if (gameState.isPlaying && !gameState.isPaused && !gameState.gameOver) {
      const interval = Math.max(100, DROP_INTERVAL - (gameState.level - 1) * 50);
      
      // ここを修正: `as number` を追加して型アサーションを行います
      dropIntervalRef.current = setInterval(() => {
        movePiece('down');
      }, interval) as unknown as number; // <-- この部分を追加

      return () => {
        if (dropIntervalRef.current) {
          clearInterval(dropIntervalRef.current);
          dropIntervalRef.current = null; 
        }
      };
    }
  }, [gameState.isPlaying, gameState.isPaused, gameState.gameOver, gameState.level, movePiece]);


  // Get current board state including falling piece (memoized for performance)
  const getCurrentBoard = useMemo((): Cell[][] => {
    const { board, currentPiece } = gameState;
    
    if (!currentPiece) {
      return board;
    }

    // Create a copy of the board with the current piece
    const displayBoard = board.map(row => row.map(cell => ({ ...cell })));

    for (let row = 0; row < currentPiece.shape.length; row++) {
      for (let col = 0; col < currentPiece.shape[row].length; col++) {
        if (currentPiece.shape[row][col] === 1) {
          const x = currentPiece.x + col;
          const y = currentPiece.y + row;

          if (y >= 0 && y < BOARD_HEIGHT && x >= 0 && x < BOARD_WIDTH) {
            displayBoard[y][x] = {
              filled: true,
              color: currentPiece.tetromino.color,
              text: currentPiece.tetromino.text,
              onClick: currentPiece.tetromino.portfolioPage 
                ? () => onNavigate?.(currentPiece.tetromino.portfolioPage!)
                : undefined,
              isPortfolio: !!currentPiece.tetromino.portfolioPage
            };
          }
        }
      }
    }

    return displayBoard;
  }, [gameState.board, gameState.currentPiece, onNavigate]);

  return {
    gameState,
    movePiece,
    rotatePiece,
    hardDrop,
    startGame,
    togglePause,
    resetGame,
    getCurrentBoard: useCallback(() => getCurrentBoard, [getCurrentBoard])
  };
};