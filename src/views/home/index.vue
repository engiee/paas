<template>
  <div class="app-wrapper">
    <div class="noSlidebar">
    首页
    </div>
  </div>
</template>

<script>
  export default {
    name: 'layout',
    data(){
      return{
        activeName: 'home'
      }
    },
    methods:{
      tabClick(tab, event) {

      }
    },
    computed: {

    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";

</style>
