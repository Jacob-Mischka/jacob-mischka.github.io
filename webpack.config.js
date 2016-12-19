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
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				loaders: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.js$/,
				include: /node_modules\/reveal.js\/plugin/,
				loader: 'file-loader'
			},
			{
				test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
				include: /node_modules/,
				loader: 'file-loader'
			}
		]
	},
	devtool: 'source-map'
};
