<template>
    <div >
<el-container class="zhuti">
  <el-header class="zhuti-header">
      <app-header></app-header>
      </el-header>
  <el-container>
    <el-aside width="160px">
        <app-aside></app-aside>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
    </div>
</template>

<script>
 import Header from './subcom/Header.vue';
 import Aside from './subcom/Aside.vue';
  export default {       // 注册子组件
       components: {
            appHeader: Header,
            appAside: Aside
        }
        }
</script>

<style scoped>
  .zhuti {
      height: 100%;
  }
  .zhuti-header{
       height:37px ! important;
         border-bottom: 1px solid #eee;

  }
  .el-aside {
    background-color: #267cb7;
    color: #333;
    /* text-align: center; */
  }
  
  .el-main {
    /* text-align: center; */
    padding: 10px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
  }
  
  .el-container:nth-child(7) .el-aside {
  }
</style>