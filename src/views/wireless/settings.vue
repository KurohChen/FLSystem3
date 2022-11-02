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
            <el-form ref="form" :model="form.input1" size="mini" label-width="150px" label-position='left'>
              <el-form-item label="仿真参数配置" style="font-weight: bold"></el-form-item>
              <el-form-item label="5G NR BS个数">
                <el-input v-model="form.input1.NR"></el-input>
              </el-form-item>
              <el-form-item label="WLAN AP个数">
                <el-input v-model="form.input1.AP"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="14" :offset="2">
            <el-row>
              <el-form ref="form" :model="form.input1" size="mini" label-width="150px" label-position='left'>
                <el-form-item label="agent_config" style="font-weight: bold"></el-form-item>
              </el-form>
            </el-row>
            <el-row :gutter="24">
              <el-form ref="form" :model="form.input1" size="mini" label-width="150px" label-position='left'>
                <el-col :span="12">
                  <el-form-item label="action_size">
                    <el-input v-model="form.input1.action_size"></el-input>
                  </el-form-item>
                  <el-form-item label="obs_size">
                    <el-input v-model="form.input1.obs_size"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="action_bound">
                    <el-input v-model="form.input1.action_bound"></el-input>
                  </el-form-item>
                  <el-form-item label="penalty">
                    <el-input v-model="form.input1.penalty"></el-input>
                  </el-form-item>
                </el-col>
              </el-form>
            </el-row>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="10">
            <el-form ref="form" :model="form.input1" size="mini" label-width="150px" label-position='left'>
              <el-form-item label="platform_config" style="font-weight: bold"></el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form ref="form" :model="form.input1" size="mini" label-width="150px" label-position='left'>
              <el-form-item label="UE speed ms">
                <el-select v-model="form.input1.UESpeeed" placeholder="请选择" @change="formComplete=false">
                  <el-option
                      v-for="item in form.input1.UESpeeedFiles"
                      :key="item"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="h_BS_m">
                <el-input v-model="form.input1.h_BS_m"></el-input>
              </el-form-item>
              <el-form-item label="h_AP_m">
                <el-input v-model="form.input1.h_AP_m"></el-input>
              </el-form-item>
              <el-form-item label="h_UT_m">
                <el-input v-model="form.input1.h_UT_m"></el-input>
              </el-form-item>
              <el-form-item label="P_TX_AP_dBm">
                <el-input v-model="form.input1.P_TX_AP_dBm"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="8">
            <el-form ref="form" :model="form.input1" size="mini" label-width="150px" label-position='left'>
              <el-form-item label="P_TX_BS_dBm">
                <el-input v-model="form.input1.P_TX_BS_dBm"></el-input>
              </el-form-item>
              <el-form-item label="BW_AP_MHz">
                <el-input v-model="form.input1.BW_AP_MHz"></el-input>
              </el-form-item>
              <el-form-item label="BW_BS_MHz">
                <el-input v-model="form.input1.BW_BS_MHz"></el-input>
              </el-form-item>
              <el-form-item label="dis_bound">
                <el-input v-model="form.input1.dis_bound"></el-input>
              </el-form-item>
              <el-form-item label="n_stacked_observation">
                <el-input v-model="form.input1.n_stacked_observation"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="8">
            <el-form ref="form" :model="form.input1" size="mini" label-width="150px" label-position='left'>
              <el-form-item label="random_seed">
                <el-input v-model="form.input1.random_seed"></el-input>
              </el-form-item>
              <el-form-item label="ou_noise_start">
                <el-input v-model="form.input1.ou_noise_start"></el-input>
              </el-form-item>
              <el-form-item label="ou_noise_decay_rate">
                <el-input v-model="form.input1.ou_noise_decay_rate"></el-input>
              </el-form-item>

            </el-form>
          </el-col>
        </el-row>
      </div>
      <div class="page" id="page2" v-show="active==1">
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form ref="form" :model="form.input2" size="mini" label-width="150px" label-position='left'>
              <el-form-item label="仿真算法配置" style="font-weight: bold">
                <el-checkbox-group v-model="form.input2.checkList">
                  <el-checkbox label="mappo"></el-checkbox>
                  <el-checkbox label="maddpg"></el-checkbox>
                  <el-checkbox label="ddpg"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="8">
            <el-form ref="form" :model="form.input2" size="mini" label-width="100px" label-position='left'>
              <el-form-item label="maddpg、ddpg参数设置" style="font-weight: bold" label-width="200px"></el-form-item>
              <!-- <el-form-item label="train_config" style="font-weight: bold" label-width="200px"></el-form-item> -->
              <el-form-item label="result_path">
                <el-input v-model="form.input2.result_path"></el-input>
              </el-form-item>
              <el-form-item label="model_path">
                <el-input v-model="form.input2.model_path"></el-input>
              </el-form-item>
              <el-form-item label="save_every">
                <el-input v-model="form.input2.save_every"></el-input>
              </el-form-item>
              <el-form-item label="n_episodes">
                <el-input v-model="form.input2.n_episodes"></el-input>
              </el-form-item>
              <el-form-item label="random_seed">
                <el-input v-model="form.input2.random_seed"></el-input>
              </el-form-item>
              <el-form-item label="update_every">
                <el-input v-model="form.input2.update_every"></el-input>
              </el-form-item>
              <el-form-item label="max_t">
                <el-input v-model="form.input2.max_t"></el-input>
              </el-form-item>
              <el-form-item label="mini_batch_size">
                <el-input v-model="form.input2.mini_batch_size"></el-input>
              </el-form-item>
              <el-form-item label="actor_optim_params">
                <el-input v-model="form.input2.actor_optim_params"></el-input>
              </el-form-item>
              <el-form-item label="critic_optim_params">
                <el-input v-model="form.input2.critic_optim_params"></el-input>
              </el-form-item>
              <el-form-item label="discount_gamma">
                <el-input v-model="form.input2.discount_gamma"></el-input>
              </el-form-item>
              <el-form-item label="buffer_size">
                <el-input v-model="form.input2.buffer_size"></el-input>
              </el-form-item>
              <el-form-item label="len_window">
                <el-input v-model="form.input2.len_window"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="16">
            <el-form ref="form" :model="form.input2" size="mini" label-width="100px" label-position='left'>
              <el-form-item label="mappo参数设置" style="font-weight: bold" label-width="200px"></el-form-item>
              <!-- <el-form-item label="train_config" style="font-weight: bold" label-width="200px"></el-form-item> -->
              <el-row :gutter="24">
                <el-col :span="12">
                  <el-form-item label="seed">
                    <el-input v-model="form.input2.seed"></el-input>
                  </el-form-item>
                  <el-form-item label="episode_length">
                    <el-input v-model="form.input2.episode_length"></el-input>
                  </el-form-item>
                  <el-form-item label="num_env_steps">
                    <el-input v-model="form.input2.num_env_steps"></el-input>
                  </el-form-item>
                  <el-form-item label="actor_lr">
                    <el-input v-model="form.input2.actor_lr"></el-input>
                  </el-form-item>
                  <el-form-item label="critic_lr">
                    <el-input v-model="form.input2.critic_lr"></el-input>
                  </el-form-item>
                  <el-form-item label="opti_eps">
                    <el-input v-model="form.input2.opti_eps"></el-input>
                  </el-form-item>
                  <el-form-item label="ppo_epoch">
                    <el-input v-model="form.input2.ppo_epoch"></el-input>
                  </el-form-item>
                  <el-form-item label="use_clipped_value_loss">
                    <el-input v-model="form.input2.use_clipped_value_loss"></el-input>
                  </el-form-item>
                  <el-form-item label="clip_param">
                    <el-input v-model="form.input2.clip_param"></el-input>
                  </el-form-item>
                  <el-form-item label="num_mini_batch">
                    <el-input v-model="form.input2.num_mini_batch"></el-input>
                  </el-form-item>
                  <el-form-item label="entropy_coef">
                    <el-input v-model="form.input2.entropy_coef"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="value_loss_coef">
                    <el-input v-model="form.input2.value_loss_coef"></el-input>
                  </el-form-item>
                  <el-form-item label="use_max_grad_norm">
                    <el-input v-model="form.input2.use_max_grad_norm"></el-input>
                  </el-form-item>
                  <el-form-item label="max_grad_norm">
                    <el-input v-model="form.input2.max_grad_norm"></el-input>
                  </el-form-item>
                  <el-form-item label="gamma">
                    <el-input v-model="form.input2.gamma"></el-input>
                  </el-form-item>
                  <el-form-item label="gae_lambda">
                    <el-input v-model="form.input2.gae_lambda"></el-input>
                  </el-form-item>
                  <el-form-item label="use_proper_time_limits">
                    <el-input v-model="form.input2.use_proper_time_limits"></el-input>
                  </el-form-item>
                  <el-form-item label="use_huber_loss">
                    <el-input v-model="form.input2.use_huber_loss"></el-input>
                  </el-form-item>
                  <el-form-item label="use_value_active_masks">
                    <el-input v-model="form.input2.use_value_active_masks"></el-input>
                  </el-form-item>
                  <el-form-item label="use_policy_active_masks">
                    <el-input v-model="form.input2.use_policy_active_masks"></el-input>
                  </el-form-item>
                  <el-form-item label="huber_delta">
                    <el-input v-model="form.input2.huber_delta"></el-input>
                  </el-form-item>
                </el-col>
<!--                <el-col :span="8">-->
<!--                  -->
<!--                </el-col>-->
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
        form: {
          input1: {
            NR: '0',
            AP: '18',
            action_size:'27',
            obs_size: '27',
            action_bound: '1',
            penalty:'1',
            UESpeeed:'10',
            UESpeeedFiles:['10','12','14','16','18','20'],
            h_BS_m:'25',
            h_AP_m:'5',
            h_UT_m:'2',
            P_TX_AP_dBm:'27',
            P_TX_BS_dBm:'26',
            BW_AP_MHz:'20',
            BW_BS_MHz:'50',
            dis_bound:'100',
            n_stacked_observation:'3',
            random_seed:'1',
            ou_noise_start:'2',
            ou_noise_decay_rate:'0.9',
          },
          input2: {
            checkList : ['mappo','maddpg','ddpg'],

            result_path: 'D:/results/train_data/',
            model_path: 'D:/results/model/',
            save_every: '100',
            n_episodes:'1000',
            random_seed: '1',
            update_every : '10',
            max_t: '99',
            mini_batch_size: '128',
            actor_optim_params: '0.0001',
            critic_optim_params: '0.001',
            discount_gamma: '0.95',
            buffer_size:'100000',
            len_window: '20',

            seed: '1',
            episode_length: '100',
            num_env_steps: '150000',
            actor_lr:'5e-4',
            critic_lr: '5e-4',
            opti_eps: '1e-5',
            ppo_epoch: '15',
            use_clipped_value_loss: 'True',
            clip_param: '0.2',
            num_mini_batch: '1',
            entropy_coef: '0.01',
            value_loss_coef:'1',
            use_max_grad_norm: 'True',
            max_grad_norm: '10.0',
            gamma: '0.99',
            gae_lambda: '0.95',
            use_proper_time_limits: 'False',
            use_huber_loss: 'True',
            use_value_active_masks: 'True',
            use_policy_active_masks:'True',
            huber_delta: '10'
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
