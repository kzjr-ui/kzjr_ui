import modal from './main.vue'

modal.install = function(Vue) {
	Vue.component(modal.name, modal)
}

export default modal
