import axios from '@/request.js'

//获取门禁信息
export function getDoors(){
	return axios.get('/app/getEquips')
}

export function getDoorsById(id){
	return axios.get('/app/getEquips?owner_id=' + id)
}
//发送请求记录日志
export function openDoor(owner_id,doors,type = 0){
	return axios.post('/app/openDoor',{
		type,
		ownerId:owner_id,
		doors
	})
}


//访客邀请
export function vister(owner_id,authorizer_device,authorizer_time){
	return axios.post('/app/vister',{
		ownerId:owner_id,
		authorizedDevice:authorizer_device,
		authorizedTime:authorizer_time
	})
}

//获取邀请码列表
export function getCodeList(owner_id){
	return axios.get('/app/getCodeList?owner_id=' + owner_id)
}

//邀请码无效
export function updateCode(uuid){
	return axios.post('/app/updateCode',{
		uuid:uuid
		})
}

//获取开门记录
export function getRecord(owner_id){
	return axios.get('/app/getRecord?owner_id=' + owner_id)
}

