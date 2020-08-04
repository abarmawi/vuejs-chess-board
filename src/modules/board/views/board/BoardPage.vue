<template>
  <el-container v-loading="loading" @move="move">
    <board />
  </el-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Board from './components/Board.vue'

@Component({
  components: {
    Board,
  },
})
export default class BoardPage extends Vue {}
</script>

<style lang="scss" scoped></style>
