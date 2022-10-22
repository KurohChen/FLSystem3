<template>
  <div>
    <el-container style="z-index: 10" class="container">
      <el-aside>
        <el-menu
          :default-active="this.$route.path" 
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router>
          <el-menu-item index="/home/schedule/settings"><i class="el-icon-menu"></i><span style="font-size: 14px" slot="title">运行配置</span></el-menu-item>
          <el-submenu index=''>
            <span style="font-size: 14px" slot="title"><i class="el-icon-menu"></i>技术验证</span>
            <el-menu-item index="/home/schedule/verify1"><i class="el-icon-menu"></i>上行功率分配</el-menu-item>
            <el-menu-item index="/home/schedule/verify2"><i class="el-icon-menu"></i>多用户检测</el-menu-item>
            <el-menu-item index="/home/schedule/verify3"><i class="el-icon-menu"></i>IRS相位优化</el-menu-item>
          </el-submenu>
          <el-menu-item index="/home/schedule/showpage"><i class="el-icon-menu"></i><span style="font-size: 14px" slot="title">性能展示</span></el-menu-item>
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