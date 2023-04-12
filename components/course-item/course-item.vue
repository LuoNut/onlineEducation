<template>
	<view class="container" @click="toVideoPlay">
		<view class="image">
			<image :src="courseData.courseCover" mode="aspectFill"></image>
		</view>
		<view class="title">
			<text class="text">{{courseData.course_name}}</text>
			<text class="name">{{courseData.user_id[0].nickname}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"course-item",
		props: {
			courseData: {
				type: Object
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			toVideoPlay() {
				uni.navigateTo({
					url:`/pages/course-study/course-videoplay/course-videoplay?id=${this.courseData._id}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped >
	.container {
		display: inline-block;
		margin: 10rpx 0 20rpx 20rpx;
		box-shadow: 4rpx 4rpx 6rpx rgba(26, 26, 26, 0.2);
		border-radius: 10rpx;
		padding: 10rpx;
		background-color: #fff;
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
	}
</style>