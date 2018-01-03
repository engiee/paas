<template>
  <div id="app">
    <nav id="nav">
      <el-tabs class="navMenu" v-model="activeName" @tab-click="tabClick()">
        <el-tab-pane label="首页" name="home"></el-tab-pane>
        <el-tab-pane label="产品" name="product"></el-tab-pane>
        <el-tab-pane label="控制台" name="console"></el-tab-pane>
        <el-tab-pane label="开发者中心" name="developer"></el-tab-pane>
      </el-tabs>
      <el-dropdown class="avatar-container" trigger="click" style="float:right;">
        <div class="avatar-wrapper">
          {{name}}
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu class="user-dropdown" slot="dropdown">
          <router-link class="inlineBlock" to="/">
            <el-dropdown-item>
              Home
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span @click="logout" style="display:block;">LogOut</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  data(){
    return{
      activeName: 'home'
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'name'
    ])
  },
  methods:{
    tabClick(tab, event) {
      if(this.activeName == 'home'){
        this.$router.push('/home')
      }else if(this.activeName == 'product'){
        this.$router.push('/product')
      }else if(this.activeName == 'console'){
        this.$router.push('/example')
      }else if(this.activeName == 'developer'){
        this.$router.push('/developer')
      }
    },
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
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
        float: left;;
      }
    }
  }
  .el-tabs__item{
    height:60px;
    line-height:60px;
  }
</style>
