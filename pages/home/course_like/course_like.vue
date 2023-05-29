<template>
	<view class="container">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">我的收藏</block>
		</cu-custom>
		
		<view v-if="listShow">
			<u-empty
			        mode="list"
			        icon="http://cdn.uviewui.com/uview/empty/list.png"
			>
			</u-empty>
		</view>
		<view>
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
				listShow: false,
			};
		},
		onLoad() {
			this.getCourseLike()
		},
		methods: {
			
			async getCourseLike() {
				uni.showLoading({})
				const likeTemp = db.collection("course_like").where(`user_id==$cloudEnv_uid`).orderBy("comment_date desc").getTemp()
				const courseTemp = db.collection('course_video').field("_id,course_name,courseCover,user_id").orderBy("publish_date desc").getTemp()
				const userTemp = db.collection('uni-id-users').field("_id,username,name,avatar_file").getTemp()
				
				let res = await db.collection(likeTemp,courseTemp,userTemp).get()
				
				console.log(res);
				
				res.result.data.forEach( item => {
					item.course_id[0].user_id= item.user_id
					item.course_id[0].publish_date= item.comment_date
				})
				
				console.log(res);
				
				this.courseLike = res.result.data
				uni.hideLoading()
				
				if ( !this.courseLike.length) {
					this.listShow = true
				}
				// console.log(this.courseLike);
			}
		}
	}
</script>

<style lang="scss">

</style>
