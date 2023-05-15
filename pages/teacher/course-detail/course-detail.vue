<template>
	<view class="course-detail-container">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">课程</block>
		</cu-custom>
		<view class="course-container">
			<view class="content">
				<view class="top">
		
					<!-- 课程名称 -->
					<view class="item-box">
						<text class="iconfont icon-kecheng"></text>
						<text class="text">课程</text>
						<input v-model="courseData.course_name" class="text" type="text" placeholder="请输入课程名称">
					</view>
		
					<!-- 课程类型 -->
					<view class="item-box courseType" @click="selectionType" >
						<view class="hint">					
							<text class="iconfont icon-fuxi"></text>
							<view >
								<text style="margin-right: 80rpx;">{{courseData.subject_type_one}}</text>
								<text>{{courseData.subject_type_two}}</text>
							</view>
							
							
						</view>
		
						<u-icon name="arrow-right"></u-icon>
					</view>
					
					
					<u-picker :show="courseTypeShow" ref="uPicker" @cancel="onCancel" :columns="columns" @confirm="confirm" @change="changeHandler">
					</u-picker>
					
					<!-- 课程简介 -->
					<view style="margin-top: 20rpx;"  class="简介">
						<u--textarea border="bottom" v-model="courseData.course_intro" placeholder="请输入课程简介内容" count ></u--textarea>
					</view>
					
					
		
					<!-- 课程班级 -->
					<view class="item-box" v-for="(item, index) in classList">
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
		</view>
		
		<view class="course-vid-container">
			<view class="content">
				<!-- 上传课件 -->
				<view class="item-box">
					<view class="course-content">
						<uni-file-picker fileMediatype="all" @select="upCoursewareSelect" @success="upCoursewareSuccess"
							ref="coursewareFiles" :auto-upload="false">
							<u-button plain class="select-button" type="primary" icon="plus" text="更换课件"></u-button>
						</uni-file-picker>
						<button class="upload-button" @click="coursewareUpload">上传</button>
					</view>
				</view>
				
				<!-- 上传课程封面 -->
				<view class="item-box">
					<view class="course-content">
						<uni-file-picker file-extname="png,jpg" fileMediatype="all" @success="upCourseCoverSuccess"
							ref="courseCoverFiles" :auto-upload="false">
							<u-button plain class="select-button" type="primary" icon="plus" text="更换封面"></u-button>
						</uni-file-picker>
						<button class="upload-button" @click="courseCoverUpload">上传</button>
					</view>
				</view>
		
				<!-- 上传课程视频 -->
				<view class="item-box" v-for="(item, index) in oldcourseData.course_video">
					<view class="course-title">
						<u--input v-model="item.section" placeholder="请输入章节标题" border="bottom" clearable></u--input>
						<text v-if="item.id !== 1" class="right iconfont icon-shanchu" @click="delItem(item)"></text>
		
					</view>
					<view class="course-content">
						<uni-file-picker v-model="item.videoSrc" fileMediatype="video" mode="grid" @select="select" @progress="progress"
							@success="success" @fail="fail" @delete="deleteFile" ref="files" :auto-upload="false">
							<u-button plain class="select-button" type="primary" icon="plus" text="添加课程"></u-button>
						</uni-file-picker>
						<button class="upload-button" @click="upload(index)">上传</button>
					</view>
				</view>
				<view class="add">
					<text class=" add-class iconfont icon-jiahao2fill-copy" @click="addItemVideo"></text>
					<text>新增章节</text>
				</view>
		
			</view>
		
			<view class="bottom">
				<u-button @click="ondelectCourse" type="error" text="删除"></u-button>
				<u-button @click="onAccomplish" type="primary"  text="完成"></u-button>
			</view>
		
		</view>
	</view>
</template>

<script>
	const db = uniCloud.database()
	export default {
		data() {
			return {
				courseId:'', //课程id
				oldcourseData: {},//旧课程数据
				courseData: {}, //课程数据
				
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
				
				cId: 1, //初始班级id
				classList: [], //班级数据
				oldClassList: [],  //旧的班级数据用以对比
				
				Vid:1 , //初始章节id
				currentIndex: 0, //当前操作的章节
				
				courseTotalTime:[], //课程视频时间记录
				totalTime: null, //课程总时间
				courseNum: null, //课程视频数量
			};
		},
		onLoad(e) {
			console.log(e.courseId);
			this.courseId = e.courseId
			this.getCourseData()
		},
		watch: {
			
		},
		methods: {
			//获取课程数据
			async getCourseData() {
				const res = await db.collection("course_video").where(`"${this.courseId}" == _id`)
					.field("course_name,subject_type_one,subject_type_two,course_intro,courseware,courseCover,course_video,course_time,course_video_num")
					.get()
				this.courseData = res.result.data[0]
				
                this.oldcourseData = JSON.parse(JSON.stringify(res.result.data[0]))
				
				this.Vid = this.courseData.course_video.length
				console.log(this.courseData.course_video)
				console.log(this.courseData);
				
				const resClass = await db.collection("teacher_course").where(`"${this.courseId}" == course && user_id == $cloudEnv_uid`).field("class").get()
				console.log(resClass.result.data)
				resClass.result.data.forEach((item, index) => {
					console.log(item.class);
					this.classList.push({
						"id": index,
						"courseClass": item.class 
					})
					this.cId = this.classList.length
					this.oldClassList = JSON.parse(JSON.stringify(this.classList))
					
				})
			},
			
			//课程类型选择器。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
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
				this.courseData.subject_type_one = e.value[0]
				this.courseData.subject_type_two = e.value[1]
				this.courseTypeShow = false
			},
			
			//点击picker的取消按钮
			onCancel() {
				this.courseTypeShow = false
			},
			
			// 班级部分。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
			//增加班级
			addItem() {
				let add = {
					id: parseInt(this.cId) + 1,
					courseClass: '',
				}
				this.classList.push(add)
				this.cId = parseInt(this.cId) + 1
				console.log(this.cId);
			},
			//删除班级
			delItem(item) {
				if (item.cId == 1) {
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
			
			//增加章节
				addItemVideo() {
					let add = {
						id: parseInt(this.Vid) + 1,
						section: "",
						videoSrc: []
					}
					this.oldcourseData.course_video.push(add)
					
					this.courseData.course_video.push(JSON.parse(JSON.stringify(add)))
					this.Vid = parseInt(this.Vid) + 1
				},
				//删除章节
				delItem(item) {
					if (item.Vid == 1) {
						uni.showToast({
							title: '不能删除第1个',
							icon: 'none'
						})
						return false;
					}
					this.courseData.course_video = this.courseData.course_video.filter((i) => {
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
					console.log(index);
					this.currentIndex = index
					console.log(this.currentIndex);
					this.$refs.files[index].upload()
				},
				// 获取上传状态
				select(e) {
					console.log(e);
					this.courseTotalTime.push({
						"cloudPath": e.tempFiles[0].file.cloudPath,
						"duration": e.tempFiles[0].file.duration
					})
					console.log(this.courseTotalTime);
					console.log(this.courseData);
				},
				
				//取消课程文件的上传
				deleteFile(e) {
					console.log(e);
					this.courseTotalTime.forEach((item, index) => {
						if(item.cloudPath == e.tempFile.cloudPath) {
							this.courseTotalTime.splice(index, 1)
						}
					})
					
					this.courseData.course_video.forEach((item,index) => {
						item.videoSrc.forEach((item1, index1) => {
							if (item1.src == e.tempFile.src) {
								this.courseData.course_video[index].videoSrc.splice(index,1)
							}
						})
					})
					this.courseData.course_video_num -= 1
					console.log(this.courseTotalTime);
				},
				
				// 获取上传进度
				progress(e) {
					console.log('上传进度：', e)
					console.log(this.courseData);
				},
			
				// 上传成功
				success(e) {
					console.log(e);
					let videoObj = {}
					console.log(this.courseData);
					console.log(this.oldcourseData);
					e.tempFiles.forEach(item => {
						videoObj.name = item.name.substring(0, item.name.indexOf('.'));
						videoObj.src = item.url
						videoObj.size = item.size
						//将视频地址放入
						this.courseData.course_video[this.currentIndex].videoSrc.push(videoObj)
						console.log(videoObj);
						videoObj = {}
					})
					
					this.courseData.course_video_num += 1
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
						this.courseData.courseware.push(videoObj)
					})
				},
				
				//上传封面成功
				upCourseCoverSuccess(e) {
					console.log(e.tempFilePaths[0]);
					this.courseData.courseCover = e.tempFilePaths[0]
				},
				
				//计算课程的总时间数与课程视频总数量
				courseToTime() {
					this.courseNum = this.courseTotalTime.length
					this.courseTotalTime.forEach(item => {
						this.totalTime += item.duration
					})
					console.log(this.totalTime);
					this.courseData.course_time += this.totalTime
				},
				//统一章节标题
				uniformHeading() {
					this.oldcourseData.course_video.forEach((item, index) => {
						this.courseData.course_video[index].section = item.section
					})
				},
			
				//点击完成按钮
				onAccomplish() {
					// db.collection('teacher_course').remove()
					this.uniformHeading()
					this.courseToTime()
					this.upCourseData()
					console.log(this.courseData);
					console.log(this.oldcourseData);
					console.log(this.classList);
					
				},
				//更新课程数据
				async upCourseData() {
					uni.showLoading({
						title: "上传中...",
						mask: true
					})
					delete this.courseData._id
					let res =  await db.collection('course_video').where(`"${this.courseId}" == _id`).update(
					{
						...this.courseData
					}
						
					)
					
					console.log(res);
					this.courseVideoId = res.result.id
									
					this.upTeacherClass()

					uni.hideLoading()
					uni.showToast({
						title: "修改成功"
					})
					
					uni.reLaunch({
						url: '/pages/tabbar/teacher/teacher'
					})
				},
			
				//上传教师的班级数据
				upTeacherClass() {
					console.log(this.classList);
					console.log(this.oldClassList);
					//判断是否改动班级
					if(this.classList.length == this.oldClassList.length) {
						this.classList.forEach( (item,index) => {
							if(this.oldClassList[index].class != item.class) {
								this.upTeacherClassFun()
							}
						})
					} else {
						console.log('1');
						this.upTeacherClassFun()
					}
				},
				//上传教师的班级数据的功能函数
				async upTeacherClassFun() {
					console.log(this.classList);
					console.log(this.courseId);
					let res = await db.collection('teacher_course').where(`"${this.courseId}" == course`).remove()
					console.log(res);
					this.classList.forEach( (item,index) => {
							console.log(1,item.courseClass);
							db.collection('teacher_course').add({
								course: this.courseId,
								class: item.courseClass
							}).then(res => {
								console.log(res);
							})
						})
				},
			
				//删除课程
				ondelectCourse() {
					uni.showModal({
						title:"是否确定删除?",
						success: (e) => {
							console.log(e)
							if(e.confirm) {
								db.collection("course_video").where(`"${this.courseId}" == _id`).remove().then( res => {
									console.log(res);
									console.log("111");
									uni.showToast({
										title:"删除成功!"
									})
									setTimeout(() => {
										uni.reLaunch({
											url: '/pages/tabbar/teacher/teacher'
										})
									},700)
								})
								
								
							}

						}
					})
				}
			
			
		}
	}
</script>

<style lang="scss">
	.course-detail-container {
		height: 93vh;
		overflow: auto;
		.course-container {
			// height: 94vh;
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
			
		}
		.course-vid-container {
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
		
		}
		.bottom {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			display: flex;
			justify-content: space-around;
			.u-button {
				width: 30%;
			}
		
			
			
		}
	}
</style>
