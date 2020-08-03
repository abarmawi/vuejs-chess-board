<template>
  <div
    :id="cellId"
    class="cell"
    :class="{ black: isBlack }"
    v-on:drop="drop"
    v-on:dragover="allowDrop"
  >
    <img
      v-if="hasPice"
      :src="chessPiceImg"
      width="30"
      height="30"
      class="pice movable"
      :id="piceId"
      v-on:dragstart="drag"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { ChessCell } from '../ChessBoardSetup'

@Component({})
export default class Cell extends Vue {
  @Prop({ required: true }) cell!: ChessCell
  @Prop({ type: String, required: true }) fileId!: string

  get isBlack() {
    return this.cell.color == 'black'
  }

  get piceId() {
    return `${this.cell.defaultPice}-${this.cell.piceColor}-${this.cellId}`
  }

  get cellId() {
    return `${this.cell.id}-${this.fileId}`
  }

  get chessPiceImg() {
    return require(`@/assets/imgs/${this.cell.defaultPice}-${this.cell.piceColor}.svg`)
  }

  get hasPice() {
    return this.cell.defaultPice != 'non'
  }

  drag(ev: DragEvent) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    ev.dataTransfer!.setData(
      'move',
      JSON.stringify({
        piceId: this.piceId,
        player: this.cell.piceColor,
        pice: this.cell.defaultPice,
      })
    )
  }

  allowDrop(ev: DragEvent) {
    ev.preventDefault()
  }

  drop(ev: DragEvent) {
    ev.preventDefault()
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const move = JSON.parse(ev.dataTransfer!.getData('move'))
    const target = document.getElementById(this.cellId)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    target!.appendChild(document.getElementById(move.piceId)!)

    this.$parent.$parent.$parent.$emit('move', {
      sourceCell: move.sourceCell,
      targetCell: this.cellId,
      player: move.player,
      pice: move.pice,
    })
  }
}
</script>

<style lang="scss" scoped>
.cell {
  flex: 1;
  border-bottom: 0.1px solid black;
  border-width: thin;
  background-color: #cec5c5;

  &.black {
    background-color: #0000008a;
    color: white;
    border-bottom: 0.1px solid white;
  }
}

.pice {
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  width: 50px;
  height: 50px;
}
</style>
