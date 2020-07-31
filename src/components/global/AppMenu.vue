<template>
  <el-menu
    :default-active="getSelectedMenuIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="0">
      <i class="el-icon-document"></i>
      <span slot="title">{{ $t('nav.projects') }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import Vue from 'vue'
import { namespace } from 'vuex-class'
import Component from 'vue-class-component'

const appModule = namespace('AppModule')

@Component({})
export default class AppMenu extends Vue {
  @appModule.Getter('getSelectedMenuIndex') getSelectedMenuIndex!: () => string

  handleSelect(index: string) {
    this.$store.dispatch('setSelectedMenuIndex', index)
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  height: 60px;
  width: 100%;
  background-color: #324156;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  :first-child {
    border-top-left-radius: 10px;
  }
}
</style>
