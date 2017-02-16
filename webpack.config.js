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
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.js$/,
				include: /node_modules\/reveal.js\/plugin/,
				use: 'file-loader'
			},
			{
				test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
				include: /node_modules/,
				use: 'file-loader'
			}
		]
	},
	devtool: 'source-map'
};
