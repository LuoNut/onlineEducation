const db = uniCloud.database()
import {store} from "@/uni_modules/uni-id-pages/common/store.js"
const utilsObj = uniCloud.importObject('utils-obj',{
		customUI: true // 取消自动展示的交互提示界面
})

//获取富文本内的图片url地址
export function getImgSrc(richtext, num = 3) {
	let imgList = [];
	richtext.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/g, (match, capture) => {
		imgList.push(capture);
	});
	imgList = imgList.slice(0, num)
	return imgList;
}

//获取位置省份
export function getProvince() {
	return new Promise((resolve, reject) => {
		let historyProvince = uni.getStorageSync("historyProvince")
		if (historyProvince) {
			if ((Date.now() - historyProvince.time) > 1000 * 60 * 60) {
				getip().then(res => {
					resolve(res)
				}).catch(err => {
					reject(err)
				})
			} else {

				resolve(historyProvince.province)
			}
		} else {

			getip().then(res => {
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		}

	})

}


//获取地址的功能函数
function getip() {
	return new Promise((resolve, reject) => {
		uni.request({
			url: '',
			success: (res) => {
				let str = ""
				console.log('111');
				if (typeof(res.data.province) === "string") {
					str = res.data.province
				} else {
					str = "火星"
				}
				resolve(str)
				let obj = {
					province: str,
					time: Date.now()
				}
				uni.setStorageSync("historyProvince", obj)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}

//获取昵称
// export function giveName(item) {
// 	return item.user_id[0]?.nickname || item.user_id[0]?.username || item.user_id[0]?.mobile || "请设置昵称"
// }

//获取昵称 
export function giveName(item) {
	if (item) {
		return item.user_id[0]?.nickname
	}else {
		return ""
	}
}

//获取头像
export function giveAvatar(item) {
	return item.user_id[0]?.avatar_file?.url ?? '/static/images/user-default.jpg'
}

//点赞操作数据库的方法
export async function likeFun(artId) {
	//判断用户是否已经点过赞
	let count = await db.collection("blog_like")
		.where(`article_id=="${artId}" && user_id==$cloudEnv_uid`).count()
	console.log(count);
	if (count.result.total) {
		db.collection("blog_like").where(`article_id=="${artId}" && user_id==$cloudEnv_uid`).remove()
		utilsObj.operation('blog_article', 'like_count', artId, -1)
	} else {
		db.collection('blog_like').add({
			article_id: artId
		}).then((res) => {
			utilsObj.operation('blog_article', 'like_count', artId, 1)
		})
	}
}

//收藏操作数据库的方法
export async function courseLikeFun(courseId) {
	//判断用户是否已经点过赞
	let count = await db.collection("course_like")
		.where(`course_id=="${courseId}" && user_id==$cloudEnv_uid`).count()
	console.log(count);
	if (count.result.total) {
		db.collection("course_like").where(`course_id=="${courseId}" && user_id==$cloudEnv_uid`).remove()
		utilsObj.operation('course_video', 'like_count', courseId, -1)
	} else {
		db.collection('course_like').add({
			course_id: courseId
		}).then((res) => {
			utilsObj.operation('course_video', 'like_count', courseId, 1)
		})
	}
}
