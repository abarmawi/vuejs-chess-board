<template>
  <el-container v-loading="loading" @move="move">
    <board />
  </el-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Board from './components/Board.vue'
import { GameService, WebSocketClient } from '@/biz/services/GameService'
import { ChessMove } from './ChessBoardSetup'

@Component({
  components: {
    Board,
  },
})
export default class BoardPage extends Vue implements WebSocketClient {
  loading = true
  gameService!: GameService

  created() {
    this.loading = false
    this.gameService = new GameService(this)
  }

  socketReady() {
    this.gameService.newGame()
  }

  move(move: ChessMove) {
    this.gameService.move(move)
  }
}
</script>

<style lang="scss" scoped></style>
