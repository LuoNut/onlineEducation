<template>
	<view class="container">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">观看历史</block>
		</cu-custom>
		
		<view class="course-list" v-for="item in courseLike" :id="item._id" >
			<course-list :courseData="item.course_id[0]" ></course-list>
		</view>
	</view>
</template>

<script>
	const db = uniCloud.database()
	export default {
		data() {
			return {
				courseLike: []
			};
		},
		onLoad() {
			this.getCourseLike()
		},
		methods: {
			async getCourseLike() {
				const likeTemp = db.collection("course_play_history").where(`user_id==$cloudEnv_uid`).orderBy("play_date desc").getTemp()
				const courseTemp = db.collection('course_video').field("_id,course_name,courseCover,user_id,publish_date").orderBy("publish_date desc").getTemp()
				const userTemp = db.collection('uni-id-users').field("_id,username,nickname,avatar_file").getTemp()
				
				let res = await db.collection(likeTemp,courseTemp,userTemp).get()
				
				console.log(res);
				
				res.result.data.forEach( item => {
					item.course_id[0].user_id= item.user_id
				})
				
				console.log(res);
				
				this.courseLike = res.result.data
				
				//console.log(this.courseLike);
			}
		}
	}
</script>

<style lang="scss">

</style>
