import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    form_deploy: {
      userPos: [
        { pos: [15,0,0] },
        { pos: [35,0,0] },
        { pos: [65,0,0] },
        { pos: [90,0,0] },
      ],
      BSPos: [
        { pos: [0,0,0] },
        { pos: [50,50,0] },
      ],
      simulate_time: '2',
      cell_num: '1',
      params: {
        nb_tx: '1',
        nb_rx: '1',
        nb_taps: '1',
        channel_bandwidth: '20.0',
        sampling_rate: '30.72',
        max_Doppler: '0',
        amps: '0.0,-1.0,-2.0,-3.0,-8.0,-17.2,-20.8',
        delays: '0,0.03,0.07,0.09,0.11,0.19,0.41',
        channel_length: '1',
        Td: '0',
        aoa: '0.03',
        ricean_factor: '0.0',
        path_loss_dB: '10'
      },
    },
    form_schedule: {
      input1: {
        sampleRate: '2M',
        CenterFreq: '38.4MHz',
        IRS: '20,180',
        fileList: [],
      },
      input2: {
        length:'320',
        structure:'4:4:8:16:13:3:16:8:8:16:32:32',
        structureParam:'1',
        structureFileList: [],
        FFTLength:'256',
        signalSelectFile:'ofdm.grc',
        signalFiles:['ofdm.grc','ofdm-rx-usrp.grc','ofdm-rx-cp-corr.grc','ofdm-rx-sync.grc'],
        centerFrequency:'3.5GHz',
        subFrequency:'15kHz',
        punishCoefficient:'1e-10',
        lagrangeCoefficient:'8.5e-10',
        userPower:'10w',
      },
    },

  },
  getters: {
  },
  mutations: {
    setForm(state,content) {
      if(content.name=='deploy') {
        state.form_deploy = JSON.parse(JSON.stringify(content.form))
      } else if(content.name=='schedule') {
        state.form_schedule = JSON.parse(JSON.stringify(content.form))


      // } else if(content.name==3) {
      //   state.form3 = JSON.parse(JSON.stringify(content.forms[0]))
      // } else if(content.name==4.1) {
      //   state.form4.form1 = JSON.parse(JSON.stringify(content.forms[0]))
      // } else if(content.name==4.2) {
      //   state.form4.form2 = JSON.parse(JSON.stringify(content.forms[0]))
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
