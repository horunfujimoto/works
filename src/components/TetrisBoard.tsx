import React, { memo } from 'react';
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
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const isTablet = typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth < 1024;

  const boardStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateRows: `repeat(${rows}, ${blockSize}px)`,
    gridTemplateColumns: `repeat(${cols}, ${blockSize}px)`,
    gap: isMobile ? '0.5px' : '1px',
    backgroundColor: '#000000',
    border: `${isMobile ? '2px' : '3px'} solid #333333`,
    padding: isMobile ? '1px' : '2px',
    margin: '0 auto',
    maxWidth: isMobile ? 'calc(100vw - 40px)' : '100vw',
    maxHeight: isMobile ? 'calc(100vh - 200px)' : '100vh',
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
              size={blockSize}
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
                width: `${blockSize}px`,
                height: `${blockSize}px`,
                backgroundColor: '#000000',
                border: `${isMobile ? '0.5px' : '1px'} solid #222222`,
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