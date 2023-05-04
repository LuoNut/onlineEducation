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
			async getCuorseManData() {
				
				let courTemp = db.collection("course_video").where(`user_id == $cloudEnv_uid`).field("_id,user_id,courseCover,course_name").getTemp()
				let userTemp = db.collection("uni-id-users").field("_id,username,nickname").getTemp()
				
				let res = await db.collection(courTemp, userTemp).get()
				
				this.CuorseManList = res.result.data
				
				console.log(this.CuorseManList);
			}
		}
	}
</script>

<style lang="scss">

</style>
