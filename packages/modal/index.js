import modal from './main.vue'

if (typeof window !== 'undefined' && window.Vue) {
	Vue.component(modal.name, modal)
}

modal.install = function(Vue) {
	Vue.component(modal.name, modal)
}

export default modal
