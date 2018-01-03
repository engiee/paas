<template>
  <div class="app-container">
    Java
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
