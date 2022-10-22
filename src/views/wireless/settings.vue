<template>
  <div class="container" v-loading="loading">
    <div class="header">
      <el-button style="margin-top: 5px;" :type="active==0?'primary':''" @click="changeActive(0)">仿真环境配置</el-button>
      <el-button style="margin-top: 5px;" :type="active==1?'primary':''" @click="changeActive(1)">仿真算法配置</el-button>
    </div>
    <div class="content">
      <div class="page" id="page1" v-show="active==0">
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form ref="form" :model="form1.input1" size="mini" label-width="150px" label-position='left'>
              <el-form-item label="基本配置" style="font-weight: bold"></el-form-item>
              <el-form-item label="5G NR BS个数">
                <el-input v-model="form1.input1.password"></el-input>
              </el-form-item>
              <el-form-item label="WLAN AP个数">
                <el-input v-model="form1.input1.ipaddress"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="14" :offset="2">
            <el-row>
              <el-form ref="form" :model="form1.input1" size="mini" label-width="150px" label-position='left'>
                <el-form-item label="agent_config" style="font-weight: bold"></el-form-item>
              </el-form>
            </el-row>
            <el-row :gutter="24">
              <el-form ref="form" :model="form1.input1" size="mini" label-width="150px" label-position='left'>
                <el-col :span="12">
                  <el-form-item label="action_size">
                    <el-input v-model="form1.input1.password"></el-input>
                  </el-form-item>
                  <el-form-item label="obs_size">
                    <el-input v-model="form1.input1.ipaddress"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="action_bound">
                    <el-input v-model="form1.input1.ipaddress"></el-input>
                  </el-form-item>
                  <el-form-item label="penalty">
                    <el-input v-model="form1.input1.ipaddress"></el-input>
                  </el-form-item>
                </el-col>
              </el-form>
            </el-row>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="10">
            <el-form ref="form" :model="form1.input1" size="mini" label-width="150px" label-position='left'>
              <el-form-item label="platform_config" style="font-weight: bold"></el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form ref="form" :model="form1.input1" size="mini" label-width="150px" label-position='left'>
              <el-form-item label="action_size">
                <el-input v-model="form1.input1.password"></el-input>
              </el-form-item>
              <el-form-item label="obs_size">
                <el-input v-model="form1.input1.ipaddress"></el-input>
              </el-form-item>
              <el-form-item label="action_bound">
                <el-input v-model="form1.input1.ipaddress"></el-input>
              </el-form-item>
              <el-form-item label="penalty">
                <el-input v-model="form1.input1.ipaddress"></el-input>
              </el-form-item>
              <el-form-item label="penalty">
                <el-input v-model="form1.input1.ipaddress"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="8">
            <el-form ref="form" :model="form1.input1" size="mini" label-width="150px" label-position='left'>
              <el-form-item label="action_size">
                <el-input v-model="form1.input1.password"></el-input>
              </el-form-item>
              <el-form-item label="obs_size">
                <el-input v-model="form1.input1.ipaddress"></el-input>
              </el-form-item>
              <el-form-item label="action_bound">
                <el-input v-model="form1.input1.ipaddress"></el-input>
              </el-form-item>
              <el-form-item label="penalty">
                <el-input v-model="form1.input1.ipaddress"></el-input>
              </el-form-item>
              <el-form-item label="penalty">
                <el-input v-model="form1.input1.ipaddress"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="8">
            <el-form ref="form" :model="form1.input1" size="mini" label-width="150px" label-position='left'>
              <el-form-item label="action_size">
                <el-input v-model="form1.input1.password"></el-input>
              </el-form-item>
              <el-form-item label="obs_size">
                <el-input v-model="form1.input1.ipaddress"></el-input>
              </el-form-item>
              <el-form-item label="action_bound">
                <el-input v-model="form1.input1.ipaddress"></el-input>
              </el-form-item>
              <el-form-item label="penalty">
                <el-input v-model="form1.input1.ipaddress"></el-input>
              </el-form-item>
              <el-form-item label="penalty">
                <el-input v-model="form1.input1.ipaddress"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
      <div class="page" id="page2" v-show="active==1">
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form ref="form" :model="form1.input1" size="mini" label-width="150px" label-position='left'>
              <el-form-item label="选择仿真算法" style="font-weight: bold">
                <el-checkbox-group v-model="form1.input1">
                  <el-checkbox label="mappo"></el-checkbox>
                  <el-checkbox label="maddpg"></el-checkbox>
                  <el-checkbox label="ddpg"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="6">
            <el-form ref="form" :model="form1.input1" size="mini" label-width="100px" label-position='left'>
              <el-form-item label="maddpg、ddpg参数设置" style="font-weight: bold" label-width="200px"></el-form-item>
              <!-- <el-form-item label="train_config" style="font-weight: bold" label-width="200px"></el-form-item> -->
              <el-form-item label="result_path">
                <el-input v-model="form1.input1.password"></el-input>
              </el-form-item>
              <el-form-item label="model_path">
                <el-input v-model="form1.input1.ipaddress"></el-input>
              </el-form-item>
              <el-form-item label="save_every">
                <el-input v-model="form1.input1.ipaddress"></el-input>
              </el-form-item>
              <el-form-item label="b_episodes">
                <el-input v-model="form1.input1.ipaddress"></el-input>
              </el-form-item>
              <el-form-item label="random_seed">
                <el-input v-model="form1.input1.ipaddress"></el-input>
              </el-form-item>
              <el-form-item label="sigma2">
                <el-input v-model="form1.input1.ipaddress"></el-input>
              </el-form-item>
              <el-form-item label="max_t">
                <el-input v-model="form1.input1.ipaddress"></el-input>
              </el-form-item>
              <el-form-item label="mini_batch_size">
                <el-input v-model="form1.input1.ipaddress"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="18">
            <el-form ref="form" :model="form1.input1" size="mini" label-width="100px" label-position='left'>
              <el-form-item label="maddpg、ddpg参数设置" style="font-weight: bold" label-width="200px"></el-form-item>
              <!-- <el-form-item label="train_config" style="font-weight: bold" label-width="200px"></el-form-item> -->
              <el-row :gutter="24">
                <el-col :span="8">
                  <el-form-item label="result_path">
                    <el-input v-model="form1.input1.password"></el-input>
                  </el-form-item>
                  <el-form-item label="model_path">
                    <el-input v-model="form1.input1.ipaddress"></el-input>
                  </el-form-item>
                  <el-form-item label="save_every">
                    <el-input v-model="form1.input1.ipaddress"></el-input>
                  </el-form-item>
                  <el-form-item label="b_episodes">
                    <el-input v-model="form1.input1.ipaddress"></el-input>
                  </el-form-item>
                  <el-form-item label="random_seed">
                    <el-input v-model="form1.input1.ipaddress"></el-input>
                  </el-form-item>
                  <el-form-item label="sigma2">
                    <el-input v-model="form1.input1.ipaddress"></el-input>
                  </el-form-item>
                  <el-form-item label="max_t">
                    <el-input v-model="form1.input1.ipaddress"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="result_path">
                    <el-input v-model="form1.input1.password"></el-input>
                  </el-form-item>
                  <el-form-item label="model_path">
                    <el-input v-model="form1.input1.ipaddress"></el-input>
                  </el-form-item>
                  <el-form-item label="save_every">
                    <el-input v-model="form1.input1.ipaddress"></el-input>
                  </el-form-item>
                  <el-form-item label="b_episodes">
                    <el-input v-model="form1.input1.ipaddress"></el-input>
                  </el-form-item>
                  <el-form-item label="random_seed">
                    <el-input v-model="form1.input1.ipaddress"></el-input>
                  </el-form-item>
                  <el-form-item label="sigma2">
                    <el-input v-model="form1.input1.ipaddress"></el-input>
                  </el-form-item>
                  <el-form-item label="max_t">
                    <el-input v-model="form1.input1.ipaddress"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="result_path">
                    <el-input v-model="form1.input1.password"></el-input>
                  </el-form-item>
                  <el-form-item label="model_path">
                    <el-input v-model="form1.input1.ipaddress"></el-input>
                  </el-form-item>
                  <el-form-item label="save_every">
                    <el-input v-model="form1.input1.ipaddress"></el-input>
                  </el-form-item>
                  <el-form-item label="b_episodes">
                    <el-input v-model="form1.input1.ipaddress"></el-input>
                  </el-form-item>
                  <el-form-item label="random_seed">
                    <el-input v-model="form1.input1.ipaddress"></el-input>
                  </el-form-item>
                  <el-form-item label="sigma2">
                    <el-input v-model="form1.input1.ipaddress"></el-input>
                  </el-form-item>
                  <el-form-item label="max_t">
                    <el-input v-model="form1.input1.ipaddress"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
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
