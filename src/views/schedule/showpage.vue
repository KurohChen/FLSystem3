<template>
  <div class="container" v-loading="loading">
    <div class="page" id="page1" v-show="state!=3">
      <el-button type="primary" v-show="state==0" @click="start">开始仿真</el-button>
      <span v-show="state==1">正在仿真中，请等待...</span>
      <el-button type="success" v-show="state==2" @click="showdetail">仿真回放</el-button>
    </div>
    <div class="page" id="page2" v-show="state==3">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="信号发送" name="1">
          <div class="imgBox" id="box1">
            <div class="item">
              <img src="../../assets/imgs/1_1.png" alt="">
              <div class="imgName">信号数据图</div>
            </div>
            <div class="item">
              <img src="../../assets/imgs/1_2.png" alt="">
              <div class="imgName">信道模拟噪声频域图</div>
            </div>
            <div class="item">
              <img src="../../assets/imgs/1_3.png" alt="">
              <div class="imgName">连续发送信号拆分处理图</div>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="信号接收" name="2">
          <div class="imgBox" id="box2">
            <div class="item">
              <el-row :gutter="24">
                <el-col :span="12"><img src="../../assets/imgs/2_1.png" alt=""></el-col>
                <el-col :span="12"><img src="../../assets/imgs/2_2.png" alt=""></el-col>
              </el-row>
              <div class="imgName">模拟生成信号与解构后信号展示效果图 </div>
            </div>
            <div class="item">
              <img src="../../assets/imgs/2_3.png" alt="">
              <div class="imgName">IRS辅助与未采用时的用户残差功率比展示效果图</div>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="算法对比" name="3">
          <div class="imgBox" id="box3">
            <div class="item">
              <img src="../../assets/imgs/3_1.png" alt="">
              <div class="imgName">不同活跃用户下各算法用户上行平均功率值</div>
            </div>
            <div class="item">
              <img src="../../assets/imgs/3_2.png" alt="">
              <div class="imgName">不同IRS反射单元数下各算法用户上行平均功率值</div>
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
      showdetail() {
        this.state = 3;
      }
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
  #box3 .item img { height: 40vh;}
</style>
