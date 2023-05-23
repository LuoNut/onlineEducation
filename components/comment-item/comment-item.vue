<template>
	<view>
		<view class="commentItem" @click="toReply">
			<view class="avatar">
				<image :src="giveAvatar(item)" mode="aspectFill"></image>
			</view>
			<view class="wrap">
				<view class="name">
					{{giveName(item)}}
					<text v-show="!showClose" class="iconfont icon-close" @click.stop="onDelete()"></text>
				</view>
				<view class="text">
					{{item.comment_content}}
				</view>
				<view class="info">
					<view class="replyBtn" v-show="!showReply">
						{{item.totalReply ? item.totalReply : "" }}回复
					</view>
					<view class="time">
						<!-- <uni-dateformat :date="item.comment_date" format="yyyy-MM-dd" :threshold="[60000, 3600000]"></uni-dateformat> -->
						<text>{{formatDate(item.comment_date)}}</text>
					</view>
					<view class="address">
						{{item.province}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {giveName, giveAvatar} from '../../utils/tools.js'
	const utilsObj = uniCloud.importObject('utils-obj',{
		customUI: true // 取消自动展示的交互提示界面
	}) 
	const db = uniCloud.database()
	export default {
		name:"commentItem",
		props:{
			toTarget: {
				default:() => {
					return {}
				}
			},
			schema: {
				type: String
			},
			item: {
				type:Object,
				default:() => {
					return {}
				}
			},
			showReply:{
				type: Boolean,
				default: false
			},
			showClose:{
				type:Boolean,
				default:false
			}
		},
		onLoad() {
			
		},
		data() {
			return {
				
			};
		},
		methods: {
			giveName, giveAvatar,
			
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
			
			//跳转到回复评论事件
			toReply() {
				console.log(this.item);
				if(this.showReply) return
				
				console.log(this.toTarget);
				if(this.toTarget) {
					console.log(this.toTarget);
					this.toTarget(this.item)
				}else {
					uni.setStorageSync("replyItem",this.item)
					uni.navigateTo({
						url:"/pages/community/reply/reply"
					})
				}

			},
			//点击删除按钮
			onDelete() {
				//判断是否有删除权限
				let uid = uniCloud.getCurrentUserInfo().uid
				if( this.uniIDHasRole('admin') || this.uniIDHasRole('webmaster')) {
					uni.showModal({
						title:"是否确认删除？",
						success: (res) => {
							if(res.confirm) {
								db.collection(`${this.schema}_comment`).where(`_id == "${this.item._id}"`).remove().then(res => {
									this.$emit("removeEvn",this.item._id)
									uni.showToast({
										title:"删除成功！"
									})
									
									//改变数据库数据
									utilsObj.operation(`${this.schema}_article`,"comment_count",this.item.article_id,-1)
								})
								
							}
						}
					})
					return
				}
				uni.showToast({
					title:"权限不够",
					icon:'error'
				})


			}
		}
	}
</script>

<style lang="scss" scoped>
	.commentItem {
		display: flex;
		.avatar {
			width: 50rpx;
			height: 50rpx;	
			margin: 16rpx 20rpx 20rpx 20rpx;
			image {
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
		}
		.wrap {
			flex: 1;
			.name {
				font-size: 23rpx;
				color: #666;
				padding: 10rpx 0;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.iconfont {
					color: #999;
					padding: 10rpx;
				}
			}
			.text {
				font-size: 30rpx;
				padding-bottom: 15rpx;
			}
			.info {
				display: flex;
				font-size: 22rpx;
				color: #666;
				view {
					margin-right: 25rpx;
					line-height: 41rpx;	
				}
				.replyBtn {
					width: 120rpx;
					background-color: #e4e4e4;
					text-align: center;
					border-radius: 50rpx;
		
				}
				.time {
					font-size: 20rpx;
	
				}
			}
		}
	}
</style>