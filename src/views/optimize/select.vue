<template>
  <div class="container" v-loading="loading">
    <div class="content">
      <div class="page" id="page1">
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form ref="form" :model="form1" size="mini" label-width="150px" label-position='left'>
              <el-form-item label="调度策略选择" style="font-weight: bold">
                <el-radio v-model="form1.method" label="0">轮询算法（RR）</el-radio>
                <el-radio v-model="form1.method" label="1">最佳CQI算法（BestCQI）</el-radio>
                <el-radio v-model="form1.method" label="2">比例公平算法（PF）</el-radio>
                <el-radio v-model="form1.method" label="3">α-比例公平算法（α-PF）</el-radio>
                <el-radio v-model="form1.method" label="4">导入配置文件</el-radio>
              </el-form-item>
              <el-form-item  label-width="0px" v-show="form1.method==3">
                <el-table
                  :data="form1.tableData"
                  border
                  style="width:100%;"
                  max-height="400px">
                  <el-table-column align="center" type="index" label="序号"></el-table-column>
                  <el-table-column align="center" label="RNTI">
                    <template slot-scope="scope">
                      <el-radio v-model="scope.row.RNTI" label="1"></el-radio>
                      <el-radio v-model="scope.row.RNTI" label="2"></el-radio>
                      <el-radio v-model="scope.row.RNTI" label="3"></el-radio>
                      <el-radio v-model="scope.row.RNTI" label="4"></el-radio>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" label="ALPHA" prop="ALPHA"></el-table-column>
                  <el-table-column align="center" label="操作">
                    <template slot="header">
                      <el-button type="primary" size="mini" @click="dialogFormVisible = true">新增</el-button>
                    </template>
                    <template slot-scope="scope">
                    <el-button @click="handleDelete(scope.$index)" type="danger" size="mini">删除</el-button>
                  </template>
                  </el-table-column>
                </el-table>
              </el-form-item>
              <el-form-item label="导入配置文件" style="font-weight: bold" v-show="form1.method==4">
                <el-upload
                  class="upload-demo"
                  ref="upload"
                  action="/"
                  :file-list="form1.fileList"
                  :auto-upload="false"
                  :limit=1
                  :multiple='false'>
                  <el-button slot="trigger" size="mini" type="primary">选取文件</el-button>
                </el-upload>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
    </div>
    <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible" :modal='false'>
      <el-form :model="dialogForm" size="mini">
        <el-form-item label="RNTI">
          <el-radio v-model="dialogForm.RNTI" label="1"></el-radio>
          <el-radio v-model="dialogForm.RNTI" label="2"></el-radio>
          <el-radio v-model="dialogForm.RNTI" label="3"></el-radio>
          <el-radio v-model="dialogForm.RNTI" label="4"></el-radio>
        </el-form-item>
        <el-form-item label="ALPHA"><el-input v-model="dialogForm.ALPHA"></el-input></el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitEdit">确 定</el-button>
      </div>
    </el-dialog>
    <div class="footer">
      <el-button style="margin-top: 5px;" type="primary" @click="reset">重置</el-button>
      <el-button style="margin-top: 5px;" type="success" @click="save" v-if="!formComplete">保存</el-button>
      <el-button style="margin-top: 5px;" type="info" disabled v-else>已保存</el-button>
      <el-button style="margin-top: 5px;" type="success">开始仿真</el-button>
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
          method: '0',
          tableData: [
            {'RNTI':'1','ALPHA':2},
            {'RNTI':'2','ALPHA':9},
            {'RNTI':'3','ALPHA':7},
            {'RNTI':'4','ALPHA':6},
          ],
          fileList: [],
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
