import React, { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { useTetrisGame } from '../hooks/useTetrisGame';

interface Cell {
  filled: boolean;
  color: string;
  text?: string;
  onClick?: () => void;
  isPortfolio?: boolean;
}

interface GameState {
  board: Cell[][];
  currentPiece: any | null;
  nextPiece: any | null;
  score: number;
  level: number;
  linesCleared: number;
  isPlaying: boolean;
  isPaused: boolean;
  gameOver: boolean;
}

interface TetrisGameContextValue {
  gameState: GameState;
  movePiece: (direction: 'left' | 'right' | 'down') => void;
  rotatePiece: () => void;
  hardDrop: () => void;
  startGame: () => void;
  togglePause: () => void;
  resetGame: () => void;
  getCurrentBoard: () => Cell[][];
}

const TetrisGameContext = createContext<TetrisGameContextValue | undefined>(undefined);

interface TetrisGameProviderProps {
  children: ReactNode;
  onNavigate: (page: string) => void;
}

export const TetrisGameProvider: React.FC<TetrisGameProviderProps> = ({ 
  children, 
  onNavigate 
}) => {
  const gameLogic = useTetrisGame(onNavigate);

  return (
    <TetrisGameContext.Provider value={gameLogic}>
      {children}
    </TetrisGameContext.Provider>
  );
};

export const useTetrisGameContext = (): TetrisGameContextValue => {
  const context = useContext(TetrisGameContext);
  if (context === undefined) {
    throw new Error('useTetrisGameContext must be used within a TetrisGameProvider');
  }
  return context;
};