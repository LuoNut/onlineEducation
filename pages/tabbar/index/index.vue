<template>
	<view class="IndexContainer">
		
		<cu-custom bgColor="bg-gradual-blue">
			<block slot="content">移动课堂</block>
		</cu-custom>
	
		<!-- 轮播图 -->
		<view class="image">
			<swiper class="swiperImg" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular>
				<swiper-item v-for="(item, index) in swiper" :key="index">
					<view class="swiper-item">
						<image :src="item.src" mode="aspectFill"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		

		<!-- 导航图标 -->
		<icon-nav :navList="navList"></icon-nav>

		<!-- 分割线 -->
		<view class="divider"></view>

		<!-- 推荐课程模块 -->
		<view class="courseContainer">
			<view class="cu-bar bg-white margin-top-xs">
				<view class="action sub-title">
					<text class="text-xl text-bold text-blue text-shadow">最新课程</text>
					<text class="text-ABC text-blue">latest</text>
				</view>
			</view>
			<scroll-view class="courseScroll" scroll-x="true" show>
				<course-item></course-item>
				<course-item></course-item>
				<course-item></course-item>
				<course-item></course-item>
				<course-item></course-item>
				<course-item></course-item>
			</scroll-view>
		</view>

		<!-- 最新课程模块 -->
		<view class="courseContainer">
			<view class="cu-bar bg-white margin-top-xs">
				<view class="action sub-title">
					<text class="text-xl text-bold text-blue text-shadow">热门课程</text>
					<text class="text-ABC text-blue">curriculum</text>
				</view>
				<view class="action" @click="goVideo"><text class="text-lg text-grey text-shadow">更多</text></view>
			</view>
			<course-list></course-list>
		</view>


		<!-- 底部tabbar -->
		<tabbar :current="0" :tabBarList="tabBerLists" />
	</view>
</template>

<script>

	export default {
		data() {
			return {
				tabBerLists: [], //tabbar数据
				swiper: [{
						src: '/static/demo/cover/1.png',
						
					},
					{
						src: '/static/demo/cover/2.png'
					}
				],
				navList: [{
						name: "通知",
						src: '/static/demo/icon/hd.png'
						
					},
					{
						name: "课程",
						src: '/static/demo/icon/book.png'
					},
					{
						name: "题库",
						src: '/static/demo/icon/test.png'
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
		},
		onShow() {
			this.tabBerLists = uni.getStorageSync('tabBarList') // 自定义的tabbar赋值
		},

		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.IndexContainer {
		padding-bottom: 96rpx;
		background-color: #f2f5f9;
		.image{
			background-color: #fff;
			padding: 30rpx 0 20rpx 0;
			margin-bottom: 10rpx;
			.swiperImg {
				height: 310rpx;
				
				.swiper-item {
					display: flex;
					justify-content: center;
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
			}

			::-webkit-scrollbar {
				width: 0;
				height: 0;
				background-color: transparent;
			}
		}
	}
</style>
