import axios from '@/request.js'
//获取消息列表
export function getNotice(){
	return axios.get('/app/getNotice')
}

//根据id获取消息
export function getNoticeById(id){
	return axios.get('/app/getNotice?notice_id=' + id)
}