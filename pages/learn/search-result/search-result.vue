<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">搜索结果</block>
		</cu-custom>
		
		<view v-if="listShow">
			<u-empty
			        mode="list"
			        icon="http://cdn.uviewui.com/uview/empty/list.png"
			>
			</u-empty>
		</view>
		<view>
			<view class="" v-for="item in searchResData" :id="item._id">
				<course-list :courseData="item"></course-list>
			</view>
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
				listShow:false, //没有数据提示
			};
		},
		onLoad(e) {
			console.log(e);
			this.searchText = e.search
			this.searchData()
		},
		methods: {
			async searchData() {
			
			uni.showLoading({})
				        
			let text=this.searchText;//用户文本输入的值			
			let courseTemp = db.collection("course_video").where({course_name:new RegExp(text)}).field("_id,course_name,courseCover,user_id,publish_date").orderBy("like_count").getTemp()
			
			const userTemp = db.collection('uni-id-users').field("_id,username,name,avatar_file").getTemp()
			
			
			let res = await db.collection(courseTemp,userTemp).get()
			this.searchResData = res.result.data
			uni.hideLoading()
			
			if ( !this.searchResData.length) {
				this.listShow = true
			}
			
			console.log(this.searchResData);
		    }   
		}
	}
</script>

<style lang="scss">

</style>
