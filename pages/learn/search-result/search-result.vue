<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">搜索结果</block>
		</cu-custom>
		<view class="" v-for="item in searchResData" :id="item._id">
			<course-list :courseData="item"></course-list>
		</view>
		
	</view>
</template>

<script>
	const db = uniCloud.database()
	const dbCmd = db.command
	export default {
		data() {
			return {
				searchResData: [],  //搜索结果数据
				searchText: '', //搜索词
			};
		},
		onLoad(e) {
			console.log(e);
			this.searchText = e.search
			this.searchData()
		},
		methods: {
			async searchData() {
				
				        
			let text=this.searchText;//用户文本输入的值			
			let courseTemp = db.collection("course_video").where({course_name:new RegExp(text)}).field("_id,course_name,courseCover,user_id,publish_date").orderBy("like_count").getTemp()
			
			const userTemp = db.collection('uni-id-users').field("_id,username,nickname,avatar_file").getTemp()
			
			
			let res = await db.collection(courseTemp,userTemp).get()
			this.searchResData = res.result.data
			console.log(this.searchResData);
		    }   
		}
	}
</script>

<style lang="scss">

</style>
