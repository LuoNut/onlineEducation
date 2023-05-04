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
		<view class="course-class" v-for="item in 2">
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
							<uni-list-item rightText="30人" :title="item.class" :show-extra-icon="true">
							</uni-list-item>
						</uni-list>
					</template>

					<view class="content">
						<view class="info">
							<text>{{item}}</text>
							<view class="plan">
								<text>已看12时/共38时</text>
								<text>已看3课/共12课</text>
							</view>
						</view>
						<view class="schedule">
							<u-line-progress :percentage="30" activeColor="#0081FF"></u-line-progress>
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
			};
		},
		mounted() {
			// console.log(this.courseItem);
			this.getClassData()
		},
		methods: {
			async getClassData() {
				    console.log(this.courseItem);
					let res = await db.collection("teacher_course").where(`"${this.courseItem._id}" == course`).get()		
					console.log(res.result.data);
					
					res.result.data.forEach((item, index) => {
						let itemNum = item.class.slice(0, 8)
						console.log(itemNum);
						db.collection("uni-id-users")
								.where(
									// `"${itemNum}" ~ ^/w{8}.*$ AND studentnumber`
									{
										studentnumber: 
									}
								)
								.field("_id,username,nickname,studentnumber").get().then(resData => {
							console.log(resData);
						})
						^/w{8}.*
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