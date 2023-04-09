<template>
	<view class="container">

		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">课程</block>
		</cu-custom>

		<view class="video">
			<zc-video
				url="https://mp-b47b22da-6a90-4dde-b937-8ac0d9bec90c.cdn.bspapp.com/cloudstorage/fdcab62e-f83c-4540-b377-cf0683ba888f.mp4">
			</zc-video>
		</view>

		<view class="tab">
			<u-tabs 
			    :scrollable="false"
				itemStyle="padding: 0px 7px; height: 82rpx;"
				:activeStyle="{
					color: '#0081FF',
					fontWeight: 'bold',
					transform: 'scale(1.05)'
					}" 
				:list="tabData" @click="changeTab">
			</u-tabs>
		</view>
		<view class="content">
			<swiper :current="tabIndex" :duration="200">
				<swiper-item>
					<view class="swiper-item">
						<view class="brief-container">
							<view class="title">
								<view class="course-name">
									这是课程名
								</view>
								<view class="course-author">
									这是作者
								</view>
							</view>
							<view class="briefBox">
								<view class="brief">
									<text>简介：</text>
								</view>
								<text class="text">这是一个很有内容的视频这是一个很有内容的视频这是一个很有内容的视频这是一个很有内容的视频这是一个很有内容的视频这是一个很有内容的视频这是一个很有内容的视频这是一个很有内容的视频这是一个很有内容的视频这是一个很有内容的视频这是一个很有内容的视频这是一个很有内容的视频</text>
							</view>
						</view>
	
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">					  
						<view class="course-container">
							<!-- <u-collapse
								:border="false"
							  >
							    <u-collapse-item
							      title="文档指南"
							      name="Docs guide"
							    >
								<view class="course-item" v-for="(item, index) in 20">
									第{{index}}章
								</view>
							    </u-collapse-item>
							    <u-collapse-item
							      title="组件全面"
							      name="Variety components"
							    >
							      <text class="u-collapse-content">众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用</text>
							    </u-collapse-item>
							    <u-collapse-item
							      title="众多利器"
							      name="Numerous tools"
							    >
							      <text class="u-collapse-content">众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨</text>
							    </u-collapse-item>
							</u-collapse> -->
							
							<uni-collapse>
								<uni-collapse-item title="默认开启" v-for="(item, index) in 20">
									<view class="course-item" v-for="(item, index) in 20">
										第{{index}}章
									</view>
								</uni-collapse-item>
							</uni-collapse>
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item"></view>
				</swiper-item>
			</swiper>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
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
				tabIndex: 0 //当前下半部分显示的页面索引
			};
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
