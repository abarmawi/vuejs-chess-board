<template>
  <div class="board">
    <file v-for="(file, index) in chessBoard" :key="index" :file="file" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import File from './File.vue'
import { ChessBoard, chessBoard } from '../ChessBoardSetup'

@Component({
  components: {
    File,
  },
})
export default class Board extends Vue {
  chessBoard: ChessBoard = chessBoard
}
</script>

<style lang="scss" scoped>
.board {
  display: flex;
  min-width: 50%;
  border: 1px solid gray;
  margin: 0 auto;
  margin-top: 30px;
}
</style>
