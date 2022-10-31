<template>
  <div class="container" v-loading="loading">
    <div class="content">
      <div class="page" id="page1">
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form ref="form" :model="form1" size="mini" label-width="150px" label-position='left'>
              <el-form-item label="1. 指标更新次数" style="font-weight: bold"></el-form-item>
              <el-form-item label-width="0px">
                <el-row :gutter="24">
                  <el-col :span="6"><el-input v-model="form1.times" type="text"><i slot="append">次</i></el-input></el-col>
                </el-row>
              </el-form-item>
              <el-form-item label="2. 日志跟踪记录" style="font-weight: bold"></el-form-item>
              <el-form-item label-width="0px">
                <el-row :gutter="24">
                  <el-col :span="8">
                    <el-radio v-model="form1.traceFlag" label="0">是</el-radio>
                    <el-radio v-model="form1.traceFlag" label="1">否</el-radio>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item label="3. 可视化展示" style="font-weight: bold"></el-form-item>
              <el-form-item label="CQIVisualization（信道质量信息可视化）" label-width="300px">
                <el-radio v-model="form1.show1" label="0">是</el-radio>
                <el-radio v-model="form1.show1" label="1">否</el-radio>
              </el-form-item>
              <el-form-item label="CQIVisualization（信道质量信息可视化）" label-width="300px">
                <el-radio v-model="form1.show2" label="0">是</el-radio>
                <el-radio v-model="form1.show2" label="1">否</el-radio>
              </el-form-item>
              <el-form-item label="4. 启动数据包捕获" style="font-weight: bold"></el-form-item>
              <el-form-item label="CQIVisualization（信道质量信息可视化）" label-width="300px">
                <el-radio v-model="form1.catchFlag" label="0">是</el-radio>
                <el-radio v-model="form1.catchFlag" label="1">否</el-radio>
              </el-form-item>
              <el-form-item label="捕获对象为用户" label-width="200px" v-show="form1.catchFlag==0">        
                <el-row :gutter="24">
                  <el-col :span="4">
                    <el-input v-model="form1.userNum" type="text"></el-input>
                  </el-col>
                </el-row>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="footer">
      <el-button style="margin-top: 5px;" type="primary" @click="reset">重置</el-button>
      <el-button style="margin-top: 5px;" type="success" @click="save" v-if="!formComplete">保存</el-button>
      <el-button style="margin-top: 5px;" type="info" disabled v-else>已保存</el-button>
      <el-button style="margin-top: 5px;" type="success" @click="$router.push('showpage2')">开始仿真</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vueLC",
    data () {
      return {
        loading: false,
        dialogFormVisible: false,
        dialogTitle: '',
        active: 2,
        formComplete: true,
        
        form1: {
          times: '20',
          traceFlag: '0',
          show1: '1',
          show2: '1',
          catchFlag: '0',
          userNum: 1,
        },
        dialogForm: {
          'RNTI': '1',
          'ALPHA': '',
        },
      }
    },
    mounted() {
      this.loading = false;
    },
    methods:{
      changeActive(index) {
        if(index!=this.active) this.active = index
      },
      reset() {
      },
      save() {},
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      submit() {

      },
      submitEdit() {
        if(this.dialogForm.RNTI!=''&&this.dialogForm.ALPHA!='') {
          this.form1.tableData.push(
            {'RNTI': this.dialogForm.RNTI, 'ALPHA': parseInt(this.dialogForm.ALPHA)}
          )
          this.dialogFormVisible = false;
          this.$message({
            message: this.dialogTitle+'添加成功',
            type: 'success'
          });
          this.dialogForm = {'RNTI':'','ALPHA':''};
        } else {
          this.$message('请确保信息都填写无误');
        }
      },
      handleDelete(index) {
        this.form1.tableData.splice(index,1)
        this.$message({
          message: '删除成功',
          type: 'success'
        });
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 10px 80px;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .container .header {
    height: 60px;
    width: 100%;
  }
  .container .content {
    position: relative;
    width: 100%;
    flex: 1;
  }
  .container .footer {
    height: 60px;
    width: 100%;
  }
  #page3 {
    height: 60vh;
    overflow-y: scroll;
    overflow-x: hidden;
  }
</style>