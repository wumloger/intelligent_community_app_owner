import axios from '@/request.js'

//获取验证码
export function getCodeByPhone(phone){
	return axios.post('/app/getCode',{phone:phone})
}

//手机验证码登录
export function loginByCode(phone,code,type = 0){
	return axios.post('/app/login',{
		type,
		phone,
		code,
	})
}
//账号密码登录
export function loginByPassword(phone,password,type = 0){
	return axios.post('/app/login',{
		type,
		phone,
		password
	})
}
//更改密码
export function rePassword(form){
	return axios.post('/app/rePassword',form)
}