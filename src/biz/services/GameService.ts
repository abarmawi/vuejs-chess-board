import {
  ChessPieces,
  ChessColors,
} from '@/modules/board/views/board/ChessBoardSetup'

export interface ChessMove {
  sourceCell: string
  targetCell: string
  player: ChessColors
  pice: ChessPieces
}

export interface ChessMessage {
  gameId: string
}

export interface WebSocketClient {
  socketReady: () => void
}

export class GameService {
  ws!: WebSocket
  gameId?: string

  constructor(private client: WebSocketClient) {
    this.ws = new WebSocket(process.env.VUE_APP_SOCKET_HOST)

    this.ws.onopen = () => {
      console.log(`socket opened ${process.env.VUE_APP_SOCKET_HOST}`)

      this.client.socketReady()
    }

    this.ws.onmessage = (ev: MessageEvent) => {
      console.log(`Receive ${ev.data}`)

      const msg: ChessMessage = JSON.parse(ev.data)
      this.gameId = msg.gameId
    }
  }

  async newGame() {
    this.ws.send(JSON.stringify({ type: 'new_game' }))
  }

  async move(move: ChessMove) {
    this.ws.send(
      JSON.stringify({
        type: 'move',
        gameId: this.gameId,
        data: move,
      })
    )
  }
}
