var path = require('path')
var fs = require('fs')
var nodeExternals = require('webpack-node-externals')
var Components = require('../components.json')
var saladConfig = require('./salad.config.json')

var utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'))
var mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'))
var transitionList = fs.readdirSync(
	path.resolve(__dirname, '../src/transitions')
)
var externals = {}

Object.keys(Components).forEach(function(key) {
	externals[`kzjr_ui/packages/${key}`] = `kzjr_ui/lib/${key}`
})

utilsList.forEach(function(file) {
	file = path.basename(file, '.js')
	externals[`kzjr_ui/src/utils/${file}`] = `kzjr_ui/lib/utils/${file}`
})
mixinsList.forEach(function(file) {
	file = path.basename(file, '.js')
	externals[`kzjr_ui/src/mixins/${file}`] = `kzjr_ui/lib/mixins/${file}`
})
transitionList.forEach(function(file) {
	file = path.basename(file, '.js')
	externals[
		`kzjr_ui/src/transitions/${file}`
	] = `kzjr_ui/lib/transitions/${file}`
})

externals = [
	Object.assign(
		{
			vue: 'vue'
		},
		externals
	),
	nodeExternals()
]
module.exports = externals
