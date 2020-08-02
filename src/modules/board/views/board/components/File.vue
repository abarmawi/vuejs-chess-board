<template>
  <div class="file">
    <cell
      v-for="(cell, index) in file.cells"
      :key="index"
      :cell="cell"
      :fileId="file.id"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Cell from './Cell.vue'
import { Prop } from 'vue-property-decorator'
import { ChessFile } from '../ChessBoardSetup'

@Component({
  components: {
    Cell,
  },
})
export default class File extends Vue {
  @Prop({ required: true }) file!: ChessFile
}
</script>

<style lang="scss" scoped>
.file {
  display: flex;
  flex-direction: column-reverse;
  flex: 1;
  height: 500px;
}
</style>
