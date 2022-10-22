<template>
  <div>
    <el-container style="overflow:hidden">
      <el-header>
        <el-menu 
          :default-active="this.$route.path" 
          background-color="#545c64"
          text-color="#fff"
          mode="horizontal"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/home/index"><img src="../../assets/school_logo_white.png" alt="" style="height: 50px;margin: 0 40px"></el-menu-item>
          <el-menu-item index="/home/index">首页</el-menu-item>
          <el-menu-item index="/home/simulate">网络部署</el-menu-item>
          <!-- <el-menu-item index="/home/simulate">IRS辅助的5G URLLC无线网络资源调度仿真模块</el-menu-item> -->
          <el-menu-item index="/home/activate">IRS辅助的5G URLLC无线网络资源调度仿真模块</el-menu-item>
          <el-menu-item index="/home/perspective">面向5G无缝衔接的无线网络接入与切换仿真子系统</el-menu-item>
          <el-menu-item index="/home/optimize">系统级性能优化仿真模块</el-menu-item>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-menu>
      </el-header>
      
      <el-container style="z-index: 10" class="container">
        <el-main style="background-color: #fff;padding: 0;">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "HomeVue",
    data () {
      return {
      }
    },
    created() {
    },
    mounted() {
    },
    methods:{
      logout() {
        this.$message({
          message: '退出成功',
          type: 'success'
        });
        this.$router.replace('/login')
      }
    }
  }
</script>

<style>
  .el-menu-item-group__title {
    display: none;
  }
</style>

<style scoped>
  .el-header {
    background-color: #ddd;
    color: #333;
    line-height: 60px;
    padding: 0;
  }
  
  .el-aside {
    color: #333;
  }
  .container {
    height: calc(100vh - 60px);
  }
  /* .el-menu-item-group__title {
    display: none;
  } */
</style>