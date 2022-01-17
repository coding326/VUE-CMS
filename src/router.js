//导入路由
import VueRouter from 'vue-router'
//导入路由组件
import HomeContainer from './components/tabbars/HomeContainer.vue'
import SearchContainer from './components/tabbars/SearchContainer.vue'
import ShopcarContainer from './components/tabbars/ShopcarContainer.vue'
import MemberContainer from './components/tabbars/MemberContainer.vue'
//创建路由
const router=new VueRouter({
     routes:[
         {path:'/',redirect:'/home'}, //如果访问根路径，重定向到首页
          {path:'/home',component:HomeContainer},
          {path:'/search',component:SearchContainer},
          {path:'/member',component:MemberContainer},
          {path:'/shopcar',component:ShopcarContainer}
     ],
     linkActiveClass:'mui-active'  //手动设置被激活的路由连接的高亮类名
})

//把router 暴露出去
export default router

