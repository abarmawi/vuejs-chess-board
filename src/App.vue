<template>
  <div id="app">
    <el-container v-loading="loading">
      <router-view />
    </el-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { namespace } from 'vuex-class'

const AppModule = namespace('AppModule')

@Component({})
export default class App extends Vue {
  @AppModule.State('isLoading') loading!: false
}

</script>

<style lang="scss" scoped></style>
