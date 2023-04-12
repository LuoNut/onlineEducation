<template>
	<view>
		<view class="page-body">
			<view class="page-section">
				<video style="width: 100%;" id="myVideo" src="https://mp-b47b22da-6a90-4dde-b937-8ac0d9bec90c.cdn.bspapp.com/cloudstorage/cc9653a1-07be-4401-863d-142f07a962d4.mp4" @error="videoErrorCallback"
				    enable-danmu controls>
                </video>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'video',
				src: '',
			}
		},
		onReady: function (res) {
			this.videoContext = uni.createVideoContext('myVideo')
		},
		methods: {
		}
	}
</script>