'use strict'
const merge = require('deep-assign')
const webpack = require('webpack')
const options = require('./options')
const base = require('./webpack.base.js')
const externals = require('./externals')

const config = merge(base, {
	entry: options.paths.src.main,
	output: {
		filename: '[name].js',
		path: options.paths.output.main,
		library: '[name]',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	externals: externals,
	plugins: []
})

// debug and production
config.plugins = config.plugins.concat([
	new webpack.DefinePlugin({
		VERSION: JSON.stringify(options.version)
	})
])
config.module.rules.push({
	test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
	loader: 'url-loader?limit=8192'
})

module.exports = config
