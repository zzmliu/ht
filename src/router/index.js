//路由配置
import Vue from 'vue'
import VueRouter from 'vue-router' //这个基于路由的插件
import Login from '../component/login/Login.vue'
import Register from '../component/register/Register.vue'
import Admin from '../component/admin/Admin.vue'
import GoodsList from '../component/admin/goods/list/List.vue'
import GoodsDetail from '../component/admin/goods/detail/Detail.vue'
import GoodsComment from '../component/admin/goods/comment/Comment.vue'
Vue.use(VueRouter)
const goods= [
        { name: 'goodsList', path: 'goods/list', component:GoodsList},
        { name: 'goodsDetail', path: 'goods/detail/:id', component:GoodsDetail},
        { name: 'goodsComment', path: 'goods/comment', component:GoodsComment}
    ];
//导出路由实例
 export default new VueRouter({
    routes: [
                // 登陆
                { name: 'login', path: '/login', component: Login },
                { name: 'register', path: '/register', component: Register },
        
                // 后台管理
                { name: 'admin', path: '/admin', component: Admin, children: [...goods] },
             ]
})
