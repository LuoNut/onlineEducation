<template>
	<view class="container" >
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">课程</block>
		</cu-custom>
		
		<!-- 课程列表 -->
		<view class="course-list">
			<view class="course-item" v-for="item in CuorseManList" :id="item.id" >
				<course-manage-list :courseItem="item" ></course-manage-list>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	const db = uniCloud.database()
	export default {
		data() {
			return {
				CuorseManList: []
			};
		},
		onLoad() {
			this.getCuorseManData()
			
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
			
			async getCuorseManData() {
				
				let courTemp = db.collection("course_video").where(`user_id == $cloudEnv_uid`).field("_id,user_id,courseCover,course_name,course_time,course_video_num").getTemp()
				let userTemp = db.collection("uni-id-users").field("_id,username,nickname").getTemp()
				
				let res = await db.collection(courTemp, userTemp).get()
				
				res.result.data.forEach(item => {
					item.course_time = this.formateTime(item.course_time)

				})

				this.CuorseManList = res.result.data
				
				console.log(this.CuorseManList);
			}
		}
	}
</script>

<style lang="scss">

</style>
