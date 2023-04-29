<template>
	<view class="IndexContainer">
		
		<cu-custom bgColor="bg-gradual-blue">
			<block slot="content">移动课堂</block>
		</cu-custom>
	
		<!-- 轮播图 -->
		<view class="image">
			<swiper class="swiperImg" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular>
				<swiper-item v-for="(item, index) in swiperData" :key="index">
					<view class="swiperItem">
						<image :src="item.bannerfile.url" mode="aspectFill"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		

		<!-- 导航图标 -->
		<icon-nav :navList="navList"></icon-nav>

		<!-- 分割线 -->
		<view class="divider"></view>

		<!-- 最新课程模块 -->
		<view class="courseContainer">
			<view class="cu-bar bg-white margin-top-xs">
				<view class="action sub-title">
					<text class="text-xl text-bold text-blue text-shadow">最新课程</text>
					<text class="text-ABC text-blue">latest</text>
				</view>
			</view>
			<scroll-view class="courseScroll" scroll-x="true" show>
				<view class="scrollItem" v-for="item in newestCourseData" :id="item._id" >
					<course-item :courseData="item" ></course-item>
				</view>
			</scroll-view>
		</view>

		<!-- 推荐课程模块 -->
		<view class="courseContainer">
			<view class="cu-bar bg-white margin-top-xs">
				<view class="action sub-title">
					<text class="text-xl text-bold text-blue text-shadow">热门课程</text>
					<text class="text-ABC text-blue">curriculum</text>
				</view>
				<view class="action" @click="goVideo"><text class="text-lg text-grey text-shadow">更多</text></view>
			</view>
			<view class="course-list" v-for="item in recommendCourseData" :id="item._id" >
				<course-list :courseData="item" ></course-list>
			</view>
				

		</view>


		<!-- 底部tabbar -->
		<tabbar :current="0" :tabBarList="tabBerLists" />
	</view>
</template>

<script>
	const db = uniCloud.database()
	export default {
		data() {
			return {
				tabBerLists: [], //tabbar数据
				recommendCourseData: [] ,//推荐课程数据
				newestCourseData: [] , //最新课程数据
				swiperData: [
				],
				navList: [{
						name: "通知",
						src: '/static/demo/icon/hd.png',
						navigateTo: '/pages/inform/index/index'
					},
					{
						name: "课程",
						src: '/static/demo/icon/book.png',
						reLaunch: '/pages/tabbar/learn/learn'
					},
					{
						name: "题库",
						src: '/static/demo/icon/test.png',
						navigateTo: '/pages/answer/index/index'
					},
					{
						name: "社区",
						src: '/static/demo/icon/ask.png',
						navigateTo: '/pages/community/index/index'
					}
				]
			}
		},
		onLoad() {
			// 影藏原生的tabbar,有自定义tabbar的页面都要写一遍
			uni.hideTabBar()
			
			this.getBannerData() //获取轮播图数据
			
			//获取课程数据
			this.getCourseData()
			
			//获取热门课程数据
			this.getHotCourseData()
		},
		onShow() {
			this.tabBerLists = uni.getStorageSync('tabBarList') // 自定义的tabbar赋值
		},

		methods: {
			
			//获取轮播图的数据
			async getBannerData() {
				let res = await db.collection('index_banner').get() 
				
				
				
				this.swiperData = res.result.data
				
				console.log(this.swiperData);
			},
			
			
			//获取最新课程视频数据
			async getCourseData() {
				
				
				const courseTemp = db.collection('course_video').field("_id,course_name,courseCover,user_id").orderBy("publish_date desc").getTemp()
				const userTemp = db.collection('uni-id-users').field("_id,username,nickname,avatar_file").getTemp()
				
				
				let res = await db.collection(courseTemp,userTemp).get()
				
	
				this.newestCourseData = res.result.data
				
			},
			
			//获取热门课程数据
			async getHotCourseData() {
				
				
				const courseTemp = db.collection('course_video').field("_id,course_name,courseCover,user_id,publish_date").orderBy("like_count").getTemp()
				const userTemp = db.collection('uni-id-users').field("_id,username,nickname,avatar_file").getTemp()
				
				
				let res = await db.collection(courseTemp,userTemp).get()
				
				
				this.recommendCourseData = res.result.data
				

				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.IndexContainer {
		padding-bottom: 96rpx;
		background-color: #f2f5f9;
		.image{
			background-color: #fff;
			padding: 20rpx 0 20rpx 0;
			margin-bottom: 10rpx;
			.swiperImg {
				height: 310rpx;
				.swiperItem {
					width: 100%;
					height: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					image {
							width: 710rpx;
							height: 300rpx;
							border-radius: 8rpx 8rpx 8rpx 8rpx;
							box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.10);
					}
				}
				
			}
		}

		.courseContainer {
			.courseScroll {
				width: 100%;
				white-space: nowrap;
				.scrollItem {
					display: inline-block;
				}
			}

			::-webkit-scrollbar {
				width: 0;
				height: 0;
				background-color: transparent;
			}
		}
	}
</style>
