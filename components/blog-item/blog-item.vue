 <template>
 	<view class="logItem">
 		<view class="head">
 			<view class="userInfo">
 				<view class="avatar">
 					<image :src="giveAvatar(item)"></image>
 				</view>
 				<view class="name">
 					{{giveName(item)}}
 				</view>
 				<view class="time">
 					<uni-dateformat :date="item.publish_date" :threshold="[60000,60000 * 60 * 24 * 30]" format="MM-dd hh-mm" >
 					</uni-dateformat>
 				</view>
 			</view>
 			<view class="more" @click="clickMore">
 				<view class="iconfont icon-more">
 				</view>
 			</view>
 		</view>
 
 		<view class="body">
 			<view class="title" @click="toDetail">
 				{{item.title}}
 			</view>
 			<view class="text" @click="toDetail" v-if="item.description">
 				<view class="t">
 					{{item.description}}
 				</view>
 			</view>
 			<view class="picList" v-if="item.picurls.length">
 				<view class="pic" :class="item.picurls.length == 1 ? 'only' : ''" v-for="(pic, index) in item.picurls" >
 					<image @click="clickImage(index)" :src="pic" mode="aspectFill">
 					</image>
 				</view>
 			</view>
 		</view>
 		
 		<view class="info">
 			<view class="box" @click="test">
 				<text class="iconfont icon-browse"></text>
 				<text>{{item.view_count}}</text>
 			</view>
 			<view class="box" @click="toDetail">
 				<text class="iconfont icon-message"></text>
 				<text>{{item.comment_count ? item.comment_count : '评论'}}</text>
 			</view>
 			<view class="box" @click="onIsLike" :class="isLike ? 'active' : ''">
 				<text class="iconfont icon-praise"></text>
 				<text>{{like_count ? like_count : '点赞'}}</text>
 			</view>
 		</view>
 		
 		
 		<u-action-sheet cancelText="取消" :actions="list" :show="showSheet"
 			closeOnClickOverlay
 			closeOnClickAction
 			@select="selectSheet"
 			@close="closeSheet"
 		></u-action-sheet>
 	</view>
 </template>
 
 <script>
 	import {giveName, giveAvatar,likeFun} from '../../utils/tools.js'
 	import {store} from "@/uni_modules/uni-id-pages/common/store.js"
 	import pageJson from '@/pages.json'
 	const db = uniCloud.database()
 	export default {
 		name: "logItem",
 		props: {
 			item: {
 				type: Object,
 				default() {
 					return {}
 				}
 			},
			schema:{
				type: String
			}
 		},
 		data() {
 			return {
 				showSheet: false,
 				list:[
 					{
 						name:"删除",
 						type:"del",
 						color:"#f56c6c",
 						disabled:true
 					}
 				],
 				myItem: this.item,
				isLike: this.item.isLike,
				like_count: this.item.like_count
 			};
 		},
 		onLoad() {
			
 		},
 		methods: {
 			giveName, 
 			giveAvatar,
			
			test() {
				console.log(this.item);
			},
 			
 			//点赞
 			onIsLike() {
 				//判断用户是否登录，登录才能进行点赞操作
 				 if(!store.hasLogin) {
 					 uni.showModal({
 					 	title:"登录才能进行点赞哦，是否进行登录？",
 						success: (res) => {
 							console.log(res);
 							if(res.confirm) {
 								uni.navigateTo({
 									url: '/' + pageJson.uniIdRouter.loginPage
 								})
 							}
 						}
 					 })
 					return 
 				 }
 				 
 				 //防抖
 				 let time = Date.now()
 				 if(time - this.likeTime < 2000) {
 					 uni.showToast({
 					 	title:"点击太频繁了...",
 						icon:'none'
 					 })
 					 return
 				 }
 				 
 				 
 				 this.isLike ?  this.like_count-- :  this.like_count++
 				 this.isLike = ! this.isLike
				 console.log(this.isLike);
 				 this.likeTime = time
 				 
 				//点赞操作数据库的方法
 				likeFun(this.myItem._id)
 			},
 			//点击sheet的取消选项
 			closeSheet() {
 				this.showSheet = false
 			},
 			//点击sheet的任意选项
 			selectSheet(e) {
 				this.showSheet = false
 				console.log(e.type);
 				if(e.type == "del") {
 					this.moreDel()
 				}
 				
 			},
 			//更多选项的删除功能
 			moreDel() {
 				uni.showLoading({
 					title:"加载中..."
 				})
 				db.collection("blog_article").doc(this.item._id).update({
 					delState:true
 				}).then(res => {
 					uni.hideLoading()
 					uni.showToast({
 						title:"删除成功！",
 						icon:'none'
 					})
 					this.$emit("delEvent")
 				}).catch(err => {
 					console.log(err);
 					uni.hideLoading()
 				})
 			},
 			//点击更多按钮
 			clickMore() {
 				let uid = uniCloud.getCurrentUserInfo().uid
 				if(uid == this.item.user_id[0]._id || this.uniIDHasRole('admin') || this.uniIDHasRole('webmaster')) {
 					this.list.forEach(item => {
 						item.disabled = false
 					})
 				}
 				this.showSheet = true
 			},
 			//跳转至detail页面
 			toDetail() {
 				uni.navigateTo({
 					url:`/pages/community/detail/detail?id=${this.item._id}&schema=${this.schema}`
 				})
 			},
 			//点击预览图片
 			clickImage(index) {
 				uni.previewImage({
 					urls: this.item.picurls,
 					current: index
 				})
 			}
 		}
 	}
 </script>
 
 <style lang="scss" scoped>
 	.logItem {
 		.head {
 			display: flex;
 			align-items: center;
 			justify-content: space-between;
 			font-size: 30rpx;
 			.userInfo {
 				display: flex;
 				align-items: center;
 				.avatar {
 					width: 40rpx;
 					height: 40rpx;
 					border-radius: 50%;
 					overflow: hidden;
 					image {
 						width: 100%;
 						height: 100%;
 						
 					}
 				}
 				.name {
 					color: #222;
 					margin-left: 10rpx;
 				}
 				.time {
 					color: #888;
 					font-size: 22rpx;
 					margin-left: 20rpx;
 				}
 
 			}
 			.more {
 				padding: 5rpx;
 				.iconfont {
 					color: #888;
 					font-size: 50rpx;	
 				}
 			}
 		}
 		.body {
 			padding: 15rpx 0 20rpx;
 			.title {
 				font-size: 44rpx;
 				color: #000;
 				font-weight: 600;
 				text-align: justify;
 			}
 			.text {
 				font-size: 30rpx;
 				padding: 10rpx 0;
 				text-align: justify;
 				color: #888;
 				.t {
 					text-overflow: -o-ellipsis-lastline;
 					overflow: hidden;				
 					text-overflow: ellipsis;		
 					display: -webkit-box;			
 					-webkit-line-clamp: 2;			
 					line-clamp: 2;					
 					-webkit-box-orient: vertical;	
 				}
 			}
 			.picList {
 				display: flex;
 				padding-top: 20rpx;
 				.pic {
 					width: 225rpx;
 					height: 225rpx;
 					margin-right: 8rpx;
 					overflow: hidden;
 					image {
 						width: 100%;
 						height: 100%;
 					}
 				&:first-child{
 					border-radius: 20rpx 0 0 20rpx;					
 				}
 				&:last-child{
 					border-radius: 0 20rpx 20rpx 0;					
 				}
 				&.only{
 					border-radius: 20rpx;
 				}
 				}
 
 			}
 		}
 		
 		.info {
 			display: flex;
 			justify-content: space-around;
 			align-items: center;
 			.box {
 				display: flex;
 				justify-content: center;
 				align-items: center;
 				padding: 15rpx 0 5rpx;
 				flex: 1;
 				.iconfont {
 					font-size: 40rpx;
 					padding-right: 10rpx;
 				}
 			}
 			.box.active {
 				color: #0199fe;
 			}
 		}
 	}
 </style>
 