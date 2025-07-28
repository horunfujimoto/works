import React, { useRef, useEffect, memo } from 'react';
import { animateHover, animatePortfolioClick, animateBlockPlace } from '../utils/animations';
import { getBlockDescription } from '../utils/accessibility';

interface TetrisBlockProps {
  color?: string;
  size?: number;
  text?: string;
  onClick?: () => void;
  className?: string;
  isPortfolio?: boolean;
  isNew?: boolean;
  position?: { row: number; col: number };
  ariaLabel?: string;
}

const TetrisBlock: React.FC<TetrisBlockProps> = ({ 
  color = '#666666', 
  size = 50, 
  text, 
  onClick, 
  className = '',
  isPortfolio = false,
  isNew = false,
  position = { row: 0, col: 0 },
  ariaLabel
}) => {
  const blockRef = useRef<HTMLDivElement>(null);

  // Determine portfolio section type for styling
  const getPortfolioType = () => {
    if (!isPortfolio || !text) return null;
    const textContent = text.toLowerCase().replace('\n', '');
    if (textContent.includes('ca') && textContent.includes('reer')) return 'career';
    if (textContent.includes('art')) return 'articles';
    if (textContent.includes('hob')) return 'hobbies';
    if (textContent.includes('work')) return 'works';
    return null;
  };

  const portfolioType = getPortfolioType();

  const blockStyle: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color,
    border: isPortfolio ? '2px solid rgba(255, 255, 255, 0.3)' : '2px solid #333333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: `${size * 0.22}px`,
    fontWeight: isPortfolio ? '700' : '600',
    color: '#ffffff',
    cursor: onClick ? 'pointer' : 'default',
    userSelect: 'none',
    fontFamily: isPortfolio ? 'var(--font-family-display)' : 'var(--font-family-primary)',
    position: 'relative',
    overflow: 'hidden',
    whiteSpace: 'pre-line',
    textAlign: 'center',
    lineHeight: '0.9',
    boxShadow: isPortfolio 
      ? '0 4px 12px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)' 
      : '0 2px 4px rgba(0, 0, 0, 0.2)',
    borderRadius: '2px',
    textShadow: isPortfolio ? '0 1px 2px rgba(0, 0, 0, 0.8)' : 'none',
    letterSpacing: isPortfolio ? '-0.5px' : 'normal',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  // Animate new blocks when they appear
  useEffect(() => {
    if (isNew && blockRef.current) {
      animateBlockPlace(blockRef.current);
    }
  }, [isNew]);

  const handleClick = async () => {
    if (onClick && blockRef.current) {
      // Animate click before navigation
      await animatePortfolioClick(blockRef.current);
      onClick();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      handleClick();
    }
  };

  const handleMouseEnter = () => {
    if (onClick && blockRef.current) {
      animateHover(blockRef.current, true);
      // Add additional visual feedback for portfolio blocks
      if (isPortfolio) {
        blockRef.current.style.filter = 'brightness(1.1) saturate(1.1)';
        blockRef.current.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
      }
    }
  };

  const handleMouseLeave = () => {
    if (onClick && blockRef.current) {
      animateHover(blockRef.current, false);
      // Reset additional visual feedback
      if (isPortfolio) {
        blockRef.current.style.filter = 'none';
        blockRef.current.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
      }
    }
  };

  // Generate accessibility description
  const accessibilityLabel = ariaLabel || getBlockDescription(
    { filled: true, isPortfolio, text },
    position
  );

  return (
    <div
      ref={blockRef}
      style={blockStyle}
      onClick={onClick ? handleClick : undefined}
      onKeyDown={onClick ? handleKeyDown : undefined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`tetris-block tetris-block-enhanced keyboard-navigable ${className} ${isPortfolio ? 'portfolio-block portfolio-enhanced' : ''} ${portfolioType ? `portfolio-${portfolioType}` : ''}`}
      role={onClick ? 'button' : 'gridcell'}
      tabIndex={onClick ? 0 : -1}
      aria-label={accessibilityLabel}
      aria-describedby={isPortfolio ? `portfolio-block-${position.row}-${position.col}` : undefined}
    >
      <span className={isPortfolio ? 'portfolio-text' : ''}>{text}</span>
      {isPortfolio && (
        <>
          {/* Subtle gradient overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)',
              pointerEvents: 'none',
              borderRadius: '2px'
            }}
          />
          
          {/* Animated shimmer effect */}
          <div
            style={{
              position: 'absolute',
              top: '-100%',
              left: '-100%',
              width: '300%',
              height: '300%',
              background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
              pointerEvents: 'none',
              animation: 'shimmer 3s infinite',
              transform: 'translateX(-100%)'
            }}
          />
          
          {/* Screen reader description */}
          <div 
            id={`portfolio-block-${position.row}-${position.col}`}
            className="sr-only"
          >
            Portfolio navigation block. {text ? `Navigate to ${text.replace('\n', ' ')} section.` : ''}
          </div>
          
          {/* Interactive indicator */}
          <div
            style={{
              position: 'absolute',
              bottom: '2px',
              right: '2px',
              width: '4px',
              height: '4px',
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              borderRadius: '50%',
              pointerEvents: 'none'
            }}
          />
        </>
      )}
    </div>
  );
};

export default memo(TetrisBlock);