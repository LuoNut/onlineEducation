<template>
	<view class="container">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">观看历史</block>
		</cu-custom>
		
		<view v-if="listShow">
			<u-empty
			        mode="list"
			        icon="http://cdn.uviewui.com/uview/empty/list.png"
			>
			</u-empty>
		</view>
		<view v-else >
			<view class="course-list" v-for="item in courseLike" :id="item._id" >
				<course-list :courseData="item.course_id[0]" ></course-list>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	const db = uniCloud.database()
	export default {
		data() {
			return {
				courseLike: [],
				listShow:false, //没有数据提示
			};
		},
		onLoad() {
			this.getCourseLike()
		},
		methods: {
			async getCourseLike() {
				
				uni.showLoading({})
				
				const likeTemp = db.collection("course_play_history").where(`user_id==$cloudEnv_uid`).orderBy("play_date desc").getTemp()
				const courseTemp = db.collection('course_video').field("_id,course_name,courseCover,user_id,publish_date").orderBy("publish_date desc").getTemp()
				const userTemp = db.collection('uni-id-users').field("_id,username,name,avatar_file").getTemp()
				
				let res = await db.collection(likeTemp,courseTemp,userTemp).get()
				
				
				console.log(res);
				
				res.result.data.forEach( item => {
					item.course_id[0].publish_date= item.play_date
					item.course_id[0].user_id= item.user_id
				})
				
				
				
				this.courseLike = res.result.data
				console.log(this.courseLike);
				uni.hideLoading()
				
				if ( !this.courseLike.length) {
					this.listShow = true
				}
				//console.log(this.courseLike);
			}
		}
	}
</script>

<style lang="scss">

</style>
