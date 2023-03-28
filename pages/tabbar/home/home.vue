<template>
	<view>
		<u-button >默认按钮</u-button>
		<u-button type="primary">主要按钮</u-button>
		<u-button type="success">成功按钮</u-button>
		<u-button type="info">信息按钮</u-button>
		<u-button type="warning">警告按钮</u-button>
		<u-button type="error">危险按钮</u-button>
		
		<!-- //底部tabbar -->
		<tabbar :current="tabBerLists.length - 1" :tabBarList="tabBerLists" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabBerLists: [], //tabbar数据
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
