'use strict'
const merge = require('deep-assign')
const webpack = require('webpack')
const options = require('./options')
const base = require('./webpack.base.js')
const externals = require('./externals')

const config = merge(base, {
	entry: './src/index',
	output: {
		filename: 'kzjr_ui.min.js',
		path: options.paths.output.main,
		library: '[name]',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	externals: externals,
	plugins: []
})

config.plugins = config.plugins.concat([
	new webpack.DefinePlugin({
		VERSION: JSON.stringify(options.version)
	})
])

config.plugins = config.plugins.concat([
	new webpack.optimize.UglifyJsPlugin({
		sourceMap: false,
		compress: {
			warnings: false,
			drop_debugger: true,
			drop_console: true
		}
	})
])
config.module.rules.push({
	test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
	loader: 'url-loader?limit=8192'
})
module.exports = config
