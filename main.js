import App from './App'
// import Chat from 'vue3-beautiful-chat'

// // #ifndef VUE3
// import Vue from 'vue'
// Vue.config.productionTip = false
// App.mpType = 'app'
// const app = new Vue({
// 	...App
// })
// app.$mount()
// // #endif

// 
// #ifdef VUE3
// import Chat from 'vue3-beautiful-chat'
import {
	createSSRApp
} from 'vue'

export function createApp() {
	const app = createSSRApp(App)
	// app.use(chat)
	return {
		app
	}
}
// #endif
