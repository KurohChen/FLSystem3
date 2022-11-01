<template>
  <div class="container" v-loading="loading">
    <div class="content">
      <div class="page" id="page2">
        <el-row :gutter="24">
          <el-form ref="form" :model="params" size="mini" label-width="300px" label-position="left" :disabled='state!=0'>
            <el-form-item label="参数配置" style="font-weight: bold"></el-form-item>
            <el-form-item label="IRS反射单元数">
              <el-input @change="formComplete=false" v-model="params.unit_num" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="多用户个数">
              <el-input @change="formComplete=false" v-model="params.user_num" style="width: 300px"></el-input>
            </el-form-item>
          </el-form>
          <el-form ref="form" :model="output" size="mini" label-width="300px" label-position="left" >
            <el-form-item label="各算法用户上行传输功率值对比" style="font-weight: bold" label-width="500px"></el-form-item>
            <el-form-item :label="'基于IRS辅助的分布式能效资源分配算法'">
              <el-input v-model="output.IRS" readonly style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="功率集中算法">
              <el-input v-model="output.power" readonly style="width: 300px"></el-input>
            </el-form-item>
          </el-form>


        </el-row>
      </div>
    </div>
    <div class="footer">
      <el-button style="margin-top: 5px;" type="primary" @click="reset" :disabled='state==1'>重置</el-button>
      <el-button style="margin-top: 5px;" type="success" @click="save" v-if="!formComplete">保存</el-button>
      <el-button style="margin-top: 5px;" type="info" disabled v-else>已保存</el-button>
      <el-button style="margin-top: 5px;" type="primary" @click="run" :disabled="!formComplete" v-show="state==0">运行</el-button>
      <el-button style="margin-top: 5px;" type="success" @click="state=0" v-show="state==1">返回</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vueLC",
    data () {
      return {
        loading: false,
        state: 0,
        formComplete: true,
        output:{
          IRS:'26.9',
          power:'26.4',
        },
        params: {
          unit_num: 100,
          user_num: 100,
        }
      }
    },
    mounted() {
      this.loading = false;
    },
    methods:{
      reset() {
        this.params = {
          unit_num: 2,
          user_num: 3,
        }
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      submit() {

      },
      save() {
        this.formComplete = true;
      },
      run() {
        this.state = 1;
      },
      start() {
        this.state = 1;
        setTimeout(() => {
          this.state = 2;
        }, 1000);
      },
      showdetail() {
        this.state = 3;
      }
    }
  }
</script>

<style>
  .el-form-item__label {
    white-space: pre-line !important;
  }
</style>

<style scoped>
  .container {
    padding: 20px 80px;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .container .header {
    height: 80px;
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
</style>
