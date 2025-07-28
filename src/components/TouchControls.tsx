import React from 'react';

interface TouchControlsProps {
  onMoveLeft: () => void;
  onMoveRight: () => void;
  onRotate: () => void;
  onSoftDrop: () => void;
  onHardDrop: () => void;
  disabled?: boolean;
}

const TouchControls: React.FC<TouchControlsProps> = ({
  onMoveLeft,
  onMoveRight,
  onRotate,
  onSoftDrop,
  onHardDrop,
  disabled = false
}) => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    padding: '15px',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: '12px',
    margin: '10px 0',
    touchAction: 'manipulation'
  };

  const controlRowStyle: React.CSSProperties = {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const buttonStyle: React.CSSProperties = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    border: '2px solid #666666',
    backgroundColor: '#333333',
    color: '#ffffff',
    fontSize: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    touchAction: 'manipulation',
    userSelect: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'all 0.1s ease',
    fontWeight: 'bold'
  };

  const rectangularButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    width: '120px',
    height: '50px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 'bold'
  };

  const handleTouchStart = (callback: () => void) => (e: React.TouchEvent) => {
    e.preventDefault();
    if (!disabled) {
      callback();
      // Visual feedback
      const target = e.currentTarget as HTMLButtonElement;
      target.style.transform = 'scale(0.95)';
      target.style.backgroundColor = '#555555';
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLButtonElement;
    target.style.transform = 'scale(1)';
    target.style.backgroundColor = '#333333';
  };

  const handleMouseDown = (callback: () => void) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (!disabled) {
      callback();
      const target = e.currentTarget as HTMLButtonElement;
      target.style.transform = 'scale(0.95)';
      target.style.backgroundColor = '#555555';
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLButtonElement;
    target.style.transform = 'scale(1)';
    target.style.backgroundColor = '#333333';
  };

  return (
    <div style={containerStyle} className="touch-controls">
      {/* Top row - Rotate and Hard Drop */}
      <div style={controlRowStyle}>
        <button
          style={buttonStyle}
          onTouchStart={handleTouchStart(onRotate)}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown(onRotate)}
          onMouseUp={handleMouseUp}
          disabled={disabled}
          aria-label="Rotate piece"
        >
          ↻
        </button>
        <button
          style={rectangularButtonStyle}
          onTouchStart={handleTouchStart(onHardDrop)}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown(onHardDrop)}
          onMouseUp={handleMouseUp}
          disabled={disabled}
          aria-label="Hard drop"
        >
          HARD DROP
        </button>
      </div>

      {/* Middle row - Left, Soft Drop, Right */}
      <div style={controlRowStyle}>
        <button
          style={buttonStyle}
          onTouchStart={handleTouchStart(onMoveLeft)}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown(onMoveLeft)}
          onMouseUp={handleMouseUp}
          disabled={disabled}
          aria-label="Move left"
        >
          ←
        </button>
        <button
          style={buttonStyle}
          onTouchStart={handleTouchStart(onSoftDrop)}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown(onSoftDrop)}
          onMouseUp={handleMouseUp}
          disabled={disabled}
          aria-label="Soft drop"
        >
          ↓
        </button>
        <button
          style={buttonStyle}
          onTouchStart={handleTouchStart(onMoveRight)}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown(onMoveRight)}
          onMouseUp={handleMouseUp}
          disabled={disabled}
          aria-label="Move right"
        >
          →
        </button>
      </div>

      <div style={{
        fontSize: '11px',
        color: '#888888',
        textAlign: 'center',
        marginTop: '5px'
      }}>
        Touch controls for mobile
      </div>
    </div>
  );
};

export default TouchControls;