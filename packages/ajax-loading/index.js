import Vue from 'vue'
import LoadingVue from './main.vue'

const LoadConstructor = Vue.extend(LoadingVue)
let Loading = function() {},
	instance

const initInstance = () => {
	instance = new LoadConstructor({
		el: document.createElement('div')
	})
}

Loading.close = () => {
	instance.visible = false
}

Loading.open = () => {
	if (!instance) {
		initInstance()
	}
	document.body.appendChild(instance.$el)
	Vue.nextTick(() => {
		instance.visible = true
	})
}

export default Loading
