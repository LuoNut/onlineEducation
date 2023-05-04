'use strict';
const uniIDs = require('uni-id')
exports.main = async (e) => {
	
	
	let res = await uniIDs.bindRole({
		"uid": e.e,
		"roleList": ["teacher"]
	})
	
	//返回数据给客户端
	return res
};