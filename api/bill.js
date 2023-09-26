import axios from '@/request.js'

//获取用户账单
export function getBills(owner_id){
	return axios.get('/app/getBills?owner_id=' + owner_id)
}

//获取用户账单详情
export function getBill(owner_id,bill_id){
	return axios.get('/app/getBills?owner_id=' + owner_id + '&bill_id=' + bill_id)
}

//缴费
export function updateBill(id){
	return axios.post('/app/updateBill',{id})
}

//获取缴费记录
export function getRecord(owner_id){
	return axios.get('/app/listByYear?owner_id='+ owner_id)
}