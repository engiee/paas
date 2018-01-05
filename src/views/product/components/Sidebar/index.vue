<template>
  <scroll-bar>
    <el-menu mode="vertical" unique-opened :default-active="'3-1'" :collapse="isCollapse" background-color="#304156" text-color="#fff" active-text-color="#409EFF">
      <!--<sidebar-item :routes="routes"></sidebar-item>-->
      <el-submenu index="3">
        <template slot="title">
          <svg-icon :icon-class="'tree'"></svg-icon>
          <span>云计算服务</span>
        </template>
        <router-link :to="'/productCloudCalc/webp'" :key="'webp'">
          <el-menu-item index="3-1">
            <svg-icon  :icon-class="'eye'"></svg-icon>
            <span>web应用托管</span>
          </el-menu-item>
        </router-link>


      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <svg-icon :icon-class="'tree'"></svg-icon>
          <span>产品与服务</span>
        </template>
        <router-link :to="'/productAndService/cloudServicer'" :key="'web'">
          <el-menu-item index="2-1">
            <svg-icon  :icon-class="'eye'"></svg-icon>
            <span>云服务器</span>
          </el-menu-item>
        </router-link>
        <router-link :to="'/productAndService/cloudRelationData'" :key="'dubbo'">
          <el-menu-item index="2-2">
            <svg-icon  :icon-class="'eye'"></svg-icon>
            <span>云关系数据库</span>
          </el-menu-item>
        </router-link>
        <router-link :to="'/productAndService/researchEngine'" :key="'java'">
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
