<template>
    <div class="title">
    <img src="./imgs/title.png" alt="" class="title-img">
     <span class="title-uname">欢迎,{{uname}}!</span>    
     <el-dropdown @command="handleCommand" class="title-button">
    
     <span><i class="el-icon-arrow-down el-icon--right">功能</i></span>
     <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">修改密码</el-dropdown-item>
                <el-dropdown-item command="b">退出登陆</el-dropdown-item>
      </el-dropdown-menu>
      </el-dropdown>
      
     </div>
</template>

<script>
export default {
  data() {
    return {
      uname: localStorage.getItem("uname")
  
      }
  },
   methods: {
            logout() {
                this.$http.get(this.$api.logout).then((res) => {
                    if(res.data.status == 0) {
                        this.$router.push({name: 'login'});
                    }
                });
            },

                  handleCommand(command) {
                if(command == 'b') {
                    this.logout();
                }
            }
        }
};
</script>

<style scoped lang="less">
.title {
  position: relative;
  .title-img {
    left: -20px;
    width: 160px;
    position: absolute;
  }
  .title-uname {
    right: 60px;
    top: 16px;
    position: absolute;
  }
  .title-button {
    right: 17px;
    top: 19px;
    position: absolute;
  }
}
</style>