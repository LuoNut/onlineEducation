<template>
	<view class="course-container">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">课程</block>
		</cu-custom>

		<view class="content">
			<view class="top">

				<!-- 课程名称 -->
				<view class="item-box">
					<text class="iconfont icon-kecheng"></text>
					<text class="text">课程</text>
					<input v-model="courseData.courseName" class="text" type="text" placeholder="请输入课程名称">
				</view>

				<!-- 课程类型 -->
				<view class="item-box courseType" @click="selectionType" >
					<view class="hint">					
						<text class="iconfont icon-fuxi"></text>
						<text v-if="!courseData.courseType.length" class="text">请选择课程的类型</text>
						<view v-else >
							<text style="margin-right: 80rpx;">{{courseData.courseType[0]}}</text>
							<text>{{courseData.courseType[1]}}</text>
						</view>
						
						
					</view>

					<u-icon name="arrow-right"></u-icon>
				</view>
				
				
				<u-picker :show="courseTypeShow" ref="uPicker" :columns="columns" @confirm="confirm" @change="changeHandler">
				</u-picker>
				
				<!-- 课程简介 -->
				<view style="margin-top: 20rpx;"  class="简介">
					<u--textarea border="bottom" v-model="courseData.courseIntro" placeholder="请输入课程简介内容" count ></u--textarea>
				</view>
				
				

				<!-- 课程班级 -->
				<view class="item-box" v-for="(item, index) in courseData.classList">
					<view class="left">
						<text class="iconfont icon-Friends"></text>
						<text class="text">班级</text>
						<input v-model="item.courseClass" class="text" type="text" placeholder="请输入班级名称">
					</view>
					<text class="right iconfont icon-shanchu" @click="delItem(item)"></text>
				</view>
				<view class="add">
					<text class="add-class iconfont icon-jiahao2fill-copy" @click="addItem"></text>
					<text>新增班级</text>
				</view>

			</view>
		</view>
		<view class="bottom">
			<u-button @click="toClassVideo" type="primary" text="下一步"></u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 1,
				courseType: [], //课程类型
				courseData: {
					courseName: '', //课程名称
					courseType: [], //课程类型
					courseIntro: '' ,//课程简介
					classList: [{
						id: 1,
						courseClass: '' ,//课程班级
					}],
				},
				
				courseTypeShow: false, //选择器是否显示
				columns: [
					['计算机', '理学，工学，农学','外语','心理学','音乐与艺术','文史哲学','医学与保健 ','教育教学'],
					['计算机基础', '软件工程', '网络与安全技术', '硬件系统及应用','前端开发']
				],
				columnData: [
					['计算机基础', '软件工程', '网络与安全技术', '硬件系统及应用','前端开发'],
					['力学', '机械', '材料', '电气信息','土木', '工学', '化学', '数学'],
					['听力口语', '语法阅读', '写作翻译', '四六级','雅思', '其它语言'],
					['心理学'],
					['文学文化', '新闻传播', '哲学', '历史','政治'],
					['设计，创作', '艺术学', '美术学', '戏剧与影视','设计学', '音乐与舞蹈'],
					['体育教育', '基础医学', '临床医学', '公共卫生','口腔医学', '中医药医学', '药学', '护理学', '老年医学', '儿医学', '妇产科学','急诊与灾难医学'],					
					['教学方法', '教学能力', '信息化教学', '职业素养','学科教学', '素质教育', '体育教学', '学前教育'],
				]
			};
		},
		methods: {
			//点击选择课程类型按钮
			selectionType() {
				this.courseTypeShow = true
			},
			// 选择器的功能逻辑
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
				console.log('confirm', e.value)
				this.courseData.courseType = e.value
				this.courseTypeShow = false
			},

			//增加班级
			addItem() {
				let add = {
					id: parseInt(this.id) + 1,
					courseClass: '',
				}
				this.courseData.classList.push(add)
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
				this.courseData.classList = this.courseData.classList.filter((i) => {
					return i != item
				})
			},
			//下一步按钮
			toClassVideo() {
				uni.setStorageSync('courseData', this.courseData)
				console.log(this.courseData);
				uni.navigateTo({
					url: '/pages/teacher/course-video/course-video'
				})
			}
		}
	}
</script>

<style lang="scss">
	.course-container {
		height: 94vh;
		overflow: auto;
		.content {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			
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
				.courseType {
					display: flex;
					justify-content: space-between;
					align-items: center;
					.hint {
						display: flex;
						align-items: center;
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
		
		.bottom {
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
		}
	
	}
</style>
