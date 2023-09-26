import axios from '@/request.js'

//获取业主车辆列表
export function getCarList(owner_id){
	return axios.get('/app/getCar?owner_id=' + owner_id)
}

//添加车辆
export function addCar(data){
	return axios.post('/app/addCar',data)
}

//删除车辆
export function deleteCar(ownerId,carId){
	return axios.post('/app/deleteCar',{ownerId,carId})
}

//获取车位列表
export function getPark(owner_id){
	return axios.get('/app/getPark?owner_id=' + owner_id)
}
//根据车牌号查询车辆
export function getCar(owner_id,car_no){
	return axios.get('/app/getCar?owner_id=' + owner_id + '&number=' + car_no)
}

//车位解绑
export function unBind(park_id){
	return axios.post('/app/unbindPark/'+park_id)
}

//绑定车辆
export function bind(park_id,car_id){
	return axios.post('/app/bindPark/' + park_id + '/' + car_id)
}

//根据小区获取车位
export function getParkByCommunity(community_id){
	return axios.get('/app/getParkByCommunity?community_id='+community_id)
}

//添加车位
export function addPark(ownerId,id){
	return axios.post('/app/addPark',{ownerId,id})
}
