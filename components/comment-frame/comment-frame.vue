<template>
	<view>
		<view class="commentFrame">
			<uni-easyinput v-model="replyContent" :placeholder="placeholder" suffixIcon="paperplane" @iconClick="goComment" @confirm="goComment" ></uni-easyinput>
		</view>
	</view>
</template>

<script>
	const db = uniCloud.database()
	const utilsObj = uniCloud.importObject('utilsObj',{
		customUI: true // 取消自动展示的交互提示界面
	}) 
	import {store} from "@/uni_modules/uni-id-pages/common/store.js"
	import pageJson from '@/pages.json'
	import {
		getProvince
	} from "@/utils/tools.js"
	export default {
		name:"commentFrame",
		props: {
			commentObj: {
				type: Object,
				default:() => {
					return {}
				}
			},
			placeholder: {
				type:String,
				default: "评论点什么吧..."
			}
		},
		data() {
			return {
				replyContent:"",
			};
		},
		methods: {

			//评论
			async goComment() {
				//判断是否登录
				if(!store.hasLogin) {
					 uni.showModal({
					 	title:"登录才能进行评论哦，是否进行登录？",
						success: (res) => {
							if(res.confirm) {
								uni.navigateTo({
									url: '/' + pageJson.uniIdRouter.loginPage
								})
							}
						}
					 })
					return 
				}
				if(!this.replyContent) {
					uni.showToast({
						title:"评论不能为空！",
						icon:"none"
					})
					return
				}
				let province = await getProvince()
				db.collection("quanzi_comment").add({
					"comment_content": this.replyContent,
					"province": province,
					...this.commentObj
				}).then(res => {
					uni.showToast({
						title:"评论成功",
						icon:"none"
					})
					this.$emit("commentEvn", {
						"comment_content": this.replyContent,
						"province": province
					})
					//回复后清除输入框
					this.replyContent = ""
					
					//在数据库增加评论数
					utilsObj.operation("quanzi_article","comment_count",this.commentObj.article_id,1)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.commentFrame {
		position: fixed;
		left: 0;
		bottom: 0;
		box-sizing: border-box;
		width: 100%;
		padding: 20rpx 30rpx;
		background-color: #fff;
		z-index: 100;
	}
</style>