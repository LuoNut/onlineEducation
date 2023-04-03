<template>
	<view class="container">
		<!-- 顶部区域 -->
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">技术栈</block>
		</cu-custom>
		<!-- 导航部分 -->
		<view class="nav">
		<u-tabs :list="navList" scrollable @click="navClick">
		        <view
		                slot="right"
		                style="padding-left: 4px;"
		                @tap="$u.toast('插槽被点击')"
		        >
		            <u-icon
		                    name="list"
		                    size="21"
		                    bold
		            ></u-icon>
		        </view>
		    </u-tabs>
		</view>
		
		<!-- 骨架屏 -->
		<view class="loadingState" v-show="loadingState">
			<u-skeleton
			    rows="4"
			    title
				loading
			></u-skeleton>
		</view>

		
		<!-- 内容部分 -->
		<view class="content">
			<view class="Item" v-for="item in articleData">
				<blog-item :subject_type="subject_type" @delEvent="P_delEvent" :item="item"></blog-item>
			</view>
		</view>
		
		<uni-load-more v-show="isBottomLoading" :status="uniLoad"></uni-load-more>
		
		<!-- 编辑按钮 -->
		<view class="edit"  @click="toEdit">
			<view class="iconfont icon-editor">		
			</view>
		</view>
	</view>
</template>

<script>
	const db = uniCloud.database()
	const dbCmd = db.command
	import {store, mutations} from "@/uni_modules/uni-id-pages/common/store.js"
	export default {
		data() {
			return {
				subject_type:'engineering', //当前社区的分类
				navList: [
					{
						name: "工学",
						subject_type: "engineering"
					},
					{
						name: "理学",
						subject_type: "science"
					},
					{
						name: "文学",
						subject_type: "literature"
					},
					{
						name: "历史学",
						subject_type: "history"
					},
					{
						name: "哲学",
						subject_type: "philosophy"
					},
					{
						name: "经济学",
						subject_type: "economics"
					},
					{
						name: "法学",
						subject_type: "law"
					},
					{
						name: "教育学",
						subject_type: "pedagogy"
					},
					{
						name: "农学",
						subject_type: "agronomy"
					},
					{
						name: "医学",
						subject_type: "medicine"
					},
					{
						name: "管理学",
						subject_type: "management"
					},
					{
						name: "艺术学",
						subject_type: "art"
					}
				],
				loadingState: true,
				navActive: 0,
				articleData: [], //社区文章列表
				uniLoad:"more", //触底加载显示的样式
				isBottomLoading: false,
				noMore: false
				
			}
		},
		onReachBottom() {
			this.ReachBottom()
		},
		onLoad() {
			this.getArticleData()
		},
		onShow() {
			this.getArticleData()
		},
		methods: {
			//上拉触底的功能函数
			ReachBottom() {
				this.isBottomLoading = true
				this.uniLoad = "loading"
				if(this.noMore) {
					this.uniLoad = "noMore"
					return 
				}
				this.getArticleData()
			},
			//用户删除某一篇文章，重新刷新页面
			P_delEvent() {
				this.articleData = []
				this.getArticleData()
			},
			//获取文章数据
			async getArticleData() {
				let artTemp = db.collection('blog_article').where(`delState != true && '${this.subject_type}' == subject_type`).field("user_id,like_count,view_count,comment_count,title,publish_date,description,picurls,province").getTemp()
				console.log(artTemp);
				let userTemp = await db.collection("uni-id-users").field("_id,username,nickname,avatar_file").getTemp()
				
				db.collection(artTemp,userTemp).orderBy(this.navList[this.navActive].type,"desc").skip(this.articleData.length).limit(5).get().then( async res => {
					
					this.loadingState = false
					if(!res.result.data.length) {
						this.ReachBottom()
						this.noMore = true
						return 
					}
					let oldData = this.articleData
					//获取全部的文章id列表
					let idArr = []
					let resDataArr = [...oldData,...res.result.data]
					
					//是否登录判断
					if(store.hasLogin) {
						resDataArr.forEach(item => {
							idArr.push(item._id)
						})
						console.log(idArr);
						//获取已经点赞的文章id列表
						let likeRes = await db.collection("blog_like").where({
							article_id:dbCmd.in(idArr),//获取已经点赞的文章id列表
							user_id:uniCloud.getCurrentUserInfo().uid
						}).get()
						
						console.log(likeRes);
						//获取已经点赞的文章下标，为其添加isLike属性
						likeRes.result.data.forEach( item => {
							let index = resDataArr.findIndex(find => {
								return item.article_id === find._id
							})
							console.log(index);
							resDataArr[index].isLike = true
						})
					}
					
					
					//储存获取到的文章数据
					this.articleData = resDataArr
					this.loadingState = false
					console.log(resDataArr);
				})
				
				
				
			},
			//点击导航标签
			navClick(e) {
				console.log(e);
				this.subject_type = e.subject_type
				console.log(this.subject_type)
				this.loadingState = true
				this.articleData = []
				this.navActive = e.index
				this.getArticleData()
				this.uniLoad = "more"
				this.noMore = false
				this.isBottomLoading = false
			},
			//跳转至edit页面
			toEdit() {
				uni.navigateTo({
					url:"/pages/community/edit/edit?subject_type=" + this.subject_type
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		.loadingState {
			margin: 50rpx;
		}
		.content {
			.Item {
				padding: 30rpx;
				border-bottom: #F7F7F7 15rpx solid;
			}
		}
		.edit {
			position: fixed;
			bottom: 150rpx;
			right: 50rpx;
			width: 120rpx;
			height: 120rpx;
			background-color: #0199FE;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			z-index: 100;
			box-shadow: 0 0 20rpx rbga(1, 153, 254, 0.8);
			.iconfont {
				font-size: 50rpx;
				color: #fff;
			}
		}


	}
</style>
