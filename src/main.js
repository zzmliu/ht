import Vue from 'vue'

import App from './component/App.vue'

import vueRouter from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css'
import axios from 'axios'
import api,{domain} from './js/api.js'
import './less/index.less'
Vue.use(ElementUI)
axios.defaults.baseURL=domain;
axios.defaults.withCredentials=true;
Vue.prototype.$http=axios;
Vue.prototype.$api=api;
new Vue({
    el: '#app',
    // 下面使用的箭头函数也是es6语法
    render: createElement => createElement(App),
    router:vueRouter
})