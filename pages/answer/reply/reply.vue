<template>
	<view class="questions">
		
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">答题</block>
		</cu-custom>
		
		<view class="test-header">
			<view @click="showFixed">题标 {{swiperIndex}}/{{lists.length}}</view>
		</view>
		<swiper :current="swiperIndex - 1" @change="swiperChange" class="questions-cont">
			<swiper-item v-for="(item,index) in lists" :key="index" class="swiper-item">
				<view class="test-main">
					<view class="test-title">
						<text v-if="item.code == 1">单选</text>
						<text v-else>多选</text>
						{{item.title}}
						<view class="test-title-img" v-if="item.src_title != ''">
							<image :src="item.src_title.url" mode="aspectFit" ></image>
						</view>
					</view>
					<view class="test-cont">
						<view v-for="(item2,index2) in item.testList" :key="index2" @click="testItem(index,index2,item.code)" 
						:class="{active_true:(!item.code2 && item2.code) || (item.code == 2 && item2.click_index),active:(item.code == 1 && item2.click_index && !item2.code) || (item.code == 2 && item2.click_index && !item2.code && !item.code2)}">
							<view>{{item.option[index2]}}</view>
							<text v-if="item.isimg == 1">{{item2.name}}</text>
							<image v-else :src="item2.name"></image>
						</view>
					</view>
					
				</view>
				<view class="test-btn" @click="btnNext(index)" v-if="item.code == 2 && item.code2">
					确认选项
				</view>
				<view class="test-describe" v-if="!item.code2">
					<view class="describe-title">
						<text>本题描述</text>
					</view>
					<view class="describe-cont">
						<text>正确答案：<text v-for="(item2,index2) in item.true_option" :key="index2">{{item2}}</text></text>
						<text>您选择的是：<text v-for="(item3,index3) in item.current" :key="index3">{{item.option[item3]}}</text></text>
						<text>原因：{{item.alt}}</text>
					</view>
				</view>
			</swiper-item>
		</swiper>
		<view class="fixed-bottom" :class="{active:show_hide}" @click.stop="hideFixed">
			<view class="tibiao" @click.stop>
				<view class="tibiao-bar">
					<text class="tibiao-no3">{{choice[2]}}</text><!-- 未选择 -->
					<view class="tibiao-null"></view>
					<text class="tibiao-no2">{{choice[1]}}</text><!-- 选择错误 -->
					<view class="tibiao-no"></view>
					<text class="tibiao-yes2">{{choice[0]}}</text><!-- 选择正确 -->
					<view class="tibiao-yes"></view>
				</view>
				<view>
					<text v-for="(item,index) in lists.length" :key="index"
					:class="{active_o:lists[index].topic && !lists[index].code2,active_t:!lists[index].topic && !lists[index].code2}" @click="topic(index)">{{item+1}}</text>
				</view>
			</view>
		</view>
		
		<view class="bottom">
			<u-button class="btn" @click="changeSwiperIndex(0)" type="primary" text="上一题"></u-button>
			<u-button class="btn" @click="changeSwiperIndex(1)" type="primary" text="下一题"></u-button>
		</view>
		
	</view>
</template>

<script>
import { vShow } from "vue";
import noNetwork from "../../../uni_modules/uview-ui/libs/config/props/noNetwork";
	const db = uniCloud.database()
	export default {
		data() {
			return {
				swiperIndex:1,//swiper 当前下标
				show_hide:false,//题标是否隐藏 默认false 为隐藏
				istest:1,//1为练习 2为模拟 3为考试
				choice:[2,2,5],//[选择正确，选择错误，未选择]
				subject_type_one:"",
				subject_type_two:"",
				schema: "",
				a: 0,
				lists: [], 
				lists1:[
					{
						title:'请选择下列正确选项1',//题目
						src_title:'',//题目是否有图片
						isimg:1,//1为文字 2为图片 选项
						code:1,//1为单选 2为多选
						subject_type_one: '', //题目大类型
						subject_type_two: '', //题目小类型
						option:['A','B','C','D'],//选项
						true_option:[0],//正确选项
						current:[0],//当前所选
						topic:true,//所选是否正确 默认为'' true为正确 控制选项高亮
						code2:false,//选项选择状态 默认为true false为选择
						alt:'正确答案正确答案正确答案正确答案正确答案正确答案正确答案正确答案',//本题描述
						testList:[//选项
							{
								name:'正确答案',//选项
								code:true,//是否为正确答案
								click_index:true,//选项是否选中
							},
							{
								name:'错误答案',
								code:false,
								click_index:false,
							},
							{
								name:'错误答案',
								code:false,
								click_index:false,
							},
							{
								name:'错误答案',
								code:false,
								click_index:false,
							}
						]
					},
					{
						title:'请选择下列正确选项2',//题目
						src_title:'',//题目是否有图片
						isimg:1,//1为文字 2为图片 选项
						code:1,//1为单选 2为多选
						option:['A','B','C','D','E'],//选项
						true_option:[1],//正确选项
						current:[3],//当前所选
						topic:false,//所选是否正确 默认为'' true为正确 控制选项高亮
						code2:false,//选项选择状态 默认为true false为选择
						alt:'正确答案正确答案正确答案正确答案正确答案正确答案正确答案正确答案',//本题描述
						testList:[//选项
							{
								name:'错误答案',
								code:false,
								click_index:false,
							},
							{
								name:'正确答案',
								code:true,
								click_index:false,
							},
							{
								name:'错误答案',
								code:false,
								click_index:false,
							},
							{
								name:'错误答案',
								code:false,
								click_index:true,
							},
							{
								name:'错误答案',
								code:false,
								click_index:false,
							}
						]
					},
					{
						title:'请选择下列正确选项3',//题目
						src_title:'',//题目是否有图片
						isimg:1,//1为文字 2为图片 选项
						code:2,//1为单选 2为多选
						option:['A','B','C','D'],//选项
						true_option:[0,2],//正确选项
						current:[1,2],//当前所选
						topic:false,//所选是否正确 默认为'' true为正确 控制选项高亮
						code2:false,//选项选择状态 默认为true false为选择
						alt:'正确答案正确答案正确答案正确答案正确答案正确答案正确答案正确答案',//本题描述
						testList:[
							{
								name:'正确答案',
								code:true,
								click_index:false,
							},
							{
								name:'错误答案',
								code:false,
								click_index:true,
							},
							{
								name:'正确答案',
								code:true,
								click_index:true,
							},
							{
								name:'错误答案',
								code:false,
								click_index:false,
							}
						]
					},
					
					{
						title:'请选择下列正确选项4',
						src_title:'../../static/banner02.jpg',//题目是否有图片
						code:2,//1为单选 2为多选
						option:['A','B','C','D'],
						true_option:[1,2,3],//正确选项
						current:[1,2,3],//当前所选
						topic:true,
						code2:false,
						isimg:1,//1为文字 2为图片 选项
						alt:'正确答案正确答案正确答案正确答案正确答案正确答案正确答案正确答案',
						testList:[
							{
								name:'错误答案',
								code:false,
								click_index:false,
							},
							{
								name:'正确答案',
								code:true,
								click_index:true,
							},
							{
								name:'正确答案',
								code:true,
								click_index:true,
							},
							{
								name:'正确答案',
								code:true,
								click_index:true,
							}
						],
					},
					{
						title:'请选择下列正确选项5',//题目
						src_title:'',//题目是否有图片
						isimg:1,//1为文字 2为图片 选项
						code:1,//1为单选 2为多选
						option:['A','B','C','D'],//选项
						true_option:[0],//正确选项
						current:[],//当前所选
						topic:'',//所选是否正确 默认为'' true为正确 控制选项高亮
						code2:true,//选项选择状态 默认为true false为选择
						alt:'正确答案正确答案正确答案正确答案正确答案正确答案正确答案正确答案',//本题描述
						testList:[//选项
							{
								name:'正确答案',//选项
								code:true,//是否为正确答案
								click_index:false,//选项是否选中
							},
							{
								name:'错误答案',
								code:false,
								click_index:false,
							},
							{
								name:'错误答案',
								code:false,
								click_index:false,
							},
							{
								name:'错误答案',
								code:false,
								click_index:false,
							}
						]
					},
					{
						title:'请选择下列正确选项6',//题目
						src_title:'',//题目是否有图片
						isimg:1,//1为文字 2为图片 选项
						code:2,//1为单选 2为多选
						option:['A','B','C','D','E'],//选项
						true_option:[0,2,4],//正确选项
						current:[],//当前所选
						topic:'',//所选是否正确 默认为'' true为正确 控制选项高亮
						code2:true,//选项选择状态 默认为true false为选择
						alt:'正确答案正确答案正确答案正确答案正确答案正确答案正确答案正确答案',//本题描述
						testList:[//选项
							{
								name:'正确答案',
								code:true,
								click_index:false,
							},
							{
								name:'错误答案',
								code:false,
								click_index:false,
							},
							{
								name:'正确答案',
								code:true,
								click_index:false,
							},
							{
								name:'错误答案',
								code:false,
								click_index:false,
							},
							{
								name:'正确答案',
								code:true,
								click_index:false,
							}
						]
					},
					{
						title:'请选择下列正确选项7',//题目
						src_title:'',//题目是否有图片
						isimg:1,//1为文字 2为图片 选项
						code:2,//1为单选 2为多选
						option:['A','B','C','D'],//选项
						true_option:[1,3],//正确选项
						current:[],//当前所选
						topic:'',//所选是否正确 默认为'' true为正确 控制选项高亮
						code2:true,//选项选择状态 默认为true false为选择
						alt:'正确答案正确答案正确答案正确答案正确答案正确答案正确答案正确答案',//本题描述
						testList:[
							{
								name:'错误答案',
								code:false,
								click_index:false,
							},
							{
								name:'正确答案',
								code:true,
								click_index:false,
							},
							{
								name:'错误答案',
								code:false,
								click_index:false,
							},
							{
								name:'正确答案',
								code:true,
								click_index:false,
							}
						]
					},
					{
						title:'请选择下列正确选项8',
						src_title:'',//题目是否有图片
						code:2,//1为单选 2为多选
						option:['A','B','C','D'],
						true_option:[1,2,3],//正确选项
						current:[],//当前所选
						topic:'',
						code2:true,
						isimg:2,//1为文字 2为图片 选项
						alt:'正确答案正确答案正确答案正确答案正确答案正确答案正确答案正确答案',
						testList:[
							{
								name:'../../static/banner01.jpg',
								code:false,
								click_index:false,
							},
							{
								name:'../../static/banner02.jpg',
								code:true,
								click_index:false,
							},
							{
								name:'../../static/banner03.jpg',
								code:true,
								click_index:false,
							},
							{
								name:'../../static/banner04.jpg',
								code:true,
								click_index:false,
							}
						],
					},
					{
						title:'请选择下列正确选项9',
						src_title:'../../static/banner02.jpg',//题目是否有图片
						code:2,//1为单选 2为多选
						option:['A','B','C','D'],
						true_option:[1,3],//正确选项
						current:[],//当前所选
						topic:'',
						code2:true,
						isimg:1,//1为文字 2为图片 选项
						alt:'正确答案正确答案正确答案正确答案正确答案正确答案正确答案正确答案',
						testList:[
							{
								name:'错误答案',
								code:false,
								click_index:false,
							},
							{
								name:'正确答案',
								code:true,
								click_index:false,
							},
							{
								name:'错误答案',
								code:false,
								click_index:false,
							},
							{
								name:'正确答案',
								code:true,
								click_index:false,
							}
						],
					}
				]
			};
		},
		onLoad(e) {
			console.log(e);
			this.subject_type_one = e.subject_type_one
			this.subject_type_two = e.subject_type_two
			console.log(this.subject_type_one, this.subject_type_two);
			this.schema = e.schema
			if (e.schema == 'question_bank') {
				console.log('1');
				this.getAnswer()
			}else {
				this.getErrorAnswer()
			}
			
		},
		methods:{
			
			//获取错题的功能函数
			async getErrorAnswer() {
				let recordTemp = db.collection("record_questions").getTemp()
				console.log(this.subject_type_one, this.subject_type_two);
				let quesTemp = db.collection("question_bank")
					.where(`"${this.subject_type_one}" == subject_type_one && "${this.subject_type_two}" == subject_type_two`)
					.getTemp()
				
				let res = await db.collection(quesTemp, recordTemp)
					.get()
				console.log(res);
				if(!res.result.data.length) {
					uni.showToast({
						title:"暂时没有更多题目哦...",
						icon: "none"
					})
					setTimeout(function() {uni.navigateBack()}, 1000);
					
				}
				this.lists = res.result.data
				
				
				
			},
			
			//获取题库数据的功能函数
			async getAnswer() {
				let res = await db.collection("question_bank")
					.where(`"${this.subject_type_one}" == subject_type_one && "${this.subject_type_two}" == subject_type_two && estimate == 3`)
					.get()
				console.log(res);
				if(!res.result.data.length) {
					uni.showToast({
						title:"暂时没有更多题目哦...",
						icon: "none"
					})
					setTimeout(function() {uni.navigateBack()}, 1000);
					
				}
				this.lists = res.result.data
				
			},
			
			//点击下一题或者上一题
			changeSwiperIndex(e) {
				if (e) {
					if(this.swiperIndex >= this.lists.length) {
						uni.showModal({
							content:"没有更多了哦...",
							showCancel: false 
						})
						return
					}
					this.swiperIndex += 1
				}else {
					if(this.swiperIndex <= 1 ) {
						return
					}
					this.swiperIndex -= 1
				}
			},

			swiperChange(e){ //swiper滑动
			console.log(e);
				this.swiperIndex = e.detail.current + 1; //当前题
			},
			//记录题目正确/错误情况
			async recordError(e) {
				let res = await db.collection("record_questions").where(`"${this.lists[this.swiperIndex - 1]._id}" == question_id`).get()
				
				if(res.result.affectedDocs) {
					await db.collection("record_questions").where(`"${this.lists[this.swiperIndex - 1]._id}" == question_id`).update({
						"estimate": e
					})
					
				}else {
					db.collection("record_questions").add({
						"question_id": this.lists[this.swiperIndex - 1]._id,
						"estimate": e
					})
				}
				
				
			},
			
			testItem(a,b,c){// a:当前题  b:当前选项 c:单选多选】
				let that = this
				if(that.lists[a].code2){//当前题是否已选
					that.lists[a].testList[b].click_index = !that.lists[a].testList[b].click_index//切换选项选中状态
					if(c == 1){//为1 表示单选
						that.lists[a].code2 = false //为false 则表示已选
						that.lists[a].current = [b]
						if(that.lists[a].testList[b].code){
							that.lists[a].topic = true
							that.swiperIndex ++
							that.choice[0] ++
							that.choice[2] --
							this.recordError(1) //记录对错情况
						}else{
							that.lists[a].topic = false
							that.choice[1] ++
							that.choice[2] --
							this.recordError(0) //记录对错情况
						}
					}
				}
			},
			btnNext(e){ //多选 确认按钮
				let that = this
				let a = []
				that.lists[e].testList.forEach( (item,index) =>{
					if(item.click_index == true){
						that.lists[e].current.push(index)
						if(item.code == true){
							a.push(index)
						}
					}
				})
				console.log(that.lists[e].current.length > 0);
				if(that.lists[e].current.length > 0){
					that.lists[e].code2 = false
					console.log(a.length, that.lists[e].true_option.length, that.lists[e].current.length);
					if(a.length == that.lists[e].true_option.length && a.length == that.lists[e].current.length){
						that.lists[e].topic = true
						this.swiperIndex ++
						that.choice[0] ++
						that.choice[2] --
						this.recordError(1) //记录对错情况
					}else{
						that.lists[e].topic = false
						that.choice[1] ++
						that.choice[2] --
						this.recordError(0) //记录对错情况
					}
				}else{
					uni.showToast({
					    title: '请选择选项',
						icon:'none',
					    duration: 1500
					});
				}
			},
			topic(e){
				console.log(this.lists[e].true_option,this.lists[e].current,!this.lists[e].code2);
				this.swiperIndex = e + 1
				this.show_hide = !this.show_hide
			},
			showFixed(){
				this.show_hide = !this.show_hide
			},
			hideFixed(){
				this.show_hide = !this.show_hide
			},
			nullFixed(){
				//占位 不可删
			}
		}
	}
</script>

<style lang="less" scoped>
	.questions{
		position: relative;
		height:100vh;
		.test-header{
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 34px;
			line-height: 34px;
			border-bottom: solid 1px #ddd;
			view{
				color:#555;
				font-size: 14px;
				display: flex;
			}
		}
		.questions-cont{
			height: calc(100% - 125px);
			display: flex;
			flex-wrap: nowrap;
			transition: all .5s;
			.swiper-item{
				width:100vw;
				min-width:100vw;
				max-width:100vw;
				height:100%;
				overflow: auto;
				.test-main{
					padding:0 20rpx;
					margin:30rpx 30rpx 20rpx 30rpx;
					background:#fff;
					.test-title{
						font-size: 16px;
						color:#333;
						padding:20rpx 0;
						text{
							font-size: 10px;
							color:#fff;
							background:#aaa;
							padding:2px 5px;
							margin-right:5px;
							border-radius: 3px;
						}
						.test-title-img{
							margin:20rpx auto;
							text-align: center;
							image{
								width:500rpx;
								height:250rpx;
							}
						}
					}
					.test-cont{
						display: flex;
						flex-direction: column;
						padding-bottom: 20rpx;
						&>view{
							min-height: 40px;
							line-height: 40px;
							display: flex;
							view{
								width:30px;
								height:30px;
								line-height: 30px;
								margin-top:4px;
								margin-right:7px;
								font-size: 14px;
								border:solid 1px #ddd;
								border-radius: 50%;
								box-shadow:2px 2px 5px #e5e5e5;
								text-align: center;
								color:#666;
							}
							image{
								max-width: 560rpx;
								max-height:280rpx;
								margin-bottom: 20rpx;
							}
							text{
								font-size: 13px;
								color:#555;
							}
							&.active_true{
								view{
									background:#0081FF;
									border:solid 1px #0081FF;
									color:#fff;
									font-size: 15px;
								}
								text{
									color:#0081FF;
								}
							}
							&.active{
								view{
									background:#FF6667;
									border:solid 1px #FF6667;
									color:#fff;
									font-size: 15px;
								}
								text{
									color:#FF6667;
								}
							}
						}
					}
				}
				.test-btn{
					background:#1FB19E;
					font-size: 14px;
					border-radius: 6px;
					text-align: center;
					line-height: 40px;
					color:#fff;
					height:40px;
					width:150px;
					margin:20px auto;
				}
				.test-describe{
					padding:0 20rpx;
					margin-bottom: 20px;
					border-top:solid 1px #ccc;
					.describe-title{
						height:48px;
						line-height: 48px;
						display: flex;
						text{
							color:#666;
							font-size: 12px;
						}
						image{
							width:14px;
							height:14px;
							margin-top:17px;
							margin-left:3px;
						}
					}
					.describe-cont{
						// background:#f5f5f5;
						padding:12rpx;
						display: flex;
						flex-direction: column;
						&>text{
							color:#666;
							font-size: 14px;
							line-height: 24px;
							&:nth-child(3){
								font-size: 12px;
								line-height: 20px;
							}
						}
					}
				}
			}
		}
		.fixed-bottom{
			width:100%;
			height:100%;
			position: fixed;
			left:0;
			top:0;
			z-index: 999;
			background:rgba(0,0,0,.4);
			pointer-events: none;
			opacity: 0;
			transition:all .3s;
			.tibiao{
				position: absolute;
				bottom:0;
				left:0;
				background: #fff;
				width:100%;
				overflow: auto;
				height: 50%;
				padding:30rpx 20rpx;
				.tibiao-bar{
					display: flex;
					flex-direction: row-reverse;
					padding-bottom: 30rpx;
					border-bottom: solid 1px #ddd;
					height:16px;
					line-height: 16px;
					view{
						width:10px;
						height:10px;
						border-radius: 50%;
						margin-left: 30rpx;
						margin-top:3px;
						&.tibiao-yes{
							background:#1a7bb9;
						}
						&.tibiao-no{
							background:#FF6667;
						}
						&.tibiao-null{
							background:#999;
						}
					}
					text{
						margin-left:3px;
						display: inline-block;
						font-size: 13px;
						&.tibiao-yes2{
							color:#1a7bb9;
						}
						&.tibiao-no2{
							color:#FF6667;
						}
						&.tibiao-no3{
							color:#666;
						}
					}
				}
				&>view{
					&:nth-child(2){
						text{
							margin-left:22rpx;
							margin-top:10rpx;
							display: inline-block;
							width:100rpx;
							height:100rpx;
							line-height: 100rpx;
							text-align: center;
							border-radius: 50%;
							font-size: 14px;
							color:#666;
							background:#e4e4e4;
							&:nth-child(6n+1){
								margin-left:0;
							}
							&.active_o{
								background:#beddf1;
								color:#1a7bb9;
							}
							&.active_t{
								background:#fecece;
								color:#e3494a;
							}
						}
					}
				} 
			}
			&.active {
				opacity: 1;
				pointer-events: auto;
				transition:all .3s;
			}
		}
		.bottom {
			position: absolute;
			bottom: 0;
			width: 100%;
			display: flex;
			justify-content: space-between;
			margin-bottom: 20rpx;
			.btn {
				width: 140rpx;
				height: 70rpx;
				line-height: 70rpx;
				text-align: 140rpx;
				letter-spacing: 4rpx;
			}
		}
	}
	
	
</style>
