
export default{
	data(){
		return {
		}
	},
	methods: {
		toast(title, icon = 'none'){
			uni.showToast({
				title,
				icon
			})
		},
		/**
		 * 跳转页面
		 * @param {String} url 目标页面地址
		 * @param {Object} options 参数
		 * @param {Boolean} options.login 是否检测登录  
		 */
		navTo(url, options={}){
			if(!url){
				return;
			}
			// if(options.login && !this.$store.getters.hasLogin){
			// 	url = '/pages/auth/login';
			// }
			uni.navigateTo({
				url
			})
		},
		
		// 后退, 默认后退一步
		navBack(delta = 1){
			// console.log('navBack', delta)
			uni.navigateBack({
				delta
			});
		}
		
	}
}