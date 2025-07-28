// Accessibility utilities for the Tetris Portfolio

// Announce messages to screen readers
export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite'): void => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  // Add to DOM
  document.body.appendChild(announcement);
  
  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

// Create screen reader only text
export const createScreenReaderText = (text: string): HTMLSpanElement => {
  const srText = document.createElement('span');
  srText.className = 'sr-only';
  srText.textContent = text;
  return srText;
};

// Game state descriptions for screen readers
export const getGameStateDescription = (gameState: any): string => {
  let description = '';
  
  if (gameState.gameOver) {
    description = `Game over. Final score: ${gameState.score}. Press restart to play again.`;
  } else if (gameState.isPaused) {
    description = `Game paused. Score: ${gameState.score}, Level: ${gameState.level}, Lines cleared: ${gameState.linesCleared}.`;
  } else if (gameState.isPlaying) {
    description = `Game in progress. Score: ${gameState.score}, Level: ${gameState.level}, Lines cleared: ${gameState.linesCleared}.`;
  } else {
    description = 'Game ready to start. Press start button to begin.';
  }
  
  return description;
};

// Tetris block accessibility descriptions
export const getBlockDescription = (block: any, position: { row: number, col: number }): string => {
  if (!block?.filled) {
    return `Empty cell at row ${position.row + 1}, column ${position.col + 1}`;
  }
  
  if (block.isPortfolio && block.text) {
    return `Portfolio block: ${block.text.replace('\n', ' ')}. Click to navigate to ${block.text.replace('\n', ' ')} page. Located at row ${position.row + 1}, column ${position.col + 1}`;
  }
  
  return `Tetris block at row ${position.row + 1}, column ${position.col + 1}`;
};

// Keyboard navigation helpers
export const getFocusableElements = (container: HTMLElement): HTMLElement[] => {
  const focusableSelectors = [
    'button:not([disabled])',
    'a[href]',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
    '[role="button"]:not([disabled])'
  ].join(', ');
  
  return Array.from(container.querySelectorAll(focusableSelectors));
};

export const trapFocus = (container: HTMLElement): (() => void) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  
  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;
    
    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    }
  };
  
  container.addEventListener('keydown', handleTabKey);
  
  // Focus first element
  firstElement?.focus();
  
  // Return cleanup function
  return () => {
    container.removeEventListener('keydown', handleTabKey);
  };
};

// Skip links functionality
export const createSkipLink = (targetId: string, text: string): HTMLAnchorElement => {
  const skipLink = document.createElement('a');
  skipLink.href = `#${targetId}`;
  skipLink.textContent = text;
  skipLink.className = 'skip-link';
  
  skipLink.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.focus();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
  
  return skipLink;
};

// Color contrast checker (basic implementation)
export const checkColorContrast = (foreground: string, background: string): boolean => {
  // This is a simplified version - in a production app, you'd use a proper color contrast library
  // For now, we'll assume our predefined color combinations meet WCAG standards
  const highContrastCombinations = [
    ['#ffffff', '#000000'],
    ['#ffffff', '#333333'],
    ['#000000', '#ffffff'],
    ['#333333', '#ffffff']
  ];
  
  return highContrastCombinations.some(([fg, bg]) => 
    fg === foreground && bg === background
  );
};

// Focus management for dynamic content
export const manageFocus = {
  // Store the previously focused element
  previouslyFocused: null as HTMLElement | null,
  
  // Save current focus and move to new element
  moveTo(element: HTMLElement) {
    this.previouslyFocused = document.activeElement as HTMLElement;
    element.focus();
  },
  
  // Restore previously focused element
  restore() {
    if (this.previouslyFocused) {
      this.previouslyFocused.focus();
      this.previouslyFocused = null;
    }
  }
};

// Reduced motion detection
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// High contrast mode detection
export const prefersHighContrast = (): boolean => {
  return window.matchMedia('(prefers-contrast: high)').matches;
};

// Screen reader detection (best effort)
export const isScreenReaderActive = (): boolean => {
  // This is not foolproof, but provides a reasonable guess
  return !!(
    navigator.userAgent.match(/NVDA|JAWS|VoiceOver|ORCA|Narrator/i) ||
    window.speechSynthesis?.speaking ||
    document.activeElement?.getAttribute('aria-describedby')
  );
};

export default {
  announceToScreenReader,
  createScreenReaderText,
  getGameStateDescription,
  getBlockDescription,
  getFocusableElements,
  trapFocus,
  createSkipLink,
  checkColorContrast,
  manageFocus,
  prefersReducedMotion,
  prefersHighContrast,
  isScreenReaderActive
};