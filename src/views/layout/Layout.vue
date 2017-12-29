<template>
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
    <nav id="nav">
      <el-tabs class="navMenu" v-model="activeName" @tab-click="tabClick()">
        <el-tab-pane label="首页" name="home"></el-tab-pane>
        <el-tab-pane label="产品" name="product"></el-tab-pane>
        <el-tab-pane label="控制台" name="console"></el-tab-pane>
        <el-tab-pane label="开发者中心" name="developer"></el-tab-pane>
      </el-tabs>
    </nav>
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
  import { Navbar, Sidebar, AppMain } from '@/views/layout/components'

  export default {
    name: 'layout',
    data(){
      return{
        activeName: 'home'
      }
    },
    components: {
      Navbar,
      Sidebar,
      AppMain
    },
    methods:{
      tabClick(tab, event) {
        if(this.activeName == 'home'){
          this.$router.push('/')
        }else if(this.activeName == 'product'){
          this.$router.push('/form/index')
        }else if(this.activeName == 'console'){
          this.$router.push('/example/table')
        }else if(this.activeName == 'developer'){
          this.$router.push('/example/table')
        }
      }
    },
    computed: {
      sidebar() {
        return this.$store.state.app.sidebar
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    #nav {
      height: 69px;
      background-color: #E1EAEF;
      box-shadow: 1px 1px #AEC0CA;
      .navMenu {
        width: 333px;
      }
    }
  }
</style>
