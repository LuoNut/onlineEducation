export default () => {
	return {
		username: {
			rules: [{
					required: true,
					errorMessage: '请输用户名',
				},
				{
					minLength: 6,
					maxLength: 11,
					errorMessage: '用户名格式不正确',
				}
			]
		},
		password: {
			rules: [{
					required: true,
					errorMessage: '请输入密码',
				},
				{
					minLength: 6,
					maxLength: 12,
					errorMessage: '密码为6至12位',
				}
			]
		},
		opassword: {
			rules: [
				{ required: true, errorMessage: '请输入原密码' }
			]
		},
		repassword: {
			rules: [
				{ required: true, errorMessage: '请输入密码' },
				{
					validateFunction(rule, value, data, callback) {
						if (data.password !== data.repassword) {
							callback('两次输入密码不一致')
						} else {
							return true
						}
					}
				}
			]
		},
		// 手机号
		phone: {
			rules: [{
					required: true,
					errorMessage: '请填写手机号',
				},
				{
						validateFunction(rule, value, data, callback) {
							if ((value + '').length !== 11) {
								callback('手机号格式不正确')
							} else {
								return true
							}
						}
					},
				{
					format: 'number',
					errorMessage: '手机号格式应为纯数字',
				}
			]
		},
		// 短信验证码
		code: {
			rules: [{
					required: true,
					errorMessage: '请填写短信验证码',
				},
				{
					format: 'number',
					errorMessage: '短信验证码格式应为纯数字',
				}
			]
		}
	}
}
