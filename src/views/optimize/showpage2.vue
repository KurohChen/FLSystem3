<template>
  <div class="container" v-loading="loading">
    <div class="page" id="page1" v-show="state!=3">
      <el-button type="primary" v-show="state==0" @click="start">开始仿真</el-button>
      <span v-show="state==1">正在仿真中，请等待...</span>
      <el-button type="success" v-show="state==2" @click="showdetail">仿真回放</el-button>
    </div>
    <div class="page" id="page2" v-show="state==3">
      <el-collapse v-model="activeName" accordion @change="handleChange">
        <el-collapse-item title="平均传输时延" name="1">
          <div class="imgBox" id="box1">
            <div class="item">
              <div id="echarts_line1_1" style="width: 100%; height: 100%"></div>
            </div>
            <div class="item">
              <div id="echarts_line1_2" style="width: 100%; height: 100%"></div>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="时延抖动" name="2">
          <div class="imgBox" id="box2">
            <div class="item">
              <div id="echarts_line2_1" style="width: 100%; height: 100%"></div>
              <!-- <div class="imgName">模拟生成信号与解构后信号展示效果图 </div> -->
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="块错误率" name="3">
          <div class="imgBox" id="box3">
            <div class="item">
              <div id="echarts_line3_1" style="width: 100%; height: 100%"></div>
            </div>
            <div class="item">
              <div id="echarts_line3_2" style="width: 100%; height: 100%"></div>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="其他性能指标" name="4">
          <div class="imgBox" id="box4">
            <el-row :gutter="24">
              <el-col :span="12">
                <el-row :gutter="12">
                  <el-col :span="12">
                    <div class="item">
                      <div id="echarts_line4_1" style="width: 100%; height: 100%"></div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="item">
                      <div id="echarts_line4_2" style="width: 100%; height: 100%"></div>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="12">
                  <el-col :span="12">
                    <div class="item">
                      <div id="echarts_line4_3" style="width: 100%; height: 100%"></div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="item">
                      <div id="echarts_line4_4" style="width: 100%; height: 100%"></div>
                    </div>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="12">
                <el-row :gutter="12">
                  <el-col :span="12">
                    <div class="item">
                      <div id="echarts_line4_5" style="width: 100%; height: 100%"></div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="item">
                      <div id="echarts_line4_6" style="width: 100%; height: 100%"></div>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="12">
                  <el-col :span="12">
                    <div class="item">
                      <div id="echarts_line4_7" style="width: 100%; height: 100%"></div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="item">
                      <div id="echarts_line4_8" style="width: 100%; height: 100%"></div>
                    </div>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </el-collapse-item>
      </el-collapse>
      <br>
      <div class="footer">
        <el-button type="primary" @click="alive=false" style="margin-bottom: 20px" v-show="alive">结束仿真</el-button>
        <el-button type="primary" @click="state=0" style="margin-bottom: 20px" v-show="!alive">重新仿真</el-button>
        <!-- <el-button type="primary" @click="$router.push('settings')" style="margin-bottom: 20px" v-show="!alive">编辑参数</el-button> -->
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
        dataLine3_1: [],
        dataLine3_2: [],
        dataLine4_1: [],
        dataLine4_2: [],
        dataLine4_3: [],
        dataLine4_4: [],
        dataLine4_5: [],
        dataLine4_6: [],
        dataLine4_7: [],
        dataLine4_8: [],
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
        } else if(val==3) {
          this.showecharts3_1();
          this.showecharts3_2();
        }
        else if(val==4){
          this.showecharts4_1();
          this.showecharts4_2();
          this.showecharts4_3();
          this.showecharts4_4();
          this.showecharts4_5();
          this.showecharts4_6();
          this.showecharts4_7();
          this.showecharts4_8();
        }
      },
      showdetail() {
        this.state = 3;
        this.dataLine1_1 = {
          time: [0,0.01,0.02,0.03,0.04,0.05,0.06,0.07,0.08,0.09,0.1],
          UE_1: [0,0.18306,0.227682834,0.197882371,0.209292732,0.193669508,0.186806865,0.232885742,0.187923177,0.235944577,0.187923177],
          UE_2: [0,0.8024,0.714285714,0.714285714,0.761848958,0.785714286,0.769230769,0.769230769,0.896164773,0.714285714,0.769230769],
          UE_3: [0,0.6548,0.375767988,0.390089844,0.392860243,0.355946181,0.440987319,0.344827586,0.379126603,0.362239583,0.333399523],
          UE_4: [0,0.1897,0.146698785,0.151709889,0.142348031,0.182269217,0.165170821,0.148609888,0.156136304,0.159509517,0.168114968]
      }
        this.showecharts1_1();
        this.dataLine1_2 = {
          time: [0,0.01,0.02,0.03,0.04,0.05,0.06,0.07,0.08,0.09,0.1],
          UE_1: [0,0.081022,0.090942383,0.081000434,0.079041884,0.086222331,0.084874132,0.14035735,0.078955078,0.083986879,0.081892904],
          UE_2: [0,0.088414,0.085389859,0.083866687,0.08702474,0.154080848,0.082567274,0.079702296,0.082670455,0.075895182,0.082717803],
          UE_3: [0,0.08625,0.087231771,0.083318038,0.081303657,0.082493572,0.082855225,0.082237413,0.082096728,0.083906612,0.084855918],
          UE_4: [0,0.091356,0.092640984,0.087918126,0.091653221,0.092179362,0.087285156,0.084235491,0.085833088,0.090020032,0.092896412]
      }
        this.showecharts1_2();
        this.dataLine2_1 = {
          data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268],
          delay: [142.7083333,0.520833333,-0.520833333,-142.7083333,143.2291667,0,-143.2291667,143.2291667,0,-143.2291667,143.2291667,0,-143.2291667,0,143.2291667,0,-143.2291667,143.2291667,0,0,-0.520833333,0,-142.7083333,143.2291667,0,-0.520833333,0.520833333,0,-143.2291667,143.2291667,0,0,-0.520833333,-142.7083333,0,143.2291667,-0.520833333,-142.7083333,143.2291667,0,-143.2291667,0,143.2291667,0,-0.520833333,0.520833333,0,-143.2291667,143.2291667,0,-0.520833333,-142.7083333,143.2291667,0,-143.2291667,0,143.2291667,0,0,-0.520833333,0,0.520833333,0,-143.2291667,143.2291667,0,0,-143.2291667,0,143.2291667,-0.520833333,-142.7083333,143.2291667,-0.520833333,0.520833333,0,0,-143.2291667,143.2291667,0,-0.520833333,0.520833333,0,-0.520833333,-142.7083333,143.2291667,-0.520833333,0.520833333,0,-143.2291667,143.2291667,0,0,-0.520833333,0.520833333,-0.520833333,0.520833333,0,-143.2291667,143.2291667,-0.520833333,0.520833333,0,-143.2291667,0,143.2291667,0,-0.520833333,0.520833333,-0.520833333,-142.7083333,0,143.2291667,0,-0.520833333,0.520833333,0,-143.2291667,143.2291667,0,-0.520833333,-142.7083333,143.2291667,0,-0.520833333,-142.7083333,143.2291667,-0.520833333,0.520833333,0,0,-143.2291667,143.2291667,0,-0.520833333,-142.7083333,143.2291667,0,0,-0.520833333,-142.7083333,143.2291667,0,-0.520833333,-142.7083333,143.2291667,0,-143.2291667,143.2291667,0,0,-143.2291667,143.2291667,-0.520833333,-142.7083333,143.2291667,0,-0.520833333,0.520833333,0,0,-143.2291667,0,143.2291667,0,0,-143.2291667,143.2291667,-0.520833333,0.520833333,0,-0.520833333,0,0.520833333,0,-143.2291667,143.2291667,0,0,-0.520833333,0,0.520833333,-0.520833333,0.520833333,-0.520833333,-142.7083333,143.2291667,0,-143.2291667,143.2291667,0,0,-0.520833333,-142.7083333,0,143.2291667,-0.520833333,0.520833333,-143.2291667,143.2291667,-0.520833333,-142.7083333,143.2291667,-143.2291667,143.2291667,0,0,-0.520833333,-142.7083333,143.2291667,0,-143.2291667,143.2291667,-0.520833333,-142.7083333,143.2291667,-0.520833333,-142.7083333,143.2291667,0,-143.2291667,0,143.2291667,0,-0.520833333,0.520833333,0,-143.2291667,143.2291667,-143.2291667,143.2291667,-0.520833333,-142.7083333,143.2291667,0,-0.520833333,-142.7083333,0,143.2291667,0,-0.520833333,0.520833333,0,-143.2291667,143.2291667,-143.2291667,143.2291667,-0.520833333,-142.7083333,142.7083333,-142.7083333,143.2291667,0,-0.520833333,-142.7083333,143.2291667,0,0,-0.520833333,-142.7083333,0,143.2291667,0,0,-0.520833333,-142.7083333,143.2291667,-0.520833333]
        }
        this.showecharts2_1();
        this.dataLine3_1 = {
          time: [0,0.01,0.02,0.03,0.04,0.05,0.06,0.07,0.08,0.09,0.1],
          UE_1: [0,0,0,0,0,0,0,0,0,0,0],
          UE_2: [0,0,0,0,0.076923077,0.066666667,0,0.071428571,0,0,0],
          UE_3: [0,0.2085,0.1,0.038461538,0.076923077,0,0.041666667,0,0,0.034482759,0],
          UE_4: [0,0.0833,0.107142857,0.076923077,0.051948052,0.183098592,0.073529412,0.065789474,0.067567568,0.128205128,0.14084507]
      }
        this.showecharts3_1();
        this.dataLine3_2 = {
          time: [0,0.01,0.02,0.03,0.04,0.05,0.06,0.07,0.08,0.09,0.1],
          UE_1: [0,0,0,0,0,0,0,0,0,0,0],
          UE_2: [0,0.125,0.055555556,0,0,0,0,0,0,0,0],
          UE_3: [0,0,0.056603774,0,0.010869565,0.0125,0.012345679,0.014925373,0,0,0.011764706],
          UE_4: [0,0.0654,0.147058824,0.049180328,0.041666667,0.081967213,0.017857143,0.014084507,0.018518519,0.057971014,0.1]

      }
        this.showecharts3_2();
        this.dataLine4_1 = {
          time: [0,0.01,0.02,0.03,0.04,0.05,0.06,0.07,0.08,0.09,0.1],
          Cell: [0,59.142,72.6848,69.9336,72.1728,73.9368,69.2488,63.512,67.5936,67.594,75.5824],
          PeakDataRate:[328.482,328.482,328.482,328.482,328.482,328.482,328.482,328.482,328.482,328.482,328.482],
          UE_1: [0,28.401,31.4976,36.0208,35.4776,32.3056,33.9832,29.304,36.0248,29.276,35.304],
          UE_2: [0,5.6408,7.5744,5.9832,7.2576,5.584,5.436,7.9456,7.764,5.4,5.9616],
          UE_3: [0,10.41,11.5272,8.9552,10.288,9.548,8.364,8.3656,7.6824,9.1704,7.6696],
          UE_4: [0,14.69,22.0856,18.9744,19.1496,26.4992,21.4656,17.8968,16.1224,25.268,26.6472]

      }
        this.showecharts4_1();
        this.dataLine4_2 = {
          time: [0,0.01,0.02,0.03,0.04,0.05,0.06,0.07,0.08,0.09,0.1],
          UE_1: [0,40.524,30,34.43181818,34.52651515,33.75,35.64393939,29.0719697,36.76136364,28.75,34.98106061],
          UE_2: [0,6.869,7.045454545,7.518939394,7.064393939,6.856060606,8.125,7.329545455,6.401515152,8.143939394,7.537878788],
          UE_3: [0,12.18,14.0719697,13.65530303,14.18560606,16.78030303,13.90151515,17.31060606,13.69318182,15.98484848,15.20833333],
          UE_4: [0,40.59,48.88257576,44.39393939,44.22348485,42.61363636,42.32954545,46.28787879,43.14393939,47.12121212,42.27272727]
      }
        this.showecharts4_2();
        this.dataLine4_3 = {
          time: [0,0.01,0.02,0.03,0.04,0.05,0.06,0.07,0.08,0.09,0.1],
          Cell: [0,56.223,67.3104,66.0192,69.1376,69.2776,65.576,60.74,65.9288,65.3688,69.6664],
          PeakDataRate:[328.482,328.482,328.482,328.482,328.482,328.482,328.482,328.482,328.482,328.482,328.482],
          UE_1: [0,28.527,31.4976,36.0208,35.4776,32.3056,33.9832,29.304,36.0248,29.276,35.304],
          UE_2: [0,5.7195,7.5744,5.9832,6.4896,5.4296,5.436,7.7432,7.764,5.4,5.9616],
          UE_3: [0,8.2965,10.38,8.3536,9.26,9.548,8.364,7.828,7.6824,9.1704,7.196],
          UE_4: [0,13.681,17.8584,15.6616,17.9104,21.9944,17.7928,15.8648,14.4576,21.5224,21.2048]
      }
        this.showecharts4_3();
        this.dataLine4_4 = {
          time: [0,0.01,0.02,0.03,0.04,0.05,0.06,0.07,0.08,0.09,0.1],
          UE_1: [0,0,0,0,0,0,0,0,0,0,0],
          UE_2: [0,2.2239,3.351,2.293,3.407,2.34,2.665,1.519,2.445,2.821,3.193],
          UE_3: [0,61.04,56.98,71.315,60.177,64.339,63.211,61.599,69.292,65.889,65.54],
          UE_4: [0,10.387,6.749,14.684,10.811,10.761,6.958,14.64,15.063,15.667,7.6]
      }
        this.showecharts4_4();
        this.dataLine4_5 = {
          time: [0,0.01,0.02,0.03,0.04,0.05,0.06,0.07,0.08,0.09,0.1],
          Cell: [0,39.382,91.2976,76.6544,77.2256,72.984,76.704,67.5672,65.9176,68.6296,73.3808],
          PeakDataRate:[328.482,328.482,328.482,328.482,328.482,328.482,328.482,328.482,328.482,328.482,328.482],
          UE_1: [0,7.0056,6.0064,7.0056,8.624,5.6464,8.372,7.0056,8.0192,8.6,8.9808],
          UE_2: [0,3.92,7.8184,7.2192,7.9392,7.984,8.1336,7.5048,7.9216,8.004,8.0808],
          UE_3: [0,12.018,60.7136,39.1784,44.2688,33.4968,42.5472,30.6376,34.1664,27.2088,34.9712],
          UE_4: [0,16.438,16.7592,23.2512,16.3936,25.8568,17.6512,22.4192,15.8104,24.8168,21.348]

      }
        this.showecharts4_5();
        this.dataLine4_6 = {
          time: [0,0.01,0.02,0.03,0.04,0.05,0.06,0.07,0.08,0.09,0.1],
          UE_1: [0,12.55,34.43181818,7.726829268,5.263157895,6.893939394,5.921052632,7.5,8.125,7.5],
          UE_2: [0,7.4916,8.522727273,7.518939394,6.185365854,7.037480064,9.375,6.658692185,6.268939394,8.181818182,6.799242424,],
          UE_3: [0,22.475,65.51136364,13.65530303,57.50243902,49.70095694,49.0719697,42.62360447,53.50378788,42.8030303,49.56439394],
          UE_4: [0,57.534,20.96590909,44.39393939,28.58536585,37.9984051,34.65909091,44.79665072,32.72727273,40.89015152,36.13636364]
      }
        this.showecharts4_6();
        this.dataLine4_7 = {
          time: [0,0.01,0.02,0.03,0.04,0.05,0.06,0.07,0.08,0.09,0.1],
          Cell: [0,37.99,82.8696,75.2424,76.2736,70.5528,75.3856,66.548,65.7024,66.616,68.916],
          PeakDataRate:[328.482,328.482,328.482,328.482,328.482,328.482,328.482,328.482,328.482,328.482,328.482],
          UE_1: [0,7.0056,6.0064,7.0056,8.624,5.6464,8.372,7.0056,8.0192,8.6,8.9808],
          UE_2: [0,3.5832,7.4816,7.2192,7.9392,7.984,8.1336,7.5048,7.9216,8.004,8.0808],
          UE_3: [0,12.018,55.3208,39.1784,44.0024,33.288,41.8304,29.792,34.1664,27.2088,34.2544],
          UE_4: [0,15.382,14.0608,21.8392,15.708,23.6344,17.0496,22.2456,15.5952,22.8032,17.6]

      }
        this.showecharts4_7();
        this.dataLine4_8 = {
          time: [0,0.01,0.02,0.03,0.04,0.05,0.06,0.07,0.08,0.09,0.1],
          UE_1: [0,3.274,4.578,4.578,1.374,1.374,1.374,4.578,4.578,4.578,1.374],
          UE_2: [0,4.466,4.268,4.373,4.315,4.208,3.633,4.125,4.095,3.225,4.505],
          UE_3: [0,40.316,10.984,17.999,10.065,24.386,19.159,13.963,27.305,25.416,38.496],
          UE_4: [0,8.089,8.724,9.004,7.703,9.004,6.09,9.004,7.893,9.004,5.394]

      }
        this.showecharts4_8();
      },
      showecharts1_1(){
        let option_line1_1 = {
          xAxis: {
            name: 'time',
            type: 'category',
            data: this.dataLine1_1.time,
            nameLocation:'middle',
            nameGap: 30,
          },
          yAxis: {
            name: '5G-NR Downlink Delay',
            type: 'value',
            nameLocation:'middle',
            nameGap: 40,
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
            data: ['UE-1','UE-2','UE-3','UE-4']
          },
          series: [
            {data:this.dataLine1_1.UE_1,type:'line',name:'UE-1'},
            {data:this.dataLine1_1.UE_2,type:'line',name:'UE-2'},
            {data:this.dataLine1_1.UE_3,type:'line',name:'UE-3'},
            {data:this.dataLine1_1.UE_4,type:'line',name:'UE-4'},
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
            name: 'time',
            type: 'category',
            data: this.dataLine1_2.time,
            nameLocation:'middle',
            nameGap: 30,
          },
          yAxis: {
            name: '5G-NR Uplink Delay',
            type: 'value',
            nameLocation:'middle',
            nameGap: 40,
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
            data: ['UE-1','UE-2','UE-3','UE-4']
          },
          series: [
            {data:this.dataLine1_2.UE_1,type:'line',name:'UE-1'},
            {data:this.dataLine1_2.UE_2,type:'line',name:'UE-2'},
            {data:this.dataLine1_2.UE_3,type:'line',name:'UE-3'},
            {data:this.dataLine1_2.UE_4,type:'line',name:'UE-4'},
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
            name: 'time',
            type: 'category',
            data: this.dataLine2_1.data,
            nameLocation:'middle',
            nameGap: 30,
          },
          yAxis: {
            name: 'delay',
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
            data: ['delay']
          },
          series: [
            {data:this.dataLine2_1.delay,type:'line',name:'delay'},

          ]
        };
        this.$nextTick(() => {
          if(document.getElementById('echarts_line2_1')!=null) {
            document.getElementById('echarts_line2_1').removeAttribute("_echarts_instance_");
            this.$echarts.init(document.getElementById('echarts_line2_1')).setOption(option_line2_1);
          }
        });
      },
      showecharts3_1(){
        let option_line3_1 = {
          xAxis: {
            name: 'time',
            type: 'category',
            data: this.dataLine3_1.time,
            nameLocation:'middle',
            nameGap: 30,
          },
          yAxis: {
            name: 'Downlink BLER',
            type: 'value',
            nameLocation:'middle',
            nameGap: 40,
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
            data: ['UE-1','UE-2','UE-3','UE-4']
          },
          series: [
            {data:this.dataLine3_1.UE_1,type:'line',name:'UE-1'},
            {data:this.dataLine3_1.UE_2,type:'line',name:'UE-2'},
            {data:this.dataLine3_1.UE_3,type:'line',name:'UE-3'},
            {data:this.dataLine3_1.UE_4,type:'line',name:'UE-4'},
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
            name: 'time',
            type: 'category',
            data: this.dataLine3_2.time,
            nameLocation:'middle',
            nameGap: 30,
          },
          yAxis: {
            name: 'Uplink BLER',
            type: 'value',
            nameLocation:'middle',
            nameGap: 40,
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
            data: ['UE-1','UE-2','UE-3','UE-4']
          },
          series: [
            {data:this.dataLine3_2.UE_1,type:'line',name:'UE-1'},
            {data:this.dataLine3_2.UE_2,type:'line',name:'UE-2'},
            {data:this.dataLine3_2.UE_3,type:'line',name:'UE-3'},
            {data:this.dataLine3_2.UE_4,type:'line',name:'UE-4'},
          ]
        };
        this.$nextTick(() => {
          if(document.getElementById('echarts_line3_2')!=null) {
            document.getElementById('echarts_line3_2').removeAttribute("_echarts_instance_");
            this.$echarts.init(document.getElementById('echarts_line3_2')).setOption(option_line3_2);
          }
        });
      },
      showecharts4_1(){
        let option_line4_1 = {
          xAxis: {
            name: 'time',
            type: 'category',
            data: this.dataLine4_1.time,
            nameLocation:'middle',
            nameGap: 30,
          },
          yAxis: {
            name: 'DL Throughout',
            type: 'value',
            nameLocation:'middle',
            nameGap: 30,
          },
          grid: {
            left: '12%',
            top: '20%',
            right: '10%',
            bottom: '20%'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['Cell','Peak Data Rate','UE-1','UE-2','UE-3','UE-4']
          },
          series: [
            {data:this.dataLine4_1.Cell,type:'line',name:'Cell'},
            {data:this.dataLine4_1.PeakDataRate,type:'line',name:'Peak Data Rate'},
            {data:this.dataLine4_1.UE_1,type:'line',name:'UE-1'},
            {data:this.dataLine4_1.UE_2,type:'line',name:'UE-2'},
            {data:this.dataLine4_1.UE_3,type:'line',name:'UE-3'},
            {data:this.dataLine4_1.UE_4,type:'line',name:'UE-4'},
          ]
        };
        this.$nextTick(() => {
          if(document.getElementById('echarts_line4_1')!=null) {
            document.getElementById('echarts_line4_1').removeAttribute("_echarts_instance_");
            this.$echarts.init(document.getElementById('echarts_line4_1')).setOption(option_line4_1);
          }
        });
      },
      showecharts4_2(){
        let option_line4_2 = {
          xAxis: {
            name: 'time',
            type: 'category',
            data: this.dataLine4_2.time,
            nameLocation:'middle',
            nameGap: 30,
          },
          yAxis: {
            name: 'DL Resource Share',
            type: 'value',
            nameLocation:'middle',
            nameGap: 30,
          },
          grid: {
            left: '12%',
            top: '20%',
            right: '10%',
            bottom: '20%'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['UE-1','UE-2','UE-3','UE-4']
          },
          series: [
            {data:this.dataLine4_2.UE_1,type:'line',name:'UE-1'},
            {data:this.dataLine4_2.UE_2,type:'line',name:'UE-2'},
            {data:this.dataLine4_2.UE_3,type:'line',name:'UE-3'},
            {data:this.dataLine4_2.UE_4,type:'line',name:'UE-4'},
          ]
        };
        this.$nextTick(() => {
          if(document.getElementById('echarts_line4_2')!=null) {
            document.getElementById('echarts_line4_2').removeAttribute("_echarts_instance_");
            this.$echarts.init(document.getElementById('echarts_line4_2')).setOption(option_line4_2);
          }
        });
      },
      showecharts4_3(){
        let option_line4_3 = {
          xAxis: {
            name: 'time',
            type: 'category',
            data: this.dataLine4_3.time,
            nameLocation:'middle',
            nameGap: 30,
          },
          yAxis: {
            name: 'DL Goodput',
            type: 'value',
            nameLocation:'middle',
            nameGap: 30,
          },
          grid: {
            left: '12%',
            top: '20%',
            right: '10%',
            bottom: '20%'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['Cell','Peak Data Rate','UE-1','UE-2','UE-3','UE-4']
          },
          series: [
            {data:this.dataLine4_3.Cell,type:'line',name:'Cell'},
            {data:this.dataLine4_3.PeakDataRate,type:'line',name:'Peak Data Rate'},
            {data:this.dataLine4_3.UE_1,type:'line',name:'UE-1'},
            {data:this.dataLine4_3.UE_2,type:'line',name:'UE-2'},
            {data:this.dataLine4_3.UE_3,type:'line',name:'UE-3'},
            {data:this.dataLine4_3.UE_4,type:'line',name:'UE-4'},
          ]
        };
        this.$nextTick(() => {
          if(document.getElementById('echarts_line4_3')!=null) {
            document.getElementById('echarts_line4_3').removeAttribute("_echarts_instance_");
            this.$echarts.init(document.getElementById('echarts_line4_3')).setOption(option_line4_3);
          }
        });
      },
      showecharts4_4(){
        let option_line4_4 = {
          xAxis: {
            name: 'time',
            type: 'category',
            data: this.dataLine4_4.time,
            nameLocation:'middle',
            nameGap: 30,
          },
          yAxis: {
            name: 'DL Buffer Status',
            type: 'value',
            nameLocation:'middle',
            nameGap: 30,
          },
          grid: {
            left: '12%',
            top: '20%',
            right: '10%',
            bottom: '20%'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['UE-1','UE-2','UE-3','UE-4']
          },
          series: [
            {data:this.dataLine4_4.UE_1,type:'line',name:'UE-1'},
            {data:this.dataLine4_4.UE_2,type:'line',name:'UE-2'},
            {data:this.dataLine4_4.UE_3,type:'line',name:'UE-3'},
            {data:this.dataLine4_4.UE_4,type:'line',name:'UE-4'},
          ]
        };
        this.$nextTick(() => {
          if(document.getElementById('echarts_line4_4')!=null) {
            document.getElementById('echarts_line4_4').removeAttribute("_echarts_instance_");
            this.$echarts.init(document.getElementById('echarts_line4_4')).setOption(option_line4_4);
          }
        });
      },
      showecharts4_5(){
        let option_line4_5 = {
          xAxis: {
            name: 'time',
            type: 'category',
            data: this.dataLine4_5.time,
            nameLocation:'middle',
            nameGap: 30,
          },
          yAxis: {
            name: 'UL Throughout',
            type: 'value',
            nameLocation:'middle',
            nameGap: 30,
          },
          grid: {
            left: '12%',
            top: '20%',
            right: '10%',
            bottom: '20%'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['Cell','Peak Data Rate','UE-1','UE-2','UE-3','UE-4']
          },
          series: [
            {data:this.dataLine4_5.Cell,type:'line',name:'Cell'},
            {data:this.dataLine4_5.PeakDataRate,type:'line',name:'Peak Data Rate'},
            {data:this.dataLine4_5.UE_1,type:'line',name:'UE-1'},
            {data:this.dataLine4_5.UE_2,type:'line',name:'UE-2'},
            {data:this.dataLine4_5.UE_3,type:'line',name:'UE-3'},
            {data:this.dataLine4_5.UE_4,type:'line',name:'UE-4'},
          ]
        };
        this.$nextTick(() => {
          if(document.getElementById('echarts_line4_5')!=null) {
            document.getElementById('echarts_line4_5').removeAttribute("_echarts_instance_");
            this.$echarts.init(document.getElementById('echarts_line4_5')).setOption(option_line4_5);
          }
        });
      },
      showecharts4_6(){
        let option_line4_6 = {
          xAxis: {
            name: 'time',
            type: 'category',
            data: this.dataLine4_6.time,
            nameLocation:'middle',
            nameGap: 30,
          },
          yAxis: {
            name: 'UL Resource Share',
            type: 'value',
            nameLocation:'middle',
            nameGap: 30,
          },
          grid: {
            left: '12%',
            top: '20%',
            right: '10%',
            bottom: '20%'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['UE-1','UE-2','UE-3','UE-4']
          },
          series: [
            {data:this.dataLine4_6.UE_1,type:'line',name:'UE-1'},
            {data:this.dataLine4_6.UE_2,type:'line',name:'UE-2'},
            {data:this.dataLine4_6.UE_3,type:'line',name:'UE-3'},
            {data:this.dataLine4_6.UE_4,type:'line',name:'UE-4'},
          ]
        };
        this.$nextTick(() => {
          if(document.getElementById('echarts_line4_6')!=null) {
            document.getElementById('echarts_line4_6').removeAttribute("_echarts_instance_");
            this.$echarts.init(document.getElementById('echarts_line4_6')).setOption(option_line4_6);
          }
        });
      },
      showecharts4_7(){
        let option_line4_7 = {
          xAxis: {
            name: 'time',
            type: 'category',
            data: this.dataLine4_7.time,
            nameLocation:'middle',
            nameGap: 30,
          },
          yAxis: {
            name: 'UL Goodput',
            type: 'value',
            nameLocation:'middle',
            nameGap: 30,
          },
          grid: {
            left: '12%',
            top: '20%',
            right: '10%',
            bottom: '20%'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['Cell','Peak Data Rate','UE-1','UE-2','UE-3','UE-4']
          },
          series: [
            {data:this.dataLine4_7.Cell,type:'line',name:'Cell'},
            {data:this.dataLine4_7.PeakDataRate,type:'line',name:'Peak Data Rate'},
            {data:this.dataLine4_7.UE_1,type:'line',name:'UE-1'},
            {data:this.dataLine4_7.UE_2,type:'line',name:'UE-2'},
            {data:this.dataLine4_7.UE_3,type:'line',name:'UE-3'},
            {data:this.dataLine4_7.UE_4,type:'line',name:'UE-4'},
          ]
        };
        this.$nextTick(() => {
          if(document.getElementById('echarts_line4_7')!=null) {
            document.getElementById('echarts_line4_7').removeAttribute("_echarts_instance_");
            this.$echarts.init(document.getElementById('echarts_line4_7')).setOption(option_line4_7);
          }
        });
      },
      showecharts4_8(){
        let option_line4_8 = {
          xAxis: {
            name: 'time',
            type: 'category',
            data: this.dataLine4_8.time,
            nameLocation:'middle',
            nameGap: 30,
          },
          yAxis: {
            name: 'UL Buffer Status',
            type: 'value',
            nameLocation:'middle',
            nameGap: 30,
          },
          grid: {
            left: '12%',
            top: '20%',
            right: '10%',
            bottom: '20%'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['UE-1','UE-2','UE-3','UE-4']
          },
          series: [
            {data:this.dataLine4_8.UE_1,type:'line',name:'UE-1'},
            {data:this.dataLine4_8.UE_2,type:'line',name:'UE-2'},
            {data:this.dataLine4_8.UE_3,type:'line',name:'UE-3'},
            {data:this.dataLine4_8.UE_4,type:'line',name:'UE-4'},
          ]
        };
        this.$nextTick(() => {
          if(document.getElementById('echarts_line4_8')!=null) {
            document.getElementById('echarts_line4_8').removeAttribute("_echarts_instance_");
            this.$echarts.init(document.getElementById('echarts_line4_8')).setOption(option_line4_8);
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
  #box4 {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
  }
  #box1 .item { height: 25vh;}
  #box2 .item { height: 50vh;}
  #box3 .item { height: 50vh;}
  #box4 .item { height: 25vh;width: 40vh}
  .item img { height: 40vh;}
</style>
