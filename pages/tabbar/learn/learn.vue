<template>
	<view class="learn">
		<search-bar></search-bar>
		
		
		<view class="body">
			<!-- 课程分类导航 -->
			<view class="left">
				<scroll-view show-scrollbar enable-flex class="scroll-y" scroll-y="true" >
					<view  class="left-item" v-for="(item, index) in navList" id="index">
						{{item}}
					</view>
				</scroll-view>

			</view>
			<!-- 课程分类想详细内容 -->
			<view class="right">
				<view class="right-item" v-for="(item, index) in 6" id="index">
					高数
				</view>
			</view>
		</view>
		
		<!-- //底部tabbar -->
		<tabbar :current="1" :tabBarList="tabBerLists" />
	</view>
</template>

<script>

	export default {
		data() {
			return {
				tabBerLists: [], //tabbar数据
				navList: [
					'工学',
					'理学',
					'文学',
					'历史学',
					'哲学',
					'经济学',
					'法学',
					'教育学',
					'农学',
					'医学',
					'管理学',
					'艺术学'
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
	.learn {
		.body {
			display: flex;
			border-top: 4rpx solid #f4f4f4;
			.left {
				flex: 2;
				background-color: antiquewhite;
				.scroll-y {
					height: 1024rpx;
					::-webkit-scrollbar {
								display: none;
								width: 0 !important;
								height: 0 !important;
								-webkit-appearance: none;
								background: transparent;
								color: transparent;
							}
				}
				.left-item {
					height: 100rpx;
					background-color: #eee;
					display: flex;
					justify-content: center;
					align-items: center;
					border-bottom: 2rpx solid #ddd;
					font-size: 30rpx;
					color: #333;
					letter-spacing: 2rpx;
					&:first-child {
						background-color: #fff; 	
					}
				}
				
			}
			.right {
				flex: 5;
				background-color: #fff;
				padding: 0 30rpx;
				
				.right-item {
					display: inline-block;
					width: 220rpx;
					height: 60rpx;
					background-color: #eee;
					text-align: center;
					line-height: 60rpx;
					border-radius: 30rpx;
					margin: 10px 6px 0;
				}
			}
		}
	}
</style>

