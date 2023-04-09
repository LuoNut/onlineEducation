## zc-video 视频播放器 zc-audio音频播放器
> 组件名：``zc-video`` ``zc-audio``。

### 平台差异说明

h5使用videojs，其他端使用video组件,app端使用nvue，提供参考，有问题可以自行修改

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

### 基本用法 

需要注意的是：
- nvue图片图标和fontFace引入无法使用相对路径，因此移到了根目录的static文件下，可查看示例自行修改
- APP由于video组件层级太高改用nvue（nvue需要在mainfest.json->app-plus里配置`"nvueStyleCompiler" : "uni-app"`,）
- 插件里包含 `zc-slider` 自定义进度条、滑动条组件，支持水平和垂直滑动
- `zc-video` h5端使用的是vue的videojs，未安装videojs需先安装videojs（npm i video.js）[videojs](https://www.npmjs.com/package/video.js)
- 需在App.vue引入videojs的css文件（@import 'video.js/dist/video-js.css'）;
- 本组件是基于[vue-video-player](https://www.npmjs.com/package/vue-video-player)修改

```html
<zc-slider @change="sliderChangeProgress" @dragstart="sliderDragstartProgress"  @dragend="sliderDragendProgress" @dragging="sliderChangingProgress" class="progress-slider" :width="silderProgressWidth" strokeWidth="3px"
	handleHeight="10px" handleWidth="10px" :min="0" :max="100" :showInfo="false" :value="playProgress" :subValue="loadProgress" :step="0.01" 
	></zc-slider>
```

```html
<zc-video :url="url" 
	ref="zcvideo"
	:poster="poster"
	@play="handlePlay" 
	@pause="handlePause"
	@ended="handleEnded" 
	@loadeddata="handleLoadeddata" 
	@waiting="handleWaiting"
	@playing="handlePlaying" 
	@timeupdate="handleTimeupdate"
	@canplay="handleCanplay" 
	@canplaythrough="handleCanplaythrough" 
	@ready="handleReadied"
	@statechanged="handleStateChanged"
	@loadedmetadata="handleLoadMetaData"
	@fullscreenchange="handleFullscreenchange"
	@progress="handleProgress"
	></zc-video>
```

## API

- 基本事件及参数如下，其他功能可以自行摸索
- 由于app端video层级过高不使用nvue会被覆盖自定义控制器，若使用vue的话可以通过 useOriginalStyle 控制使用原生控制器不使用自定义控制器

###  Props

|属性名		| 类型			|默认值	 		| 可选值	| 说明|
|:-:			| :-:			|:-:			| :-:	| :-:	|
|useOriginalStyle		| false		| ''			| -		| app端使用原生video样式	|
|poster		| String		| ''			| -		| 视频封面	|
|playsinline		| Boolean		| true			| -		| 是否禁止自动全屏播放及内联播放	|
|url			| String		| ''			| -			| MP4视频地址|
|customEventName	| String		| 'statechanged'	| -		| 自定义事件，状态改变返回|
|options		| Object		| {}			| -		| 视频初始化参数|	
|crossOrigin | String		| ''	| -		| crossorigin属性|
|events | Array		| []	| -		| H5支持自定义返回的播放事件（必须是video支持的事件）|
|globalEvents | Array		| []	| -		| H5支持自定义返回的播放事件（必须是video支持的事件）|

### H5 Events
- 默认加载了以下事件，可通过 events 及 globalEvents 属性添加更多事件
- 不同端有些事件是不支持的，具体可以自行测试使用
事件称名				|说明									| 返回参数			
:-:					|:-:									| :-:	
ready	| 播放器已准备完毕	| Function(Object)			
loadedmetadata	| 获取元数据	| Function(Object)
loadeddata	| 当浏览器已加载音频/视频的当前帧时触发。	| Function(Object)
canplay	| 当浏览器可以开始播放音频/视频时触发	| Function(Object)
canplaythrough	| 当浏览器可在不因缓冲而停顿的情况下进行播放时触发。	| Function(Object)
play	| 当音频/视频已开始或不再暂停时触发。	| Function(Object)
pause	| 当音频/视频已暂停时触发。	| Function(Object)
waiting	| 当视频由于需要缓冲下一帧而停止时触发。	| Function(Object)
playing	| 当音频/视频在因缓冲而暂停或停止后已就绪时触发。	| Function(Object)
ended	| 当目前的播放列表已结束时触发。	| Function(Object)
progress	| 当浏览器正在下载音频/视频时触发。	| Function(Object)
error	| 当在音频/视频加载期间发生错误时触发。	| Function(Object)
timeupdate	| 当目前的播放位置已更改时触发。	| Function(Object)

### options

|属性名			|默认值	 	| 可选值	| 说明	|
|:-:			|:-:		| :-:	| :-:	|
|muted			| false		| -		| 是否静音	|
|language		| 'zh-CN'	| -		| H5语言	|
|aspectRatio	| '16:9'	| 16:9，4:3| 播放器比例	|
|preload		| 'auto'	| auto true false	| 预加载	|
|enablePlayGesture		| true	| -		| 是否开启播放手势，即双击切换播放/暂停	|
|playbackRates		| [0.7, 1.0, 1.5, 2.0]	| -		| 播放速度	|
|sources		| [{type: "video/mp4",src: ""}]| -		| 视频资源	|
|notSupportedMessage		| '此视频暂无法播放，请稍后再试'	| -		| 视频无法播放提示文字	|
|poster		| ''	| -		| 视频封面	|
|controls		| true	| -		| 底部控制栏是否显示	|
|controlBar		| Object	| -		| 底部控制栏自定义	|


### controlBar

|属性名			|默认值	 	| 可选值	| 说明	|
|:-:			|:-:		| :-:	| :-:	|
|liveDisplay			| false		| -		| 直播按钮	|
|currentTimeDisplay		| true	| -		| 当前时间	|
|timeDivider	| true	| -| 时间分割线	|
|progressControl	| true	| -| 进度条	|
|remainingTimeDisplay	| false	| -| 剩余时间	|
|fullscreenToggle	| true	| -| 全屏按钮	|
|remainingTimeDisplay	| false	| -| 剩余时间	|
|fullscreenToggle	| true	| -| 全屏按钮	|
|playToggle	| true	| -| 播放按钮	|
|pictureInPictureToggle	| false	| -| 画中画按钮	|
|volumePanel	| {inline: false}	| -| 音量调节是否水平	|
