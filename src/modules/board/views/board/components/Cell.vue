<template>
  <div class="cell" :class="{ black: isBlackCell }">
    <span :id="spanId" class="movable" draggable="true" v-on:dragstart="drag">
      {{ spanId }}
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component({})
export default class Cell extends Vue {
  @Prop({ type: String, required: true }) identifier!: string
  @Prop({ type: Number, required: true }) row!: number
  @Prop({ type: Boolean, required: true }) isBlackCell!: boolean

  get spanId() {
    return `${this.identifier}-${this.row}`
  }

  drag(ev: DragEvent) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    ev.dataTransfer!.setData('sourceId', this.spanId)
  }
}
</script>

<style lang="scss" scoped>
.cell {
  flex: 1;
  border-bottom: 0.1px solid black;
  border-width: thin;

  &.black {
    background-color: black;
    color: white;
    border-bottom: 0.1px solid white;
  }
}
</style>
