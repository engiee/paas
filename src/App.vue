<template>
  <div id="app">
    <nav id="nav">
      <el-tabs class="navMenu" v-model="activeName" @tab-click="tabClick()">
        <el-tab-pane label="首页" name="home"></el-tab-pane>
        <el-tab-pane label="产品" name="product"></el-tab-pane>
        <el-tab-pane label="控制台" name="console"></el-tab-pane>
        <el-tab-pane label="开发者中心" name="developer"></el-tab-pane>
      </el-tabs>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      activeName: 'home'
    }
  },
  methods:{
    tabClick(tab, event) {
      if(this.activeName == 'home'){
        this.$router.push('/home')
      }else if(this.activeName == 'product'){
        this.$router.push('/form/index')
      }else if(this.activeName == 'console'){
        this.$router.push('/example/table')
      }else if(this.activeName == 'developer'){
        this.$router.push('/developer')
      }
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  #app {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    #nav {
      height: 69px;
      background-color: #E1EAEF;
      box-shadow: 1px 1px #AEC0CA;
      position: fixed;
      width: 100%;
      z-index: 3;
      .navMenu {
        width: 333px;
      }
    }
  }
  .el-tabs__item{
    height:60px;
    line-height:60px;
  }
</style>
