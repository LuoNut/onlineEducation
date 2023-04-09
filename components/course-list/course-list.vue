<template>
	<view class="container" @click="toVideoPlay">
		<view class="content" v-for="(item, index) in 8" id="index">
			<view class="image">
				<image src="../../static/demo/cover/1.png" mode="aspectFill"></image>
				<view class="type">
					图文
				</view>
			</view>
			<view class="title">
				<view class="text">
					1111111111111111111111111111111111111111111111111111111111111111111111111111
				</view>
				<view class="info">
					<text class="name">李老师</text>
					<text class="date">2022-1-1</text>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "course-list",
		data() {
			return {

			};
		},
		methods: {
			toVideoPlay() {
				uni.navigateTo({
					url:'/pages/course-study/course-videoplay/course-videoplay'
				})
			}
		}
	}
</script>

<style lang="scss">
	.container {
		.content {
			display: flex;
			justify-content: space-between;
			padding: 10rpx 20rpx 20rpx;
			margin-top: 10rpx;
			background-color: #fff;
			.image {
				position: relative;
				width: 300rpx;
				height: 170rpx;
				margin-right: 20rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.title {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				padding-right: 30rpx;
				.text {
					font-size: 36rpx;
					line-height: 46rpx;
					text-align: justify;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					word-break: break-all;
				}
				.info {
					padding-bottom: 10rpx;
					.name {
						font-size: 25rpx;
							padding-right: 20rpx;
					}
					.date {
						font-size: 25rpx;
						color: #999;
					}
				}
			}
			.image .type {
				position: absolute;
				font-size: 28rpx;
				right: 10rpx;
				bottom: 20rpx;
				background-color: rgba(0, 0, 0, 0.4);
				padding: 0 10rpx;
				color: #fff;
			}
		}
		
	}
</style>
