<template>
	<view class="container">

		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">课程</block>
		</cu-custom>

		<view class="video">
<!-- 			<zc-video
				:url="courseUrl">
			</zc-video> -->
			<!-- <video ref="video" autoplay :url="courseUrl" ></video> -->
			<video :title="courseTitle" style="width: 100%;" id="myVideo" :src="courseUrl"
				controls page-gesture :direction="90" page-gesture 
				show-center-play-btn enable-progress-gesture enable-play-gesture
				show-mute-btn
				@ended="videoEnd"
				>
			</video>
		</view>
		
		<!-- tab栏 -->
		<view class="tab">
			<u-tabs 
			    :scrollable="false"
				itemStyle="padding: 0px 7px; height: 82rpx;"
				:activeStyle="{
					color: '#0081FF',
					fontWeight: 'bold',
					transform: 'scale(1.05)'
					}" 
				:list="tabData"
				@click="changeTab"
				:current="tabIndex"
				>
			</u-tabs>
		</view>
		<view class="content">
			
			<!-- 简介 -->
			<swiper @change="onChangeTab" :current="tabIndex" :duration="200">
				<swiper-item>
					<view class="swiper-item">
						<view class="brief-container">
							<view class="title">
								<view class="course-name">
									{{courseData.course_name}}
								</view>
								<view class="course-author">
									{{courseData.user_id ? courseData.user_id[0].nickname : ''}}
								</view>
							</view>
							<view class="briefBox">
								<view class="brief">
									<text>简介：</text>
								</view>
								<text class="text">{{courseData.course_intro}}</text>
							</view>
						</view>
	
					</view>
				</swiper-item>
				
				<!-- 课程 -->
				<swiper-item>
					<view class="swiper-item">					  
						<view class="course-container">
							
							<uni-collapse>
								<uni-collapse-item :title="item.section" v-for="item in courseData.course_video" :id="item.id" >
									<view @click="videoPlay(videoItem)" class="course-item" v-for="videoItem in item.videoSrc" :id="item.name" >
										{{videoItem.name}}
									</view>
								</uni-collapse-item>
							</uni-collapse>
						</view>
					</view>
				</swiper-item>
				
				<!-- 课件 -->
				<swiper-item>
					<view class="swiper-item">
						<view class="document-container">
							<button class="blueBtn cu-btn bg-blue shadow lg" @tap="openDocument()">文档预览</button>
						</view>		
					</view>
				</swiper-item>
				
				<!-- 在线笔记 -->
				<swiper-item>
					<view class="swiper-item">
					</view>
				</swiper-item>
				
				<!-- 评论 -->
				<swiper-item>
					<view class="swiper-item">
						<view class="comment">
							<view  v-if="noComment">
								<u-empty
								        mode="comment"
								        icon="http://cdn.uviewui.com/uview/empty/comment.png"
								>
								</u-empty>
							</view>
							<view class="content">
								<view class="item" v-for="item in commentList">
									<comment-item schema="course" :item="item" @removeEvn="P_deteleEvn" ></comment-item>
								</view>
								
							</view>
						</view>
						
						<comment-frame schema="course" @commentEvn="P_commentEvn" :commentObj="commentObj" ></comment-frame>
					</view>
				</swiper-item>
			</swiper>
		</view>

	</view>
</template>

<script>
	import {giveName, giveAvatar, likeFun} from '../../../utils/tools.js'
	import {store} from "@/uni_modules/uni-id-pages/common/store.js"
	import pageJson from '@/pages.json'
	const db = uniCloud.database()
	export default {
		data() {
			return {
				courseId: undefined, //当前的课程id
				courseData: {}, //课程视频的数据
				tabData: [{
						name: '简介',
					}, {
						name: '课程',
					}, {
						name: '课件',
					},
					{
						name: '在线笔记'
					}, {
						name: '评论'
					},
				],
				tabIndex: 0, //当前下半部分显示的页面索引
				noComment: false, //课程是否有评论数据
				commentObj: {
					course_id:"",
					comment_type: 0
				},
				commentList:[], //评论数据
				courseUrl: "", //当前课程url
				courseTitle: "" //课程标题
			};
		},
		onLoad(e) {
			this.courseId = e.id
			this.commentObj.course_id = e.id
			this.getCourseData()
			this.getCourseComment()
		},
		methods: {
			
			//切换选项卡
			changeTab(e) {
				this.tabIndex = e.index;
			},
			
			//滑动
			onChangeTab(e) {
				//切换当前索引
				this.tabIndex = e.detail.current
			},
			
			
			//获取课程视频数据
			async getCourseData() {
				
				
				const courseTemp = db.collection('course_video').where(`_id=="${this.courseId}"`).getTemp()
				const userTemp = db.collection('uni-id-users').field("_id,username,nickname").getTemp()
				
				
				let res = await db.collection(courseTemp,userTemp).get()
				
				this.courseData = res.result.data[0]
				this.courseUrl = res.result.data[0].course_video[0].videoSrc[0].src
				this.courseTitle = res.result.data[0].course_video[0].videoSrc[0].name
				
			},
			
			//点击课程列表进行播放
			videoPlay(item) {
				this.courseUrl = item.src
				this.courseTitle = item.name
			},
			
			//文档预览
			openDocument() {
				uni.downloadFile({
					url: 'https://mp-b47b22da-6a90-4dde-b937-8ac0d9bec90c.cdn.bspapp.com/cloudstorage/3ee13d9d-bbca-45f6-ac25-f755af6c892e.pdf',
					success: function(res) {
						var filePath = res.tempFilePath;
						uni.openDocument({
							filePath: filePath,
							success: function(res) {
								console.log('打开文档成功');
							}
						});
					}
				})
			},
			
			//获取课程视频评论数据
			async getCourseComment() {
				let commentTemp = db.collection("course_comment").where(`course_id == "${this.courseId}" && comment_type==0`).getTemp()
				let userTemp = db.collection("uni-id-users").field("_id,username,nickname").getTemp()
				
				let res = await db.collection(commentTemp,userTemp).orderBy("comment_date desc").get()
			
					console.log(res);
					//获取一级评论所对应的二级评论的回复量
					let idArr = res.result.data.map(item => {
						return item._id
					})
			
					let replyArr = await db.collection("course_comment").where({
						reply_comment_id:db.command.in(idArr)
					}).groupBy('reply_comment_id')
					.groupField('count(*) as totalReply')
					.get()
					
					console.log(replyArr);
					
			
					res.result.data.forEach(item => {
						 let index = replyArr.result.data.findIndex(find => {
							return item._id == find.reply_comment_id
						})
			
						if(index > -1) item.totalReply = replyArr.result.data[index].totalReply
					})
					
					if(!res.result.data.length) this.noComment = true
					this.commentList = res.result.data
			},
			
			//评论成功的回调,评论无感增加操作
			P_commentEvn(e) {
				if(!this.commentList.length) {
					this.noComment = false
				}
				this.commentList.unshift({
					"user_id":[store.userInfo],
					...e,
					...this.commentObj,
					"comment_date":Date.now()
				})
			},
			//评论删除的回调
			P_deteleEvn(e) {
				let index = this.commentList.findIndex(index => {
					return e == index._id
				})
				this.commentList.splice(index, 1)
			},
			
			//记录点赞量
			likeUpdata() {
			
				//判断用户是否登录，登录才能进行点赞操作
				if(!store.hasLogin) {
					 uni.showModal({
					 	title:"登录才能进行点赞哦，是否进行登录？",
						success: (res) => {
			
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
				 
				 
				 this.artData.isLike ? this.artData.like_count-- : this.artData.like_count++
				 this.artData.isLike = !this.artData.isLike
				 this.likeTime = time
				 
				//收藏操作数据库的方法
				likeFun(this.artId)
			},
			//错误处理
			errFun(e) {
				uni.showToast({
					title:"参数错误",
					icon:'none',
				})
				setTimeout(function() {
					uni.reLaunch({
						url: '/pages/index/index'
					})
				}, 800);
			},
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		.tab {
			background-color: #fff;
			padding: 10rpx 0;
		}
		.content {
			/deep/ uni-swiper {
				height: 100%;
			}
				
				padding: 10px 15px;
				background-color: #FFFFFF;
				margin-top: 20rpx;
				height: calc( 100vh - 636rpx);
				.brief-container {
					.brief {
						font-weight: bold;
						font-size: 32rpx;
						color: #303133;
						margin-bottom: 20rpx;
					}
					.text {
						font-size: 14px;
						color: #666666;
					}
					.title {
						padding: 10rpx 0 40rpx;
						.course-name {
							font-size: 40rpx;
							margin-bottom: 5rpx;
							
						}
						.course-author {
							font-size: 24rpx;
							color: #666666;
						}
					}
				}
				.course-container {
					/deep/ .uni-collapse-item__title-box[data-v-41027c34] {
						padding: 0;
					}
					/deep/ .uni-collapse-item__title-text[data-v-41027c34] {
						font-size: 17px;
					}
						height: calc( 100vh - 317px);
						overflow: auto;
						padding-bottom: 60rpx;
					.course-item {
						padding: 24rpx;
						color: #333333;
						border-bottom: 1px solid #f7f7f7;
						font-size: 28rpx;
					}
				}
				.document-container {
					.blueBtn {
						width: 500rpx;
						margin: 50rpx auto;
						display: block;
						line-height: 80rpx;
					}
				}
				
				

				// .course-container {
				// 	height: calc( 100vh - 317px);
				// 	overflow: auto;
				// 	padding-bottom: 60rpx;
				// 	.course-item {
				// 		margin-top: 20rpx;
				// 		padding: 28rpx 32rpx;
				// 		background-color: #f7f7f7;
				// 		border-radius: 18rpx;
				// 	}
				// }

		}
	}
</style>
