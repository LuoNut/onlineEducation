const db = uniCloud.database()
const dbCmd = db.command
module.exports = {
	_before: function () { // 通用预处理器

	},
	//table 表名,attr 更改的属性,id 指定哪条,num +1 -1
	operation(table,attr,id,num) {
		let obj = {}
		obj[attr] = dbCmd.inc(num)
		db.collection(table).doc(id).update(obj)
	}

}
