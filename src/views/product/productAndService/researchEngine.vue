<template>
  <div class="app-container">
    产品服务之搜索引擎
  </div>
</template>

<script>
 // import axios from 'axios'
  import { getList } from '@/api/table'
 export default {
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.getList()
  },
  methods: {
     getList(){
       getList('/table/list','get',this.listQuery).then(response => {
         console.log(response)
       })
     }
  }
}
</script>
