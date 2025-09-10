import React, { useRef, useEffect, memo, useState } from 'react';
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
  const [showTooltip, setShowTooltip] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // Map portfolio type to icon and full text
  const getPortfolioInfo = (portfolioType: string | null) => {
    switch (portfolioType) {
      case 'career':
        return { icon: 'fa-briefcase', fullText: 'CAREER' };
      case 'articles':
        return { icon: 'fa-file-alt', fullText: 'ARTICLES' };
      case 'hobbies':
        return { icon: 'fa-gamepad', fullText: 'HOBBIES' };
      case 'works':
        return { icon: 'fa-cogs', fullText: 'WORKS' };
      default:
        return { icon: '', fullText: text || '' };
    }
  };

  const portfolioType = getPortfolioType();
  const portfolioInfo = getPortfolioInfo(portfolioType);
  
  // Determine if this is a colorful decorative block
  const isColorfulBlock = !isPortfolio && (
    color === '#42A5F5' || // J block - Blue
    color === '#FF9800' || // O block - Orange  
    color === '#66BB6A'    // Z block - Green
  );

  const blockStyle: React.CSSProperties = {
    width: `${size - 1}px`,
    height: `${size - 1}px`,
    backgroundColor: color,
    border: isPortfolio 
      ? '0.5px solid rgba(255, 255, 255, 0.3)' 
      : isColorfulBlock 
        ? '0.5px solid rgba(255, 255, 255, 0.2)'
        : '0.5px solid #333333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: `${size * 0.18}px`,
    fontWeight: isPortfolio ? '700' : '600',
    color: '#ffffff',
    cursor: onClick ? 'pointer' : 'default',
    userSelect: 'none',
    fontFamily: 'RocknRoll One, cursive',
    position: 'relative',
    overflow: 'hidden',
    whiteSpace: 'pre-line',
    textAlign: 'center',
    lineHeight: '0.9',
    boxShadow: isPortfolio 
      ? '0 2px 6px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)' 
      : isColorfulBlock
        ? '0 2px 4px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
        : '0 1px 2px rgba(0, 0, 0, 0.2)',
    borderRadius: '1px',
    textShadow: isPortfolio ? '0 1px 2px rgba(0, 0, 0, 0.8)' : 'none',
    letterSpacing: isPortfolio ? '-0.3px' : 'normal',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    boxSizing: 'border-box',
    margin: '0.5px',
    minWidth: 'unset',
    minHeight: 'unset'
  };

  // Animate new blocks when they appear
  useEffect(() => {
    if (isNew && blockRef.current) {
      animateBlockPlace(blockRef.current);
    }
  }, [isNew]);

  const handleClick = async () => {
    if (onClick && blockRef.current) {
      // Mobile tap-to-show-tooltip functionality
      if (isMobile && isPortfolio) {
        if (!showTooltip) {
          // First tap: show tooltip
          setShowTooltip(true);
          return;
        }
        // Second tap: navigate (hide tooltip and proceed)
        setShowTooltip(false);
      }
      
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
        // Show tooltip on hover for PC
        if (!isMobile) {
          setShowTooltip(true);
        }
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
        // Hide tooltip on mouse leave for PC
        if (!isMobile) {
          setShowTooltip(false);
        }
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
      {isPortfolio && portfolioInfo.icon ? (
        <i className={`fa-solid ${portfolioInfo.icon}`} style={{ 
          fontSize: `${size * 0.4}px`,
          color: '#ffffff'
        }} />
      ) : (
        <span className={isPortfolio ? 'portfolio-text' : ''}>{text}</span>
      )}
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
          
          {/* Tooltip */}
          {showTooltip && (
            <div
              style={{
                position: 'absolute',
                bottom: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                marginBottom: '8px',
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                color: '#ffffff',
                padding: '8px 12px',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: '600',
                whiteSpace: 'nowrap',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                zIndex: 1000,
                backdropFilter: 'blur(10px)',
                letterSpacing: '0.5px',
                pointerEvents: 'none'
              }}
            >
              {portfolioInfo.fullText}
              {/* Arrow pointing down */}
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '0',
                  height: '0',
                  borderLeft: '4px solid transparent',
                  borderRight: '4px solid transparent',
                  borderTop: '4px solid rgba(0, 0, 0, 0.9)'
                }}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default memo(TetrisBlock);