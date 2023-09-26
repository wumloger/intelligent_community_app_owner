import axios from '@/request.js'

export function getCommunityList(owner_id,type=0){
	return axios.get('/app/community?type=' + type + '&owner_id=' + owner_id)
}

//远程保存当前选中小区
// export function selectCommunity(id){
// 	return axios.get('/app/selectCommunity?id='+ id)
// }

//获取活动信息列表
export function getActivity(){
	return axios.get('/app/getCommunityList')
}
//
export function getActivityById(id){
	return axios.get('/app/getCommunityList?info_id=' + id)
}
