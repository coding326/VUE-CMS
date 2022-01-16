//项目的JS打包入口文件
//1导入vue
import Vue from 'vue'
//导入根组件
import App from './components/app.vue'


//创建vue实例
const vm = new Vue({
     el:'#app',
     render:c=>c(App)
})



