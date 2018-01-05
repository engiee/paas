<template>
  <div class="app-wrapper">
    <div class="noSlidebar">
      <div class="index-pic">
        <img :src="indexpic_01" width="100%" />
        <img :src="indexpic_02" width="100%" />
        <img :src="indexpic_03" width="100%" />
        <img :src="indexpic_04" width="100%" />
        <div class="index-pic-text">
          <li>敏捷 —— 自服务，按需供应，快速交付</li>
          <li>灵活 —— 按需伸缩平台架构</li>
          <li>高效率 —— 提高资源利用，更高的生产效率</li>
          <li>提高服务质量 —— 统一的服务水平管理</li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import indexpic_01 from '@/assets/img/index-pic_01.jpg'
  import indexpic_02 from '@/assets/img/index-pic_02.jpg'
  import indexpic_03 from '@/assets/img/index-pic_03.jpg'
  import indexpic_04 from '@/assets/img/index-pic_04.jpg'
  export default {
    name: 'layout',
    data(){
      return{
        indexpic_01,
        indexpic_02,
        indexpic_03,
        indexpic_04,
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
  .index-pic {
    width: 100%;
    min-width: 908px;
    img {
      width: 100%;
      display: block;
    }
    .index-pic-text {
      margin-top: -36%;
      margin-left: 14%;
      li {
        font-family: "Microsoft YaHei", "微软雅黑", tahoma, arial, simsun, "宋体";
        font-size: 24px;
        color: #ffffff;
        line-height: 45px;
        text-align: left;
        list-style: none;
      }
    }
  }
</style>
