<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="申请人">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="申请人地址">
        <el-select v-model="form.region" placeholder="请选择">
          <el-option label="上海" value="shanghai"></el-option>
          <el-option label="北京" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="申请日期">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="请选择开始时间" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker type="fixed-time" placeholder="请选择结束时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="是否立即接受">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="申请类型">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="在线申请" name="type"></el-checkbox>
          <el-checkbox label="远程申请" name="type"></el-checkbox>
          <el-checkbox label="线下申请" name="type"></el-checkbox>
          <el-checkbox label="单一品牌申请" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="资源类型">
        <el-radio-group v-model="form.resource">
          <el-radio label="赞助商"></el-radio>
          <el-radio label="会场"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="申请说明">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message({
        message: '已提交!',
        type: 'success'
      })
    },
    onCancel() {
      this.$message({
        message: '取消提交!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

