//项目的JS打包入口文件
//1导入vue
import Vue from 'vue'
//全局配置MintUI组件库
import MintUI from 'mint-ui'
//导入mint-ui 的样式表
import 'mint-ui/lib/style.css'
//安装MintUI
Vue.use(MintUI)

//导入MUI的样式表(路径)
import "../lib/mui/css/mui.min.css"
//导入MUI扩展样式表(购物车图标用到)
import "../lib/mui/css/icons-extra.css"
//导入路由
import VueRouter from 'vue-router'
//安装vuerouter
Vue.use(VueRouter)
/* 抽离为单独的路由模块
//导入路由组件
import HomeContainer from './components/tabbars/HomeContainer.vue'
import SearchContainer from './components/tabbars/SearchContainer.vue'
import ShopcarContainer from './components/tabbars/ShopcarContainer.vue'
import MemberContainer from './components/tabbars/MemberContainer.vue'
//创建路由
const router=new VueRouter({
     routes:[
          {path:'/home',component:HomeContainer},
          {path:'/search',component:SearchContainer},
          {path:'/member',component:MemberContainer},
          {path:'/shopcar',component:ShopcarContainer}
     ]
})
*/
//导入路由对象
import router from './router'
//导入根组件
import App from './components/app.vue'


//创建vue实例
const vm = new Vue({
     el:'#app',
     render:c=>c(App),
     router  //挂载路由
})





