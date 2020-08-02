<template>
  <div class="board">
    <!-- <div class="left">left</div> -->
    <row v-for="row in rows" :key="row" :row="row" />
    <!-- <div class="bottom">bottom</div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Row from './Row.vue'

@Component({
  components: {
    Row,
  },
})
export default class Board extends Vue {
  rows = [1, 2, 3, 4, 5, 6, 7, 8]
}
</script>

<style lang="scss" scoped>
.board {
  width: 50%;
  border: 1px solid gray;
  margin: 0 auto;
  margin-top: 30px;
}
</style>
