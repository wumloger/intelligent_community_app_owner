import axios from '@/request.js'

//获取房屋信息
export function HouseList(owner_id,type){
	return axios.get('/app/HouseList?owner_id=' + owner_id + '&type=' + type)
}
//添加房屋
export function AddHouse(require){
	return axios.post('/app/AddHouse',require)
}

//删除房屋
export function removeHouse(house_id,owner_id){
   return axios.delete('/app/house/' + house_id +'/' + owner_id)
}
//获取业主手机号
export function getOwnerPhone(room_id){
	return axios.get('/app/getOwnerPhone?roomId=' + room_id)
}