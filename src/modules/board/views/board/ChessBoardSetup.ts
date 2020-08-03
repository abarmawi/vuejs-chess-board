export type ChessPieces =
  | 'rock'
  | 'knight'
  | 'bishop'
  | 'queen'
  | 'king'
  | 'pawn'

export type ChessColors = 'white' | 'black'

export interface ChessCell {
  id: string
  color: ChessColors
  defaultPice: ChessPieces | 'non'
  piceColor: ChessColors
}

export interface ChessFile {
  id: string
  cells: ChessCell[]
}

export interface ChessMove {
  sourceCell: string
  targetCell: string
  player: ChessColors
  pice: ChessPieces
}

export type ChessBoard = ChessFile[]

const getFileCells = (fileStartColor: ChessColors): ChessCell[] => {
  const getOppositeColor = () => (fileStartColor == 'black' ? 'white' : 'black')
  const getPiceColor = (row: number) =>
    row == 1 || row == 2 ? 'white' : 'black'
  return [
    {
      id: '1',
      color: fileStartColor,
      defaultPice: 'non',
      piceColor: getPiceColor(1),
    },
    {
      id: '2',
      color: getOppositeColor(),
      defaultPice: 'non',
      piceColor: getPiceColor(2),
    },
    {
      id: '3',
      color: fileStartColor,
      defaultPice: 'non',
      piceColor: getPiceColor(3),
    },
    {
      id: '4',
      color: getOppositeColor(),
      defaultPice: 'non',
      piceColor: getPiceColor(4),
    },
    {
      id: '5',
      color: fileStartColor,
      defaultPice: 'non',
      piceColor: getPiceColor(5),
    },
    {
      id: '6',
      color: getOppositeColor(),
      defaultPice: 'non',
      piceColor: getPiceColor(6),
    },
    {
      id: '7',
      color: fileStartColor,
      defaultPice: 'non',
      piceColor: getPiceColor(7),
    },
    {
      id: '8',
      color: getOppositeColor(),
      defaultPice: 'non',
      piceColor: getPiceColor(8),
    },
  ]
}

export const chessBoard: ChessBoard = [
  {
    id: 'A',
    cells: getFileCells('black'),
  },
  {
    id: 'B',
    cells: getFileCells('white'),
  },
  {
    id: 'C',
    cells: getFileCells('black'),
  },
  {
    id: 'D',
    cells: getFileCells('white'),
  },
  {
    id: 'E',
    cells: getFileCells('black'),
  },
  {
    id: 'F',
    cells: getFileCells('white'),
  },
  {
    id: 'G',
    cells: getFileCells('black'),
  },
  {
    id: 'H',
    cells: getFileCells('white'),
  },
]

// set white pawn
chessBoard.forEach(file => {
  file.cells[1].defaultPice = 'pawn'
})
chessBoard.forEach(file => {
  file.cells[6].defaultPice = 'pawn'
})

// set rocks
chessBoard[0].cells[0].defaultPice = 'rock'
chessBoard[0].cells[7].defaultPice = 'rock'
chessBoard[7].cells[0].defaultPice = 'rock'
chessBoard[7].cells[7].defaultPice = 'rock'

// set knights
chessBoard[1].cells[0].defaultPice = 'knight'
chessBoard[1].cells[7].defaultPice = 'knight'
chessBoard[6].cells[0].defaultPice = 'knight'
chessBoard[6].cells[7].defaultPice = 'knight'

// set bishops
chessBoard[2].cells[0].defaultPice = 'bishop'
chessBoard[2].cells[7].defaultPice = 'bishop'
chessBoard[5].cells[0].defaultPice = 'bishop'
chessBoard[5].cells[7].defaultPice = 'bishop'

// set queens
chessBoard[3].cells[0].defaultPice = 'queen'
chessBoard[4].cells[7].defaultPice = 'queen'

// set kings
chessBoard[4].cells[0].defaultPice = 'king'
chessBoard[3].cells[7].defaultPice = 'king'
