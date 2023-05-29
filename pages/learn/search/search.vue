<template>
	<view class="page-main">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">搜索</block>
		</cu-custom>
		
		<view class="search-header">
			<image class="search-img" :src="searchImg"></image>
			<input class="search-input" :focus="true" :placeholder="placeholder" type="text" v-model.trim="searchText"
				placeholder-class="placeholder-name" />
			<view class="search-name" @click="confirmSearch">搜索</view>
		</view>
		<view class="search-history" v-if="historyList.length">
			<view class="history-title">
				<view class="title-name">搜索历史</view>
				<view class="history-delete" v-if="isDelete">
					<view class="delete-all" @click="deleteAll">全部删除</view>
					<view class="delete-line"></view>
					<view class="delete-complete" @click="deleteHistory">完成</view>
				</view>
				<image v-else class="title-img" :src="deleteImg" @click="deleteHistory"></image>
			</view>
			<view class="history-list">
				<view class="history-name" :style="isDelete?'padding:0 32rpx 0 16rpx;':''"
					v-for="(item,index) in historyList" :key="index" @click="clickHis(item,index)">
					{{item}}
					<span class="delete-icon" v-if="isDelete">x</span>
				</view>
			</view>
		</view>

	</view>
</template>
<script>

	import see from '../../../static/see.png'
	import nosee from '../../../static/nosee.png'
	import deleteSrc from '../../../static/delete.png'
	import searchSrc from '../../../static/search.png'
import search from '../../../uni_modules/uview-ui/libs/config/props/search'
	export default {
		props: {
			//输入框placeholder
			placeholder: {
				type: String,
				default: '请输入',
			},
		},
		data() {
			return {
				seeImg: '',
				noSeeImg: '',
				deleteImg: '',
				searchImg: '',
				historyList: [],
				searchText: '', //搜索内容
				seeMore: true,
				isDelete: false
			}
		},
		onLoad() {
			console.log("1");
		
		},
		mounted() {
			this.seeImg = see
			this.noSeeImg = nosee
			this.deleteImg = deleteSrc
			this.searchImg = searchSrc
			this.historyList = uni.getStorageSync('liu-search-name-list') || []
		},
		methods: {
			//删除历史或者完成
			deleteHistory() {
				this.isDelete = !this.isDelete
			},
			//全部删除
			deleteAll() {
				uni.setStorageSync('liu-search-name-list', '')
				this.historyList = []
			},
			// //点击历史搜索
			clickHis(name, index) {
				if (this.isDelete) {
					this.historyList.splice(index, 1)
					uni.setStorageSync('liu-search-name-list', this.historyList)
				} else {
					this.searchText = name
					this.confirmSearch()
				}
			},

			//搜索
			confirmSearch() {
				let oldList = uni.getStorageSync('liu-search-name-list') || []
				
				
				uni.navigateTo({
					url:'/pages/learn/search-result/search-result?search=' + this.searchText
				})
			},
			
			
		}
	}
</script>
<style lang="scss" scoped>
	page {
		background-color: #f8f8f8;
	}

	.page-main {
		width: 100%;
		height: 100vh;
		display: inline-block;

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
				width: 100%;
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

		.search-history {
			padding: 0 20rpx;
			margin-top: 24rpx;

			.history-title {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.title-name {
					font-size: 30rpx;
					color: #666666;
					font-weight: bold;
					margin-left: 12rpx;
				}

				.title-img {
					width: 34rpx;
					height: 34rpx;
					margin-right: 12rpx;
				}

				.history-delete {
					height: auto;
					display: flex;
					align-items: center;
					justify-content: flex-end;

					.delete-all {
						font-size: 26rpx;
						color: #666666;
					}

					.delete-line {
						width: 1px;
						height: 20rpx;
						background-color: #999999;
						margin: 0 12rpx;
					}

					.delete-complete {
						font-size: 26rpx;
						color: #F71E1E;
					}
				}
			}

			.history-list {
				width: 100%;
				display: flex;
				align-items: flex-start;
				justify-content: flex-start;
				flex-wrap: wrap;
				padding: 12rpx 0;

				.history-name {
					height: 48rpx;
					line-height: 48rpx;
					padding: 0 24rpx;
					background-color: #FFFFFF;
					border-radius: 25rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					margin: 10rpx 12rpx;
					font-size: 26rpx;
					color: #666666;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1; //控制显示的行数
					position: relative;

					.delete-icon {
						position: absolute;
						font-size: 26rpx;
						color: #e4e4e5;
						right: 12rpx;
						bottom: 2rpx;
					}
				}
			}
		}
	}
</style>
