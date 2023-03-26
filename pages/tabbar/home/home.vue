<template>
	<view>
		
		
		<!-- //底部tabbar -->
		<tabbar :current="2" :tabBarList="tabBerLists" />
	</view>
</template>

<script>
	//引入tabbar组件
	import tabBar from '@/components/tabbar/tabbar.vue'
	export default {
		components: {
			tabBar
		},
		data() {
			return {
				
			}
		},
		onLoad() {
			// 影藏原生的tabbar,有自定义tabbar的页面都要写一遍
			uni.hideTabBar()
		},
		onShow() {
			this.tabBerLists = uni.getStorageSync('tabBarList') // 自定义的tabbar赋值
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
