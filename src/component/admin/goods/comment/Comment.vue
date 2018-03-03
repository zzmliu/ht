<template>
    <div class="main">
       <div class="questionarticlelist-tap"> <router-link to="/index">知识内容&nbsp/&nbsp</router-link><router-link to="/index">首页&nbsp/&nbsp</router-link><router-link to="/index">内容管理</router-link></div>
       <div class="questionarticlelist-active">
           <el-button type="primary" icon="el-icon-circle-plus-outline">新增</el-button>
           <el-button type="primary" icon="el-icon-check">全选</el-button>
           <el-button type="primary" icon="el-icon-delete">删除</el-button>
            <el-input
            placeholder="请输入搜索内容"
            suffix-icon="el-icon-search"
            size="mini"
            class="inputButton">
            </el-input>
       </div>
     <el-table
    :data="tableData"
    border
    style="width: 100%" 
    size="mini"
    class="questionarticlelist-table">
     <el-table-column
      prop="date"
      width="55">
    </el-table-column>    
    <el-table-column
      prop="title"
      label="标题"
      width="495">
    </el-table-column>
    <el-table-column
      prop="lei"
      label="所属类别"
      width="152">
    </el-table-column>
    <el-table-column
      prop="name"
      label="发布时间/人"
      width="192">
    </el-table-column>
    <el-table-column
      label="操作">
    </el-table-column>
  </el-table>
         
    </div>
</template>

<script>
export default {
    data(){
        return{
            tableData: [{
          title: '萌萌学员问题',
          lei: 'JavaScript基础',
          name: '2017-09-12/admin'
        }]
        }
    }
};
</script>

<style scoped lang="less">
.main {
  position: relative;
  height: 100%;
  .questionarticlelist-tap {
    padding-top: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid #eee;
    a {
      color: #48576a;
      font-size: 14px;
    }
    a:hover {
      color: skyblue;
    }
  }
  .questionarticlelist-active {
    height: 41px;
    padding: 10px;
    margin-top: 15px;
    border: 1px solid #eee;
    border-radius: 10px;
    button {
      padding: 0px;
      margin-top: 5px;
      background-color: #fff;
      color: black;
      border: 1px solid #eee;
      width: 61px;
      height: 28px;
      font-size: 12px;
      span {
        text-align: center;
      }
    }
    button:hover {
      background-color: skyblue;
    }
    .inputButton{
        width: 150px;
        margin-left: 666px;
    }
  }
  .questionarticlelist-table{

  }
}
</style>