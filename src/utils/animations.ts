import { gsap } from 'gsap';

// Animation configuration following design guidelines
const ANIMATION_CONFIG = {
  duration: {
    drop: 0.3,           // Smooth drop animation
    rotation: 0.2,       // Quick rotation
    lineClear: 0.6,      // Line clear effect
    blockPlace: 0.15,    // Block placement
    pageTransition: 0.4, // Page transitions
    hover: 0.15          // Hover effects
  },
  ease: {
    drop: 'power2.out',
    rotation: 'back.out(1.7)',
    lineClear: 'power2.inOut',
    blockPlace: 'bounce.out',
    pageTransition: 'power2.inOut',
    hover: 'power2.out'
  }
};

// Tetris Block Animations
export const animateDrop = (element: HTMLElement, distance: number): Promise<void> => {
  return new Promise((resolve) => {
    gsap.fromTo(element, 
      { y: -distance },
      { 
        y: 0, 
        duration: ANIMATION_CONFIG.duration.drop,
        ease: ANIMATION_CONFIG.ease.drop,
        onComplete: resolve
      }
    );
  });
};

export const animateRotation = (element: HTMLElement): Promise<void> => {
  return new Promise((resolve) => {
    gsap.fromTo(element,
      { rotation: 0, scale: 1 },
      { 
        rotation: 90,
        scale: 1.1,
        duration: ANIMATION_CONFIG.duration.rotation / 2,
        ease: 'power2.out',
        yoyo: true,
        repeat: 1,
        onComplete: resolve
      }
    );
  });
};

export const animateBlockPlace = (element: HTMLElement): Promise<void> => {
  return new Promise((resolve) => {
    gsap.fromTo(element,
      { scale: 0.8, opacity: 0.7 },
      { 
        scale: 1,
        opacity: 1,
        duration: ANIMATION_CONFIG.duration.blockPlace,
        ease: ANIMATION_CONFIG.ease.blockPlace,
        onComplete: resolve
      }
    );
  });
};

// Line Clear Animation
export const animateLineClear = (rowElements: HTMLElement[]): Promise<void> => {
  return new Promise((resolve) => {
    const timeline = gsap.timeline();
    
    // Flash effect
    timeline.to(rowElements, {
      backgroundColor: '#ffffff',
      duration: 0.1,
      repeat: 3,
      yoyo: true
    });
    
    // Shrink and fade out
    timeline.to(rowElements, {
      scaleY: 0,
      opacity: 0,
      duration: ANIMATION_CONFIG.duration.lineClear,
      ease: ANIMATION_CONFIG.ease.lineClear,
      stagger: 0.05,
      onComplete: resolve
    });
  });
};

// Block hover animation
export const animateHover = (element: HTMLElement, isEntering: boolean): void => {
  if (isEntering) {
    gsap.to(element, {
      scale: 1.05,
      boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
      duration: ANIMATION_CONFIG.duration.hover,
      ease: ANIMATION_CONFIG.ease.hover
    });
  } else {
    gsap.to(element, {
      scale: 1,
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      duration: ANIMATION_CONFIG.duration.hover,
      ease: ANIMATION_CONFIG.ease.hover
    });
  }
};

// Portfolio block click animation
export const animatePortfolioClick = (element: HTMLElement): Promise<void> => {
  return new Promise((resolve) => {
    const timeline = gsap.timeline();
    
    timeline.to(element, {
      scale: 0.95,
      duration: 0.1,
      ease: 'power2.out'
    });
    
    timeline.to(element, {
      scale: 1.1,
      boxShadow: '0 6px 20px rgba(255, 255, 255, 0.4)',
      duration: 0.15,
      ease: 'back.out(1.7)'
    });
    
    timeline.to(element, {
      scale: 1,
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      duration: 0.2,
      ease: 'power2.out',
      onComplete: resolve
    });
  });
};

// Page Transitions
export const animatePageEnter = (element: HTMLElement): Promise<void> => {
  return new Promise((resolve) => {
    gsap.fromTo(element,
      { 
        opacity: 0,
        x: 50,
        scale: 0.95
      },
      { 
        opacity: 1,
        x: 0,
        scale: 1,
        duration: ANIMATION_CONFIG.duration.pageTransition,
        ease: ANIMATION_CONFIG.ease.pageTransition,
        onComplete: resolve
      }
    );
  });
};

export const animatePageExit = (element: HTMLElement): Promise<void> => {
  return new Promise((resolve) => {
    gsap.to(element, {
      opacity: 0,
      x: -30,
      scale: 0.98,
      duration: ANIMATION_CONFIG.duration.pageTransition * 0.8,
      ease: ANIMATION_CONFIG.ease.pageTransition,
      onComplete: resolve
    });
  });
};

// Tetris Board animations
export const animateBoardShake = (element: HTMLElement): void => {
  gsap.to(element, {
    x: -2,
    duration: 0.1,
    repeat: 3,
    yoyo: true,
    ease: 'power2.inOut'
  });
};

export const animateScoreIncrement = (element: HTMLElement): void => {
  gsap.fromTo(element,
    { scale: 1, color: '#ffffff' },
    { 
      scale: 1.2,
      color: '#ffff00',
      duration: 0.3,
      ease: 'back.out(1.7)',
      yoyo: true,
      repeat: 1
    }
  );
};

// Game state animations
export const animateGameOver = (element: HTMLElement): Promise<void> => {
  return new Promise((resolve) => {
    const timeline = gsap.timeline();
    
    timeline.to(element, {
      scale: 0.95,
      duration: 0.5,
      ease: 'power2.out'
    });
    
    timeline.to(element, {
      filter: 'grayscale(0.7) brightness(0.5)',
      duration: 0.3,
      ease: 'power2.inOut'
    });
    
    timeline.fromTo('.game-over-text',
      { opacity: 0, scale: 0.5 },
      { 
        opacity: 1, 
        scale: 1,
        duration: 0.4,
        ease: 'back.out(1.7)',
        onComplete: resolve
      }
    );
  });
};

export const animateGameStart = (element: HTMLElement): Promise<void> => {
  return new Promise((resolve) => {
    gsap.fromTo(element,
      { 
        filter: 'grayscale(0.7) brightness(0.5)',
        scale: 0.95
      },
      { 
        filter: 'grayscale(0) brightness(1)',
        scale: 1,
        duration: 0.5,
        ease: ANIMATION_CONFIG.ease.pageTransition,
        onComplete: resolve
      }
    );
  });
};

// Utility functions
export const createStaggeredAnimation = (elements: HTMLElement[], animation: (el: HTMLElement) => void, staggerDelay: number = 0.1): void => {
  elements.forEach((element, index) => {
    setTimeout(() => animation(element), index * staggerDelay * 1000);
  });
};

export default {
  animateDrop,
  animateRotation,
  animateBlockPlace,
  animateLineClear,
  animateHover,
  animatePortfolioClick,
  animatePageEnter,
  animatePageExit,
  animateBoardShake,
  animateScoreIncrement,
  animateGameOver,
  animateGameStart,
  createStaggeredAnimation,
  config: ANIMATION_CONFIG
};