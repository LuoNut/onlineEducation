<template>
	<view class="teacher">
		<cu-custom bgColor="bg-gradual-blue">
			<block slot="backText">返回</block>
			<block slot="content">课程</block>
		</cu-custom>
		
		<view class="body">
			<view class="item" @click="toCourseCreation">
				<text class="iconfont icon-keben"></text>
				<text class="text">课程上传</text>
			</view>
			<view class="item" @click="toCourseManagement">
				<text class="iconfont icon-tingke"></text>
				<text class="text">课程班级</text>
			</view>
		</view>
		<!-- //底部tabbar -->
		<tabbar :current="2" :tabBarList="tabBerLists" />
	</view>
</template>

<script>

	import classifyData from "@/common/classify.data.js";
	export default {
		data() {
			return {
				tabBerLists: [], //tabbar数据
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
			//跳转到课堂创建页面
			toCourseCreation() {
				
				if (this.uniIDHasRole('admin') || this.uniIDHasRole('teacher')) {
					uni.navigateTo({
						url: '/pages/teacher/course/course'	
					})
				}else {
					uni.showToast({
						title:"账号还没通过审核哦....",
						icon:"none"
					})
				}
				
			},
			//跳转到课堂管理页面
			toCourseManagement() {
				if (this.uniIDHasRole('admin') || this.uniIDHasRole('teacher')) {
					uni.navigateTo({
						url: '/pages/teacher/course-manage/course-manage'
					})
				}else {
					uni.showToast({
						title:"账号还没通过审核哦....",
						icon:"none"
					})
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.teacher {
		.body {
			display: flex;
			justify-content: space-around;
			align-items: center;
			text-align: center;
			padding: 20rpx 0;
			.item {
				width: 40%;
				display: flex;
				flex-direction: column;
				padding: 20rpx;
				margin: 10rpx;
				background-color: #fff;
				border-radius: 16rpx;
				box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
				.iconfont {
					font-size: 124rpx;
					color: #0081ff;
				}
				.text {
					color: #333333;
					font-weight: bold;
					font-size: 32rpx;
					margin-top: 20rpx;
					text-shadow: 3px 3px 4px rgba(26, 26, 26, 0.2);
				}
			}
		}
	}
</style>

