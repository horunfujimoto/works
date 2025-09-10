import React, { useEffect, useRef, useState } from 'react';
import TetrisBoard from '../components/TetrisBoard';
import TouchControls from '../components/TouchControls';
import { useTetrisGameContext } from '../contexts/TetrisGameContext';
import { animateScoreIncrement } from '../utils/animations';
import { announceToScreenReader, getGameStateDescription } from '../utils/accessibility';

export default function Home() {
  const scoreRef = useRef<HTMLDivElement>(null);
  const prevScore = useRef(0);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768);
  

  const {
    getCurrentBoard,
    movePiece,
    rotatePiece,
    hardDrop,
    startGame,
    togglePause,
    resetGame,
    gameState
  } = useTetrisGameContext();

  const currentBoard = getCurrentBoard();

  // Handle window resize and layout changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Also listen for potential layout changes (like when side panels open)
    const handleLayoutChange = () => {
      // Force a resize check with a small delay to ensure layout has settled
      setTimeout(handleResize, 100);
    };

    window.addEventListener('resize', handleResize);
    // Listen for any potential navigation changes that might affect layout
    window.addEventListener('popstate', handleLayoutChange);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('popstate', handleLayoutChange);
    };
  }, []);

  // Auto-start game on component mount
  useEffect(() => {
    if (!gameState.isPlaying && !gameState.gameOver) {
      startGame();
    }
  }, [gameState.isPlaying, gameState.gameOver, startGame]);

  // Animate score changes and announce to screen readers
  useEffect(() => {
    if (gameState.score > prevScore.current && scoreRef.current) {
      animateScoreIncrement(scoreRef.current);
      const scoreIncrease = gameState.score - prevScore.current;
      if (scoreIncrease > 0) {
        announceToScreenReader(`Score increased by ${scoreIncrease}. Current score: ${gameState.score}`);
      }
      prevScore.current = gameState.score;
    }
  }, [gameState.score]);

  // Announce game state changes
  useEffect(() => {
    if (gameState.gameOver) {
      announceToScreenReader('Game over! Press restart to play again.', 'assertive');
    } else if (gameState.isPaused) {
      announceToScreenReader('Game paused', 'polite');
    } else if (gameState.isPlaying && prevScore.current === 0) {
      announceToScreenReader('Game started! Use arrow keys to control pieces or click portfolio blocks to navigate.', 'polite');
    }
  }, [gameState.gameOver, gameState.isPaused, gameState.isPlaying]);

  // Announce line clears
  const prevLinesRef = useRef(0);
  useEffect(() => {
    if (gameState.linesCleared > prevLinesRef.current) {
      const linesCleared = gameState.linesCleared - prevLinesRef.current;
      announceToScreenReader(`${linesCleared} line${linesCleared > 1 ? 's' : ''} cleared!`, 'polite');
    }
    prevLinesRef.current = gameState.linesCleared;
  }, [gameState.linesCleared]);

  // Handle keyboard input
  useEffect(() => {
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
  }, [gameState.isPlaying, gameState.isPaused, movePiece, rotatePiece, hardDrop]);

  const gameContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#111111',
    color: '#ffffff',
    fontFamily: 'RocknRoll One, cursive',
    padding: isMobile ? '15px' : '20px'
  };

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: isMobile ? '15px' : '20px'
  };

  const controlsStyle: React.CSSProperties = {
    display: 'flex',
    gap: isMobile ? '8px' : '10px',
    marginBottom: isMobile ? '15px' : '20px',
    flexWrap: 'wrap',
    justifyContent: 'center'
  };

  const buttonStyle: React.CSSProperties = {
    padding: isMobile ? '12px 20px' : '12px 24px',
    fontSize: isMobile ? '14px' : '15px',
    fontFamily: 'RocknRoll One, cursive',
    fontWeight: '500',
    backgroundColor: 'var(--color-primary-grey)',
    color: 'var(--color-primary-white)',
    border: '2px solid var(--color-primary-grey)',
    cursor: 'pointer',
    borderRadius: 'var(--radius-lg)',
    minHeight: '44px',
    touchAction: 'manipulation',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
    letterSpacing: '0.025em'
  };

  const infoStyle: React.CSSProperties = {
    display: 'flex',
    gap: isMobile ? '15px' : '20px',
    marginBottom: isMobile ? '15px' : '20px',
    fontSize: isMobile ? '14px' : '16px',
    flexWrap: 'wrap',
    justifyContent: 'center'
  };

  const instructionsStyle: React.CSSProperties = {
    marginTop: isMobile ? '15px' : '20px',
    textAlign: 'center',
    fontSize: isMobile ? '12px' : '14px',
    color: '#cccccc',
    maxWidth: isMobile ? '300px' : '400px'
  };

  return (
    <div style={gameContainerStyle}>
      <div className="sr-only">
        <a href="#main-game" className="skip-link">Skip to game</a>
        <a href="#game-controls" className="skip-link">Skip to game controls</a>
      </div>
      
      <header style={headerStyle} role="banner" className="animate-fade-in-up">
        <h1 className="font-display gradient-text text-reveal" style={{ 
          fontSize: isMobile ? '2.5rem' : '3rem', 
          marginBottom: '15px', 
          fontWeight: '700',
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
          background: 'linear-gradient(135deg, #ffffff 0%, #cccccc 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: 'none'
        }}>
          ハローワールド
        </h1>
        <p style={{ 
          fontSize: isMobile ? '1rem' : '1.2rem', 
          color: 'var(--color-quaternary-white)',
          fontFamily: 'RocknRoll One, cursive',
          fontWeight: '400',
          lineHeight: '1.5',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          {isMobile ? '✨ Tap portfolio blocks to navigate' : '🎯 Click on CAREER, ARTICLES, HOBBIES, or WORKS blocks to navigate through my portfolio'}
        </p>
      </header>

      <div 
        style={controlsStyle} 
        id="game-controls"
        role="group"
        aria-label="Game control buttons"
        className="animate-slide-in-left"
      >
        <button 
          style={buttonStyle}
          onClick={startGame}
          disabled={gameState.isPlaying && !gameState.gameOver}
          className="tetris-button"
          aria-label={gameState.gameOver ? 'Restart the game' : 'Start a new game'}
        >
          {gameState.gameOver ? 'Restart' : 'Start'}
        </button>
        <button 
          style={buttonStyle}
          onClick={togglePause}
          disabled={!gameState.isPlaying || gameState.gameOver}
          className="tetris-button"
          aria-label={gameState.isPaused ? 'Resume the game' : 'Pause the game'}
        >
          {gameState.isPaused ? 'Resume' : 'Pause'}
        </button>
        <button 
          style={buttonStyle}
          onClick={resetGame}
          className="tetris-button"
          aria-label="Reset the game to initial state"
        >
          Reset
        </button>
      </div>

      <div 
        className="game-stats-enhanced animate-scale-in"
        style={{
          ...infoStyle,
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(10px)',
          borderRadius: 'var(--radius-xl)',
          padding: 'var(--spacing-lg)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: 'var(--shadow-lg)'
        }}
        role="status"
        aria-live="polite"
        aria-label="Game statistics"
      >
        <div ref={scoreRef} className="score-enhanced font-mono" aria-label={`Current score: ${gameState.score}`} style={{
          fontSize: isMobile ? '16px' : '18px',
          fontWeight: '700',
          color: 'var(--color-primary-white)',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
        }}>
          🏆 {gameState.score.toLocaleString()}
        </div>
        <div className="font-mono" aria-label={`Current level: ${gameState.level}`} style={{
          fontSize: isMobile ? '14px' : '16px',
          fontWeight: '600',
          color: 'var(--color-quaternary-white)'
        }}>
          📈 Level {gameState.level}
        </div>
        <div className="font-mono" aria-label={`Lines cleared: ${gameState.linesCleared}`} style={{
          fontSize: isMobile ? '14px' : '16px',
          fontWeight: '600',
          color: 'var(--color-quaternary-white)'
        }}>
          🧩 {gameState.linesCleared} Lines
        </div>
        {gameState.gameOver && (
          <div style={{ 
            color: 'var(--color-error)', 
            fontWeight: '700',
            fontSize: isMobile ? '14px' : '16px',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)'
          }} role="alert" aria-live="assertive">
            💀 Game Over!
          </div>
        )}
        {gameState.isPaused && (
          <div style={{ 
            color: 'var(--color-warning)', 
            fontWeight: '600',
            fontSize: isMobile ? '14px' : '16px',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)'
          }} role="status" aria-live="polite">
            ⏸️ Paused
          </div>
        )}
      </div>

      <main id="main-game" role="main" aria-label="Tetris game board" className="animate-fade-in-up">
        <div className="sr-only" aria-live="polite" id="game-status">
          {getGameStateDescription(gameState)}
        </div>
        <TetrisBoard
          board={currentBoard}
          blockSize={isMobile ? 32 : 40}
          className={`main-tetris-board hover-glow ${gameState.isPlaying ? 'active animate-glow' : ''} ${isMobile ? 'mobile' : ''}`}
        />
      </main>

      {isMobile && (
        <TouchControls
          onMoveLeft={() => movePiece('left')}
          onMoveRight={() => movePiece('right')}
          onRotate={rotatePiece}
          onSoftDrop={() => movePiece('down')}
          onHardDrop={hardDrop}
          disabled={!gameState.isPlaying || gameState.isPaused}
        />
      )}

      <div style={{
        ...instructionsStyle,
        background: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(5px)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--spacing-lg)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <p style={{ 
          fontWeight: '600', 
          marginBottom: '8px',
          color: 'var(--color-primary-white)'
        }}>
          🎮 <strong>Game Controls:</strong>
        </p>
        {!isMobile && (
          <p style={{ 
            fontFamily: 'RocknRoll One, cursive',
            fontSize: '12px',
            color: 'var(--color-quaternary-white)',
            marginBottom: '8px'
          }}>
            <kbd style={{ 
              background: 'var(--color-primary-grey)', 
              padding: '2px 6px', 
              borderRadius: '3px',
              fontSize: '11px'
            }}>←→</kbd> Move | 
            <kbd style={{ 
              background: 'var(--color-primary-grey)', 
              padding: '2px 6px', 
              borderRadius: '3px',
              fontSize: '11px',
              margin: '0 4px'
            }}>↑</kbd> Rotate | 
            <kbd style={{ 
              background: 'var(--color-primary-grey)', 
              padding: '2px 6px', 
              borderRadius: '3px',
              fontSize: '11px'
            }}>↓</kbd> Drop | 
            <kbd style={{ 
              background: 'var(--color-primary-grey)', 
              padding: '2px 6px', 
              borderRadius: '3px',
              fontSize: '11px',
              margin: '0 4px'
            }}>Enter</kbd> Hard Drop
          </p>
        )}
        {isMobile && (
          <p style={{ 
            color: 'var(--color-quaternary-white)',
            marginBottom: '8px'
          }}>
            Use touch controls above or tap blocks to navigate
          </p>
        )}
        <p style={{ 
          fontWeight: '600',
          color: 'var(--color-primary-white)',
          fontSize: isMobile ? '13px' : '14px'
        }}>
          ✨ <strong>Portfolio blocks are interactive - click to explore!</strong>
        </p>
      </div>
    </div>
  );
}
