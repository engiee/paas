<template>
  <scroll-bar>
    <el-menu mode="vertical" unique-opened :default-active="'1-1'" :collapse="isCollapse" background-color="#304156" text-color="#fff" active-text-color="#409EFF">
      <!--<sidebar-item :routes="routes"></sidebar-item>-->
      <el-submenu index="1">
        <template slot="title">
          <svg-icon :icon-class="'tree'"></svg-icon>
          <span>应用托管服务</span>
        </template>
        <router-link :to="'/applicationDeposit/web'" :key="'web'">
            <el-menu-item index="1-1">
              <svg-icon  :icon-class="'eye'"></svg-icon>
              <span>web应用托管</span>
            </el-menu-item>
        </router-link>
        <router-link :to="'/applicationDeposit/dubbo'" :key="'dubbo'">
          <el-menu-item index="1-2">
            <svg-icon  :icon-class="'eye'"></svg-icon>
            <span>dubbo应用托管</span>
          </el-menu-item>
        </router-link>
        <router-link :to="'/applicationDeposit/java'" :key="'java'">
          <el-menu-item index="1-3">
            <svg-icon  :icon-class="'eye'"></svg-icon>
            <span>Java应用托管</span>
          </el-menu-item>
        </router-link>

      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <svg-icon :icon-class="'tree'"></svg-icon>
          <span>产品与服务</span>
        </template>
        <router-link :to="'/productAndService/index'" :key="'web'">
          <el-menu-item index="2-1">
            <svg-icon  :icon-class="'eye'"></svg-icon>
            <span>云服务器</span>
          </el-menu-item>
        </router-link>
        <router-link :to="'/productAndService/index2'" :key="'dubbo'">
          <el-menu-item index="2-2">
            <svg-icon  :icon-class="'eye'"></svg-icon>
            <span>云关系数据库</span>
          </el-menu-item>
        </router-link>
        <router-link :to="'/productAndService/index3'" :key="'java'">
          <el-menu-item index="2-3">
            <svg-icon  :icon-class="'eye'"></svg-icon>
            <span>搜索引擎</span>
          </el-menu-item>
        </router-link>

      </el-submenu>
    </el-menu>
  </scroll-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import ScrollBar from '@/components/ScrollBar'

export default {
  components: { SidebarItem, ScrollBar },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
