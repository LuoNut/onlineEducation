<template>
	<view class="course-vid-container">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">课程</block>
		</cu-custom>

		<view class="content">
			<view class="item-box" v-for="(item, index) in courseVideoList">
				<view class="course-title">
					<u--input placeholder="请输入章节标题" border="bottom" clearable></u--input>
					<text v-if="item.id !== 1" class="right iconfont icon-shanchu" @click="delItem(item)"></text>

				</view>
				<view class="course-video">
					<uni-file-picker v-model="imageValue" fileMediatype="video" mode="grid" @select="select"
						@progress="progress" @success="success" @fail="fail" ref="files" :auto-upload="false">
						<u-button plain class="select-button" type="primary" icon="plus" text="添加课程"></u-button>
					</uni-file-picker>
					<button class="upload-button" @click="upload">上传</button>
				</view>
			</view>
			<view class="add">
				<text class=" add-class iconfont icon-jiahao2fill-copy" @click="addItem"></text>
				<text>新增章节</text>
			</view>

		</view>




	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageValue: [],
				id: 1,
				courseVideoList: [{
					id: 1,
					section: "",
					videoSrc: []
				}]
			}
		},
		methods: {
			//增加章节
			addItem() {
				let add = {
					id: parseInt(this.id) + 1
				}
				this.courseVideoList.push(add)
				this.id = parseInt(this.id) + 1
			},
			//删除章节
			delItem(item) {
				if (item.id == 1) {
					uni.showToast({
						title: '不能删除第1个',
						icon: 'none'
					})
					return false;
				}
				this.courseVideoList = this.courseVideoList.filter((i) => {
					return i != item
				})
			},
			//提交按钮
			submitBtn() {
				console.log(this.courseVideoList)
			},
			//上传文件
			upload() {
				this.$refs.files.upload()
			},
			// 获取上传状态
			select(e) {
				console.log('选择文件：', e)
			},
			// 获取上传进度
			progress(e) {
				console.log('上传进度：', e)
			},

			// 上传成功
			success(e) {
				console.log('上传成功', e)
			},

			// 上传失败
			fail(e) {
				console.log('上传失败：', e)
			}
		}
	}
</script>

<style lang="scss">
	.course-vid-container {
		.content {
			.item-box {
				margin-top: 20rpx;
				padding: 20rpx;
				padding-bottom: 82rpx;
				background-color: #fff;

				.course-title {
					display: flex;
					align-items: center;

					.right {
						margin: 0px 13px;
						text-align: center;
						color: #0081ff;
					}
				}

				.course-video {
					position: relative;

					.upload-button {
						position: absolute;
						right: 0;
						bottom: -70rpx;
						width: 110rpx;
						height: 60rpx;
						line-height: 60rpx;
						text-align: center;
						font-size: 24rpx;
						color: #fff;
						background-color: #0081ff;
					}

					.select-button {
						position: absolute;
						left: 0;
						bottom: -70rpx;
						width: 180rpx;
						height: 60rpx;
						line-height: 60rpx;
						font-size: 28rpx;
					}
				}
			}

			.add {
				display: flex;
				padding: 20rpx;
				line-height: 40rpx;

				.add-class {
					font-size: 40rpx;
					color: #0081ff;
					margin-right: 20rpx;
				}
			}


		}
	}
</style>
