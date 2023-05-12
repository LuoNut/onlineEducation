<template>
  <view class="container">
	  
	  <cu-custom bgColor="bg-gradual-blue" :isBack="true">
	  	<block slot="backText">返回</block>
	  	<block slot="content">我的文章</block>
	  </cu-custom>
	  
	  
    <unicloud-db ref="udb" :where="`user_id==$cloudEnv_uid`" orderby="publish_date desc" v-slot:default="{data, pagination, loading, hasMore, error}" :collection="collectionList" field="user_id,subject_type,title,delState,province,description,content,article_status,view_count,like_count,comment_status,comment_count,last_comment_user_id,picurls,publish_date,last_modify_date">
      <view v-if="error">{{error.message}}</view>
      <view v-else-if="data">
        <uni-list>
          <uni-list-item v-for="(item, index) in data" :key="index" showArrow :clickable="true" @click="handleItemClick(item._id)">
            <template v-slot:body>
              <text>
                <!-- 此处默认显示为_id，请根据需要自行修改为其他字段 -->
                <!-- 如果使用了联表查询，请参考生成的 admin 项目中 list.vue 页面 -->
                {{item.title}}
              </text>
            </template>
          </uni-list-item>
        </uni-list>
      </view>
    </unicloud-db>
  </view>
</template>

<script>
  const db = uniCloud.database()
  export default {
    data() {
      return {
        collectionList: "blog_article",
        loadMore: {
          contentdown: '',
          contentrefresh: '',
          contentnomore: ''
        }
      }
    },
    onPullDownRefresh() {
      this.$refs.udb.loadData({
        clear: true
      }, () => {
        uni.stopPullDownRefresh()
      })
    },
    onReachBottom() {
      this.$refs.udb.loadMore()
    },
    methods: {
      handleItemClick(id) {
        uni.navigateTo({
          url: '/pages/community/detail/detail?id=' + id
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
	.container {
		background-color: #fff;
	}
</style>
