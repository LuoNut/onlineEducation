<template>
	<view class="reply">
		<!-- 顶部区域 -->
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">技术栈</block>
		</cu-custom>
		
		<view class="top">
			<comment-item :item="replyItem" :showReply="true" :showClose="true"></comment-item>
		</view>
		<view class="list">
			<view class="row" v-for="item in replyList">
				<comment-item @removeEvn="P_removeEvn" :item="item" :showReply="true"></comment-item>
			</view>
		</view>
		<view  v-if="noComment">
			<u-empty
			        mode="comment"
			        icon="http://cdn.uviewui.com/uview/empty/comment.png"
			>
			</u-empty>
		</view>
		
		<view>
			<comment-frame @commentEvn="P_commentEvn" :commentObj="commentObj" :placeholder="`回复：${giveName(replyItem)}`" ></comment-frame>
		</view>
	</view>
</template>

<script>
	import {giveName} from "../../../utils/tools.js"
		import {store} from "@/uni_modules/uni-id-pages/common/store.js"
	const db = uniCloud.database()
	export default {
		data() {
			return {
				replyItem: null,
				commentObj: {
					article_id:'',
					comment_type:1,
					reply_user_id:"",
					reply_comment_id:"",
				},
				replyList:[],
				noComment:false
			};
		},
		onLoad() {
			let replyItem = uni.getStorageSync("replyItem") || {}

			if(!replyItem) {
				uni.navigateBack()
				return 
			}
			this.replyItem = replyItem
			
			
			this.commentObj.article_id = replyItem.article_id
			this.commentObj.reply_user_id = replyItem.user_id[0]._id
			this.commentObj.reply_comment_id = replyItem._id
			
			//获取评论列表
			this.getArticleComment()

		},
		methods: {
			giveName,
			//无感删除评论
			P_removeEvn(e) {
				let index = this.replyList.findIndex(item => {
					return e==item._id
				})
				this.replyList.splice(index, 1)
			},
			//无感增加二级评论
			P_commentEvn(e) {

				this.replyList.unshift({
					...e,
					"user_id":[store.userInfo],
					"comment_date":Date.now()
				})
			},
			
			//获取二级评论
			async getArticleComment() {
				let commentTemp = db.collection("blog_comment")
				.where(`article_id == "${this.replyItem.article_id}" && comment_type==1 && reply_comment_id=="${this.replyItem._id}"`)
				.getTemp()
				let userTemp = db.collection("uni-id-users").field("_id,username,nickname,avatar_file").getTemp()
				
				let res = await db.collection(commentTemp,userTemp).orderBy("comment_date desc").get()
					
					
				if(!res.result.data.length) return this.noComment = true
				this.replyList = res.result.data
					

			},
		}
	}
</script>

<style lang="scss" scoped>
	.reply {
		.top {
			padding: 30rpx;
			border-bottom: 15rpx solid #eee;
		}
		.list {
			padding: 30rpx 60rpx;
			padding-bottom: 120rpx;
			.row {
				padding-bottom: 15rpx;
			}
		}
	}
</style>
