<template>
		<view class="u-search-box">
			<view class="u-search-inner">
				<u-icon name="search" color="#909399" :size="28"></u-icon>
				<text class="u-search-text">搜索您想学习的技术栈</text>
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
	.u-search-box {
		padding: 18rpx 30rpx;
	}
	
	.u-search-inner {
		background-color: rgb(234, 234, 234);
		border-radius: 100rpx;
		display: flex;
		align-items: center;
		padding: 10rpx 16rpx;
	}
	
	.u-search-text {
		font-size: 26rpx;
		color: $u-tips-color;
		margin-left: 10rpx;
	}
</style>