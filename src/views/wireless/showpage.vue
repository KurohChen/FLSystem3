<template>
  <div class="container" v-loading="loading">
    <div class="page" id="page1" v-show="state!=3">
      <el-button type="primary" v-show="state==0" @click="start">开始仿真</el-button>
      <span v-show="state==1">正在仿真中，请等待...</span>
      <el-button type="success" v-show="state==2" @click="showdetail">仿真回放</el-button>
    </div>
    <div class="page" id="page2" v-show="state==3">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="用户速度变化" name="1">
          <div class="imgBox" id="box3">
            <div class="item">
              <img src="../../assets/imgs/3_1.png" alt="">
              <div class="imgName">切换概率图</div>
            </div>
            <div class="item">
              <img src="../../assets/imgs/3_2.png" alt="">
              <div class="imgName">吞吐量图</div>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="用户个数变化" name="2">
          <div class="imgBox" id="box3">
            <div class="item">
              <img src="../../assets/imgs/3_1.png" alt="">
              <div class="imgName">切换概率图</div>
            </div>
            <div class="item">
              <img src="../../assets/imgs/3_2.png" alt="">
              <div class="imgName">吞吐量图</div>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="网络密度变化" name="3">
          <div class="imgBox" id="box3">
            <div class="item">
              <img src="../../assets/imgs/3_1.png" alt="">
              <div class="imgName">切换概率图</div>
            </div>
            <div class="item">
              <img src="../../assets/imgs/3_2.png" alt="">
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
