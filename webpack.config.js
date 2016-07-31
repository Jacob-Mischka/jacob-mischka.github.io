/* eslint-env node */
module.exports = {
	entry: {
		bundle: './_js/main.js'
	},
	output: {
		path: './resources/',
		publicPath: '/resources/',
		filename: '../js/[name].js'
	},
	target: 'web',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	devtool: 'source-map'
};
