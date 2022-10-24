<template>
	<div>
		<!-- mySlice 是插件中 定义的过滤器 -->
		<h2>学校名称：{{name | mySlice}}</h2>
		<h2>学校地址：{{address}}</h2>
		<button @click="test">点我测试一个hello方法</button>
	</div>
</template>

<script>
	export default {
		name:'School',
		data() {
			return {
				name:'尚硅谷atguigu',
				address:'北京',
			}
		},
		methods: {
			test(){
				// hello 方法 在插件中 给Vue原型上添加一个方法（vm和vc就都能用了）
				this.hello()
			}
		},
	}
</script>