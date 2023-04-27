<template>
	<view class="container">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">题库</block>
		</cu-custom>
		
		<view class="warp">
				
			
			<view class="status_bar">
				<!-- 导航栏 -->
			</view>
			<view class="title b-fontw7">
				答题测试
			</view>
		
			<view class="nav-box b-card">
				
				<!-- 课程类型 -->
				<view class="item-box courseType">
					<view class="hint">					
						<view class="options">
							<text>{{courseType[0]}}</text>
							<text>{{courseType[1]}}</text>
						</view>
						
						
					</view>
				</view>
				<u-picker :show="courseTypeShow" ref="uPicker" :columns="columns" @confirm="confirm" @change="changeHandler">
				</u-picker>
				
				
				<!-- <view class="nav-bar-box">
					<view class="nav-bar-item" v-for='(item,index) in list' :key='index' :class="{'nav-bar-item-check':index == current,
					'nav-bar-left':index == 0 && current == index,
					'nav-bar-center':index > 0 && index < list.length-1 && current == index ,
					'nav-bar-right':index == list.length-1 && current == index}" @click="change(index)">
						<view class="">
		
						</view>
						<view class="" style="flex: 1;text-align: center;">
							<view class="nav-bar-title">
								{{item.name}}
								<view class="title-line" v-show="index == current">
		
								</view>
							</view>
						</view>
						<view class="nav-bar-line" v-if="index<list.length-1 && index != current && index != current-1">
						</view>
						<view class="">
						</view>
		
					</view>
				</view> -->
				
		
				<view class="nav-content-box">
					<view class="">
						<view class="nav-content-title b-fontw6">
							题库信息
						</view>
						<view class="nav-content-text b-flex-item-cent">
							<text class="b-traiangle"></text>
							<text>题目总数</text>
							<text class="nav-content-line"></text>
							<text class="b-fontw6">25</text>
						</view>
						<view class="nav-content-text b-flex-item-cent">
							<text class="b-traiangle"></text>
							<text>已答数量</text>
							<text class="nav-content-line"></text>
							<text class="b-fontw6">7</text>
						</view>
					</view>
					<view class=""   @click="selectionType" >
						<view class="img">
							<view class="img-refresh">
								更换答题
							</view>
						</view>
					</view>
				</view>
		
				<view class="nav-btn-box">
					<view class="nav-btn b-fontw6 bg-gradual-blue" @click="goIndex(1)">
						继续答题
					</view>
				</view>
			</view>
		
		</view>
		
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				courseType: [
					'计算机',
					'计算机基础'
				], //题目类型
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
				],
				current: 0
			};
		},
		onLoad() {

		},
		watch: {

		},
		methods: {
			
			//点击选答题程类型按钮
			selectionType() {
				this.courseTypeShow = true
			},
			
			// 回调参数为包含columnIndex、value、values
			confirm(e) {
				console.log('confirm', e.value)
				this.courseType = e.value
				this.courseTypeShow = false
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
			goIndex(mid) {
				uni.navigateTo({
					url: '/pages/answer/reply/reply'
				})
			},
			change(index) {
				this.current = index;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.b-fontw6 {
		font-weight: 600;
	}

	.b-fontw7 {
		font-weight: 700;
	}

	.b-card {
		background-color: #fefefe;
		border-radius: 20rpx;
		box-shadow: 2rpx 2rpx 4rpx #efeef3;
	}

	.b-traiangle {
		display: inline-block;
		width: 0rpx;
		height: 0rpx;
		border-width: 10rpx;
		border-style: solid;
		border-color: transparent transparent transparent #5bc5f9;
		border-radius: 2rpx;
	}

	.b-flex-item-cent {
		display: flex;
		align-items: center;
	}

	.warp {
		color: #404e75;
		min-height: 93vh;
		background: url(https://zhoukaiwen.com/img/learnImg/background2.jpg) no-repeat;
		background-size: cover;
		background-attachment: fixed;
		padding: 30rpx;

		/* 导航栏 */
		.status_bar {
			width: 100%;
			height: 36px;
		}

		.title {
			font-size: 36rpx;
		}

		.nav-box {
			margin-top: 40rpx;
			
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
				width: 100%;
				.hint {
					display: flex;
					align-items: center;
					width: 100%;
					.options {
						display: flex;
						justify-content: space-around;
						width: 100%;
						text {
							width: 50%;
							text-align: center;
							font-size: 40rpx;
							&:first-child {
								border-right: 2rpx solid #ccc;
								margin: 0;
							}
							
						}
					}
				}
			}
			
			.nav-prompt-box {
				width: 100%;
				position: relative;

				.nav-prompt {
					width: calc(100% - 60rpx);
					position: absolute;
					top: -54rpx;
					font-size: 28rpx;
					font-weight: 600;
					background-color: #4CD964;
					color: #f9f9f9;
					background-image: linear-gradient(-90deg, #906cf0, #3f5aef);
					margin: 0 30rpx;
					border-radius: 20rpx;
					padding: 10rpx 20rpx;
				}
			}

			.nav-bar-box {
				display: flex;
				align-items: center;
				justify-content: space-around;

				.nav-bar-item {
					background-color: #f7f7f9;
					flex: 1;
					height: 100rpx;
					font-size: 28rpx;
					font-weight: 600;
					color: #8d94ae;
					display: flex;
					justify-content: center;
					align-items: center;

					.nav-bar-line {
						width: 0;
						height: 30rpx;
						border-left: 2rpx solid #d9d9db;
					}

					&:nth-child(1) {
						border-radius: 20rpx 0 0 0;
					}

					&:nth-last-child(1) {
						border-radius: 0 20rpx 0 0;
					}

					.nav-bar-title {
						position: relative;
						height: 100rpx;
						line-height: 100rpx;

						.title-line {
							position: absolute;
							width: 30rpx;
							height: 0rpx;
							bottom: 2rpx;
							left: calc(50% - 15rpx);
							border-bottom: 2rpx solid #5fc4fa;
						}

						.nav-bar-title-angle {
							position: absolute;
							width: 0rpx;
							height: 0rpx;
							border-width: 20rpx;
							border-style: solid;
							border-color: #6660f4 transparent transparent transparent;
							border-radius: 2rpx;
							top: 0rpx;
							left: calc(50% - 20rpx);
						}
					}
				}

				.nav-bar-item-check {
					width: calc(25% + 100rpx);
					color: #54c8fb;
					// background-color: #fefefe;
					background-repeat: no-repeat;
					background-size: 100% 100%;
				}

				.nav-bar-left {
					background-image: url(https://zhoukaiwen.com/img/learnImg/icon-nav-left.png);
				}

				.nav-bar-center {
					background-image: url(https://zhoukaiwen.com/img/learnImg/icon-nav-center.png);
				}

				.nav-bar-right {
					background-image: url(https://zhoukaiwen.com/img/learnImg/icon-nav-right.png);
				}

				.nav-bar-item-line {
					border-right: 2rpx solid #54c8fb;
				}
			}

			.nav-content-box {
				padding: 30rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.nav-content-title {
					font-size: 28rpx;
					color: #3d4c6d;
					line-height: 60rpx;
				}

				.nav-content-text {
					font-size: 24rpx;
					color: #8d93a3;
					line-height: 48rpx;

					.nav-content-line {
						display: inline-block;
						width: 0;
						height: 16rpx;
						border-left: 2rpx solid #8d93a3;
						margin: 0 16rpx;
					}
				}

				.img {
					width: 160rpx;
					height: 200rpx;
					background-color: #fff;
					border-radius: 10rpx;
					position: relative;
					overflow: hidden;
					background-image: url('/static/images/questionBank.png');
					width: 80px;
					height: 100px;
					background-size: 100%;
					background-repeat: no-repeat;

					.img-refresh {
						position: absolute;
						bottom: 0;
						left: 0;
						width: 100%;
						color: #FFFFFF;
						font-size: 20rpx;
						padding: 6rpx 10rpx;
						background-color: rgba(0, 0, 0, 0.3);
						text-align: center;
					}
				}
			}

			.nav-btn-box {
				padding: 30rpx;

				.nav-btn {
					width: 100%;
					height: 80rpx;
					border-radius: 100rpx;
					// background-color: #5bc5f9;
					text-align: center;
					line-height: 80rpx;
					color: #fffafe;
					font-size: 28rpx;
					box-shadow: 2rpx 2rpx 2rpx #efeef3;
					// background-image: linear-gradient();
				}
			}
		}
	}
	.bannerBox {
		width: 100%;
		margin: 30rpx 0 25rpx 0;
		image {
			width: 100%;
			border-radius: 12rpx;
		}
	}
</style>
