<template>
	<view class="container">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">{{courseType.subject_type_two}}</block>
		</cu-custom>
		
		<view class="course-list" v-for="item in courseListData" :id="item._id" >
			<course-list :courseData="item" ></course-list>
		</view>
		
	</view>
</template>

<script>
	const db = uniCloud.database()
	export default {
		data() {
			return {
				courseType: {},
				courseListData:[]
			};
		},
		onLoad(e) {
			this.courseType = e
			
			this.getCourseLike()
		},
		methods: {
			async getCourseLike() {
				const courseTemp = db.collection('course_video')
					.where(`"${this.courseType.subject_type_one}"  == subject_type_one && "${this.courseType.subject_type_two}"  == subject_type_two`)
					.field("_id,course_name,courseCover,user_id")
					.orderBy("publish_date desc")
					.getTemp()
				
				
				const userTemp = db.collection('uni-id-users').field("_id,username,nickname,avatar_file").getTemp()
				
				let res = await db.collection(courseTemp,userTemp).get()
				
				console.log(res);
				
				// res.result.data.forEach( item => {
				// 	item.course_id[0].user_id= item.user_id
				// })
				
				// console.log(res);
				
				this.courseListData = res.result.data
				
			}
		}
	}
</script>

<style lang="scss">

</style>
