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
				autoplay
				@timeupdate="timeUpdata"
				:initial-time="lastPlayTime"
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
			<swiper @transition="transition" disable-touch class="swiperClass" @change="onChangeTab" :current="tabIndex" :duration="200">
				
				<swiper-item @touchmove.stop>
					<view class="swiper-item">
						<view class="brief-container">
							<view class="title">
								<view class="course-info">
									<view class="course-name">
										{{courseData.course_name}}
									</view>
									<view class="course-author">
										{{courseData.user_id ? courseData.user_id[0].name : ''}}
									</view>
								</view>
								<view class="collect" @click="onCollect" >
									<uni-fav :checked="courseData.isLike" class="favBtn"  />
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
				<swiper-item @touchmove.stop>
					<view class="swiper-item">					  
						<view class="course-container">
							<uni-collapse>
								<uni-collapse-item :title="item.section" v-for="item in courseData.course_video" :id="item.id" >
									<view @click="videoPlay(videoItem)" :class="videoItem.src == courseUrl ? 'active' : '' " class="course-item" v-for="videoItem in item.videoSrc" :id="item.name" >
										{{videoItem.name}}
									</view>
								</uni-collapse-item>
							</uni-collapse>
						</view>
					</view>
				</swiper-item>
				
				<!-- 课件 -->
				<swiper-item @touchmove.stop>
					<view class="swiper-item">
						<view class="document-container">
							<view v-for="item in courseData.courseware" :id="item.src">
								<button class="blueBtn cu-btn bg-blue shadow lg" @tap="openDocument(item.src)">文档预览</button>
							</view>
							
						</view>		
					</view>
				</swiper-item>
				
				<!-- 在线笔记 -->
				<swiper-item @touchmove.stop>
					<view class="swiper-item">
						<view class="onlineontainer">
							<view class="content">
								<editor class="myEdit" placeholder="写点什么吧......" show-img-size show-img-toolbar show-img-resize
									@ready="onEditReady" @focus="onfocus" @statuschange="statuschange"></editor>
							</view>
							<view class="tools" v-show="showTool">
								<view class="item" @click="clickHeader"><text :class="showHeader ? 'active' : ''"
										class="iconfont icon-zitibiaoti"></text></view>
								<view class="item" @click="clickBold"><text :class="showBold ? 'active' : ''"
										class="iconfont icon-zitijiacu"></text></view>
								<view class="item" @click="clickItalic"><text :class="showItalic ? 'active' : ''"
										class="iconfont icon-zitixieti"></text></view>
								<view class="item" @click="clickDivider"><text class="iconfont icon-fengexian"></text></view>
								<view class="item" @click="clickInsertImage"><text class="iconfont icon-charutupian"></text></view>
								<view class="item" @click="okEdit"><text class="iconfont icon-duigoux"></text></view>
							</view>
						</view>
						
					</view>
				</swiper-item>
				
				<!-- 评论 -->
				<swiper-item @touchmove.stop>
					<view class="swiper-item">
						<view class="comment-container">
							<view class="comment" >
								<view class="comment-box">
									<view  v-if="noComment">
										<u-empty
										        mode="comment"
										        icon="http://cdn.uviewui.com/uview/empty/comment.png"
										>
										</u-empty>
									</view>
									<view class="content">
										<view class="item" v-for="item in commentList">
											<comment-item :toTarget="switchComment" schema="course" :item="item" @removeEvn="P_deteleEvn" ></comment-item>
										</view>														
									</view>
								</view>
								<comment-frame schema="course" @commentEvn="P_commentEvn" :commentObj="commentObj" ></comment-frame>
							</view>
							<u-popup closeable :show="secondComShow" mode="bottom"  @close="close">
							        <view class="secondComment">
							        	<view class="reply">
											<view class="comment-box">
												<view class="top">
													<comment-item :item="replyItem" schema="course" :showReply="true" :showClose="true"></comment-item>
												</view>
												<view class="list">
													<view class="row" v-for="item in replyList">
														<comment-item @removeEvn="second_P_removeEvn" :item="item" :showReply="true"></comment-item>
													</view>
												</view>
												<view  v-if="noComment">
													<u-empty
													        mode="comment"
													        icon="http://cdn.uviewui.com/uview/empty/comment.png"
													>
													</u-empty>
												</view>
											</view>
							        		

							        		<comment-frame schema="course" @commentEvn="second_P_commentEvn" :commentObj="secondCommentObj" :placeholder="`回复：${giveName(replyItem)}`" ></comment-frame>

							        	</view>
							        </view>
							</u-popup>
								
							
						</view>
						
						
						
					</view>
				</swiper-item>
			</swiper>
		</view>

	</view>
</template>

<script>
	import {giveName, giveAvatar, courseLikeFun} from '../../../utils/tools.js'
	import {store} from "@/uni_modules/uni-id-pages/common/store.js"
	import pageJson from '@/pages.json'
import { data } from '../../../uni_modules/uview-ui/libs/mixin/mixin.js'
	const db = uniCloud.database()
	export default {
		data() {
			return {
				courseId: null, //当前的课程id
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
				tabIndex: 3, //当前下半部分显示的页面索引
				noComment: false, //课程是否有评论数据
				commentObj: {
					course_id:"",
					comment_type: 0
				},
				commentList:[], //评论数据
				courseUrl: "", //当前课程url
				courseTitle: "" ,//课程标题
				checked: false, //是否已收藏 
				lastPlayTime: null, //上吃的播放时间
				playschedule: null, //播放进度
				isSchedule: true, //判断是否是第一次播放
				play_total_time: null, //观看总时间
				playedList: [], //已经观看完视频列表
				initialTime: '', //刚观看时的初始时间
				
				//在线笔记
				showTool: false,
				showHeader: false,
				showBold: false,
				showItalic: false,	
				content: "",//在线笔记内容
				isOnlineNote: false, //是否有之前的笔记

				// 二级评论
				secondComShow: false, //是否显示二级评论
				replyItem: null,
				secondCommentObj: {
					course_id:'',
					comment_type:1,
					reply_user_id:"",
					reply_comment_id:"",
				},
				replyList:[],
				secondNoComment:false
			};
		},
		onLoad(e) {

			this.courseId = e.id
			this.commentObj.course_id = e.id
			this.scheduleFun() //判断是否第一次播放
			this.getCourseData() //获取课程数据
			this.getCourseComment()
			this.isOnlineNoteFun() //判断第一次记录
			
			this.initialTime = Date.now()	
		},
		onUnload() {
			this.playScheduleFun()
			console.log(Date.now());
		},
		methods: {
			giveName,
			transition(e) {

			},
			//切换选项卡
			changeTab(e) {

				this.tabIndex = e.index;
			},
			
			//滑动
			onChangeTab(e) {
				//切换当前索引
				this.tabIndex = e.detail.current
			},
			
			
			//视频播放到结尾执行的回调函数
			videoEnd(e) {
				this.playedList?.forEach(item => {
					if (item == this.courseUrl) return 
					
				})
				this.playedList.push({
					courseUrl: this.courseUrl
				})
				
			},
			
			//记录视频播放记录
			timeUpdata(e) {
				
				this.playschedule = e.detail.currentTime
				
				// if(!this.timeId) {
				// 	this.timeId =  setTimeout(() => {
				// 		this.playScheduleFun()
				// 		this.timeId = null 
				// 	},1000)
				// }
				
				
			},
			
			//判断是否第一次观看，有无上次播放记录，有的话自动跳转到上次的播放进步
			async scheduleFun() {
				let res = await db.collection('course_play_history').where(`"${this.courseId}" == course_id && $cloudEnv_uid == user_id`).get()
				
				res.result.affectedDocs ? this.isSchedule = true : this.isSchedule = false
				
				console.log(res.result.data[0]);
				this.courseUrl = res.result.data[0]?.course_src
				this.lastPlayTime = res.result.data[0]?.play_time
				this.play_total_time = res.result.data[0]?.play_total_time
				this.playAcc = res.result.data[0]?.have_watched
				
				
				this.getCourseData() //获取课程数据
			},
			
			
			
			//更新数据库课程观看进度的功能函数
			async playScheduleFun() {
				console.log(this.playedList);
				if (this.isSchedule) {
					let res = await db.collection('course_play_history').where(`"${this.courseId}" == course_id && $cloudEnv_uid == user_id`).update({
						"play_time": this.playschedule,
						"course_id": this.courseId,
						"course_src": this.courseUrl,
						"play_date": Date.now(),
						"play_total_time": this.play_total_time + Date.now() - this.initialTime,
						"have_watched": this.playedList
					})
					
				} else {
					let res = await db.collection('course_play_history').add({
						"play_time": this.playschedule,
						"course_id": this.courseId,
						"course_src": this.courseUrl,
						"play_date": Date.now(),
						"play_total_time": Date.now() - this.initialTime,
						"have_watched": this.playedList
					})
				}
				
				
			},

			//获取课程视频数据
			async getCourseData() {
				
				
				let courseTemp = db.collection('course_video').where(`_id=="${this.courseId}"`).getTemp()
				let userTemp = db.collection('uni-id-users').field("_id,username,name").getTemp()
				
				let likeTemp = db.collection(("course_like")).where(`course_id=="${this.courseId}" && user_id==$cloudEnv_uid`).getTemp()
				
				//判断用户是否登录,来决定是否获取该用户的收藏数据
				let arr = [courseTemp,userTemp]
				if(store.hasLogin) {
					arr.push(likeTemp)
				}
				
				
				
				let res = await db.collection(...arr).get()
				
				let isLike = false
				if(store.hasLogin) isLike = res.result.data[0]._id.course_like.length ? true : false
				
				res.result.data[0].isLike = isLike
				this.courseData = res.result.data[0]
				this.courseUrl = res.result.data[0].course_video[0].videoSrc[0].src
				this.courseTitle = res.result.data[0].course_video[0].videoSrc[0].name
				
			},
			
			//点击收藏按钮,记录收藏量
			onCollect() {

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
					 
					 
					 this.courseData.isLike ? this.courseData.like_count-- : this.courseData.like_count++
					 this.courseData.isLike = !this.courseData.isLike
					 this.likeTime = time
					 
					//点赞操作数据库的方法
					courseLikeFun(this.courseId)
			},
			
			//点击课程列表进行播放
			videoPlay(item) {
				this.lastPlayTime = null //清空之前的播放进度				
				this.courseUrl = item.src
				this.courseTitle = item.name
			},
			
			//文档预览
			openDocument(coursewareUrl) {
				uni.downloadFile({
					url: coursewareUrl,
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
			
			//在线笔记。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
			async isOnlineNoteFun() {
				let res = await db.collection("online_note").where(`"${this.courseId}" == courseId && user_id==$cloudEnv_uid`).get()
				
				res.result.affectedDocs ? this.isOnlineNote = true : this.isOnlineNote = false
				console.log(this.isOnlineNote);
				console.log(this.editorCtx);
				if (this.isOnlineNote) {
					this.content = res.result.data[0].content
					setTimeout(() => {
						this.editorCtx.setContents({
							html: res.result.data[0].content,
							success: (e) => {
								this.content = e.html
								console.log(res.result.data[0].content);
							}
						})
					}, 1000)
					
				}
				
			},
			//富文本获取焦点
			onfocus() {
				this.showTool = true
			},
			
			//初始化
			onEditReady() {
				uni.createSelectorQuery().in(this).select(".myEdit").fields({
					size: true,
					context: true
				}, res => {
					this.editorCtx = res.context
				}).exec()
				
				
			},
			
			//插入分割线
			clickDivider() {
				this.editorCtx.insertDivider()
			},
			
			//点击标题样式按钮
			clickHeader() {
				this.showHeader = !this.showHeader
				this.editorCtx.format('header', this.showHeader ? 'H1' : false)
			},
			
			// 点击粗体按钮
			clickBold() {
				this.showBold = !this.showBold
				this.editorCtx.format('bold')
			},
			
			// 点击斜体按钮
			clickItalic() {
				this.showItalic = !this.showItalic
				this.editorCtx.format('italic')
			},
			
			//点击图片按钮
			clickInsertImage() {
				uni.chooseImage({
					success: (res) => {
						uni.showLoading({
							title: "上传中...",
							mask: true
						})
						res.tempFiles.forEach(async item => {
							let filres = await uniCloud.uploadFile({
								filePath: item.path,
								cloudPath: item.name
							})
							this.editorCtx.insertImage({
								src: filres.fileID,
							})
							uni.hideLoading()
						})
			
					}
				})
			},
			
			//点击确定键
			okEdit() {
				this.showTool = false
				this.uploadNote()
				uni.showLoading({
					title:"保存中..."
				})

				
			
			},
			
			//上传笔记到数据库
			uploadNote() {
				//保存
				this.editorCtx.getContents({
					success: (e) => {
						this.content = e.html
						this.setData()
					}
				})
			},
			
			//上传到云数据库的功能函数
			setData() {
				console.log(this.isOnlineNote);
				if (this.isOnlineNote) {
					db.collection('online_note').update({
						content: this.content,
					}).then(res => {
						console.log(res);
						uni.showLoading()
						uni.showToast({
							title:"保存成功",
							icon:'none'
						})
								
					})
					
				}else {
					db.collection('online_note').add({
						content: this.content,
						courseId: this.courseId,
						courseName: this.courseData.course_name
						
					}).then(res => {
						console.log(res);
						this.isOnlineNote = true
						uni.showLoading()
						uni.showToast({
							title:"保存成功",
							icon:'none'
						})
					})
					
					
				}
				
			},
			//判断是否使用了某种样式的功能函数	
			checkStatus(name, detail, obj) {
				if (detail.hasOwnProperty(name)) {
					this[obj] = true
				} else {
					this[obj] = false
				}
			},
			
			
			
			//当编辑器内样式改变时
			statuschange(e) {
				let detail = e.detail
				this.checkStatus("header", detail, 'showHeader')
				this.checkStatus("bold", detail, 'showBold')
				this.checkStatus("italic", detail, 'showItalic')
			},
			
			
			//............................................................
			
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
					

					
			
					res.result.data.forEach(item => {
						 let index = replyArr.result.data.findIndex(find => {
							return item._id == find.reply_comment_id
						})
			
						if(index > -1) item.totalReply = replyArr.result.data[index].totalReply
					})
					
					if(!res.result.data.length) this.noComment = true
					this.commentList = res.result.data
					console.log(this.commentList);
			},
			
			//评论成功的回调,评论无感增加操作
			P_commentEvn(e) {
				console.log(e);
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
			
			
			// ***二级评论***
			
			//弹出二级评论页面
			switchComment(replyItem) {
				this.secondComShow = true
				
				console.log("111");
								
				if(!replyItem) {
					return 
				}
				this.replyItem = replyItem
				this.secondCommentObj.course_id = replyItem.course_id
				this.secondCommentObj.reply_user_id = replyItem.user_id[0]._id
				this.secondCommentObj.reply_comment_id = replyItem._id
				//获取评论列表
				this.getArticleComment()
			},
			
			close() {
			  this.secondComShow = false

			},
			
			//无感删除评论
			second_P_removeEvn(e) {
				let index = this.replyList.findIndex(item => {
					return e==item._id
				})
				this.replyList.splice(index, 1)
			},
			//无感增加二级评论
			second_P_commentEvn(e) {
			
				this.replyList.unshift({
					...e,
					"user_id":[store.userInfo],
					"comment_date":Date.now()
				})
			},
			
			//获取二级评论
			async getArticleComment() {
				let commentTemp = db.collection("course_comment")
				.where(`course_id == "${this.replyItem.course_id}" && comment_type==1 && reply_comment_id=="${this.replyItem._id}"`)
				.getTemp()
				let userTemp = db.collection("uni-id-users").field("_id,username,nickname,avatar_file").getTemp()
				
				let res = await db.collection(commentTemp,userTemp).orderBy("comment_date desc").get()
					
					
				if(!res.result.data.length) return this.secondNoComment = true
				this.replyList = res.result.data
					
			
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
			.swiperClass {
				display: block;
				height: 100%;
				width: 750rpx;
			}

				
				padding: 10px;
				background-color: #FFFFFF;
				margin-top: 20rpx;
				height: 49.8vh;
				
					.swiper-item {
						height: 100%;
						width: 94%;
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
								display: flex;
								justify-content: space-between;
								align-items: center;
						
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
							.active {
								color: #0081FF;
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
						.onlineontainer {
							position: relative;
							.content {
								.myEdit {
									height: calc(100vh - 500rpx);
									margin-bottom: 30rpx;
								}
							}
										
							.tools {
								position: fixed;
								left: 0;
								bottom: 0;
								display: flex;
								justify-content: space-around;
								align-items: center;
								width: 100%;
								height: 80rpx;
								background-color: #fff;
								border-top: 1rpx solid #f4f4f4;
								
										
								.iconfont {
									font-size: 36rpx;
									color: #333;
										
									&.active {
										color: #0199Fe;
									}
								}
							}
						}
						.comment-container {
							height: 100%;
								
							.comment {
								height: 100%;
								.comment-box {
									height: 82%;
									overflow-y: auto;
								}
								.secondComment {
									.reply {
									    height: 662rpx;
									}
									.reply {
										/deep/ .list[data-v-14645ae0] {
										    padding-bottom: 0;
										}
										.top {
											padding: 30rpx;
											border-bottom: 15rpx solid #eee;
											
										}
										.list {
											padding: 30rpx 60rpx;
											padding-bottom: 120rpx;
											.row {
												padding-bottom: 15rpx;
											}
										}
									}
								}
							}
							
					}
				
					
				}
				
				
				
		}
	}
</style>
