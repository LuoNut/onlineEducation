<template>
	<view class="list-container">
		<view class="course-title">
			<view class="left">
				<view class="img">
					<image :src="courseItem.courseCover" mode="aspectFill"></image>
				</view>

				<view class="info">
					<text class="title">{{courseItem.course_name}}</text>
					<text class="name">{{courseItem.user_id[0].nickname}}</text>
				</view>
			</view>
			<view class="right">
				<uni-icons type="forward" size="20"></uni-icons>
			</view>
		</view>
		<view class="course-class" v-for="item in studentList">
			<!-- <view class="name">
				计算机一班19514001
			</view>
			<view class="num">
				<text class="people">20人</text>
				<uni-icons type="forward" size="20"></uni-icons>
			</view> -->
			<uni-collapse ref="collapse">
				<uni-collapse-item title-border="none" >
					<template v-slot:title>
						<uni-list :border="false">
							<uni-list-item :rightText="`${item.length}人`" :title="item.class" :show-extra-icon="true">
							</uni-list-item>
						</uni-list>
					</template>

					<view class="content" v-for="item2 in item" :id="item2._id" >
						<view class="info">
							<text>{{item2.studentnumber}}{{item2.name}}</text>
							<view class="plan">
								<text>已看{{item2._id.course_play_history[0] ? formateTime(item2._id.course_play_history[0].play_total_time / 1000) : "0"}}/共{{courseItem.course_time}}</text>
								<text>已看{{item2._id.course_play_history[0] ? item2._id.course_play_history[0].have_watched.length : "0"}}/共{{courseItem.course_video_num}}课</text>
							</view>
						</view>
						<view class="schedule">
							<u-line-progress :percentage="(item2._id.course_play_history[0] ? item2._id.course_play_history[0].have_watched.length : '0') / courseItem.course_video_num * 100" activeColor="#0081FF"></u-line-progress>
						</view>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</view>
	</view>
</template>

<script>
	const db = uniCloud.database()
	export default {
		name: "course-manage-list",
		props: {
			courseItem: Object
		},
		data() {
			return {
				content: '折叠内容主体，可自定义内容及样式，点击按钮修改内容使高度发生变化。',
				studentList: [], //班级学生数据
			};
		},
		mounted() {
			console.log(this.courseItem);
			this.getClassData()
		},
		methods: {
			//时间格式化的功能函数  xx:xx:xx
			formateTime(time) {
			      const h = parseInt(time / 3600)
			      const minute = parseInt(time / 60 % 60)
			      const second = Math.ceil(time % 60)    
			 
			      const hours = h < 10 ? '0' + h : h
			      const formatSecond = second > 59 ? 59 : second
			      return `${hours > 0 ? `${hours}:` : ''}${minute < 10 ? '0' + minute : minute}:${formatSecond < 10 ? '0' + formatSecond : formatSecond}`
			},
			
			//获取班级成员数据
			async getClassData() {
					let res = await db.collection("teacher_course").where(`"${this.courseItem._id}" == course`).get()		
					
					res.result.data.forEach((item, index) => {
						console.log(item.class);
						let userTemp =  db.collection("uni-id-users").where(`"${item.class}" == classId`).field("_id,username,name,studentnumber").getTemp()
						let playTemp = db.collection("course_play_history").where(`"${this.courseItem._id}" == course_id`).getTemp()
						
						db.collection(userTemp, playTemp).get(
						
						).then(resData => {
							resData.result.data.class = item.class
							this.studentList.push(resData.result.data)
							console.log(this.studentList);
						})
					})

					
					
				
				// let res = db.collection("")
			}
		}
	}
</script>

<style lang="scss" scoped>
	.list-container {
		border-radius: 20rpx;
		box-shadow: 0px 2px 4px rgba(26, 26, 26, 0.2);
		padding: 30rpx 30rpx 30rpx 30rpx;
		margin: 30rpx;
		background-color: #fff;

		.course-title {
			display: flex;
			justify-content: space-between;
			padding-bottom: 30rpx;
			border-bottom: 1rpx solid #ccc;

			.left {
				display: flex;

				.img {
					margin-right: 20rpx;

					image {
						width: 70rpx;
						height: 70rpx;
					}
				}

				.info {
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.title {
						font-weight: bold;
					}

					.name {
						font-size: 24rpx;
						color: #999;
					}
				}
			}

			.right {
				display: flex;
				align-items: center;
			}
		}

		.course-class {
			.content {
				padding-top: 25rpx;

				.info {
					display: flex;
					justify-content: space-between;
					align-items: center;

					.plan {
						display: flex;
						flex-direction: column;
					}
				}

				.schedule {
					margin-top: 20rpx;

				}

			}

			// padding: 30rpx 15rpx;
			// display: flex;
			// justify-content: space-between;
			// align-items: center;
			// .num {
			// 	.people {
			// 		margin-right: 10rpx;
			// 	}
			// 	display: flex;
			// 	align-items: center;
			// }
		}
	}
</style>