<template>
	<view class="container">
		<!-- 搜索框 -->
		<search-bar></search-bar>
		
		<!-- 轮播图 -->
		<swiper class="swiperImg" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular >
			<swiper-item v-for="(item, index) in swiper" :key="index">
				<view class="swiper-item">
					<image :src="item.src" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>
		
		<!-- 导航图标 -->
		<icon-nav :navList="navList" ></icon-nav>
		
		<!-- 分割线 -->
		<view class="divider"></view>
		
		<!-- 课程模块 -->
		<view class="courseContainer">
			<view class="title">
				<text>推荐课程</text>
			</view>
			<scroll-view class="courseScroll" scroll-x="true" show >
				<course-item></course-item>
				<course-item></course-item>
				<course-item></course-item>
				<course-item></course-item>
				<course-item></course-item>
				<course-item></course-item>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiper: [
					{src:'/static/demo/cover/1.png'},
					{src:'/static/demo/cover/2.png'}
				],
				navList: [
					{
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
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.container {
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
				align-items: center;
				padding: 30rpx 20rpx;
				text {
					font-size: 35rpx;
					font-weight: 700 ;
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
