<template>
  <div>
    <el-container style="z-index: 10" class="container">
      <el-aside>
        <el-menu
          :default-active="this.$route.path" 
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/home/optimize/settings"><i class="el-icon-menu"></i>参数配置</el-menu-item>
          <el-menu-item index="/home/optimize/select"><i class="el-icon-menu"></i>调度策略选择</el-menu-item>
          <el-menu-item index="/home/optimize/simulation"><i class="el-icon-menu"></i>信道模拟</el-menu-item>
          <el-menu-item index="/home/optimize/optimization"><i class="el-icon-menu"></i>性能优化</el-menu-item>
          <!-- <el-menu-item index="/home/optimize/showpage"><i class="el-icon-menu"></i>仿真回放</el-menu-item> -->
          <el-submenu index=''>
            <span style="font-size: 14px" slot="title"><i class="el-icon-menu"></i>仿真回放</span>
            <el-menu-item index="/home/optimize/showpage1"><i class="el-icon-menu"></i>日志及可视化配置</el-menu-item>
            <el-menu-item index="/home/optimize/showpage2"><i class="el-icon-menu"></i>性能可视化</el-menu-item>
            <el-menu-item index="/home/optimize/showpage3"><i class="el-icon-menu"></i>日志跟踪记录</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main style="background-color: #fff;">
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default ({
  name: 'vueLC',
  data() {
    return {

    };
  },
});
</script>
<style scoped>
  .el-menu {
    height: calc(100vh - 60px);
  }
</style>