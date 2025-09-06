import React, { memo, useState, useEffect } from 'react';
import TetrisBlock from './TetrisBlock';

interface BlockData {
  filled: boolean;
  color: string;
  text?: string;
  onClick?: () => void;
  isPortfolio?: boolean;
}

interface TetrisBoardProps {
  rows?: number;
  cols?: number;
  blockSize?: number;
  board: BlockData[][];
  className?: string;
}

const TetrisBoard: React.FC<TetrisBoardProps> = ({
  rows = 20,
  cols = 10,
  blockSize = 40,
  board,
  className = ''
}) => {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768);
  const [actualBlockSize, setActualBlockSize] = useState(blockSize);
  
  // Handle window resize and update mobile state and block size
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Dynamically calculate optimal block size based on available space
      // Take into account potential side panels and navigation
      const availableWidth = Math.min(
        window.innerWidth - (mobile ? 40 : 80), 
        mobile ? 320 : 400
      );
      const optimalSize = Math.floor(availableWidth / cols);
      const minSize = mobile ? 22 : 28;
      const maxSize = mobile ? 35 : 45;
      
      setActualBlockSize(Math.max(minSize, Math.min(optimalSize, maxSize)));
    };

    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
      
      // Also listen for potential page transitions or layout changes
      const observer = new MutationObserver(() => {
        setTimeout(handleResize, 50);
      });
      
      observer.observe(document.body, { 
        childList: true, 
        subtree: true, 
        attributes: true,
        attributeFilter: ['style', 'class']
      });
      
      return () => {
        window.removeEventListener('resize', handleResize);
        observer.disconnect();
      };
    }
  }, [blockSize, cols]);

  const boardStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateRows: `repeat(${rows}, ${actualBlockSize}px)`,
    gridTemplateColumns: `repeat(${cols}, ${actualBlockSize}px)`,
    gap: 0,
    backgroundColor: '#000000',
    border: `${isMobile ? '2px' : '3px'} solid #333333`,
    padding: 0,
    margin: '0 auto',
    maxWidth: isMobile ? 'calc(100vw - 40px)' : 'auto',
    maxHeight: isMobile ? 'calc(100vh - 200px)' : 'auto',
    boxSizing: 'border-box',
    borderRadius: '4px',
    touchAction: 'manipulation'
  };

  const renderGrid = () => {
    const grid = [];
    
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const cell = board[row]?.[col];
        const key = `${row}-${col}`;
        
        if (cell?.filled) {
          // Render filled block
          grid.push(
            <TetrisBlock
              key={key}
              color={cell.color}
              size={actualBlockSize}
              text={cell.text}
              onClick={cell.onClick}
              isPortfolio={cell.isPortfolio}
              position={{ row, col }}
              className={`tetris-board-block ${cell.isPortfolio ? 'portfolio-block' : ''}`}
            />
          );
        } else {
          // Empty cell
          grid.push(
            <div
              key={key}
              style={{
                width: `${actualBlockSize - 1}px`,
                height: `${actualBlockSize - 1}px`,
                backgroundColor: '#000000',
                border: '0.5px solid #222222',
                boxSizing: 'border-box',
                margin: '0.5px'
              }}
              className={`tetris-board-empty ${isMobile ? 'mobile' : ''}`}
            />
          );
        }
      }
    }
    
    return grid;
  };

  return (
    <div
      style={boardStyle}
      className={`tetris-board ${className}`}
      role="grid"
      aria-label={`Tetris game board, ${rows} rows by ${cols} columns`}
      aria-describedby="tetris-board-description"
    >
      <div id="tetris-board-description" className="sr-only">
        Interactive Tetris game board. Use arrow keys to move pieces, space to rotate. 
        Portfolio blocks (CAREER, ARTICLES, HOBBIES, WORKS) can be clicked to navigate.
      </div>
      {renderGrid()}
    </div>
  );
};

export default memo(TetrisBoard);