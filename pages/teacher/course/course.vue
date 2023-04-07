<template>
	<view class="course-container">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">课程</block>
		</cu-custom>

		<view class="content">
			<view class="top">

				//课程名称
				<view class="item-box">
					<text class="iconfont icon-kecheng"></text>
					<text class="text">课程</text>
					<input v-model="classList[0].courseName" class="text" type="text" placeholder="请输入课程名称">
				</view>

				//课程类型
				<u-picker :show="show" ref="uPicker" :columns="columns" @confirm="confirm" @change="changeHandler">
				</u-picker>

				//课程班级
				<view class="item-box" v-for="(item, index) in classList">
					<view class="left">
						<text class="iconfont icon-Friends"></text>
						<text class="text">班级</text>
						<input v-model="item.courseClass" class="text" type="text" placeholder="请输入班级名称">
					</view>
					<text class="right iconfont icon-shanchu" @click="delItem(item)"></text>
				</view>
				<view class="add">
					<text class=" add-class iconfont icon-jiahao2fill-copy" @click="addItem"></text>
					<text>新增班级</text>
				</view>

			</view>
			<view class="bottom">
				<u-button @click="toClassVideo" type="primary" text="下一步"></u-button>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 1,
				classList: [{
					id: 1,
					courseName: '',
					courseClass: ''
				}],
				show: true, //选择器
				columns: [
					['工学', '理学','文学','历史学','哲学','经济学','法学','教育学','农学','医学','管理学','艺术学'],
					['深圳', '厦门', '上海', '拉萨']
				],
				columnData: [
					['力学', '机械工程', '光学工程', '仪器科学与技术','电气工程', '电气工程', '电气工程', '电气工程'],
					['得州', '华盛顿', '纽约', '阿拉斯加']
				]
			};
		},
		methods: {
			changeHandler(e) {
				const {
					columnIndex,
					value,
					values, // values为当前变化列的数组内容
					index,
					// 微信小程序无法将picker实例传出来，只能通过ref操作
					picker = this.$refs.uPicker
				} = e
				// 当第一列值发生变化时，变化第二列(后一列)对应的选项
				if (columnIndex === 0) {
					// picker为选择器this实例，变化第二列对应的选项
					picker.setColumnValues(1, this.columnData[index])
				}
			},
			// 回调参数为包含columnIndex、value、values
			confirm(e) {
				console.log('confirm', e)
				this.show = false
			}

			//增加班级
			addItem() {
				let add = {
					id: parseInt(this.id) + 1,
					courseName: this.classList[0].courseName,
					courseClass: ''
				}
				this.classList.push(add)
				this.id = parseInt(this.id) + 1
				console.log(this.id);
			},
			//删除班级
			delItem(item) {
				if (item.id == 1) {
					uni.showToast({
						title: '不能删除第1个',
						icon: 'none'
					})
					return false;
				}
				this.classList = this.classList.filter((i) => {
					return i != item
				})
			},
			//下一步按钮
			toClassVideo() {
				uni.setStorageSync('courseData', this.classList)
				uni.navigateTo({
					url: '/pages/teacher/course-video/course-video'
				})

			}
		}
	}
</script>

<style lang="scss">
	.course-container {
		height: 100vh;

		.content {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 1244rpx;

			.top {
				.item-box {
					display: flex;
					align-items: center;
					padding: 20rpx;
					background-color: #fff;
					margin-top: 20rpx;

					.iconfont {
						font-size: 36rpx;
						padding-right: 10rpx;
					}

					.text {
						color: #808080;
						margin-right: 40rpx;
					}
				}

				.left {
					display: flex;
				}

				.right {
					margin-left: 90rpx;
					color: #0081ff;
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
	}
</style>
