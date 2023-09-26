import axios from 'axios'
// #ifdef APP-PLUS
import axiosAdapterUniapp from 'axios-adapter-uniapp'
// #endif


const service = axios.create(
	{
		// #ifdef APP-PLUS
		adapter: axiosAdapterUniapp,
		// #endif
		baseURL:'http://muteki.top:9090',
		
	}
)

// 添加请求拦截器
service.interceptors.request.use(
    async config => {
		// 往header头自动添加token
		const token = uni.getStorageSync('token')
		if(token){
			config.headers['token'] = token
		}
		const community = uni.getStorageSync('community')
		if(community){
			config.headers['community_id'] = community.id
		}
		return config
	},
	function (error) {
		return Promise.reject(error)
	}
)

export default service