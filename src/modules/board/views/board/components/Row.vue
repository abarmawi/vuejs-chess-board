<template>
  <div class="row" v-on:drop="drop" v-on:dragover="allowDrop">
    <cell
      v-for="(cell, index) in cells"
      :key="index"
      :cell="cell"
      :row="index"
      :identifier="cell"
      :isBlackCell="isBlackCell(index)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Cell from './Cell.vue'

@Component({
  components: {
    Cell,
  },
})
export default class Row extends Vue {
  cells = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

  isBlackCell(index: number) {
    return index % 2 == 0
  }

  allowDrop(ev: DragEvent) {
    // debugger
    ev.preventDefault()
  }

  // drag(ev: any) {
  //   debugger
  //   ev.dataTransfer.setData('text', ev.target.id)
  // }

  drop(ev: DragEvent) {
    debugger
    ev.preventDefault()
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const data = ev.dataTransfer!.getData('sourceId')
    ev.target.appendChild(document.getElementById(data))
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  height: 70px;
}
</style>
