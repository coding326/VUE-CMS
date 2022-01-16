<template>
    <div class="app-container">
   <!--这里放一个header-->
        <mt-header fixed title="黑马程序员.Vue项目">

            <span slot="left">
    <mt-button icon="back">返回</mt-button>
  </span>
        </mt-header>
    <h3>这是APP根组件</h3>
 
 <!--tabbar 区域-->

    <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</a>
		</nav>
    </div>
</template>

<script>
export default {
    
}
</script>


<!--这里写的样式，要符合SCSS语法，并且样式是当前组件私有的
   ，不会成为全局的样式，也不会应用给子组件-->
 
 <style lang="scss" scoped>
 .app-container{
     padding-top: 40px;
 }
 </style>

