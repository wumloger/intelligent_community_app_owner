import App from './App.vue'


import uviewPlus from '@/uni_modules/uview-plus'
import { createPinia } from 'pinia'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'

export function createApp() {
	const app = createSSRApp(App)
	
	app.use(createPinia())
	app.use(uviewPlus)
	return {
		app
	}
}
// #endif
uni.$u.config.unit = 'rpx'