<template>
	<view class="edit">
		
		<!-- 顶部区域 -->
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">发布长文</block>
		</cu-custom>
		
		<view class="container">
			<view class="title">
					<input type="text" v-model="artobj.title" placeholder="请输入完整的标题" placeholder-class="placeholderClass">
				</view>
				<view class="content">
					<editor class="myEdit" placeholder="写点什么吧......" show-img-size show-img-toolbar show-img-resize
						@ready="onEditReady" @focus="onfocus" @statuschange="statuschange"></editor>
				</view>
				<view class="btnGroup">
					<u-button type="primary" @click="onSubmit" text="确认发表" :disabled="!artobj.title.length"></u-button>
				</view>
				<view class="tools" v-show="showTool">
					<view class="item" @click="clickHeader"><text :class="showHeader ? 'active' : ''"
							class="iconfont icon-zitibiaoti"></text></view>
					<view class="item" @click="clickBold"><text :class="showBold ? 'active' : ''"
							class="iconfont icon-zitijiacu"></text></view>
					<view class="item" @click="clickItalic"><text :class="showItalic ? 'active' : ''"
							class="iconfont icon-zitixieti"></text></view>
					<view class="item" @click="clickDivider"><text class="iconfont icon-fengexian"></text></view>
					<view class="item" @click="clickInsertImage"><text class="iconfont icon-charutupian"></text></view>
					<view class="item" @click="okEdit"><text class="iconfont icon-duigoux"></text></view>
				</view>
			</view>
		</view>
		
</template>

<script>
	import {
		getImgSrc,
		getProvince
	} from "@/utils/tools.js"
	const db = uniCloud.database()
	export default {
		data() {
			return {
				showTool: false,
				showHeader: false,
				showBold: false,
				showItalic: false,
				artobj: {
					title: "",
					content: "",
					description: "",
					picurls: [],
					province: "",
					subject_type: "" //当前所在的社区类别
				},
				
			};
		},
		onLoad(e) {
			this.artobj.subject_type = e.subject_type
			getProvince().then(res => {
				this.artobj.province = res
			})
		},
		methods: {
			//点击提交按钮
			onSubmit() {
				uni.showLoading({
					title: "发布中..."
				})
				this.editorCtx.getContents({
					success: (e) => {
						this.artobj.content = e.html
						this.artobj.description = e.text.slice(0, 80)
						this.artobj.picurls = getImgSrc(e.html)
						this.setData()
					}
				})
			},

			//上传到云数据库的功能函数
			setData() {
				db.collection('blog_article').add({
					...this.artobj
				}).then(res => {
					uni.hideLoading()
					uni.showToast({
						title: "发布成功"
					})
					setTimeout(() => {
						uni.navigateBack({
							delta: 1
						})
					}, 800);

				})
			},

			//富文本获取焦点
			onfocus() {
				this.showTool = true
			},

			//初始化
			onEditReady() {
				uni.createSelectorQuery().in(this).select(".myEdit").fields({
					size: true,
					context: true
				}, res => {
					this.editorCtx = res.context
				}).exec()
			},

			//插入分割线
			clickDivider() {
				this.editorCtx.insertDivider()
			},

			//点击标题样式按钮
			clickHeader() {
				this.showHeader = !this.showHeader
				this.editorCtx.format('header', this.showHeader ? 'H1' : false)
			},

			// 点击粗体按钮
			clickBold() {
				this.showBold = !this.showBold
				this.editorCtx.format('bold')
			},

			// 点击斜体按钮
			clickItalic() {
				this.showItalic = !this.showItalic
				this.editorCtx.format('italic')
			},

			//点击图片按钮
			clickInsertImage() {
				uni.chooseImage({
					success: (res) => {
						uni.showLoading({
							title: "上传中...",
							mask: true
						})
						res.tempFiles.forEach(async item => {
							let filres = await uniCloud.uploadFile({
								filePath: item.path,
								cloudPath: item.name
							})
							this.editorCtx.insertImage({
								src: filres.fileID,
							})
							uni.hideLoading()
						})

					}
				})
			},

			//点击确定键
			okEdit() {
				this.showTool = false
			},

			//判断是否使用了某种样式的功能函数	
			checkStatus(name, detail, obj) {
				if (detail.hasOwnProperty(name)) {
					this[obj] = true
				} else {
					this[obj] = false
				}
			},
			
			//当编辑器内样式改变时
			statuschange(e) {
				let detail = e.detail
				this.checkStatus("header", detail, 'showHeader')
				this.checkStatus("bold", detail, 'showBold')
				this.checkStatus("italic", detail, 'showItalic')
			}
		}

	}
</script>

<style lang="scss">
	/deep/ .ql-editor::before {
		font-style: none;
		color: #e0e0e0;
	}

	.edit {
		.container {
			padding: 30rpx;
			.title {
					input {
						height: 120rpx;
						font-size: 46rpx;
						border-bottom: 1rpx solid #e4e4e4;
						margin-bottom: 30rpx;
						color: #000;
			
						.placeholderClass {
							color: #e0e0e0;
						}
					}
				}
			
				.content {
					.myEdit {
						height: calc(100vh - 500rpx);
						margin-bottom: 30rpx;
					}
				}
			
				.tools {
					position: fixed;
					left: 0;
					bottom: 0;
					display: flex;
					justify-content: space-around;
					align-items: center;
					width: 100%;
					height: 80rpx;
					background-color: #fff;
					border-top: 1rpx solid #f4f4f4;
			
					.iconfont {
						font-size: 36rpx;
						color: #333;
			
						&.active {
							color: #0199Fe;
						}
					}
				}
			}
		}
		
</style>
