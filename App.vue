<script>
	import Vue from 'vue'
	import {
		store,
	} from "@/uni_modules/uni-id-pages/common/store.js"
	export default {
		onLaunch: function() {
		    uni.getSystemInfo({
		        success: function(e) {
		            // #ifndef MP
		            Vue.prototype.StatusBar = e.statusBarHeight;
		            if (e.platform == 'android') {
		                Vue.prototype.CustomBar = e.statusBarHeight + 50;
		            } else {
		                Vue.prototype.CustomBar = e.statusBarHeight + 45;
		            };
		            // #endif
		            // #ifdef MP-WEIXIN
		            Vue.prototype.StatusBar = e.statusBarHeight;
		            let custom = wx.getMenuButtonBoundingClientRect();
		            Vue.prototype.Custom = custom;
		            Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
		            // #endif       
		            // #ifdef MP-ALIPAY
		            Vue.prototype.StatusBar = e.statusBarHeight;
		            Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
		            // #endif
		        }
		    })
		},
		onShow: function() {
			console.log('App Show')
			if (store.hasLogin) {
				return
			}else {
				this.$store.commit('setRoleId', 0)
			}
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "@/uni_modules/uview-ui/index.scss";
	@import "@/colorui/main.css";
	@import "@/colorui/icon.css";
	@import "@/static/iconfont/iconfont.css";
</style>
