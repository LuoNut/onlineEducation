/**
 *  获取当前页面的路由地址+参数
 */
export const getRoute = () => {
	// 获取所有页面对象
	const pages = getCurrentPages();
	// 获取当前页面实例
	const page = pages[pages.length - 1];
	// 当前路由参数对象 {id: 2, name: 'xx'}
	// 在小程序或app中，使用 page.options ; H5端使用 page.$route.query
	// #ifndef H5
	const query = page.options;
	// #endif
	// #ifdef H5
	const query = page.$route.query;
	// #endif
	// 将参数对象转换为 key1=value1&key2=value2形式
	let fullPath = '';
	query && Object.keys(query).forEach((key) => {
		fullPath += `${key}=${query[key]}`
	});
	return {
		// 当前路由地址
		route: page.route,
		// 当前路由地址+参数 pages/course/course-details.vue?key1=value1&key2=value2
		fullPath: fullPath ? `${page.route}?${fullPath}` : page
			.route
	}
}
