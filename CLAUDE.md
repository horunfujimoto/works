# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Tetris-style Portfolio Website** built with React + TypeScript + Vite. The unique concept uses falling Tetris blocks as navigation elements to showcase different portfolio sections.

## Commands

### Development
- `npm run dev` - Start development server with Vite and hot reload
- `npm run build` - Build for production (runs TypeScript compiler then Vite build)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

### Package Management
- Uses npm with lock file (`package-lock.json`)
- Also has `yarn.lock`, so yarn can be used alternatively

## Portfolio Concept

### Core Concept
- **Tetris blocks represent 4 main portfolio pages**: CAREER, ARTICLES, HOBBIES, WORKS
- Blocks fall randomly and stack naturally, fitting together like real Tetris pieces
- Click/tap blocks to navigate to corresponding portfolio sections
- Smooth, natural animations create an engaging interactive experience

**Example CAREER block shape:**
```
CA
REER
```

### Design Guidelines
- **Color Scheme**: White, grey, and black for a simple, sophisticated aesthetic
- **Typography**: Simple, readable gothic/sans-serif fonts
- **Animations**: Smooth and natural using animation libraries
- **Target Device**: Mobile-first responsive design, optimized for smartphones

### Technical Implementation
- **Frontend**: React (TypeScript) for component structure
- **Animation Libraries**: GSAP (GreenSock) or Anime.js for smooth animations
- **Game Logic**: Consider Phaser.js if complex game mechanics are needed
- **Responsive Design**: Mobile-first approach with tablet/desktop adaptations

## Architecture

### Tech Stack
- **React 19.1.0** with TypeScript
- **Vite** for build tooling and dev server
- **Bootstrap 5.3.6** for base styling (may be replaced with custom CSS for Tetris theme)
- **React Router DOM 7.6.1** for navigation between portfolio sections
- **ESLint** with TypeScript and React-specific rules
- **Animation Library**: GSAP or Anime.js (to be added)
- **Optional**: Phaser.js for advanced game mechanics

### Project Structure
```
src/
├── main.tsx              # Application entry point
├── App.tsx               # Root component with BrowserRouter
├── pages/                # Portfolio page components
│   ├── Home.tsx         # Tetris game interface (main landing)
│   ├── Career.tsx       # Career information page
│   ├── Articles.tsx     # Articles/blog page
│   ├── Hobbies.tsx      # Hobbies page
│   └── Works.tsx        # Portfolio works page
├── components/           # Reusable components
│   ├── TetrisBlock.tsx  # Individual Tetris block component
│   ├── TetrisBoard.tsx  # Game board container
│   └── Navigation.tsx   # Navigation components
├── hooks/               # Custom React hooks
│   └── useTetrisGame.ts # Game logic and state management
├── utils/               # Utility functions
│   └── tetrisLogic.ts   # Tetris game mechanics
├── assets/              # Static assets
└── styles/              # CSS/styling files
    ├── tetris.css       # Tetris-specific styles
    └── responsive.css   # Mobile-first responsive styles
```

### Key Implementation Notes
- **Mobile-First**: All components should be designed for mobile screens first
- **Block Navigation**: Each Tetris block should be clickable/tappable with clear visual feedback
- **Responsive Animations**: Animations should work smoothly across different screen sizes
- **Accessibility**: Ensure proper keyboard navigation and screen reader support
- **Performance**: Optimize animations for mobile devices
- **Game Patterns**: Implement realistic Tetris block shapes and falling behavior

### Configuration Files
- `vite.config.ts` - Basic Vite setup with React plugin
- `eslint.config.js` - ESLint with TypeScript, React hooks, and React refresh rules
- `tsconfig.json` - References app and node TypeScript configs