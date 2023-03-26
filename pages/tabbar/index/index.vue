<template>
	<view class="IndexContainer">
		<!-- 搜索框 -->
		<search-bar></search-bar>

		<!-- 轮播图 -->
		<swiper class="swiperImg" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular>
			<swiper-item v-for="(item, index) in swiper" :key="index">
				<view class="swiper-item">
					<image :src="item.src" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>

		<!-- 导航图标 -->
		<icon-nav :navList="navList"></icon-nav>

		<!-- 分割线 -->
		<view class="divider"></view>

		<!-- 推荐课程模块 -->
		<view class="courseContainer">
			<view class="title">
				<text class="left">推荐课程</text>
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
			<view class="title">
				<text class="left">最新课程</text>
				<text class="right">查看更多</text>
			</view>
			<course-list></course-list>
			<course-list></course-list>
			<course-list></course-list>
		</view>


		<!-- 底部tabbar -->
		<tabbar :current="0" :tabBarList="tabBerLists" />
	</view>
</template>

<script>
	//引入tabbar组件
	import tabBar from '@/components/tabbar/tabbar.vue'

	export default {
		components: {
			tabBar
		},
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
						src: '/static/demo/icon/ask.png'
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
		.swiperImg {
			height: 310rpx;

			.swiper-item {
				display: flex;
				justify-content: center;

				image {
					width: 720rpx;
					height: 300rpx;
					border-radius: 8rpx 8rpx 8rpx 8rpx;
					box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.10);
				}
			}

		}

		.courseContainer {
			.title {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 30rpx 20rpx;

				.left {
					font-size: 35rpx;
					font-weight: 700;
				}

				.right {
					font-size: 25rpx;
					color: #A9A5A0;
				}
			}

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
