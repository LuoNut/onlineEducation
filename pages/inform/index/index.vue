<template>
	<view class="content">
		
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">通知</block>
		</cu-custom>
		
		<view  v-for="item in dataArr" :key="item.id">
			<inform-item :item="item"></inform-item>
		</view>
	</view>
</template>

<script>
	const db = uniCloud.database()
	export default {
		data() {
			return {
				dataArr: []
			}
		},
		onLoad() {
			this.getArticleData()
		},
		//上滑触底
		onReachBottom() {
			this.getArticleData()
		},
		//下拉刷新
		onPullDownRefresh() {
			this.dataArr = [] 
			this.getArticleData()
		},
		methods: {
			
			//获取文章数据
			async getArticleData() {
				let informTemp = db.collection("inform").getTemp()
				let userTemp = db.collection('uni-id-users').field("_id,username,nickname,avatar_file").getTemp()
				
				let res = await db.collection(informTemp, userTemp).get()
				this.dataArr = res.result.data
				
				console.log(this.dataArr);
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		height: 100vh;
		background-color: #fff;
	}	
</style>
