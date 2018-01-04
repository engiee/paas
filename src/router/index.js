import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'
/**
* hidden: true                   如果 `hidden:true` 侧边栏中不显示（默认为false）
* redirect: noredirect           如果 `redirect:noredirect` 在面包屑导航里没有 redirct
* name:'router-name'             在<keep-alive>用 (必须设置!!!)
* meta : {
    title: 'title'               子菜单 & 面包屑导航 名称 (推荐设置)
    icon: 'svg-name'             icon（icons文件夹里的svg名）
  }
**/
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/404', component: _import('404'), hidden: true },
  { path: '/home', component: _import('home/index'), hidden: true},
  { path: '/developer', component: _import('developer/index'), hidden: true},
  { path: '/product', component: _import('product/index')},
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index')
    }]
  },

  {
    path: '/applicationDeposit',
    component: Layout,
    redirect: '/applicationDeposit/web',
    name: 'applicationDeposit',
    meta: { title: '应用托管服务', icon: 'example' },
    children: [
      {
        path: 'web',
        name: 'web',
        component: _import('console/applicationDeposit/web'),
        meta: { title: 'Web应用托管', icon: 'table' }
      },
      {
        path: 'dubbo',
        name: 'dubbo',
        component: _import('console/applicationDeposit/dubbo'),
        meta: { title: 'Dubbo应用托管', icon: 'tree' }
      },
      {
        path: 'java',
        name: 'java',
        component: _import('console/applicationDeposit/java'),
        meta: { title: 'Java应用托管', icon: 'tree' }
      }
    ]
  },

  {
    path: '/productAndService',
    component: Layout,
    redirect: '/productAndService/index',
    name: 'Example2',
    meta: { title: '产品与服务', icon: 'example' },
    children: [
      {
        path: 'index',
        name: 'Form',
        component: _import('console/productAndService/index'),
        meta: { title: '云服务器', icon: 'form' }
      },
      {
        path: 'index2',
        name: 'Form2',
        component: _import('console/productAndService/index2'),
        meta: { title: '云关系数据库', icon: 'form' }
      },
      {
        path: 'index3',
        name: 'Form3',
        component: _import('console/productAndService/charts/index'),
        meta: { title: '搜索引擎', icon: 'form' }
      }
    ]
  },


  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

