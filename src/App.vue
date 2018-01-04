<template>
  <div id="app">
    <nav id="nav">
      <div class="logoBox">
        <img :src="logo_img" alt="">
        <span>“XXX”XX大数据服务平台</span>
      </div>
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
          <el-dropdown-item>
            控制台
          </el-dropdown-item>
          <el-dropdown-item>
            AccessKeys
          </el-dropdown-item>
          <el-dropdown-item>
            我的订单
          </el-dropdown-item>
          <el-dropdown-item>
            修改密码
          </el-dropdown-item>
          <router-link class="inlineBlock" to="/home">
            <el-dropdown-item>
              Home
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span @click="logout" style="display:block;">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import logo_img from '@/assets/img/logo.png'
export default {
  name: 'app',
  data(){
    return{
      activeName: 'home',
      logo_img
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'name'
    ])
  },
  created:function () {
    this.activeName = window.localStorage.getItem('activeName');
  },
  methods:{
    tabClick(tab, event) {
      if (this.activeName == 'home'){
        this.$router.push('/home')
      } else if (this.activeName == 'product') {
        this.$router.push('/productCloudCalc')
      } else if (this.activeName == 'console') {
        this.$router.push('/applicationDeposit')
      } else if (this.activeName == 'developer') {
        this.$router.push('/developer')
      };
      window.localStorage.setItem('activeName', this.activeName);
    },
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        window.localStorage.setItem('activeName','home');
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
      .logoBox{
        width:350px;
        float: left;
        height:100%;
        img{
          margin: 19px 8px 0px 48px;
          width:28px;
          float: left;
        }
        span{
          line-height: 24px;
          color: rgb(0, 110, 195);
          font-weight: bold;
          font-size: 20px;
          width: 380px;
          display: block;
          margin-top: 20px;
        }
      }
      .navMenu {
        width: 333px;
        float: left;
        margin-top: 14px;
      }
      .el-dropdown{
        margin:27px;
        cursor: pointer;
        &:hover{
          color:#006EC3;
        }
      }
    }
  }
  .el-tabs__item{
    height:60px;
    line-height:60px;
  }
</style>
