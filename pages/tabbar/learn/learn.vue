<template>
	<view class="learn">
		<cu-custom bgColor="bg-gradual-blue">
			<block slot="backText">返回</block>
			<block slot="content">学习</block>
		</cu-custom>
		
		<!-- 搜索框 -->
		<view class="search-header" @click="toSearch" >
			<image class="search-img" src="../../../static/search.png"></image>
			<input class="search-input" placeholder="搜索您想学习的课程" type="text"  placeholder-class="placeholder-name" />
			<view class="search-name" >搜索</view>
		</view>
		<!-- <search-bar :hotList="hotList" @input="input" @change="change"></search-bar> -->
		<!-- <view class="u-search-box" @click="toSearch">
			<view class="u-search-inner">
				<u-icon name="search" color="#909399" :size="28"></u-icon>
				<text class="u-search-text">搜索您想学习的课程</text>
			</view>
		</view> -->
		
		
		<view class="u-menu-wrap">
			<scroll-view scroll-y scroll-with-animation class="u-tab-view menu-scroll-view" :scroll-top="scrollTop">
				<view v-for="(item,index) in tabbar" :key="index" class="u-tab-item" :class="[current==index ? 'u-tab-item-active' : '']"
				 :data-current="index" @tap.stop="swichMenu(index)">
					<text class="u-line-1">{{item.name}}</text>
				</view>
			</scroll-view>
			<block v-for="(item,index) in tabbar" :key="index">
				<scroll-view scroll-y class="right-box" v-if="current==index">
					<view class="page-view">
						<view class="class-item">
							<view class="item-title">
								<text>{{item.name}}</text>
							</view>
							<view class="item-container">
								<view class="thumb-box" v-for="(item1, index1) in item.foods" :key="index1" @click="toCourseList(item,item1)" >
									<image class="item-menu-image" :src="item1.icon" mode=""></image>
									<view class="item-menu-name margin-top-sm">{{item1.name}}</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</block>
		</view>
		<!-- //底部tabbar -->
		<tabbar :current="1" :tabBarList="tabBerLists" />
	</view>
</template>

<script>
	import classifyData from "@/common/classify.data.js";
	export default {
		data() {
			return {
				tabBerLists: [], //tabbar数据
				tabbar: classifyData,
				scrollTop: 0, //tab标题的滚动条位置
				current: 0, // 预设当前项的值
				menuHeight: 0, // 左边菜单的高度
				menuItemHeight: 0, // 左边菜单item的高度	
				 hotList: ['白酒', '苹果醋', '红酒', '笔记本', '洗衣液', '平板电脑', '电视机'],//热门搜索
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
			
			//搜索内容
			        change(e) {
			            console.log('搜索内容：' + e)
			        },
			        //input事件
			        input(e){
			            console.log('搜索框输入的内容：' + e)
			        },
			
			//跳转到对应的课程列表yemian
			toCourseList(e1, e2) {
				uni.navigateTo({
					url:`/pages/learn/course-list/course-list?subject_type_one=${e1.name}&subject_type_two=${e2.name}`
				})
				
			},
			//跳转到搜索页面
			toSearch () {
				uni.navigateTo({
					url:"/pages/learn/search/search"
				})
			},
			
			getImg() {
				return Math.floor(Math.random() * 35);
			},
			// 点击左边的栏目切换
			async swichMenu(index) {
				if(index == this.current) return ;
				this.current = index;
				// 如果为0，意味着尚未初始化
				if(this.menuHeight == 0 || this.menuItemHeight == 0) {
					await this.getElRect('menu-scroll-view', 'menuHeight');
					await this.getElRect('u-tab-item', 'menuItemHeight');
				}
				// 将菜单菜单活动item垂直居中
				this.scrollTop = index * this.menuItemHeight + this.menuItemHeight / 2 - this.menuHeight / 2;
			},
			// 获取一个目标元素的高度
			getElRect(elClass, dataVal) {
				new Promise((resolve, reject) => {
					const query = uni.createSelectorQuery().in(this);
					query.select('.' + elClass).fields({size: true},res => {
						// 如果节点尚未生成，res值为null，循环调用执行
						if(!res) {
							setTimeout(() => {
								this.getElRect(elClass);
							}, 10);
							return ;
						}
						this[dataVal] = res.height;
					}).exec();
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.learn {
		background-color: #fff;
	}
	
	.search-header {
		width: calc(100%-64rpx);
		padding: 0 32rpx;
		height: 112rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
	
		.search-img {
			position: absolute;
			left: 64rpx;
			width: 32rpx;
			height: 32rpx;
		}
	
		.search-input {
			padding: 0 32rpx 0 76rpx;
			width: calc(90% - 16rpx);
			height: 72rpx;
			line-height: 72rpx;
			background-color: #F2F3F5;
			border: solid #e4e4e5 1rpx;
			border-radius: 36rpx;
			font-size: 30rpx;
			color: #666666;
		}
	
		.placeholder-name {
			font-size: 30rpx;
			color: #999999;
		}
	
		.search-name {
			width: 80rpx;
			text-align: right;
			font-size: 30rpx;
			color: #666666;
		}
	}
	
	.u-wrap {
		height: calc(100vh);
		/* #ifdef H5 */
		height: calc(100vh - var(--window-top));
		/* #endif */
		display: flex;
		flex-direction: column;
	}
	
	.u-search-box {
		padding: 18rpx 30rpx;
	}
	
	.u-menu-wrap {
		height: 80vh;
		flex: 1;
		display: flex;
		overflow: hidden;
	}
	
	.u-search-inner {
		background-color: rgb(234, 234, 234);
		border-radius: 100rpx;
		display: flex;
		align-items: center;
		padding: 10rpx 16rpx;
	}
	
	.u-search-text {
		font-size: 26rpx;
		color: $u-tips-color;
		margin-left: 10rpx;
	}
	
	.u-tab-view {
		width: 200rpx;
		height: 517px;;
	}
	
	.u-tab-item {
		height: 110rpx;
		background: #f6f6f6;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 26rpx;
		color: #444;
		font-weight: 400;
		line-height: 1;
	}
	
	.u-tab-item-active {
		position: relative;
		color: #000;
		font-size: 30rpx;
		font-weight: 600;
		background: #fff;
	}
	
	.u-tab-item-active::before {
		content: "";
		position: absolute;
		border-left: 4px solid $u-primary;
		height: 32rpx;
		left: 0;
		top: 39rpx;
	}
	
	
	.right-box {
		background-color: rgb(250, 250, 250);
	}
	
	.page-view {
		padding: 16rpx;
	}
	
	.class-item {
		margin-bottom: 30rpx;
		background-color: #fff;
		padding: 16rpx;
		border-radius: 8rpx;
	}
	
	.item-title {
		font-size: 30rpx;
		color: $u-main-color;
		font-weight: bold;
		margin: 10rpx 0;
	}
	
	.item-menu-name {
		font-weight: normal;
		font-size: 24rpx;
		color: $u-main-color;
	}
	
	.item-container {
		display: flex;
		flex-wrap: wrap;
	}
	
	.thumb-box {
		width: 33.333333%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin-top: 20rpx;
		margin-bottom: 10rpx;
	}
	
	.item-menu-image {
		width: 120rpx;
		height: 120rpx;
		border-radius: 100rpx;
	}
</style>

