<template>
	<view class="container" @click="toVideoPlay">
		<view class="image">
			<image :src="courseData.courseCover" mode="aspectFill"></image>
		</view>
		<view class="title">
			<view class="text">
				{{courseData.course_name}}
			</view>
			<view class="info">
				<text class="name">{{courseData.user_id[0].nickname}}</text>
				<text class="date">
					<!-- <uni-dateformat :date="courseData.publish_date" format="yyyy/MM/dd" ></uni-dateformat> -->
					<!-- <uni-dateformat :date="courseData.publish_date" :threshold="[60000,3600000 * 24 * 365]" ></uni-dateformat> -->
					<text>{{formatDate(courseData.publish_date)}}</text>
				</text>
			</view>
		
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
			//时间格式化的功能函数  xx:xx:xx
			formatDate(value) {
			                var date = new Date();
			                date.setTime(value);
			                var month = date.getMonth() + 1;
			                var hours = date.getHours();
			                if (hours < 10)
			                    hours = "0" + hours;
			                var minutes = date.getMinutes();
			                if (minutes < 10)
			                    minutes = "0" + minutes;
			                var time = date.getFullYear() + "-" + month + "-" + date.getDate();
			                return time;
			            },
			
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
				width: 334rpx;
				height: 188rpx;
				border-radius: 8rpx;
			}
		}
		.title {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding-right: 30rpx;
			// margin-top: 14rpx;
			.text {
				// font-size: 36rpx;
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
				// padding-bottom: 10rpx;
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
	}
</style>