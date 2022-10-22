<template>
  <div class="container" v-loading="loading">
    <div class="header">
      <el-button style="margin-top: 5px;" :type="active==0?'primary':''" @click="changeActive(0)">仿真环境配置</el-button>
      <el-button style="margin-top: 5px;" :type="active==1?'primary':''" @click="changeActive(1)">控制参数配置</el-button>
    </div>
    <div class="content">
      <div class="page" id="page1" v-show="active==0">
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form ref="form" :model="form1.input1" size="mini" label-width="200px" label-position='left'>
              <el-form-item label="USRP连接" style="font-weight: bold"></el-form-item>
              <el-form-item label="采样率 Sample Rate">
                <el-input v-model="form1.input1.password"></el-input>
              </el-form-item>
              <el-form-item label="中心频率 Center Freq">
                <el-input v-model="form1.input1.ipaddress"></el-input>
              </el-form-item>
              <el-form-item label="IRS反射单元数变化区间" style="font-weight: bold">
                <el-input v-model="form1.input1.port"></el-input>
              </el-form-item>
              <el-form-item label="配置文件" style="font-weight: bold">
                <el-upload
                  class="upload-demo"
                  ref="upload"
                  action="/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
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
      <div class="page" id="page2" v-show="active==1">
        <el-row :gutter="24">
          <el-col :span="16">
            <el-form ref="form" :model="form1.input1" size="mini" label-width="200px" label-position='left'>
              <el-form-item label="信号传输数据包参数" style="font-weight: bold"></el-form-item>
              <el-col :span="12">
                <el-form-item label="数据包长度">
                  <el-input v-model="form1.input1.password"></el-input>
                </el-form-item>
                <el-form-item label="数据包头结构">
                  <el-input v-model="form1.input1.ipaddress"></el-input>
                </el-form-item>
                <el-form-item label="数据包解析结构参数">
                  <el-input v-model="form1.input1.port"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="数据包符号位特征">
                  <el-input v-model="form1.input1.port"></el-input>
                </el-form-item>
                <el-form-item label="选取数据结构定义文件">
                  <el-input v-model="form1.input1.port"></el-input>
                </el-form-item>
              </el-col>
            </el-form>
          </el-col>
          <el-col :span="8">
            <el-form ref="form" :model="form1.input1" size="mini" label-width="200px" label-position='left'>
              <el-form-item label="信号调制解调参数" style="font-weight: bold"></el-form-item>
              <el-form-item label="FFT变换长度">
                <el-input v-model="form1.input1.password"></el-input>
              </el-form-item>
              <el-form-item label="选取信号叠加文件">
                <el-input v-model="form1.input1.ipaddress"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form ref="form" :model="form1.input1" size="mini" label-width="200px" label-position='left'>
              <el-form-item label="信号载波与同步相关参数" style="font-weight: bold"></el-form-item>
              <el-form-item label="信号载波中心频率">
                <el-input v-model="form1.input1.password"></el-input>
              </el-form-item>
              <el-form-item label="信号各子载波频率">
                <el-input v-model="form1.input1.ipaddress"></el-input>
              </el-form-item>
              <el-form-item label="信号同步特征">
                <el-input v-model="form1.input1.password"></el-input>
              </el-form-item>
              <el-form-item label="信号符号位特征">
                <el-input v-model="form1.input1.ipaddress"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="12">
            <el-form ref="form" :model="form1.input1" size="mini" label-width="200px" label-position='left'>
              <el-form-item label="能效资源分配算法相关参数" style="font-weight: bold"></el-form-item>
              <el-form-item label="初始惩罚系数">
                <el-input v-model="form1.input1.password"></el-input>
              </el-form-item>
              <el-form-item label="初始拉格朗日系数">
                <el-input v-model="form1.input1.ipaddress"></el-input>
              </el-form-item>
              <el-form-item label="初始用户功率">
                <el-input v-model="form1.input1.ipaddress"></el-input>
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
    </div>
  </div>
</template>

<script>
  export default {
    name: "vueLC",
    data () {
      return {
        loading: false,
        active: 0,
        formComplete: true,
        form1: {
          input1: {
            username: '',
            password: '',
            ipaddress: '',
            port: ''
          },
          input2: {
            username: '',
            password: '',
            ipaddress: '',
            port: ''
          },
          fileList: []
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
</style>
