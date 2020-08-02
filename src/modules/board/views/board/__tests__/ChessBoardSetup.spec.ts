import { chessBoard } from '../ChessBoardSetup'

describe('Chess Board', () => {
  it('should setup white pawns on the second cell of each file', () => {
    chessBoard.forEach(file => {
      expect(file.cells[1].defaultPice).toBe('pawn')
      expect(file.cells[1].piceColor).toBe('white')
    })
  })

  it('should setup black pawns on the second cell of each file', () => {
    chessBoard.forEach(file => {
      expect(file.cells[6].defaultPice).toBe('pawn')
      expect(file.cells[6].piceColor).toBe('black')
    })
  })

  it('should setup rocks', () => {
    expect(chessBoard[0].cells[0].defaultPice).toBe('rock')
    expect(chessBoard[0].cells[7].defaultPice).toBe('rock')
    expect(chessBoard[7].cells[0].defaultPice).toBe('rock')
    expect(chessBoard[7].cells[7].defaultPice).toBe('rock')
  })

  it('should setup knights', () => {
    expect(chessBoard[1].cells[0].defaultPice).toBe('knight')
    expect(chessBoard[1].cells[7].defaultPice).toBe('knight')
    expect(chessBoard[6].cells[0].defaultPice).toBe('knight')
    expect(chessBoard[6].cells[7].defaultPice).toBe('knight')
  })

  it('should setup bishops', () => {
    expect(chessBoard[2].cells[0].defaultPice).toBe('bishop')
    expect(chessBoard[2].cells[7].defaultPice).toBe('bishop')
    expect(chessBoard[5].cells[0].defaultPice).toBe('bishop')
    expect(chessBoard[5].cells[7].defaultPice).toBe('bishop')
  })

  it('should setup queens', () => {
    expect(chessBoard[3].cells[0].defaultPice).toBe('queen')
    expect(chessBoard[4].cells[7].defaultPice).toBe('queen')
  })

  it('should setup kings', () => {
    expect(chessBoard[4].cells[0].defaultPice).toBe('king')
    expect(chessBoard[3].cells[7].defaultPice).toBe('king')
  })
})
