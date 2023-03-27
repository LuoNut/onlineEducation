<template>
	<view class="container">
		<view class="search">
			<uni-icons type="search" size="20" color="#928e8a"></uni-icons>
			<text>请输入搜索内容</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"search-bar",
		data() {
			return {
			};
		}
	}
</script>

<style lang="scss" scoped >
	.container {
		padding: 20rpx;
		.search {
			background-color: #f5f5f1;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 20rpx 0;
			color: #928e8a;
			border-radius: 8rpx;
			
			text {
				margin-left: 20rpx;
			}
		}
	}
</style>