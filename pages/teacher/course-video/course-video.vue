<template>
	<view class="course-vid-container">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">课程上传</block>
		</cu-custom>



		<view class="content">
			<!-- 上传课件 -->
			<view class="item-box">
				<view class="course-content">
					<uni-file-picker fileMediatype="all" @select="upCoursewareSelect" @success="upCoursewareSuccess"
						ref="coursewareFiles" :auto-upload="false">
						<u-button plain class="select-button" type="primary" icon="plus" text="添加课件"></u-button>
					</uni-file-picker>
					<button class="upload-button" @click="coursewareUpload">上传</button>
				</view>
			</view>
			
			<!-- 上传课程封面 -->
			<view class="item-box">
				<view class="course-content">
					<uni-file-picker file-extname="png,jpg" fileMediatype="all" @success="upCourseCoverSuccess"
						ref="courseCoverFiles" :auto-upload="false">
						<u-button plain class="select-button" type="primary" icon="plus" text="添加封面"></u-button>
					</uni-file-picker>
					<button class="upload-button" @click="courseCoverUpload">上传</button>
				</view>
			</view>

			<!-- 上传课程视频 -->
			<view class="item-box" v-for="(item, index) in courseVideoList">
				<view class="course-title">
					<u--input v-model="item.section" placeholder="请输入章节标题" border="bottom" clearable></u--input>
					<text v-if="item.id !== 1" class="right iconfont icon-shanchu" @click="delItem(item)"></text>

				</view>
				<view class="course-content">
					<uni-file-picker fileMediatype="video" mode="grid" @select="select" @progress="progress"
						@success="success" @fail="fail" @delete="deleteFile" ref="files" :auto-upload="false">
						<u-button plain class="select-button" type="primary" icon="plus" text="添加课程"></u-button>
					</uni-file-picker>
					<button class="upload-button" @click="upload(index)">上传</button>
				</view>
			</view>
			<view class="add">
				<text class=" add-class iconfont icon-jiahao2fill-copy" @click="addItem"></text>
				<text>新增章节</text>
			</view>

		</view>

		<view class="bottom">
			<u-button @click="onAccomplish" type="primary" text="完成"></u-button>
		</view>

	</view>
</template>

<script>
	const db = uniCloud.database()
	export default {
		data() {
			return {
				courseTotalTime: [], //每个课程时间的数组
				totalTime: null, //课程总时间
				courseNum: null, //课程视频数量
				currentIndex: 0, //当前操作的章节
				id: 1, //开始的章节id
				courseware: [], //课程的课件
				courseCover: "", //课程封面
				courseVideoList: [{ //总的课程视频数据
					id: 1,
					section: "", //章节标题
					videoSrc: [], //课程视频数据
				}],
				courseData: {},
				courseVideoId: "" //课程视频的id
			}
		},
		onLoad() {
			this.courseData = uni.getStorageSync('courseData')
			console.log(this.courseData);
		},
		methods: {
			//增加章节
			addItem() {
				let add = {
					id: parseInt(this.id) + 1,
					section: "",
					videoSrc: []
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
			//上传课件文件
			coursewareUpload() {
				this.$refs.coursewareFiles.upload()
			},
			//上传封面
			courseCoverUpload() {
				this.$refs.courseCoverFiles.upload()
			},
			
			//上传文件
			upload(index) {
				this.currentIndex = index
				this.$refs.files[index].upload()
			},
			// 获取上传状态
			select(e) {
				this.courseTotalTime.push({
					"cloudPath": e.tempFiles[0].file.cloudPath,
					"duration": e.tempFiles[0].file.duration
				})
				console.log(this.courseTotalTime);
			},
			
			//取消课程文件的上传
			deleteFile(e) {
				console.log(e.tempFile.cloudPath);
				this.courseTotalTime.forEach((item, index) => {
					if(item.cloudPath == e.tempFile.cloudPath) {
						this.courseTotalTime.splice(index, 1)
					}
				})
				console.log(this.courseTotalTime);
			},
			
			// 获取上传进度
			progress(e) {
				console.log('上传进度：', e)
			},

			// 上传成功
			success(e) {
				console.log(e);
				let videoObj = {}
				e.tempFiles.forEach(item => {
					console.log(item);
					videoObj.name = item.name.substring(0, item.name.indexOf('.'));
					videoObj.src = item.url
					videoObj.size = item.size
					//将视频地址放入
					this.courseVideoList[this.currentIndex].videoSrc.push(videoObj)
					videoObj = {}
				})
			},

			// 上传失败
			fail(e) {
				console.log('上传失败：', e)

			},
			// 获取上传课件的状态
			upCoursewareSelect(e) {
				console.log('选择文件：', e)
			},
			//上传课件成功
			upCoursewareSuccess(e) {
				console.log(e);
				let videoObj = {}
				e.tempFiles.forEach(item => {
					videoObj.name = item.name.substring(0, item.name.indexOf('.'));
					videoObj.src = item.url
					videoObj.size = item.size
					//将课件地址放入
					this.courseware.push(videoObj)
				})
			},
			
			//上传封面成功
			upCourseCoverSuccess(e) {
				console.log(e.tempFilePaths[0]);
				this.courseCover = e.tempFilePaths[0]
			},
			
			//计算课程的总时间数与课程视频总数量
			courseToTime() {
				this.courseNum = this.courseTotalTime.length
				this.courseTotalTime.forEach(item => {
					this.totalTime += item.duration
				})
				console.log(this.totalTime);
			},

			//点击完成按钮
			onAccomplish() {
				this.courseToTime()
				this.upCourseData()
				
			},
			//上传课程数据
			async upCourseData() {
				uni.showLoading({
					title: "上传中...",
					mask: true
				})
				let res =  await db.collection('course_video').add({
					course_name: this.courseData.courseName,
					subject_type_one: this.courseData.courseType[0],
					subject_type_two: this.courseData.courseType[1],
					course_intro: this.courseData.courseIntro,
					courseware: this.courseware,
					courseCover: this.courseCover,
					course_video: this.courseVideoList,
					course_time: this.totalTime,
					course_video_num: this.courseNum,
				})
				
				console.log(res);
				this.courseVideoId = res.result.id
				
				
				this.upTeacherClass()
				
				
				uni.hideLoading()
				uni.showToast({
					title: "发布成功"
				})
				
				uni.reLaunch({
					url: '/pages/tabbar/teacher/teacher'
				})
			},

			//上传教师的班级数据
			upTeacherClass() {
				this.courseData.classList.forEach( item => {
					console.log(item.courseClass);
					db.collection('teacher_course').add({
						course: this.courseVideoId,
						class: item.courseClass
					}).then(res => {
						console.log(res);
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	.course-vid-container {
		height: 94vh;
		overflow: auto;

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

				.course-content {
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

		.bottom {
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
		}
	}
</style>
