<template>
  <view class="content">
	  
	<cu-custom bgColor="bg-gradual-blue" :isBack="true">
		<block slot="backText">返回</block>
		<block slot="content">通知</block>
	</cu-custom>
	  
    <view class="banner" auto-focus>
      <image class="banner-img" :src="informData.avatar ? informData.avatar.url : ''" mode="aspectFill" ></image>
      
    </view>
	
	<view class="title-area">
	  <text class="title-text">{{informData.title}}</text>
	</view>
	
    <view class="article-meta">
      <text class="article-meta-text article-author">{{informData.user_id ? informData.user_id[0].nickname : ''}}</text>
      <text class="article-meta-text article-text">发表于</text>
	  <text class="article-meta-text article-time" ><uni-dateformat :date="informData.publish_date" format="MM-dd" :threshold="[60000, 3600000]" ></uni-dateformat></text>
    </view>
    <view class="article-content">
      <rich-text :nodes="informData.content" style="font-size: 14px;"></rich-text>
    </view>
    <view class="comment-wrap"></view>
  </view>
</template>

<script>
	const db = uniCloud.database()
	export default {
		data() {
			return {
				informId: '',
				informData: {}
			};
		},
		onLoad(e) {
			this.informId = e.id
			
			this.getArticleData() //获取通知数据
		},
		methods: {
			//获取文章数据
			async getArticleData() {
				let informTemp = db.collection("inform").where(`"${this.informId}" == _id`).getTemp()
				let userTemp = db.collection('uni-id-users').field("_id,username,nickname,avatar_file").getTemp()
				
				let res = await db.collection(informTemp, userTemp).get()
				this.informData = res.result.data[0]
				
				console.log(this.informData);
			},
		}
		
		
	}
</script>

<style lang="scss" scoped >
  /* #ifndef APP-PLUS */
  page {
    min-height: 100%;
	background-color: #ffffff;
  }

  /* #endif */

  .banner {
    height: 180px;
    position: relative;
    background-color: #ccc;
    flex-direction: row;
    overflow: hidden;
	.banner-img {
		width: 100%;
	}
  }

  .banner-img {
    flex: 1;
  }

  .title-area {
    // position: absolute;
    // left: 15px;
    // right: 15px;
    // bottom: 15px;
    // z-index: 11;
	padding: 10px 15px;
  }

  .title-text {
    font-size: 50rpx;
    font-weight: 400;
    line-height: 50rpx;
    lines: 2;
    color: #000;
    overflow: hidden;
  }

  .article-meta {
    padding: 0 15px 10px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  .article-meta-text {
    color: gray;
  }

  .article-text {
    font-size: 12px;
    line-height: 25px;
    margin: 0 10px;
  }

  .article-author {
    font-size: 15px;
  }

  .article-time {
    font-size: 15px;
  }

  .article-content {
    font-size: 15px;
    padding: 0 15px;
    margin-bottom: 15px;
    overflow: hidden;
  }

  /* #ifdef H5 */

  .article-content {
    line-height: 1.8;
  }

  .article-content img {
    max-width: 100%;
  }

  /* #endif */
</style>
