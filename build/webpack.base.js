'use strict'
const options = require('./options')
const path = require('path')

let config = {
	resolve: {
		modules: [options.paths.root, options.paths.resolve('node_modules')],
		alias: {
			vue$: 'vue/dist/vue.common.js',
			kzjr_ui: path.resolve(__dirname, '../')
		},
		extensions: ['.js', '.json', '.vue']
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {}
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	stats: {
		hash: false,
		colors: true,
		chunks: false,
		version: false,
		children: false,
		timings: true
	}
}

if (process.env.NODE_ENV === 'example') {
	config.module.rules.push({
		test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
		loader: 'url-loader?limit=8192'
	})
	config.module.rules[0].options.loaders = {
		scss: 'vue-style-loader!css-loader!sass-loader'
	}
}

module.exports = config
