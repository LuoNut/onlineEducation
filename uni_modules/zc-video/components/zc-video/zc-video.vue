<template>
	<!-- #ifdef H5 -->
	<view class="zc-video-player" style="width: 100%;height: 100%;" v-if="reseted">
		<view class="video-player" ref="video"></view>
	</view>
	<!-- #endif -->
	<!-- #ifndef H5 -->
		<!-- #ifdef APP-PLUS-NVUE -->
		<view class="zc-video-player" ref="zcvideoplayer" id="zc-video-player" style="width: 100%;height: 100%;position: relative;">
			<view class="video-js zc-fluid zc-workinghover zc-user-active"
				:class="{'zc-has-started':started,'zc-user-inactive':!userActivity,'zc-user-active':userActivity,'zc-paused':paused,'zc-playing':playing,'zc-ended':ended,'zc-live':videoOptions.live,'zc-waiting':waiting}"
				:style="{width:videoWidth+'px',height:videoHeight+'px'}">
				<video class="zc-video" :style="{width:videoWidth+'px',height:videoHeight+'px'}" id="mpVideo" ref="mpVideo"  :muted="videoOptions.muted||false" :controls="useOriginalStyle" 
						:preload="videoOptions.preload" 
						:playsinline="playsinline"
						:enable-play-gesture="videoOptions.enablePlayGesture"
						:loop="videoOptions.loop" 
						:show-center-play-btn="useOriginalStyle"
						:show-loading="useOriginalStyle"
						:play-strategy="videoOptions.playStrategy"
						:poster="poster||videoOptions.poster"
						@play="onPlayerPlay($event)"
						@pause="onPlayerPause($event)" @ended="onPlayerEnded($event)" @loadeddata="onPlayerLoadeddata($event)"
						@waiting="onPlayerWaiting($event)" @playing="onPlayerPlaying($event)"
						@timeupdate="onPlayerTimeupdate($event)" @canplay="onPlayerCanplay($event)"
						@canplaythrough="onPlayerCanplaythrough($event)" @ready="playerReadied"
						@statechanged="playerStateChanged($event)" @loadedmetadata="onPlayerLoadMetaData"
						@fullscreenchange="onPlayerFullscreenchange" @tap="handleDoubleTapVideo" @progress="onPlayerProgress"
						@touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd"
						 :src="url||videoOptions.sources[0].src">
					<cover-view v-if="!useOriginalStyle" class="controls-view" :style="{width:(isfullscreen?fullControlsWidth:videoWidth)+'px',height:(isfullscreen?fullControlsHeigt:videoHeight)+'px'}">
						<cover-view @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" :style="{width:(isfullscreen?fullControlsWidth:videoWidth)+'px',height:(isfullscreen?fullControlsHeigt:videoHeight)+'px'}"></cover-view>
						<!-- <cover-view class="zc-poster" :style="{width:videoWidth+'px',height:videoHeight+'px'}" v-if="!started&&showPoster">
							<cover-image :style="{width:videoWidth+'px',height:videoHeight+'px'}" mode="widthFix" class="zc-poster-img" v-if="poster!=''"
								:src="poster"></cover-image>
						</cover-view> -->
						<cover-view class="zc-big-play-button" :style="{top:(videoHeight/2)+'px',left:(videoWidth/2)+'px'}"
							v-if="videoOptions.controlBar&&videoOptions.controlBar.playToggle &&!started" @tap="handlePlay"
							type="button" title="播放视频" aria-disabled="false"><text aria-hidden="true"
								class="VideoJS zc-icon-placeholder">&#xF101;</text></cover-view>
						<cover-view class="zc-loading-spinner" v-if="waiting"
							:style="{top:(videoHeight/2)+'px',left:(videoWidth/2)+'px'}">
							<cover-image class="zc-loading-img"
								src="data:image/gif;base64,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">
							</cover-image>
						</cover-view>
						<cover-view class="zc-control-bar" ref="controlsBtm" :class="{'zc-fullscreen':isfullscreen}" :style="{width:(isfullscreen?fullControlsWidth:videoWidth)+'px'}" v-if="videoOptions.controls&&started&&showControls">
							<view class="zc-play-control zc-control zc-button" @click="handleSwitchPlay"
								:class="{'zc-paused':paused,'zc-playing':playing,'zc-ended':ended}" title="播放"
								aria-disabled="false">
								<text aria-hidden="true" v-if="(paused && !ended)||(!paused&&!playing&&!ended)" class="VideoJS zc-icon-placeholder">&#xF101;</text>
								<text aria-hidden="true" v-if="playing&&!ended" class="VideoJS zc-icon-placeholder">&#xF103;</text>
								<text aria-hidden="true" v-if="ended" class="VideoJS zc-icon-placeholder">&#xF116;</text>
							</view>
							<view class="zc-volume-panel zc-mute-control zc-control zc-button zc-volume-panel-vertical"
								v-if="videoOptions.controlBar&&videoOptions.controlBar.showMute" :class="videoOptions.muted?'zc-vol-0':'zc-vol-3'" @click="handleMute" title="静音" aria-disabled="false">
								<text aria-hidden="true" class="VideoJS zc-icon-placeholder">{{videoOptions.muted?'&#xF104;':'&#xF107;'}}</text>
							</view>
							<view class="zc-current-time zc-time-control zc-control"
								v-if="videoOptions.controlBar&&videoOptions.controlBar.currentTimeDisplay">
								<text class="text">{{currentTime}}</text>
							</view>
							<view class="zc-time-control zc-time-divider"
								:class="{'zc-show-time-divider':videoOptions.controlBar&&videoOptions.controlBar.timeDivider}"><text
									class="text">/</text></view>
							<view :class="{'zc-show-duration':videoOptions.controlBar&&videoOptions.controlBar.durationDisplay}"
								class="zc-duration zc-time-control zc-control">
								<text class="text">{{durationFormat}}</text>
							</view>
							<view class="zc-progress-control zc-control" ref="progress" id="progress" v-if="videoOptions.controlBar&&videoOptions.controlBar.progressControl" @touchstart.stop="()=>{return false;}" @touchend.stop="()=>{return false;}" @touchmove.stop="()=>{return false;}" @click.stop="()=>{return false;}">
								<zc-slider @change="sliderChangeProgress" @dragstart="sliderDragstartProgress"
									@dragend="sliderDragendProgress" @dragging="sliderChangingProgress" class="progress-slider"
									:width="silderProgressWidth" strokeWidth="3px" handleHeight="10px" handleWidth="10px" :min="0"
									:max="100" :screenLeft="screenLeft" :showInfo="false" :value="playProgress" :subValue="loadProgress" :step="0.01">
								</zc-slider>	
							</view>
							<view class="zc-live-control zc-control" v-if="videoOptions.live">
								<view class="zc-live-display" aria-live="off">
									直播
								</view>
							</view>
							<view class="zc-playback-rate zc-menu-button zc-menu-button-popup zc-control zc-button"
								v-if="videoOptions.playbackRates && videoOptions.playbackRates.length>1">
								<view class="zc-playback-rate zc-menu-button zc-menu-button-popup zc-button" @tap="handleClickRates"
									aria-disabled="false" title="播放速度" aria-haspopup="true" aria-expanded="false">
									<text aria-hidden="true" class="text">{{playRates}}x</text>
								</view>
								<view class="zc-menu" v-if="showMenu">
									<view class="zc-menu-content" role="menu">
										<view v-for="(item,index) in videoOptions.playbackRates" :key="index" class="zc-menu-item"
											:class="{'zc-selected':item==playRates}" @click="handleClickListRates(item)"
											tabindex="-1" role="menuitemradio" aria-disabled="false" aria-checked="false"><text
												class="zc-menu-item-text">{{item}}x</text>
											<text class="zc-control-text" aria-live="polite"></text>
										</view>
									</view>
								</view>
							</view>
							<view class="zc-chapters-button zc-menu-button zc-menu-button-popup zc-control zc-button" v-if="videoOptions.chapters && videoOptions.chapters.length>1">
								<view class="zc-chapters-button zc-menu-button zc-menu-button-popup zc-button" type="button"
									aria-disabled="false" title="节目段落" aria-haspopup="true" aria-expanded="false">
									<text aria-hidden="true" class="VideoJS zc-icon-placeholder">&#xF10E;</text>
								</view>
								<view class="zc-menu">
									<view v-for="(item,index) in videoOptions.chapters" :key="index" class="zc-menu-content"
										role="menu">
										<view class="zc-menu-title" tabindex="-1">{{item.chapter_name}}</view>
									</view>
								</view>
							</view>
							<view class="zc-fullscreen-control zc-control zc-button" type="button" title="全屏"
								aria-disabled="false" v-if="videoOptions.controlBar&&videoOptions.controlBar.fullscreenToggle"
								@tap="handleFullscreen">
								<text aria-hidden="true" class="VideoJS zc-icon-placeholder">{{isfullscreen?'&#xF109;':'&#xF108;'}}</text>
							</view>
						</cover-view>
					</cover-view>
				</video>
			</view>
		</view>
		<!-- #endif -->
		<!-- #ifndef APP-PLUS-NVUE -->
		<view class="zc-video-player" ref="zcvideoplayer" id="zc-video-player" style="width: 100%;height: 100%;position: relative;">
			<view class="video-js zc-fluid zc-workinghover zc-user-active"
				:class="{'zc-has-started':started,'zc-user-inactive':!userActivity,'zc-user-active':userActivity,'zc-paused':paused,'zc-playing':playing,'zc-ended':ended,'zc-live':videoOptions.live,'zc-waiting':waiting}"
				>
				<view class="zc-video-mp" :class="sizeClass">
					<video class="zc-video" id="mpVideo" ref="mpVideo"  :muted="videoOptions.muted||false" :controls="false"
							:preload="videoOptions.preload" 
							:playsinline="playsinline"
							:enable-play-gesture="videoOptions.enablePlayGesture"
							:loop="videoOptions.loop" 
							:show-center-play-btn="false"
							:show-loading="false"
							:play-strategy="videoOptions.playStrategy"
							:poster="poster||videoOptions.poster"
							@play="onPlayerPlay($event)"
							@pause="onPlayerPause($event)" @ended="onPlayerEnded($event)" @loadeddata="onPlayerLoadeddata($event)"
							@waiting="onPlayerWaiting($event)" @playing="onPlayerPlaying($event)"
							@timeupdate="onPlayerTimeupdate($event)" @canplay="onPlayerCanplay($event)"
							@canplaythrough="onPlayerCanplaythrough($event)" @ready="playerReadied"
							@statechanged="playerStateChanged($event)" @loadedmetadata="onPlayerLoadMetaData"
							@fullscreenchange="onPlayerFullscreenchange" @tap="handleDoubleTapVideo" @progress="onPlayerProgress"
							@touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd"
							 :src="url||videoOptions.sources[0].src">
						<view class="controls-view">
							<view @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" style="width:'100%',height:100%"></view>
							<!-- <view class="zc-poster" v-if="!started&&showPoster">
								<image class="zc-poster-img" v-if="poster!=''" :src="poster"  mode="widthFix"></image>
							</view> -->
							<view class="zc-big-play-button"
								v-if="videoOptions.controlBar&&videoOptions.controlBar.playToggle &&!started" @tap="handlePlay"
								type="button" title="播放视频" aria-disabled="false"><text aria-hidden="true"
									class="VideoJS zc-icon-placeholder">&#xF101;</text></view>
							<view class="zc-loading-spinner" v-if="waiting">
								<image class="zc-loading-img"
									src="data:image/gif;base64,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">
								</image>
							</view>
							<view class="zc-control-bar" ref="controlsBtm" :class="{'zc-fullscreen':isfullscreen}" v-if="videoOptions.controls&&started&&showControls">
								<view class="zc-play-control zc-control zc-button" @click="handleSwitchPlay"
									:class="{'zc-paused':paused,'zc-playing':playing,'zc-ended':ended}" title="播放"
									aria-disabled="false">
									<text aria-hidden="true" v-if="(paused && !ended)||(!paused&&!playing&&!ended)"
										class="VideoJS zc-icon-placeholder">&#xF101;</text>
									<text aria-hidden="true" v-if="playing&&!ended" class="VideoJS zc-icon-placeholder">&#xF103;</text>
									<text aria-hidden="true" v-if="ended" class="VideoJS zc-icon-placeholder">&#xF116;</text>
								</view>
								<view class="zc-volume-panel zc-mute-control zc-control zc-button zc-volume-panel-vertical"
									v-if="videoOptions.controlBar&&videoOptions.controlBar.showMute" :class="videoOptions.muted?'zc-vol-0':'zc-vol-3'" @click="handleMute">
									<text aria-hidden="true" class="VideoJS zc-icon-placeholder">{{videoOptions.muted?'&#xF104;':'&#xF107;'}}</text>
								</view>
								<view class="zc-current-time zc-time-control zc-control"
									v-if="videoOptions.controlBar&&videoOptions.controlBar.currentTimeDisplay">
									<text class="text">{{currentTime}}</text>
								</view>
								<view class="zc-time-control zc-time-divider"
									:class="{'zc-show-time-divider':videoOptions.controlBar&&videoOptions.controlBar.timeDivider}"><text
										class="text">/</text></view>
								<view :class="{'zc-show-duration':videoOptions.controlBar&&videoOptions.controlBar.durationDisplay}"
									class="zc-duration zc-time-control zc-control">
									<text class="text">{{durationFormat}}</text>
								</view>
								<view class="zc-progress-control zc-control" ref="progress" id="progress" v-if="videoOptions.controlBar&&videoOptions.controlBar.progressControl" @touchstart.stop="()=>{return false;}" @touchend.stop="()=>{return false;}" @touchmove.stop="()=>{return false;}" @click.stop="()=>{return false;}">
									<zc-slider @change="sliderChangeProgress" @dragstart="sliderDragstartProgress"
										@dragend="sliderDragendProgress" @dragging="sliderChangingProgress" class="progress-slider"
										:width="silderProgressWidth" strokeWidth="3px" handleHeight="10px" handleWidth="10px" :min="0"
										:max="100" :screenLeft="screenLeft" :showInfo="false" :value="playProgress" :subValue="loadProgress" :step="0.01">
									</zc-slider>	
								</view>
								<view class="zc-live-control zc-control" v-if="videoOptions.live">
									<view class="zc-live-display" aria-live="off">
										直播
									</view>
								</view>
								<view class="zc-playback-rate zc-menu-button zc-menu-button-popup zc-control zc-button"
									v-if="videoOptions.playbackRates && videoOptions.playbackRates.length>1">
									<view class="zc-playback-rate zc-menu-button zc-menu-button-popup zc-button" @tap="handleClickRates"
										aria-disabled="false" title="播放速度" aria-haspopup="true" aria-expanded="false">
										<text aria-hidden="true" class="text">{{playRates}}x</text>
									</view>
									<view class="zc-menu" v-if="showMenu">
										<view class="zc-menu-content" role="menu">
											<view v-for="(item,index) in videoOptions.playbackRates" :key="index" class="zc-menu-item"
												:class="{'zc-selected':item==playRates}" @click="handleClickListRates(item)"
												tabindex="-1" role="menuitemradio" aria-disabled="false" aria-checked="false"><text
													class="zc-menu-item-text">{{item}}x</text>
												<text class="zc-control-text" aria-live="polite"></text>
											</view>
										</view>
									</view>
								</view>
								<view class="zc-chapters-button zc-menu-button zc-menu-button-popup zc-control zc-button" v-if="videoOptions.chapters && videoOptions.chapters.length>1">
									<view class="zc-chapters-button zc-menu-button zc-menu-button-popup zc-button" type="button"
										aria-disabled="false" title="节目段落" aria-haspopup="true" aria-expanded="false">
										<text aria-hidden="true" class="VideoJS zc-icon-placeholder">&#xF10E;</text>
									</view>
									<view class="zc-menu">
										<view v-for="(item,index) in videoOptions.chapters" :key="index" class="zc-menu-content"
											role="menu">
											<view class="zc-menu-title" tabindex="-1">{{item.chapter_name}}</view>
										</view>
									</view>
								</view>
								<view class="zc-fullscreen-control zc-control zc-button" type="button" title="全屏"
									aria-disabled="false" v-if="videoOptions.controlBar&&videoOptions.controlBar.fullscreenToggle"
									@tap="handleFullscreen">
									<text aria-hidden="true" class="VideoJS zc-icon-placeholder">{{isfullscreen?'&#xF109;':'&#xF108;'}}</text>
								</view>
							</view>
						</view>
					</video>
				</view>
			</view>
		</view>
	<!-- #endif -->
	<!-- #endif -->
</template>
<script>
	// #ifdef APP-PLUS-NVUE 
	var dom = uni.requireNativePlugin('dom');
	// #endif
	// #ifdef H5 
	import videojs from 'video.js';
	window.videojs = videojs;
	require('video.js/dist/lang/zh-CN.js');
	const DEFAULT_EVENTS = [
		'loadeddata',
		'loadedmetadata',
		'canplay',
		'canplaythrough',
		'play',
		'pause',
		'waiting',
		'playing',
		'ended',
		'progress',
		'error'
	];
	// #endif
	import zcSlider from '../zc-slider/zc-slider';
	var videoElement = '';
	export default {
		name: "zc-video",
		components: {
			zcSlider
		},
		props: {
			poster: { //可以在options里设置，也可以单独设置
				type: String,
				default: ''
			},
			useOriginalStyle: { //使用原生样式 app
				type: Boolean,
				default: false
			},
			playsinline: {
				type: Boolean,
				default: true
			},
			url: { //可以在options里设置，也可以单独设置，这里的播放格式固定为MP4
				type: String,
				default: ''
			},
			customEventName: {
				type: String,
				default: 'statechanged'
			},
			options: {
				type: Object,
				default: () => ({ //播放器配置
					muted: false, //是否静音
					preload: true,
					notSupportedMessage: '此视频暂无法播放，请稍后再试',
					controlBar: {
						showMute: true,
						currentTimeDisplay: true, //当前播放位置
						timeDivider: true, // 时间分割线
						durationDisplay: true, // 总时间
						progressControl: true, // 进度条
						remainingTimeDisplay: false, // 剩余时间
						fullscreenToggle: true, // 全屏按钮
						playToggle: true,
						pictureInPictureToggle: false,
						volumePanel: {
							inline: false //音量调节是否水平
						}
					}
				})
			},
			crossOrigin: {
				type: String,
				default: ''
			},
			events: {
				type: Array,
				default: () => []
			},
			globalEvents: {
				type: Array,
				default: () => []
			},
			orientation:{ //全屏下屏幕旋转
				type:Boolean,
				default:false
			},
		},
		data() {
			return {
				player: null,
				videoRef: null,
				reseted: true,
				showMenu: false,
				showPoster:true,
				showControls:true,
				isfullscreen: false,
				videoHeight: 210,
				videoWidth: uni.getSystemInfoSync().screenWidth,
				screenLeft:0,
				fullControlsWidth:0,
				fullControlsHeigt:0,
				containerStyle: '',
				videoStyle: '',
				tapIndex: 0,
				tapStart: 0,
				tapEnd: 0,
				true: true,
				false: false,
				started: false,
				paused: false,
				playing: false,
				waiting: false,
				ended: false,
				userActivity: true, //底部控制条的显示隐藏
				volume: 100,
				playRates: 1,
				videoOptions: {},
				silderProgressWidth: '120px',
				currentTime: '0:00',
				duration: 0,
				durationFormat: '0:00',
				sizeClass:'',
				loadProgress: 0,
				playProgress: 0,
				globalOptions: { //播放器配置
					muted: false, //是否静音
					live: false,
					loop:false,
					playStrategy:0,
					language: 'zh-CN',
					aspectRatio: '16:9', //播放器比例 4：3 16：9
					preload: 'auto',
					enablePlayGesture: true, //是否开启播放手势，即双击切换播放/暂停
					playbackRates: [0.5,0.8,1.0,1.25,1.5], //播放速度
					sources: [{
						type: "video/mp4",
						src: ""
					}],
					chapters: [],
					notSupportedMessage: '此视频暂无法播放，请稍后再试',
					poster: "", //封面图
					duration:0,
					controls: true,
					controlBar: {
						liveDisplay: true,
						showMute: true,
						currentTimeDisplay: true, //当前播放位置
						timeDivider: true, // 时间分割线
						durationDisplay: true, // 总时间
						progressControl: true, // 进度条
						remainingTimeDisplay: false, // 剩余时间
						fullscreenToggle: true, // 全屏按钮
						playToggle: true,
						pictureInPictureToggle: false, //画中画按钮
						volumePanel: {
							inline: false //音量调节是否水平
						}
					}
				}
			}
		},
		beforeCreate() {
			// #ifdef APP-PLUS-NVUE
			var domModule = weex.requireModule('dom');
			domModule.addRule('fontFace', {
				'fontFamily': "VideoJS",
				'src': "url('../../font/VideoJS.ttf')"
			});
			// #endif
		},
		watch: {
			options: {
				deep: true,
				handler(options, oldOptions) {
					this.dispose(() => {
						if (options && options.sources && options.sources.length) {
							this.initialize()
						}
					})
				}
			},
			started: {
				deep: true,
				handler(nval, oval) {
					var that = this;
					if(!nval) return;
					that.$nextTick(() => {
						that.resetProsessWidth();
					});
				}
			},
			showControls:{
				immediate:true,
				handler:async function(newVal){
					if(newVal){
						// #ifdef APP-PLUS
						this.animateControls(1,this.$refs.controlsBtm)
						// #endif
					}
				}
			},
		},
		created() {
			// #ifndef H5
			this.fullControlsWidth = uni.getSystemInfoSync().screenHeight;
			this.fullControlsHeigt = uni.getSystemInfoSync().screenWidth+1;
			uni.getSystemInfo({
				success: (e) => {
					this.platform = e.platform
					this.changDirection()
				}
			})
			// #endif
			this.$nextTick(() => {
				console.log(this.poster, this.url);
			});
		},
		mounted() {
			var that = this;
			if (!this.player)this.initialize();
		},
		beforeDestroy() {
			if (this.player) {
				this.dispose();
			}
		},
		methods: {
			initialize() {
				// videojs options
				var that = this;
				const videoOptions = Object.assign({}, that.globalOptions, that.options);
				if (that.poster != '') videoOptions.poster = that.poster;
				if (that.url != '') {
					videoOptions.sources = [{
						type: "video/mp4",
						src: that.url
					}];
				}
				if (that.url =='' && that.src != '') {
					videoOptions.sources = [{
						type: "video/mp4",
						src: that.src
					}];
				}
				if(videoOptions.duration){
					that.duration=parseFloat(videoOptions.duration);
					that.durationFormat = that.timeFormat(that.duration);
				}
				that.videoOptions = videoOptions;
				// #ifdef H5
				videoElement = document.createElement('video');
				videoElement.id = 'video';
				videoElement.style = 'width: 100%; height:100%;';
				videoElement.controls = true;
				videoElement.className = 'video-js';
				videoElement.setAttribute('playsinline', that.playsinline) //IOS微信浏览器支持小窗内播放
				videoElement.setAttribute('webkit-playsinline', that
					.playsinline) //这个bai属性是ios 10中设置可以让视频在小du窗内播放，也就是不是全zhi屏播放的video标签的一个属性
				videoElement.setAttribute('x5-video-player-type', 'h5') //安卓 声明启用同层H5播放器 可以在video上面加东西
				videoElement.setAttribute('x5-playsinline', that.playsinline);
				videoElement.setAttribute('x5-video-player-fullscreen', that.playsinline);
				// cross origin
				if (that.crossOrigin !== '') {
					videoElement.crossOrigin = that.crossOrigin
					videoElement.setAttribute('crossOrigin', that.crossOrigin);
				}
				that.$refs.video.$el.appendChild(videoElement);
				// emit event
				const emitPlayerState = (event, value) => {
					if (event) {
						this.$emit(event, value);
					}
					if (value) {
						this.$emit(this.customEventName, {
							[event]: value
						})
					}
				}

				// avoid error "VIDEOJS: ERROR: Unable to find plugin: __ob__"
				if (videoOptions.plugins) {
					delete videoOptions.plugins.__ob__
				}

				// videoOptions
				// console.log('videoOptions', videoOptions)

				// player
				that.player = videojs('video', videoOptions, function() {
					// events
					const events = DEFAULT_EVENTS.concat(that.events).concat(that.globalEvents)
					// watch events
					const onEdEvents = {}
					for (let i = 0; i < events.length; i++) {
						if (typeof events[i] === 'string' && onEdEvents[events[i]] === undefined) {
							(event => {
								onEdEvents[event] = null
								this.on(event, () => {
									emitPlayerState(event, this)
								})
							})(events[i])
						}
					}

					// watch timeupdate
					this.on('timeupdate', function() {
						emitPlayerState('timeupdate', {currentTime:this.currentTime(),duration:this.duration()})
					})

					// player readied
					that.$emit('ready', this);
				})
				// #endif
				//  #ifndef H5 
				that.player = uni.createVideoContext('mpVideo', that);
				// #ifndef APP-PLUS-NVUE
					that.videoStyle = that.containerStyle ="width:100%;height:100%;";
					that.sizeClass='zc-'+videoOptions.aspectRatio.replace(':','-');
					// let obj = uni.createSelectorQuery().in(that).select('#zc-video-player');
					// obj.boundingClientRect(function(data) { // data - 各种参数
					// 	if (data && data.width) {
					// 		that.videoWidth = data.width;
					// 		that.videoHeight = data.width * (videoOptions.aspectRatio == '4:3' ? (3 / 4) : (9 / 16));
					// 		that.videoStyle = that.containerStyle = "width:" + data.width + 'px;height:' + that
					// 			.videoHeight + 'px';
					// 	}
					// }).exec();
					// uni.onWindowResize(function(){
					// 	let obj = uni.createSelectorQuery().in(that).select('#zc-video-player');
					// 	obj.boundingClientRect(function(data) { // data - 各种参数
					// 		if (data && data.width) {
					// 			that.videoWidth = data.width;
					// 			that.videoHeight = data.width * (that.videoOptions.aspectRatio == '4:3' ? (3 / 4) : (9 / 16));
					// 			that.videoStyle = that.containerStyle = "width:" + data.width + 'px;height:' + that
					// 				.videoHeight + 'px';
					// 		}
					// 	}).exec();
					// }) 
				// #endif
				// #ifdef APP-PLUS-NVUE
					dom.getComponentRect(that.$refs.zcvideoplayer, function(res) {
						if (res.result && res.size.width) {
							that.videoWidth = res.size.width;
							that.videoHeight = (res.size.width) * (videoOptions.aspectRatio == '4:3' ? (3 / 4) : (9 /
								16));
							that.videoStyle = that.containerStyle = "width:" + res.size.width + 'px;height:' + that
								.videoHeight + 'px';
						}
					});
					uni.onWindowResize(function(){
					 	dom.getComponentRect(that.$refs.zcvideoplayer, function(res) {
					 		if (res.result && res.size.width) {
					 			that.videoWidth = res.size.width;
					 			that.videoHeight = (res.size.width) * (that.videoOptions.aspectRatio == '4:3' ? (3 / 4) : (9 /
					 				16));
					 			that.videoStyle = that.containerStyle = "width:" + res.size.width + 'px;height:' + that
					 				.videoHeight + 'px';
					 		}
					 	});
					}) 
				// #endif
				// #endif 
			},
			changDirection(){
				//#ifdef APP-NVUE
				if(this.orientation){
					plus.orientation.watchOrientation( o => {
						if(this.platform=='android'){
							if(o.gamma>40){
								this.direction = 90
							}else if(o.gamma<-40){
								this.direction = -90
							}
						}else{
							if(o.alpha>40){
								this.direction = -90
							}else if(o.alpha<-40){
								this.direction = 90
							}
						}
					} ,()=>{},{frequency:1000});
				}
				//#endif
			},
			dispose(callback) {
				if (this.player && this.player.dispose) {
					if (this.player.techName_ !== 'Flash') {
						this.player.pause && this.player.pause()
					}
					this.player.dispose()
					this.player = null
					this.$nextTick(() => {
						this.reseted = false
						this.$nextTick(() => {
							this.reseted = true
							this.$nextTick(() => {
								callback && callback()
							})
						})
					})
					/*
				  if (!this.$el.children.length) {
					const video = document.createElement('video')
					video.className = 'video-js'
					this.$el.appendChild(video)
				  }
				  */
				}
			},
			animateControls(distance,el){
				animation.transition(el, {
					styles: {
						transform: `translate(0px, ${distance}px)`,
					},
					duration: 150, //ms
					timingFunction: 'ease-in-out',
					delay: 0 //ms
					}, () => {
						
					}
				)
			},
			resetProsessWidth:function(){
				// #ifndef H5
					var that=this;
					// #ifndef APP-PLUS-NVUE
					let obj = uni.createSelectorQuery().in(that).select('#progress')
					obj.boundingClientRect(function(data) { // data - 各种参数
						if (data){
							that.silderProgressWidth = ((data.width || 120) - 10) + 'px';
							//that.screenLeft=parseInt(data.left);
						}
					}).exec();
					// #endif
					// #ifdef APP-PLUS-NVUE
					dom.getComponentRect(that.$refs.progress, function(res) {
						if (res.result) {
							that.silderProgressWidth = ((res.size.width || 120) - 10) + 'px';
							that.screenLeft=parseInt(res.size.left);
						}
					})
					// #endif
				// #endif
			},
			// #ifndef H5
			timeFormat: function(time) {
				var t = parseInt(time),
					h, m, s,str;
				h = Math.floor(t / 3600);
				str = h ? (h + ':') : '';
				m = Math.floor(t / 60) - h * 60;
				s = Math.floor(t) - h * 3600 - m * 60;
				s = s > 9 ? s : ('0' + s);
				m = m > 9 ? m : ('0' + m);
				return (str + m + ':' + s);
			},
			handleMute: function() {
				if (this.videoOptions.muted) {
					this.videoOptions.muted = false;
				} else {
					this.videoOptions.muted = true;
				}
			},
			// 监听加载元数据成功
			onPlayerLoadMetaData(e) {
				console.log('onPlayerLoadMetaData');
				let duration = e.detail.duration || 0;
				if (duration) {
					this.durationFormat = this.timeFormat(duration);
					this.duration = duration;
				}
				this.showPoster=false;
				this.$emit('loadedmetadata', e);
			},
			// 监听加载进度
			onPlayerProgress: function(e) {
				console.log('onPlayerProgress');
				this.loadProgress = e.detail.buffered;
				this.waiting = false;
				this.$emit('progress', e);
			},
			// 监听播放
			onPlayerPlay(player) {
				console.log('onPlayerPlay');
				this.playing = true;
				this.started = true;
				this.paused = false;
				this.ended = false;
				setTimeout(() => {
					if(this.playing) this.showControls=false;
				}, 10000);
				this.resetProsessWidth();
				this.$emit('play', player);
			},
			// 监听暂停
			onPlayerPause(player) {
				console.log('onPlayerPause');
				this.paused = true;
				this.playing = false;
				this.ended = false;
				this.showControls=true;
				this.$emit('pause', player);
			},
			// 监听停止
			onPlayerEnded(player) {
				console.log('onPlayerEnded');
				this.paused = true;
				this.playing = false;
				this.ended = true;
				this.showControls=true;
				this.$emit('ended', player);
			},
			// 监听加载完成
			onPlayerLoadeddata(player) {
				console.log('onPlayerLoadeddata');
				this.$emit('loadeddata', player);
			},
			// 监听视频缓存等待
			onPlayerWaiting(player) {
				console.log('onPlayerWaiting');
				this.waiting = true;
				this.$emit('waiting', player);
			},
			// 监听视频暂停后播放
			onPlayerPlaying(player) {
				console.log('onPlayerPlaying');
				this.$emit('playing', player);
			},
			// 监听视频播放时长更新
			onPlayerTimeupdate(e) {
				var that = this;
				let currentTime = e.detail.currentTime || 0;
				let duration = e.detail.duration || 0;
				if (currentTime) {
					that.playProgress = duration ? ((Math.round(currentTime / duration * 1000000) / 10000)) : 0;
					that.currentTime = that.timeFormat(currentTime);
				}
				if(duration) that.durationFormat = that.timeFormat(duration),that.duration=duration;
				that.waiting = false;
				that.resetProsessWidth();
				that.$emit('timeupdate', {currentTime:currentTime,duration:duration});
			},
			//当视频进入和退出全屏时触发
			onPlayerFullscreenchange(e) {
				console.log('onPlayerFullscreenchange');
				this.isfullscreen= e.detail.fullScreen;
				setTimeout(() => {
					this.resetProsessWidth();
				}, 250);
				this.$emit('onFullscreenchange', e);
			},
			onPlayerCanplay(player) {
				console.log('onPlayerCanplay');
				this.$emit('onCanplay', player);
			},
			onPlayerCanplaythrough(player) {
				console.log('onPlayerCanplaythrough');
				this.$emit('onCanplaythrough', player);
			},
			// 监听状态改变
			playerStateChanged(playerCurrentState) {
				console.log('playerStateChanged');
				this.$emit('onStatechanged', playerCurrentState);
			},
			// 监听播放器准备就绪
			playerReadied(player) {
				console.log('playerReadied');
				this.$emit('onReady', player);
			},
			handleTouchStart: function(e) {
				this.showControls=true;
			},
			handleTouchMove: function(e) {
				this.showControls=true;
			},
			handleTouchEnd: function(e) {
				if(!this.playing) return;
				setTimeout(() => {
					if(this.playing) this.showControls=false;
				}, 10000);
			},
			// #endif
			getVideoRef: function() {
				return this.player || null;
			},
			play: function() {
				if (this.player) this.player.play();
			},
			seek: function(time) {
				if (this.player) this.player.seek(time || 0);
			},
			stop: function() {
				if (this.player) this.player.stop();
			},
			pause: function() {
				if (this.player) this.player.pause();
			},
			handlePlay: function(e) {
				this.play();
				this.resetProsessWidth();
			},
			handleSwitchPlay: function(e) {
				if (this.ended) {
					this.seek(0);
					this.play();
				} else if (this.paused) {
					this.play();
				} else {
					this.pause();
				}
			},
			// #ifndef H5
			handleDoubleTapVideo: function(e) {
				this.userActivity = true;
				// #ifdef MP 
				return;
				// #endif 
				if (!this.videoOptions.enablePlayGesture) return;
				this.tapIndex = this.tapIndex == 0 ? 1 : this.tapIndex + 1;
				if (this.tapIndex == 1) {
					this.tapStart = new Date().getTime();
					setTimeout(() => {
						this.tapIndex = this.tapStart = this.tapEnd = 0;
					}, 200)
				} else if (this.tapIndex == 2) {
					this.tapEnd = new Date().getTime();
					if (this.tapEnd - this.tapStart < 300) {
						if (this.playing) {
							this.pause();
						} else {
							this.play();
						}
					}
					this.tapIndex = this.tapStart = this.tapEnd = 0;
				}

			},
			handleClickRates() {
				let rate = this.playRates;
				let rateIndex = 0;
				let playbackRates = this.videoOptions.playbackRates || [];
				for (var i = 0; i < playbackRates.length; i++) {
					if (playbackRates[i] == rate) {
						rateIndex = i;
					}
				}
				rateIndex = (playbackRates.length - 1) > rateIndex ? (rateIndex + 1) : 0;
				this.handleClickListRates(playbackRates[rateIndex]);
			},
			handleClickListRates(item) {
				let rate = this.playRates;
				this.playRates = item;
				if (this.player) this.player.playbackRate(item);
			},
			sliderChangeProgress: function(e) {},
			sliderChangingProgress: function(e) {
				let progress = e.value;
				let seekTime = this.duration * progress / 100;
				this.currentTime = this.timeFormat(seekTime);
				this.seek(seekTime);
			},
			sliderDragstartProgress: function(e) {
				let progress = e.value;
				let seekTime = this.duration * progress / 100;
				this.currentTime = this.timeFormat(seekTime);
				this.seek(seekTime);
			},
			sliderDragendProgress: function(e) {
				let progress = e.value;
				let seekTime = this.duration * progress / 100;
				this.currentTime = this.timeFormat(seekTime);
				this.seek(seekTime);
			},
			handleFullscreen: function() {
				var player = this.player;
				if (!player) return;
				if(this.isfullscreen){
					player.exitFullScreen();
				}else{
					player.requestFullScreen();
				}
			},
			// #endif
		}
	}
</script>
<style scoped lang="scss">
	/* #ifdef H5 */
	@import '../../css/video-h5.css';
	/* #endif */
	/* #ifndef H5 */
		/* #ifdef APP-PLUS-NVUE */
			@import '../../css/video-nvue.css';
		/* #endif */
		/* #ifndef APP-PLUS-NVUE */
			@import '../../css/video-mp.css';
		/* #endif */
	/* #endif */
</style>
