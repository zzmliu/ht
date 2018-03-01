//路由配置
import Vue from 'vue'
import VueRouter from 'vue-router' //这个基于路由的插件
import Login from '../component/login/Login.vue'
import Register from '../component/register/Register.vue'
import Admin from '../component/admin/Admin.vue'
import Shopcart from '../component/admin/shopcart/Shopcart.vue'
Vue.use(VueRouter)
const shopcart = [
        { name: 'shopcart', path: 'shopcart', component: Shopcart } // 子路由path不加/自动拼接父路由path
    ];
//导出路由实例
 export default new VueRouter({
    routes: [
                // 登陆
                { name: 'login', path: '/login', component: Login },
                { name: 'register', path: '/register', component: Register },
        
                // 后台管理
                { name: 'admin', path: '/admin', component: Admin, children: [...shopcart] },
             ]
})
