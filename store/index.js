import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import tabBar from '@/utils/tabBar.js' // 引入刚刚创建的tabBar.js
const store = new Vuex.Store({
	state: {
		tabBarList: [],
	},
	mutations:{
		// 底部tabbar
		setRoleId(state,data){
			console.log(data);
			console.log(tabBar[data]);
			state.tabBarList = tabBar[data]
			uni.setStorageSync('tabBarList', tabBar[data]) // 根据登录时传过来的值,存储对应的tabbarlist
		},
	}
})
export default store
