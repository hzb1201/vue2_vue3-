//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件
import plugins from './plugins'
//关闭Vue的生产提示
Vue.config.productionTip = false

// 应用（使用）插件 后面  123  也是传递的 参数  在 install 方法 中 
// 使用 插件 会调用 插件中的 install 方法
Vue.use(plugins,1,2,3)
//创建vm
new Vue({
	el:'#app',
	render: h => h(App)
})