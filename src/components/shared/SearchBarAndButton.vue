<template>
  <el-row :gutter="20" justify="end">
    <el-col :offset="0" :span="6">
      <el-input
        @input="input"
        v-model="keyword"
        size="mini"
        :placeholder="$t(searchPlaceholder)"
      />
    </el-col>
    <el-col v-if="showButton" :offset="14" :span="4">
      <el-button type="primary" @click="click" :icon="buttonIcon">{{
        $t(buttonText)
      }}</el-button>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  components: {},
  props: {
    searchPlaceholder: {
      type: String,
    },
    showButton: {
      type: Boolean,
      default: true,
    },
    buttonText: {
      type: String,
    },
    buttonIcon: {
      type: String,
    },
  },
})
export default class SearchBarAndButton extends Vue {
  keyword = ''

  input(val: string) {
    this.$emit('input', val)
  }

  click() {
    this.$emit('action')
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
}
button {
  margin-left: 25px;
}
</style>
