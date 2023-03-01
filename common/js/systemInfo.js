// import store from '@/store'
export default () => {
	return new Promise((resolve, reject) => {
		uni.getSystemInfo({
			success: e => {
				// 状态栏高度和顶部安全区高度是一样的, 这里只是区分一下字段
				const areaTop = e
					.safeAreaInsets.top;
				const statusBar = e
					.statusBarHeight;
				const areaBottom = e
					.safeAreaInsets.bottom;
				let navigator =
					44 // h5端固定44px即可
				let customBar = 0
				//   ----- app ------
				// #ifdef APP
				if (e.platform == 'android') {
					// 1.导航栏 (安卓固定50px)
					navigator = 50
					// 2.导航栏 + 状态栏
					customBar = statusBar + 50;
				} else {
					// 1.导航栏 (ios固定45px)
					navigator = 45
					// 2.导航栏 + 状态栏
					customBar = statusBar + 45;
				}
				// #endif

				//  ----- 微信 ------
				// #ifdef MP-WEIXIN
				const wxMenuButton = wx
					.getMenuButtonBoundingClientRect();
				//  1.微信导航栏
				navigator = wxMenuButton
					.height + (wxMenuButton
						.top - statusBar) * 2;
				//  2.导航栏 + 状态栏
				customBar = navigator +
					statusBar
				// #endif

				// ----- 阿里 ------
				// #ifdef MP-ALIPAY
				//  1.导航栏
				navigator = e.titleBarHeight
				//  2.导航栏 + 状态栏
				customBar = statusBar + e
					.titleBarHeight
				// #endif

				const info = {
					info: e, //  systemInfo  对象
					platform: e
						.platform, // 当前平台
					areaTop, //   安全区
					areaBottom,
					statusBar, // 状态栏 ( 和安全区一样的, 叫法不同 )
					customBar, // 状态栏 + 导航栏
					navigator //  导航栏 ( 固定: ios:45, android:50, h5:44 )
				}
				// 只有小程序能够计算出导航栏高度，app、H5是没有的，所以这两端的导航栏高度是设死的 ( 固定: ios:45, android:50, h5:44 )
				resolve(info)
			}
		});
	})

}
// export default {
// 	onLoad() {
// 		handle().then(res => {
// 			this.systemInfo = res
// 		})
// 	}
// }
