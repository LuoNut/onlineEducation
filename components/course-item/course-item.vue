<template>
	<view class="container">
		<view class="image">
			<image src="../../static/demo/cover/1.png" mode="aspectFill"></image>
			<view class="type">
				图文
			</view>
		</view>
		<view class="title">
			<text class="text">uni-app实战开发发发发发发发发发发发发发</text>
			<text class="name">李老师</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"course-item",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped >
	.container {
		display: inline-block;
		margin-left: 20rpx;
		box-shadow: 4rpx 4rpx 6rpx rgba(26, 26, 26, 0.2);
		border-radius: 10rpx;
		padding: 10rpx;
		margin-bottom: 20rpx;
		.image {
			position: relative;
			image {
				width: 340rpx;
				height: 180rpx;
				border-radius: 8rpx;
			}
		}
		.title {
			width: 340rpx;
			display: flex;
			flex-direction: column;
			.text {				    
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
			}
			.name {
				font-size: 25rpx;
			}	
		}
		.image view {
			position: absolute;
			right: 10rpx;
			bottom: 20rpx;
			background-color: rgba(0, 0, 0, 0.4);
			padding: 0 10rpx;
			color: #fff;
		}
	}
</style>