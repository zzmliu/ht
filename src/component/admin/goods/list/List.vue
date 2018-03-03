<template>
    <div class="main">
       <div class="questionarticlelist-tap"> <router-link to="/index">知识内容&nbsp/&nbsp</router-link><router-link to="/index">首页&nbsp/&nbsp</router-link><router-link to="/index">内容管理</router-link></div>
       <div class="questionarticlelist-active">
           <el-button type="primary" icon="el-icon-circle-plus-outline">新增</el-button>
           <el-button type="primary" icon="el-icon-check">全选</el-button>
           <el-button type="primary" icon="el-icon-delete" @click="del">删除</el-button>
            <el-input
            placeholder="请输入搜索内容"
            suffix-icon="el-icon-search"
            size="mini"
            v-model="apiQuery.searchvalue"
            @blur="search"
            class="inputButton">
            </el-input>
       </div>
     <el-table
    :data="tableData"
    border
    style="width: 100%" 
    size="mini"
    @selection-change="change"
    class="questionarticlelist-table">
       <el-table-column type="selection" width="55"></el-table-column>
    <el-table-column
      prop="title"
      label="标题"
      width="480">
    </el-table-column>
    <el-table-column
      prop="categoryname"
      label="所属类别"
      width="70">
    </el-table-column>
    <el-table-column
      prop="stock_quantity"
      label="库存"
      width="80">
    </el-table-column>
    <el-table-column
      prop="market_price"
      label="市场价"
      width="80">
    </el-table-column>
    <el-table-column
      prop="sell_price"
      label="销售价"
      width="80">
    </el-table-column>
    <el-table-column
      prop="name"
      label="属性">
    </el-table-column>
    <el-table-column
      label="操作"
      width="80">
      <template slot-scope="scope">
        <router-link style="color: #666;" :to="{ name: 'goodsDetail' }">修改</router-link>
      </template>
    </el-table-column>
  </el-table>
         
    </div>
</template>

<script>
export default {
  data() {
    return {
      delList:"",
      apiQuery: {
                   pageIndex: 1,
                    pageSize: 10,
                   searchvalue: ''
                },
      tableData: [
        {
          title: "萌萌学员问题",
          lei: "JavaScript基础",
          name: "2017-09-12/admin"
        }
      ]
    };
  },
  methods: {
    change(selection){
         this.delList=selection.map((v)=>v.id)
      },
    del(){

        this.$http.get(this.$api.gsDel+this.delList).then((res)=>{
          if(res.data.status == 0) {
                        this.getGoodsData();
                   }
        })
    },
    search() {
                this.getGoodsData();
            },
    // 获取商品列表数据
    getGoodsData() {
      // 这个接口需要pageIndex指定页, pageSize指定每页数量, searchvalue用于商品搜索
      this.$http
        .get(this.$api.gsList + "?pageIndex="+this.apiQuery.pageIndex+"&pageSize="+this.apiQuery.pageSize+"&searchvalue="+this.apiQuery.searchvalue)
        .then(res => {
          if (res.data.status == 0) {
            this.tableData = res.data.message; // 把请求回来的数据覆盖原data数量, 表格就会自动刷新
          }
        });
    }
  },
  // 页面一上来就自动调用接口获取表格数据进行展示
  created() {
    this.getGoodsData();
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
    .inputButton {
      width: 150px;
      margin-left: 666px;
    }
  }
  .questionarticlelist-table {
  }
}
</style>