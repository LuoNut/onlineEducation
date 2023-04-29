<template>
	<view class="user">
		
		<cu-custom bgColor="bg-gradual-blue">
			<block slot="content">我的</block>
		</cu-custom>
		
		<view class="top">
			<view class="group" @click="toUserInfo">
				<view class="userinfo">
					<view class="pic">
						<image v-if="hasLogin&&userInfo.avatar_file&&userInfo.avatar_file.url"
							:src="userInfo.avatar_file.url" mode="aspectFill">
						</image>
						<image src="../../../static/images/user-default.jpg" mode="aspectFill"></image>
					</view>
					<view class="text" v-if="hasLogin">
						<view class="nickname">
							{{userInfo.nickname||userInfo.username||userInfo.moblie}}
						</view>
						<!-- <view class="year">
							<uni-dateformat :date="userInfo.register_date" :threshold="[3600,99*365*24*60*60*1000]"></uni-dateformat>
							注册
						</view> -->
					</view>
					<view class="text" v-else>
						<view class="nickname">
							点击登录
						</view>
					</view>
				</view>

				<view class="more">
					<text class="iconfont icon-enter"></text>
				</view>
			</view>
			<view class="bg">
				<image v-if="hasLogin&&userInfo.avatar_file&&userInfo.avatar_file.url" :src="userInfo.avatar_file.url"
					mode="aspectFill"></image>
				<image src="../../../static/images/user-default.jpg" mode="aspectFill"></image>
			</view>
		</view>

		<view class="main">
			<view class="info">
				<view class="item">
					<text>{{total.likeNum}}</text>获赞
				</view>
				<view class="item">
					<!-- <text>11</text>评论 -->
				</view>
				<view class="item">
					<text>{{total.artNum}}</text>发文
				</view>
			</view>

			<view class="list">
				<view class="group">
					<view class="item" @click="toMyArticle">
						<view class="left"><text class="iconfont icon-tianxie"></text><text class="text">我的帖子</text>
						</view>
						<view class="right"><text class="iconfont icon-enter"></text></view>
					</view>
					<view class="item" @click="toViewHistory">
						<view class="left"><text class="iconfont icon-lishijilu"></text><text class="text">观看历史</text>
						</view>
						<view class="right"><text class="iconfont icon-enter"></text></view>
					</view>
					<view class="item" @click="toCourseLike" >
						<view class="left"><text class="iconfont icon-shoucang1"></text><text class="text">我的收藏</text>
						</view>
						<view class="right"><text class="iconfont icon-enter"></text></view>
					</view>
				</view>

				<view class="group">
					<view class="item">
						<view class="left"><text class="iconfont icon-shiyongwendang"></text><text
								class="text">关于</text></view>
						<view class="right"><text class="iconfont icon-enter"></text></view>
					</view>
					<view class="item" @click="goFeedback">
						<view class="left"><text class="iconfont icon-yijianfankui"></text><text
								class="text">意见反馈</text></view>
						<view class="right"><text class="iconfont icon-enter"></text></view>
					</view>
				</view>

				<view class="group">
					<view class="item" @click="logout">
						<view class="left"><text class="iconfont icon-tuichudenglu"></text><text
								class="text">退出登录</text></view>
						<view class="right"><text class="iconfont icon-enter"></text></view>
					</view>
				</view>
			</view>
		</view>

		<!-- 底部tabbar -->
		<tabbar :current="3" :tabBarList="tabBerLists" />

	</view>
</template>

<script>
	import {
		store,
		mutations
	} from "@/uni_modules/uni-id-pages/common/store.js"
	const db = uniCloud.database()
	export default {
		data() {
			return {
				tabBerLists: [], //tabbar数据
				total: {
					artNum: 0,
					likeNum: 0
				}
			}
		},
		computed: {
			userInfo() {
				return store.userInfo
			},
			hasLogin() {
				return store.hasLogin
			}
		},
		onLoad() {
			// 影藏原生的tabbar,有自定义tabbar的页面都要写一遍
			uni.hideTabBar()

			//获取发文，评论，点赞数量详情
			// this.getTotal()	
		},
		onShow() {
			this.tabBerLists = uni.getStorageSync('tabBarList') // 自定义的tabbar赋值
		},
		methods: {
			//获取发文，评论，点赞数量详情
			async getTotal() {
				if (!this.hasLogin) return
				let artNum = await db.collection("blog_article").where("user_id==$cloudEnv_uid").count()
				let likeNum = await db.collection("blog_article").where("user_id==$cloudEnv_uid")
					.groupBy("user_id")
					.groupField('sum(like_count) as detal')
					.get()
				this.total.artNum = artNum.result.total
				this.total.likeNum = likeNum.result.data[0]?.detal
			},

			//跳转到我的长文页面
			toMyArticle() {
				if (this.isLoginPage()) return
				uni.navigateTo({
					url: '/pages/home/blog_article/list'
				})
			},
			
			toViewHistory() {
				if (this.isLoginPage()) return
				uni.navigateTo({
					url: '/pages/home/view_history/view_history'
				})
			},
			
			//跳转到我的课程收藏页面
			toCourseLike() {
				if (this.isLoginPage()) return
				uni.navigateTo({
					url: '/pages/home/course_like/course_like'
				})
			},

			//跳转到个人用户信息界面
			toUserInfo() {
				if (this.hasLogin) {
					uni.navigateTo({
						url: '/uni_modules/uni-id-pages/pages/userinfo/userinfo'
					})
				} else {
					uni.navigateTo({
						url: '/uni_modules/uni-id-pages/pages/login/login-withpwd?uniIdRedirecyUrl'
					})

				}

			},
			logout() {
				if (this.isLoginPage()) return
				uni.showModal({
					title: "是否确认退出登录",
					success: (e) => {
						if (e.confirm) {
							mutations.logout()
						}

					}
				})
			},
			//判断是否未登录 true未登录 false已登录
			isLoginPage() {
				if (!this.hasLogin) {
					uni.showToast({
						title: "未登录",
						icon: "none"
					})
					return true
				}
				return false
			}


		}
	}
</script>

<style lang="scss" scoped>
	.user {

		.top {
			height: 300rpx;
			background: #bbb;
			padding: 0 30rpx;
			padding-top: var(--status-bar-height);
			position: relative;
			display: flex;
			align-items: center;

			.group {
				position: relative;
				z-index: 10;
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
				color: #fff;

				.userinfo {
					display: flex;
					width: 100%;
					align-items: center;

					.pic {
						width: 120rpx;
						height: 120rpx;
						border-radius: 50%;
						overflow: hidden;
						border: 2px solid #fff;

						image {
							width: 100%;
							height: 100%;
						}
					}

					.text {
						padding-left: 20rpx;

						.nickname {
							font-size: 44rpx;
							font-weight: 600;
						}

						.year {
							font-size: 26rpx;
							opacity: 0.6;
							padding-top: 5rpx;
						}
					}
				}

				.more {
					.iconfont {
						font-size: 40rpx;
					}
				}

			}

			.bg {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				overflow: hidden;

				image {
					width: 100%;
					height: 100%;
					filter: blur(20px);
					transform: scale(2);
					opacity: 0.5;
				}
			}
		}

		.main {
			width: 100%;
			min-height: 200rpx;
			background: #fff;
			border-radius: 30rpx;
			transform: translateY(-30rpx);
			padding: 30rpx 0;

			.info {
				padding: 10rpx 30rpx;
				display: flex;
				font-size: 30rpx;

				.item {
					padding-right: 20rpx;
					color: #888;

					text {
						font-weight: 600;
						color: #333;
					}
				}
			}

			.list {
				.group {
					padding: 15rpx 30rpx;
					border-bottom: 15rpx solid #f4f4f4;

					.item {
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding: 25rpx 0;
						font-size: 36rpx;
						color: #555;
						border-bottom: 1rpx solid #f8f8f8;

						.left {
							display: flex;
							align-items: center;

							.iconfont {
								font-size: 38rpx;
								margin-right: 10rpx;
							}
						}

						.right {
							.iconfont {
								font-size: 26rpx;
							}
						}
					}

					.item:last-child {
						border: none;
					}
				}

				.group:last-child {
					border: none;
				}
			}
		}

	}
</style>