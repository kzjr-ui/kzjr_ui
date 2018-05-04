import pagination from './components/pagination'

const components = [pagination]

const componentsObj = {
	pagination
}

const install = function(Vue) {
	if (install.installed) return

	components.map(component => {
		Vue.component(component.name, component)
	})
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

const API = {
	install,
	...componentsObj
}

module.exports.default = module.exports = API // eslint-disable-line no-undef
