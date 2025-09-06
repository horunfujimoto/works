// Tetromino shapes and colors definition
// Each tetromino is represented as a 2D array where 1 = filled block, 0 = empty space[]

export interface TetrominoData {
  shape: number[][];
  rotations: number[][][];
  color: string;
  name: string;
  portfolioPage?: string;
  text?: string;
}

// Base shapes for each tetromino
const TETROMINO_SHAPES = {
  I: [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  J: [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0]
  ],
  L: [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
  ],
  O: [
    [1, 1],
    [1, 1]
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0]
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0]
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0]
  ]
};

// Function to rotate a shape 90 degrees clockwise
const rotateShape = (shape: number[][]): number[][] => {
  const rows = shape.length;
  const cols = shape[0].length;
  const rotated: number[][] = [];
  
  for (let i = 0; i < cols; i++) {
    rotated[i] = [];
    for (let j = 0; j < rows; j++) {
      rotated[i][j] = shape[rows - 1 - j][i];
    }
  }
  
  return rotated;
};

// Generate all 4 rotations for each shape
const generateRotations = (baseShape: number[][]): number[][][] => {
  const rotations: number[][][] = [baseShape];
  let currentShape = baseShape;
  
  for (let i = 1; i < 4; i++) {
    currentShape = rotateShape(currentShape);
    rotations.push(currentShape.map(row => [...row]));
  }
  
  return rotations;
};

// Define colors - Portfolio blocks use white/grey theme, others use vibrant colors
const TETROMINO_COLORS = {
  I: '#FFFFFF', // White - for WORKS
  J: '#42A5F5', // Blue - vibrant color for decoration
  L: '#999999', // Medium Grey - for CAREER
  O: '#FF9800', // Orange - vibrant color for decoration  
  S: '#444444', // Darker Grey - for ARTICLES
  T: '#333333', // Very Dark Grey - for HOBBIES
  Z: '#66BB6A'  // Green - vibrant color for decoration
};

// Portfolio page mapping
const PORTFOLIO_MAPPING = {
  L: { page: 'CAREER', text: 'CAREER' },
  S: { page: 'ARTICLES', text: 'ARTICLES' },
  T: { page: 'HOBBIES', text: 'HOBBIES' },
  I: { page: 'WORKS', text: 'WORKS' }
};

// Export all tetrominos with their data
export const TETROMINOS: Record<string, TetrominoData> = {
  I: {
    shape: TETROMINO_SHAPES.I,
    rotations: generateRotations(TETROMINO_SHAPES.I),
    color: TETROMINO_COLORS.I,
    name: 'I',
    portfolioPage: PORTFOLIO_MAPPING.I.page,
    text: PORTFOLIO_MAPPING.I.text
  },
  J: {
    shape: TETROMINO_SHAPES.J,
    rotations: generateRotations(TETROMINO_SHAPES.J),
    color: TETROMINO_COLORS.J,
    name: 'J'
  },
  L: {
    shape: TETROMINO_SHAPES.L,
    rotations: generateRotations(TETROMINO_SHAPES.L),
    color: TETROMINO_COLORS.L,
    name: 'L',
    portfolioPage: PORTFOLIO_MAPPING.L.page,
    text: PORTFOLIO_MAPPING.L.text
  },
  O: {
    shape: TETROMINO_SHAPES.O,
    rotations: generateRotations(TETROMINO_SHAPES.O),
    color: TETROMINO_COLORS.O,
    name: 'O'
  },
  S: {
    shape: TETROMINO_SHAPES.S,
    rotations: generateRotations(TETROMINO_SHAPES.S),
    color: TETROMINO_COLORS.S,
    name: 'S',
    portfolioPage: PORTFOLIO_MAPPING.S.page,
    text: PORTFOLIO_MAPPING.S.text
  },
  T: {
    shape: TETROMINO_SHAPES.T,
    rotations: generateRotations(TETROMINO_SHAPES.T),
    color: TETROMINO_COLORS.T,
    name: 'T',
    portfolioPage: PORTFOLIO_MAPPING.T.page,
    text: PORTFOLIO_MAPPING.T.text
  },
  Z: {
    shape: TETROMINO_SHAPES.Z,
    rotations: generateRotations(TETROMINO_SHAPES.Z),
    color: TETROMINO_COLORS.Z,
    name: 'Z'
  }
};

// Helper function to get a random tetromino
export const getRandomTetromino = (): TetrominoData => {
  const tetrominoKeys = Object.keys(TETROMINOS);
  const randomKey = tetrominoKeys[Math.floor(Math.random() * tetrominoKeys.length)];
  return TETROMINOS[randomKey];
};

// Helper function to get portfolio tetrominos only
export const getPortfolioTetrominos = (): TetrominoData[] => {
  return Object.values(TETROMINOS).filter(tetromino => tetromino.portfolioPage);
};

// Helper function to get a specific rotation of a tetromino
export const getTetrominoRotation = (tetrominoName: string, rotation: number): number[][] => {
  const tetromino = TETROMINOS[tetrominoName];
  if (!tetromino) return [];
  
  const rotationIndex = rotation % 4;
  return tetromino.rotations[rotationIndex];
};

export default TETROMINOS;