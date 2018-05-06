import pagination from './pagination.vue'

pagination.install = function(Vue) {
	Vue.component(pagination.name, pagination)
}

export default pagination
