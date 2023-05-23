<template>
	<view class="container">
		<view @click="addtabar(item)" class="navItem" v-for="(item, index) in navList" hover-class="navItem-hove" :key="index">
			<image :src="item.src" mode="aspectFill"></image>
			<text>{{item.name}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"icon-nav",
		props: {
			navList: Array
		},
		data() {
			return {
				
			};
		},
		methods: {
			addtabar(e) {
				if (Object.keys(e)[2] == 'navigateTo') {
					console.log(1);
					uni.navigateTo({
						url: `${e.navigateTo}`
					})
				}else {
					uni.reLaunch({
						url: `${e.reLaunch}`
					})
				}
				

					// if (this.uniIDHasRole('admin') || this.uniIDHasRole('teacher')) {
					// 	this.$store.commit('setRoleId', 1)
					// 	console.log(this);
					// }else {
					// 	this.$store.commit('setRoleId', 2)
					// }

				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 30rpx 0;
		display: flex;
		flex-wrap: wrap;
		background-color: #fff;
		.navItem {
			width: 25%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 10rpx 0;
			image {
				width: 100rpx;
				height: 100rpx;
				border-radius: 100%;
			}
			text {
				margin-top: 20rpx;
				font-size: 34rpx;
				color: #6c757d;
			}
		}
	}
	.navItem-hove {
		background-color: #f8f9fa;
	}
	
</style>