/* eslint-env node */
module.exports = {
	entry: {
		bundle: './_js/main.js',
		'slides/test': './_js/slides/test.js'
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
			},
			{
				test: /\.css$/,
				loaders: [
					'style',
					'css'
				]
			},
			{
				test: /\.js$/,
				include: /node_modules\/reveal.js\/plugin/,
				loader: 'file'
			},
			{
				test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
				include: /node_modules/,
				loader: 'file'
			}
		]
	},
	devtool: 'source-map'
};
