import React from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'medium',
  text = 'Loading...',
  fullScreen = false
}) => {
  const sizeMap = {
    small: '24px',
    medium: '40px',
    large: '60px'
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: fullScreen ? '0' : '40px 20px',
    minHeight: fullScreen ? '100vh' : 'auto',
    backgroundColor: fullScreen ? '#111111' : 'transparent',
    color: '#ffffff',
    fontFamily: 'RocknRoll One, cursive'
  };

  const spinnerStyle: React.CSSProperties = {
    width: sizeMap[size],
    height: sizeMap[size],
    border: '4px solid rgba(255, 255, 255, 0.3)',
    borderTop: '4px solid #ffffff',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    marginBottom: text ? '16px' : '0'
  };

  const textStyle: React.CSSProperties = {
    fontSize: size === 'small' ? '14px' : size === 'medium' ? '16px' : '18px',
    fontWeight: '500',
    color: '#cccccc',
    textAlign: 'center'
  };

  return (
    <div style={containerStyle} role="status" aria-live="polite" aria-label={text}>
      <div style={spinnerStyle} aria-hidden="true" />
      {text && <div style={textStyle}>{text}</div>}
    </div>
  );
};

export default LoadingSpinner;