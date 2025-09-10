import React, { type ReactNode, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import TetrisBoard from './TetrisBoard';
import { useTetrisGameContext } from '../contexts/TetrisGameContext';
import { animatePageEnter } from '../utils/animations';
import { announceToScreenReader, createSkipLink } from '../utils/accessibility';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const contentRef = useRef<HTMLDivElement>(null);

  const {
    gameState,
    movePiece,
    rotatePiece,
    hardDrop,
    startGame,
    togglePause,
    resetGame,
    getCurrentBoard
  } = useTetrisGameContext();

  const currentBoard = getCurrentBoard();

  // Handle keyboard input for Tetris game
  React.useEffect(() => {
    if (isHomePage) return; // Only handle keyboard on non-home pages

    const handleKeyPress = (event: KeyboardEvent) => {
      if (!gameState.isPlaying || gameState.isPaused) return;

      switch (event.code) {
        case 'ArrowLeft':
          event.preventDefault();
          movePiece('left');
          break;
        case 'ArrowRight':
          event.preventDefault();
          movePiece('right');
          break;
        case 'ArrowDown':
          event.preventDefault();
          movePiece('down');
          break;
        case 'ArrowUp':
        case 'Space':
          event.preventDefault();
          rotatePiece();
          break;
        case 'Enter':
          event.preventDefault();
          hardDrop();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameState.isPlaying, gameState.isPaused, movePiece, rotatePiece, hardDrop, isHomePage]);

  // Auto-start game when not on home page
  React.useEffect(() => {
    if (!isHomePage && !gameState.isPlaying && !gameState.gameOver) {
      startGame();
    }
  }, [isHomePage, gameState.isPlaying, gameState.gameOver, startGame]);

  // Animate page transitions
  React.useEffect(() => {
    if (!isHomePage && contentRef.current) {
      animatePageEnter(contentRef.current);
    }
  }, [location.pathname, isHomePage]);

  const [windowWidth, setWindowWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const getBlockSize = () => {
    if (isMobile) return 20;
    if (isTablet) return 25;
    return 30;
  };

  const gameInfoStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: isMobile ? '10px' : '15px',
    fontSize: isMobile ? '12px' : '14px',
    color: '#cccccc'
  };

  const gameStatsStyle: React.CSSProperties = {
    display: 'flex',
    gap: isMobile ? '10px' : '15px',
    marginBottom: isMobile ? '10px' : '15px',
    fontSize: isMobile ? '11px' : '12px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: isMobile && windowWidth < 480 ? 'column' : 'row',
    alignItems: 'center'
  };

  const controlsStyle: React.CSSProperties = {
    display: 'flex',
    gap: isMobile ? '6px' : '8px',
    marginTop: isMobile ? '10px' : '15px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: isMobile && windowWidth < 480 ? 'column' : 'row'
  };

  const buttonStyle: React.CSSProperties = {
    padding: isMobile ? '8px 12px' : '6px 12px',
    fontSize: isMobile ? '12px' : '11px',
    fontFamily: 'RocknRoll One, cursive',
    fontWeight: '500',
    backgroundColor: 'var(--color-primary-grey)',
    color: 'var(--color-primary-white)',
    border: '1px solid var(--color-tertiary-grey)',
    cursor: 'pointer',
    borderRadius: 'var(--radius-md)',
    minHeight: '36px',
    minWidth: isMobile ? '70px' : '60px',
    touchAction: 'manipulation',
    transition: 'all 0.15s ease',
    position: 'relative',
    overflow: 'hidden'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: isMobile ? '1rem' : '1.2rem',
    marginBottom: '10px',
    color: '#ffffff',
    textAlign: 'center'
  };

  const instructionsStyle: React.CSSProperties = {
    marginTop: isMobile ? '10px' : '15px',
    textAlign: 'center',
    fontSize: isMobile ? '10px' : '11px',
    color: '#888888',
    lineHeight: '1.4',
    maxWidth: '100%',
    wordBreak: 'break-word'
  };

  // Add skip links on component mount
  React.useEffect(() => {
    if (!isHomePage) {
      const skipToMain = createSkipLink('main-content', 'Skip to main content');
      const skipToGame = createSkipLink('tetris-game', 'Skip to Tetris game');
      
      document.body.insertBefore(skipToMain, document.body.firstChild);
      document.body.insertBefore(skipToGame, document.body.firstChild);
      
      return () => {
        document.body.removeChild(skipToMain);
        document.body.removeChild(skipToGame);
      };
    }
  }, [isHomePage]);

  // Announce page changes to screen readers
  React.useEffect(() => {
    if (!isHomePage) {
      const pageName = location.pathname.slice(1) || 'home';
      announceToScreenReader(`Navigated to ${pageName} page`, 'polite');
    }
  }, [location.pathname, isHomePage]);

  // If on home page, render children without sidebar
  if (isHomePage) {
    return <div>{children}</div>;
  }

  return (
    <div className={`tetris-layout ${isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'}`}>
      <aside 
        className={`tetris-sidebar ${isMobile ? 'mobile' : ''}`}
        role="complementary"
        aria-label="Tetris game sidebar"
      >
        <header>
          <h2 style={titleStyle}>Tetris Portfolio</h2>
        </header>
        
        <div style={gameInfoStyle} role="status" aria-live="polite">
          <p style={{ margin: '0 0 5px 0' }}>Click blocks to navigate!</p>
        </div>

        <div 
          style={gameStatsStyle}
          role="status"
          aria-live="polite"
          aria-label="Game statistics"
        >
          <div aria-label={`Current score: ${gameState.score}`}>Score: {gameState.score}</div>
          <div aria-label={`Current level: ${gameState.level}`}>Level: {gameState.level}</div>
          <div aria-label={`Lines cleared: ${gameState.linesCleared}`}>Lines: {gameState.linesCleared}</div>
        </div>

        {gameState.gameOver && (
          <div 
            style={{ color: '#ff6666', fontSize: '12px', marginBottom: '10px' }}
            role="alert"
            aria-live="assertive"
          >
            Game Over!
          </div>
        )}

        {gameState.isPaused && (
          <div 
            style={{ color: '#ffff66', fontSize: '12px', marginBottom: '10px' }}
            role="status"
            aria-live="polite"
          >
            Paused
          </div>
        )}

        <div className="tetris-board-container" id="tetris-game">
          <TetrisBoard
            board={currentBoard}
            blockSize={getBlockSize()}
            className={`sidebar-tetris-board ${isMobile ? 'tetris-board-mobile' : ''}`}
          />
        </div>

        <div 
          className="game-controls" 
          style={controlsStyle}
          role="group"
          aria-label="Game controls"
        >
          <button 
            className="game-button tetris-button btn btn-primary"
            style={buttonStyle}
            onClick={startGame}
            disabled={gameState.isPlaying && !gameState.gameOver}
            aria-label={gameState.gameOver ? 'Restart game' : 'Start new game'}
            onMouseEnter={(e) => {
              if (!e.currentTarget.disabled) {
                e.currentTarget.style.backgroundColor = 'var(--color-secondary-grey)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-primary-grey)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {gameState.gameOver ? 'Restart' : 'Start'}
          </button>
          <button 
            className="game-button tetris-button btn btn-secondary"
            style={buttonStyle}
            onClick={togglePause}
            disabled={!gameState.isPlaying || gameState.gameOver}
            aria-label={gameState.isPaused ? 'Resume game' : 'Pause game'}
            onMouseEnter={(e) => {
              if (!e.currentTarget.disabled) {
                e.currentTarget.style.backgroundColor = 'var(--color-secondary-grey)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-primary-grey)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {gameState.isPaused ? 'Resume' : 'Pause'}
          </button>
          <button 
            className="game-button tetris-button btn btn-ghost"
            style={buttonStyle}
            onClick={resetGame}
            aria-label="Reset game to initial state"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-tertiary-grey)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-primary-grey)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Reset
          </button>
        </div>

        <div 
          className={`game-instructions ${isMobile ? 'mobile' : ''}`} 
          style={instructionsStyle}
          role="note"
          aria-label="Game instructions"
        >
          <p><strong>Controls:</strong></p>
          <p className="hide-mobile">← → Move | ↑ Rotate<br/>↓ Drop | Enter Hard Drop</p>
          <p className="show-mobile">Touch controls available<br/>Click blocks to navigate</p>
          <p style={{ marginTop: '8px' }}>
            <strong>Portfolio blocks are clickable!</strong>
          </p>
        </div>
      </aside>

      <main 
        ref={contentRef} 
        className="tetris-content main-content" 
        id="main-content"
        role="main"
        aria-label="Portfolio content"
        tabIndex={-1}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;