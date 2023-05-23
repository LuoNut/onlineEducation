<template>
	<view class="article" @click="toDetail(item._id)">
		<view class="item" >
			<view class="pic">
				<image :src="item.avatar.url" mode="aspectFill"></image>
			</view>
			<view class="text">
				<view class="title">
					{{item.title}}
				</view>
				<view class="info">
					<text>{{item.user_id[0].nickname}}</text>
					
						<!-- <uni-dateformat :date="item.publish_date" format="MM-dd" :threshold="[60000, 3600000]" ></uni-dateformat> -->
						<text>{{formatDate(item.publish_date)}}</text>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"inform-item",
		props: {
			item:Object
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
			//跳转至详情页
			toDetail(e) {
				uni.navigateTo({
					url: '/pages/inform/detail/detail?id=' + e
				})
			},
		}
	}
</script>

<style lang="scss" scoped >
	.article {
		padding: 0 15rpx;
		.item {
			display: flex;
			padding: 20rpx 0;
			border-bottom: 1rpx solid #ebebeb;;
			.pic {
				margin-right: 16rpx;
				image {
					width: 260rpx;
					height: 150rpx;
				}
			}
			
			.text {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				padding: 6rpx 0 12rpx;
				.title {
					line-height: 20px;
					font-size: 15px;
					color: #555555;
					text-align: justify;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
	
				.info {
					color: #999999;
				    font-size: 24rpx;
	
					text {
						margin-right: 20rpx;
					}
				}
			}
	
			
		}
	}
</style>
