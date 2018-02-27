//路由配置
import Vue from 'vue'
import VueRouter from 'vue-router' //这个基于路由的插件
import Login from '../component/login/Login.vue'
import Register from '../component/register/Register.vue'
Vue.use(VueRouter)

//导出路由实例
 export default new VueRouter({
    routes:[
        {name:'login',path:'/login',component:Login},
        {name:'register',path:'/register',component:Register}
    ]
})
