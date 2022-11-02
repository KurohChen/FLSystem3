<template>
  <div class="container" v-loading="loading">
    <div class="page" id="page1" v-show="state!=3">
      <el-button type="primary" v-show="state==0" @click="start">开始仿真</el-button>
      <span v-show="state==1">正在仿真中，请等待...</span>
      <el-button type="success" v-show="state==2" @click="showdetail">仿真回放</el-button>
    </div>
    <div class="page" id="page2" v-show="state==3">
      <el-collapse v-model="activeName" accordion @change="handleChange">
        <el-collapse-item title="用户速度变化" name="1">
          <div class="imgBox" id="box3">
            <div class="item">
              <div id="echarts_line1_1" style="width: 100%; height: 100%"></div>
              <div class="imgName">切换概率图</div>
            </div>
            <div class="item">
              <div id="echarts_line1_2" style="width: 100%; height: 100%"></div>
              <div class="imgName">吞吐量图</div>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="用户个数变化" name="2">
          <div class="imgBox" id="box3">
            <div class="item">
              <div id="echarts_line2_1" style="width: 100%; height: 100%"></div>
              <div class="imgName">切换概率图</div>
            </div>
            <div class="item">
              <div id="echarts_line2_2" style="width: 100%; height: 100%"></div>
              <div class="imgName">吞吐量图</div>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="网络密度变化" name="3">
          <div class="imgBox" id="box3">
            <div class="item">
              <div id="echarts_line3_1" style="width: 100%; height: 100%"></div>
              <div class="imgName">切换概率图</div>
            </div>
            <div class="item">
              <div id="echarts_line3_2" style="width: 100%; height: 100%"></div>
              <div class="imgName">吞吐量图</div>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
      <br>
      <div class="footer">
        <el-button type="primary" @click="alive=false" style="margin-bottom: 20px" v-show="alive">结束仿真</el-button>
        <el-button type="primary" @click="state=0" style="margin-bottom: 20px" v-show="!alive">重新仿真</el-button>
        <el-button type="primary" @click="$router.push('settings')" style="margin-bottom: 20px" v-show="!alive">编辑参数</el-button>
      </div>
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
        activeName: '1',
        alive: true,
        dataLine1_1: [],
        dataLine1_2: [],
        dataLine2_1: [],
        dataLine2_2: [],
        dataLine3_1: [],
        dataLine3_2: [],
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
        }, 200);
      },
      handleChange(val) {
        if(val==1) {
          this.showecharts1_1();
          this.showecharts1_2();
        } else if(val==2) {
          this.showecharts2_1();
          this.showecharts2_2();
        } else if(val==3) {
          this.showecharts3_1();
          this.showecharts3_2();
        }
      },
      showdetail() {
        this.state = 3;
        this.dataLine1_1 = {
          Velocity : [10, 12, 14, 16, 18, 20],
          DDPG_HO : [0.2009, 0.2542, 0.3146, 0.318, 0.4035, 0.4761],
          MADDPG_HO : [0.0879, 0.10020, 0.12242, 0.19959, 0.220808, 0.2369],
          MAPPO_HO : [0.08, 0.1, 0.1191, 0.1388, 0.1403, 0.15],
          DDPG_VHO : [0.09038, 0.1148, 0.1532, 0.1685, 0.2164, 0.2583],
          MADDPG_VHO : [0.03306, 0.06626, 0.060808, 0.097979, 0.13112, 0.1315],
          MAPPO_VHO : [0.032, 0.05311, 0.06008, 0.07135, 0.07355, 0.0828]
        }
        this.showecharts1_1();
        this.dataLine1_2 = {
          Velocity : [10, 12, 14, 16, 18, 20],
          DDPG : [0.2586, 0.2376, 0.202, 0.214, 0.2179, 0.2261],
          MADDPG : [0.1414, 0.1709, 0.21282, 0.22646, 0.23272, 0.25676],
          MAPPO : [0.1203, 0.1648, 0.1988 , 0.2087,0.2105, 0.216]
        }
        this.showecharts1_2();
        this.dataLine2_1 = {
          UE_Number : [2, 3, 4, 5, 6, 7],
          DDPG_HO : [0.1566, 0.1771, 0.3217, 0.2676, 0.271, 0.3468],
          MADDPG_HO : [0.12292, 0.144848484, 0.1721212, 0.180607, 0.226666, 0.2412121],
          MAPPO_HO : [0.115, 0.1133, 0.1684, 0.1467, 0.1681, 0.1587],
          DDPG_VHO : [0.09961, 0.09091,  0.1664, 0.1342, 0.1602, 0.1665],
          MADDPG_VHO : [0.0634343, 0.07151515,  0.10040, 0.106464, 0.10040, 0.135959],
          MAPPO_VHO : [0.045, 0.07333, 0.08931, 0.06966, 0.0905, 0.08315]
        }
        this.showecharts2_1();
        this.dataLine2_2 = {
          UE_Number : [2, 3, 4, 5, 6, 7],
          DDPG : [0.1603, 0.2374, 0.1817, 0.198, 0.2241, 0.2572],
          MADDPG : [0.130101, 0.1452525, 0.15959, 0.1686868, 0.172424, 0.2010101],
          MAPPO : [0.1101, 0.1302, 0.1362 , 0.1589,0.1627, 0.1961]
        }
        this.showecharts2_2();
        this.dataLine3_1 = {
          AN_Density : [1, 2, 3, 4, 5, 6],
          DDPG_HO : [0.16765, 0.341, 0.3037, 0.36853, 0.41724, 0.4862],
          MADDPG_HO : [0.1325, 0.2393,0.1939, 0.201, 0.204, 0.2318],
          MAPPO_HO : [0.1311, 0.1467, 0.1472, 0.1542, 0.1644, 0.2186],
          DDPG_VHO : [0.13105,0.1754, 0.1456, 0.12638,0.1352925, 0.1514],
          MADDPG_VHO : [0.07418, 0.1371, 0.101, 0.07798, 0.08687, 0.08778],
          MAPPO_VHO : [0.062, 0.06965, 0.07157, 0.04978, 0.04931, 0.03531]
        }
        this.showecharts3_1();
        this.dataLine3_2 = {
          AN_Density : [1, 2, 3, 4, 5, 6],
          DDPG : [0.171, 0.1447, 0.272, 0.30585, 0.315, 0.4],
          MADDPG : [0.1091, 0.1172, 0.133, 0.1475, 0.1515, 0.2031],
          MAPPO : [0.102, 0.106, 0.126 , 0.1379,0.142,0.07006]
        }
        this.showecharts3_2();

      },
      showecharts1_1(){
        let option_line1_1 = {
          xAxis: {
            name: 'Velocity',
            type: 'category',
            data: this.dataLine1_1.Velocity,
            nameLocation:'middle',
            nameGap: 30,
          },
          yAxis: {
            name: 'Average HO Rate And Average VHO Rate',
            type: 'value',
            nameLocation:'middle',
            nameGap: 30,
          },
          grid: {
            left: '12%',
            top: '15%',
            right: '10%',
            bottom: '20%'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['DDPG_HO','MADDPG_HO','MAPPO_HO','DDPG_VHO','MADDPG_VHO','MAPPO_VHO']
          },
          series: [
            {data:this.dataLine1_1.DDPG_HO,type:'line',name:'DDPG_HO'},
            {data:this.dataLine1_1.MADDPG_HO,type:'line',name:'MADDPG_HO'},
            {data:this.dataLine1_1.MAPPO_HO,type:'line',name:'MAPPO_HO'},
            {data:this.dataLine1_1.DDPG_VHO,type:'line',name:'DDPG_VHO'},
            {data:this.dataLine1_1.MADDPG_VHO,type:'line',name:'MADDPG_VHO'},
            {data:this.dataLine1_1.MAPPO_VHO,type:'line',name:'MAPPO_VHO'},
          ]
        };
        this.$nextTick(() => {
          if(document.getElementById('echarts_line1_1')!=null) {
            document.getElementById('echarts_line1_1').removeAttribute("_echarts_instance_");
            this.$echarts.init(document.getElementById('echarts_line1_1')).setOption(option_line1_1);
          }
        });
      },
      showecharts1_2(){
        let option_line1_2 = {
          xAxis: {
            name: 'Velocity',
            type: 'category',
            data: this.dataLine1_2.Velocity,
            nameLocation:'middle',
            nameGap: 30,
          },
          yAxis: {
            name: 'Average Block Rate',
            type: 'value',
            nameLocation:'middle',
            nameGap: 30,
          },
          grid: {
            left: '12%',
            top: '15%',
            right: '10%',
            bottom: '20%'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['DDPG','MADDPG','MAPPO']
          },
          series: [
            {data:this.dataLine1_2.DDPG,type:'line',name:'DDPG'},
            {data:this.dataLine1_2.MADDPG,type:'line',name:'MADDPG'},
            {data:this.dataLine1_2.MAPPO,type:'line',name:'MAPPO'},
          ]
        };
        this.$nextTick(() => {
          if(document.getElementById('echarts_line1_2')!=null) {
            document.getElementById('echarts_line1_2').removeAttribute("_echarts_instance_");
            this.$echarts.init(document.getElementById('echarts_line1_2')).setOption(option_line1_2);
          }
        });
      },
      showecharts2_1(){
        let option_line2_1 = {
          xAxis: {
            name: 'UE Number',
            type: 'category',
            data: this.dataLine2_1.UE_Number,
            nameLocation:'middle',
            nameGap: 30,
          },
          yAxis: {
            name: 'Average HO Rate And Average VHO Rate',
            type: 'value',
            nameLocation:'middle',
            nameGap: 30,
          },
          grid: {
            left: '12%',
            top: '15%',
            right: '10%',
            bottom: '20%'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['DDPG_HO','MADDPG_HO','MAPPO_HO','DDPG_VHO','MADDPG_VHO','MAPPO_VHO']
          },
          series: [
            {data:this.dataLine2_1.DDPG_HO,type:'line',name:'DDPG_HO'},
            {data:this.dataLine2_1.MADDPG_HO,type:'line',name:'MADDPG_HO'},
            {data:this.dataLine2_1.MAPPO_HO,type:'line',name:'MAPPO_HO'},
            {data:this.dataLine2_1.DDPG_VHO,type:'line',name:'DDPG_VHO'},
            {data:this.dataLine2_1.MADDPG_VHO,type:'line',name:'MADDPG_VHO'},
            {data:this.dataLine2_1.MAPPO_VHO,type:'line',name:'MAPPO_VHO'},
          ]
        };
        this.$nextTick(() => {
          if(document.getElementById('echarts_line2_1')!=null) {
            document.getElementById('echarts_line2_1').removeAttribute("_echarts_instance_");
            this.$echarts.init(document.getElementById('echarts_line2_1')).setOption(option_line2_1);
          }
        });
      },
      showecharts2_2(){
        let option_line2_2 = {
          xAxis: {
            name: 'UE Number',
            type: 'category',
            data: this.dataLine2_2.UE_Number,
            nameLocation:'middle',
            nameGap: 30,
          },
          yAxis: {
            name: 'Average Block Rate',
            type: 'value',
            nameLocation:'middle',
            nameGap: 30,
          },
          grid: {
            left: '12%',
            top: '15%',
            right: '10%',
            bottom: '20%'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['DDPG','MADDPG','MAPPO']
          },
          series: [
            {data:this.dataLine2_2.DDPG,type:'line',name:'DDPG'},
            {data:this.dataLine2_2.MADDPG,type:'line',name:'MADDPG'},
            {data:this.dataLine2_2.MAPPO,type:'line',name:'MAPPO'},
          ]
        };
        this.$nextTick(() => {
          if(document.getElementById('echarts_line2_2')!=null) {
            document.getElementById('echarts_line2_2').removeAttribute("_echarts_instance_");
            this.$echarts.init(document.getElementById('echarts_line2_2')).setOption(option_line2_2);
          }
        });
      },
      showecharts3_1(){
        let option_line3_1 = {
          xAxis: {
            name: 'AN Density',
            type: 'category',
            data: this.dataLine3_1.AN_Density,
            nameLocation:'middle',
            nameGap: 30,
          },
          yAxis: {
            name: 'Average HO Rate And Average VHO Rate',
            type: 'value',
            nameLocation:'middle',
            nameGap: 30,
          },
          grid: {
            left: '12%',
            top: '15%',
            right: '10%',
            bottom: '20%'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['DDPG_HO','MADDPG_HO','MAPPO_HO','DDPG_VHO','MADDPG_VHO','MAPPO_VHO']
          },
          series: [
            {data:this.dataLine3_1.DDPG_HO,type:'line',name:'DDPG_HO'},
            {data:this.dataLine3_1.MADDPG_HO,type:'line',name:'MADDPG_HO'},
            {data:this.dataLine3_1.MAPPO_HO,type:'line',name:'MAPPO_HO'},
            {data:this.dataLine3_1.DDPG_VHO,type:'line',name:'DDPG_VHO'},
            {data:this.dataLine3_1.MADDPG_VHO,type:'line',name:'MADDPG_VHO'},
            {data:this.dataLine3_1.MAPPO_VHO,type:'line',name:'MAPPO_VHO'},
          ]
        };
        this.$nextTick(() => {
          if(document.getElementById('echarts_line3_1')!=null) {
            document.getElementById('echarts_line3_1').removeAttribute("_echarts_instance_");
            this.$echarts.init(document.getElementById('echarts_line3_1')).setOption(option_line3_1);
          }
        });
      },
      showecharts3_2(){
        let option_line3_2 = {
          xAxis: {
            name: 'AN Density',
            type: 'category',
            data: this.dataLine3_2.AN_Density,
            nameLocation:'middle',
            nameGap: 30,
          },
          yAxis: {
            name: 'Average Block Rate',
            type: 'value',
            nameLocation:'middle',
            nameGap: 30,
          },
          grid: {
            left: '12%',
            top: '15%',
            right: '10%',
            bottom: '20%'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['DDPG','MADDPG','MAPPO']
          },
          series: [
            {data:this.dataLine3_2.DDPG,type:'line',name:'DDPG'},
            {data:this.dataLine3_2.MADDPG,type:'line',name:'MADDPG'},
            {data:this.dataLine3_2.MAPPO,type:'line',name:'MAPPO'},
          ]
        };
        this.$nextTick(() => {
          if(document.getElementById('echarts_line3_2')!=null) {
            document.getElementById('echarts_line3_2').removeAttribute("_echarts_instance_");
            this.$echarts.init(document.getElementById('echarts_line3_2')).setOption(option_line3_2);
          }
        });
      },
    }
  }
</script>

<style>
</style>

<style scoped>
  .container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .page {
    position: relative;
    width: 100%;
    height: 100%;
  }
  #page1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .imgBox {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  }
  .imgStarmap {
    position: relative;
    width: 30vw;
    height: 50vh;
    margin-left: 10px;
  }
  .imgStarmap img {
    width: 100%;
    height: 95%;
  }

  .imgStarmap .imgName {
    width: 100%;
    height: 5%;
    text-align: center;
  }
  
  #page2 {
    position: relative;
  }
  #page2 .footer {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .imgBox .item {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }
  .imgBox .item img {
    height: 14.5vh;
    /* width: 80%; */
  }
  .imgBox .item .imgName {
    width: 100%;
    text-align: center;
  }
  #box1 {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  #box2 {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  #box3 {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
  }
  #box3 .item { height: 50vh;}
</style>
