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
//导入根组件
import App from './components/app.vue'


//创建vue实例
const vm = new Vue({
     el:'#app',
     render:c=>c(App)
})



