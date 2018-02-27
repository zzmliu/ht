<template>
    <div>
        {{ val }}
        <el-progress :percentage="0"></el-progress>
<el-progress :percentage="70"></el-progress>
<el-progress :percentage="100" status="success"></el-progress>
<el-progress :percentage="50" status="exception"></el-progress>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        // 这是es6中对象定义方法的语法
        data() {
            return {
                val: 'vue脚手架测试'
            }
        },
    }
</script>

<style scoped>

</style>