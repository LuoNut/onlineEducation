<template>
	<view class="container">
		<view class="navItem" v-for="(item, index) in navList" hover-class="navItem-hove" :key="index">
			<image :src="item.src" mode="aspectFill"></image>
			<text>{{item.name}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"icon-nav",
		props: {
			navList: Array
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 20rpx 0;
		display: flex;
		flex-wrap: wrap;
		.navItem {
			width: 25%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 10rpx 0;
			image {
				width: 70rpx;
				height: 70rpx;
				border-radius: 100%;
			}
			text {
				margin-top: 10rpx;
				font-size: 20rpx;
				color: #6c757d;
			}
		}
	}
	.navItem-hove {
		background-color: #f8f9fa;
	}
	
</style>