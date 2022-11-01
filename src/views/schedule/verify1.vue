<template>
  <div class="container" v-loading="loading">
    <div class="content">
      <div class="page" id="page1" v-show="state!=3">
        <el-button type="primary" v-show="state==0" @click="start">开始仿真</el-button>
        <span v-show="state==1">正在仿真中，请等待...</span>
        <el-button type="success" v-show="state==2" @click="showdetail">仿真回放</el-button>
      </div>
      <div class="page" id="page2" v-show="state==3">
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form ref="form" :model="form" size="mini" label-width="200px" label-position="left">
              <el-form-item label="各用户上行传输功率值 " style="font-weight: bold"></el-form-item>
              <el-form-item>
                <el-table
                  :data="form.powerList"
                  border
                  style="width:100%;"
                  height="400">
                  <el-table-column align="center" label="用户名称" prop="username"></el-table-column>
                  <el-table-column align="center" label="功率值" prop="value"></el-table-column>
                </el-table>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form ref="form" :model="form" size="mini" label-width="200px" label-position="left">
              <el-form-item label="上行平均功率值" style="font-weight: bold"></el-form-item>
              <el-row :gutter="24">
                <el-col :span="12">
                  <el-form-item>
                    <el-input v-model="form.avgPower" readonly></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="footer" v-show="state==3">
      <el-button type="primary" @click="state=0" style="margin-bottom: 20px">结束仿真</el-button>
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
        form: {
          avgPower:'21',
          powerList: [
            { username: '用户1', value: 21.4},
            { username: '用户2', value: 21.5},
            { username: '用户3', value: 22.6},
            { username: '用户4', value: 20.9},
            { username: '用户5', value: 21.5},
            { username: '用户6', value: 20.5},
            { username: '用户7', value: 22.8},
            { username: '用户8', value: 22.1},
            { username: '用户9', value: 22.3},
            { username: '用户10', value: 21.4},
            { username: '用户11', value: 22.0},
            { username: '用户12', value: 21.7},
            { username: '用户13', value: 23.4},
            { username: '用户14', value: 21.4},
            { username: '用户15', value: 21.8},
            { username: '用户16', value: 22.2},
            { username: '用户17', value: 22.4},
            { username: '用户18', value: 21.7},
            { username: '用户19', value: 21.8},
          ],
        }
      }
    },
    mounted() {
      this.loading = false;
    },
    methods:{
      start() {
        this.state = 1;
        setTimeout(() => {
          this.state = 2;
        }, 100);
      },
      showdetail() {
        this.state = 3;
      }
    }
  }
</script>

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
  #page1 {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
