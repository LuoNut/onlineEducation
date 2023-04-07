<template>
	<view>
					<uni-file-picker v-model="imageValue" fileMediatype="video" @select="select"
						@progress="progress" @success="success" @fail="fail" ref="files" :auto-upload="false">
						<u-button plain class="select-button" type="primary" icon="plus" text="添加课程"></u-button>
					</uni-file-picker>
					<button @click="upload">上传文件</button>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				imageValue:[]
			}
		},
		methods:{
			upload(){
				this.$refs.files.upload()
			},
			// 获取上传状态
			select(e) {
				console.log('选择文件：', e)
			},
			// 获取上传进度
			progress(e) {
				console.log('上传进度：', e)
			},
			
			// 上传成功
			success(e) {
				console.log('上传成功', e)
			},
			
			// 上传失败
			fail(e) {
				console.log('上传失败：', e)
			}
		}
	}
</script>
