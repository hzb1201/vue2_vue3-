<template>
	<div>
		<h2>Home组件内容</h2>
		<div>
			<ul class="nav nav-tabs">
				
			<!-- 	
				控制路由跳转时操作浏览器历史记录的模式
				 
				浏览器的历史记录有两种方式，分别为push和replace，push是追加历史记录，raplace是替换当前历史记录。路由跳转的默认方是push。
			-->
				<li>
					<router-link replace class="list-group-item" active-class="active" to="/home/news">News</router-link>
				</li>
				<li>
					<router-link replace class="list-group-item" active-class="active" to="/home/message">Message</router-link>
				</li>
			</ul>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name:'Home',
		/* beforeDestroy() {
			console.log('Home组件即将被销毁了')
		}, */
		/* mounted() {
			console.log('Home组件挂载完毕了',this)
			window.homeRoute = this.$route
			window.homeRouter = this.$router
		},  */
	}
</script>