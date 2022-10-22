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
          <el-menu-item index="/home/optimize/showpage"><i class="el-icon-menu"></i>仿真回放</el-menu-item>
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