<template>
	<view class="imt-audio" :class="[`${theme}`]" v-if="audiolist.length > 0">
		<template v-if="theme == 'theme3'">
			<view class="info">
				<view class="top">
					<view class="audio-control-wrapper">
						<image :src="renderData('coverImgUrl')" mode="aspectFill" class="cover" :class="{ on: !renderData('paused') }"></image>
						<image src="/static/zcvideo/loading.png" v-if="loading" class="play loading"></image>
						<template v-else>
							<image src="/static/zcvideo/playbtn2.png" alt="" @click="operate" class="play" v-if="renderData('paused')"></image>
							<image src="/static/zcvideo/pausebtn2.png" alt="" @click="operate" class="play" v-else></image>
						</template>
					</view>
				</view>
				<view class="audio-wrapper">
					<view class="titlebox">
						<view class="title line1"><text class="text line1">{{ renderData('title') }}</text></view>
						<view class="singer line1"><text class="text line1">{{ renderData('singer') }}</text></view>
					</view>

					<view class="slidebox">
						<view><text class="text">{{ renderData('current') }}/ {{ renderData('duration') }}</text></view>
						<view class="btn">
							<text class="prev" @click="changeplay(-1)">上一首</text>
							<text class="next" @click="changeplay(1)">下一首</text>
						</view>
					</view>
				</view>
			</view>
			<slider
				class="audio-slider"
				:activeColor="themeColor"
				block-size="0"
				:value="renderData('current_value')"
				:max="renderData('duration_value')"
				@change="change"
				:disabled="!renderIsPlay"
			></slider>
		</template>

		<template v-if="theme == 'theme2'">
			<view class="top">
				<view class="audio-control-wrapper">
					<image class="cover" :src="renderData('coverImgUrl')"></image>
					<image src="/static/zcvideo/loading.png" v-if="loading" class="play loading"></image>
					<template v-else>
						<image src="/static/zcvideo/playbtn2.png" alt="" @click="operate" class="play" v-if="renderData('paused')"></image>
						<image src="/static/zcvideo/pausebtn2.png" alt="" @click="operate" class="play" v-else></image>
					</template>
				</view>

				<view class="right">
					<view class="title">
						<view class="zc-title line1"><text class="text line1">{{ renderData('title') }}</text></view>
						<view class="audio-number"><text class="text">{{ renderData('current') }}/{{ renderData('duration') }}</text></view>
					</view>
					<view class="singer"><text class="line1 text">{{ renderData('singer') }}</text></view>
				</view>
			</view>
		</template>

		<template v-if="theme == 'theme1'">
			<view class="top">
				<view class="audio-control-wrapper">
					<view class="cover-view"><image :src="renderData('coverImgUrl')" mode="aspectFill" class="cover" :class="{ on: !renderData('paused') }"></image></view>
				</view>
				<view class="audio-button-box" :style="{width:audioWidth}">
					<!-- 块退15s -->
					<image v-if="timeContollerDisplay" src="/static/zcvideo/prev.png" class="prevbtn" @click="stepPlay(-15)" mode="widthFix"></image>
					<!-- 上一首 -->
					<image src="/static/zcvideo/go.png" class="prevplay" @click="changeplay(-1)" mode="widthFix"></image>
					<div class="playbox">
						<image src="/static/zcvideo/loading2.png" v-if="loading" class="play loading"></image>
						<template v-else>
							<!-- 播放 -->
							<image src="/static/zcvideo/playbtn2.png" alt="" @click="operate" class="play" v-if="renderData('paused')"></image>
							<!-- 暂停 -->
							<image src="/static/zcvideo/pausebtn2.png" alt="" @click="operate" class="pause" v-else></image>
						</template>
					</div>
					<!-- 下一首 -->
					<image src="/static/zcvideo/go.png" class="nextplay" @click="changeplay(1)" mode="widthFix"></image>
					<!-- 快进15s -->
					<image v-if="timeContollerDisplay" src="/static/zcvideo/next.png" class="nextbtn" @click="stepPlay(15)" mode="widthFix"></image>
				</view>
				<view>
					<view class="title"><text class="text">{{ renderData('title') }}</text></view>
				</view>
			</view>
			<view class="audio-wrapper"  :style="{height:'55px !important'}">
				<div class="audio-playbox">
					<image src="/static/zcvideo/loading2.png" v-if="loading" class="audio-play loading"></image>
					<template v-else>
						<!-- 播放 -->
						<image src="/static/zcvideo/playbtn.png" alt="" @click="operate" class="audio-play" v-if="renderData('paused')"></image>
						<!-- 暂停 -->
						<image src="/static/zcvideo/pausebtn.png" alt="" @click="operate" class="audio-pause" v-else></image>
					</template>
				</div>
				<view class="audio-number"><text class="text">{{ renderData('current') }}</text></view>
				<slider
					class="audio-slider"
					:activeColor="themeColor"
					:backgroundColor="backgroundColor"
					:block-color="blockColor"
					block-size="12"
					:value="renderData('current_value')"
					:max="renderData('duration_value')||100"
					@change="change"
					:disabled="!renderIsPlay"
				></slider>
				<view class="audio-number"><text class="text">{{ renderData('duration') }}</text></view>
				<view v-if="speedDisplay" class="audio-speed" @tap="toggleSpeed">
					<view class="speed-btn"><text class="text">{{speed=="倍速"?speed:('x'+speed)}}</text></view>
					<view class="speed-list" v-if="showSpeedList">
						<view v-for="(item,index) in playRates" :key="index" @tap="setSpeedRates(item)" class="speed-value" :class="{'active':item==speed||(speed=='倍速'&&item==1.0)}"><text class="text">x{{item}}</text></view>
					</view>
				</view>
			</view>
		</template>
	</view>
</template>

<script>
import ZcAudio from './index.js' //HbuilderX插件导入方式, import可能需要修改目录名哦
var app=getApp();
if(!app.globalData.zcaudio){
	app.globalData.zcaudio = new ZcAudio({
	  continuePlay: true, //续播
	  autoPlay: false, //自动播放 部分浏览器不支持
	});	
}
export default {
	props: {
		theme: {
			type: String, // 主题 'theme1' or 'theme2'
			default: 'theme1'
		},
		themeColor: {
			type: String,
			default: '#C8A460'
		},
		audioList: {
			type: Array,
			default: []
		},
		backgroundColor: {
			type: String,
			default: '#D8D8D8'
		},
		blockColor: {
			type: String,
			default: '#C8A460'
		},
		timeContollerDisplay: {
			type: Boolean,
			default:false
		},
		//倍速只有微信小程序支持
		speedDisplay: {
			type: Boolean,
			default:false
		},
		playRates: {
			type: Array,
			default: () => [2.0,1.5,1.25,1.0,0.75]
		}
	},
	created() {
	},
	watch: {
		audioList: {
			deep: true,
			handler(audioList) {
				if(audioList && audioList.length){
					this.audiolist=audioList;
					app.globalData.zcaudio.setAudio(audioList); //添加音频
					app.globalData.zcaudio.setRender(0)//渲染第一首音频	
				}
			}
		},
	},
	data() {
		return {
			speed:'倍速',
			// #ifdef APP-PLUS-NVUE
			audioWidth:uni.getSystemInfoSync().screenWidth+'px',
			// #endif
			// #ifndef APP-PLUS-NVUE
			audioWidth:'100%',
			// #endif
			showSpeedList:false,
			playinfo: app.globalData.zcaudio.playinfo,
			audiolist: app.globalData.zcaudio.audiolist,
			paused: app.globalData.zcaudio.paused,
			renderIsPlay: app.globalData.zcaudio.renderIsPlay,
			audio: app.globalData.zcaudio.renderinfo,
			loading: app.globalData.zcaudio.loading,
			action: Symbol('zcaudio')
		};
	},
	computed: {
		renderData() {
			return name => {
				if (!this.renderIsPlay) {
					if (name == 'paused') {
						return true;
					}
					return this.audio[name];
				} else {
					if (name == 'paused') {
						return this.paused;
					}
					
					return this.playinfo[name];
				}
			};
		}
	},
	mounted() {
		this.$nextTick(() => {			
			let action = this.action;
			var that=this;
			if(this.audioList && this.audioList.length){
				app.globalData.zcaudio.setAudio(this.audioList); //添加音频
				app.globalData.zcaudio.setRender(0)//渲染第一首音频	
				this.playinfo=app.globalData.zcaudio.playinfo;
				this.audiolist=app.globalData.zcaudio.audiolist;
				this.paused= app.globalData.zcaudio.paused;
				this.renderIsPlay= app.globalData.zcaudio.renderIsPlay;
				this.audio= app.globalData.zcaudio.renderinfo;
				this.loading= app.globalData.zcaudio.loading;
			}
			app.globalData.zcaudio.syncStateOn(action, ({ audiolist, paused, playinfo, renderIsPlay, renderinfo, loading }) => {
				that.$set(that,'audiolist',audiolist);
				that.$set(that,'paused',paused);
				that.$set(that,'playinfo',playinfo);
				that.$set(that,'renderIsPlay',renderIsPlay);
				that.$set(that,'audio',renderinfo);
				that.$set(that,'loading',loading);
			}); 
			// #ifdef APP-PLUS-NVUE
			uni.onWindowResize(function(){
				that.audioWidth=uni.getSystemInfoSync().screenWidth+'px';
			});  
			// #endif
 		});
	},
	methods: {
		//播放or暂停
		operate() {
			app.globalData.zcaudio.operate();
		},
		//进度拖到
		change(event) {
			if (this.renderIsPlay) {
				app.globalData.zcaudio.seek(event.detail.value);
			}
		},
		//快进
		stepPlay(value) {
			app.globalData.zcaudio.stepPlay(value);
		},
		//切歌
		changeplay(count) {
			app.globalData.zcaudio.changeplay(count);
		},
		toggleSpeed:function(){
			this.showSpeedList=!this.showSpeedList;
		},
		setSpeedRates:function(speed){
			this.speed=speed;
			app.globalData.zcaudio.playbackRate(event.detail.value);
		},
	},
	beforeDestroy() {
		//组件卸载时卸载业务逻辑
		let action = this.action;
		app.globalData.zcaudio.syncStateOff(action)
	}
};
</script>

<style scoped lang="scss">
	@import './audio-nvue.scss';
	//  #ifdef MP-WEIXIN
	.theme3 .audio-slider {
		margin-top: -8px !important;
	}
	// #endif
	//  #ifndef APP-PLUS-NVUE
	.line1 {overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
	.imt-audio{
		box-sizing: border-box;
		view{
			box-sizing: border-box;
		}
	}
	// #endif
	//  #ifdef APP-PLUS-NVUE
	.line1 {overflow:hidden;lines:1;text-overflow:ellipsis;}
	// #endif
	.audio-button-box{
		// #ifdef APP-PLUS-NVUE
		width: 750upx;
		// #endif
		// #ifndef APP-PLUS-NVUE
		width: 100%;
		// #endif
	}
</style>
