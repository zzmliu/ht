<template>
    <div>
    <router-view></router-view>
    </div>
  
</template>

<script>

    export default {
 // 这是es6中对象定义方法的语法
        data() {
            return {
                val: 'vue脚手架测试',
                nian: true
            }
        },
 
        // 生命周期函数, vue会自动调用
    //     created() {
    //        this.$http.get(this.$api.logout).then(() => console.log('退出登陆'))
    //    }
    }
</script>

<style scoped>
div{
    height: 100%;
}
</style>