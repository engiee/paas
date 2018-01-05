<template>
  <div class="app-wrapper">
    <div class="noSlidebar">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="操作说明" name="operate">操作说明</el-tab-pane>
        <el-tab-pane label="SDK说明" name="sdk">SDK说明</el-tab-pane>
        <el-tab-pane label="文件下载" name="document">文件下载</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'layout',
    data() {
      return {
        activeName: 'operate'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event)
      }
    },
    computed: {

    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";

</style>
