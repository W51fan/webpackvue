const isDev = process.env.NODE_ENV === 'development'
const HTMLplugin = require('html-webpack-plugin')
const webpack = require('webpack')

const config = {
	target: "web",
	entry: __dirname + "/src/index.js",
	output: {
		filename: "bundle.js",
		path: __dirname + "/dist"
	},
	module: {
		rules: [{
				test: /\.vue$/,
				use: "vue-loader"
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader"
				]
			},
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				// options: {
				// 	presets: ["env"],
				// 	plugins: [
				// 		"transform-vue-jsx"
				// 	]
				// },
			},
			{
				test: /\.styl$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true
						}
					},
					'stylus-loader'
				]
			},
			{
				test: /\.(gif||jpg||jpeg||png||svg)$/,
				use: [{
					loader: "url-loader",
					options: {
						limit: 1024,
						name: "[name].[ext]"
					}
				}]
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
				use: ["file-loader"]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: isDev ? '"development"' : '"production"'
			}
		}),
		new HTMLplugin({

		}),
		// new webpack.optimize.CommonsChunkPlugin('common.js'),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})
	]
}

if (isDev) {
	config.devtool = '#cheap-module-eval-source'
	config.devServer = {
		port: 8000,
		host: "0.0.0.0",
		overlay: {
			errors: true
		},
		hot: true,
	}
	config.plugins.push(
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	)
}

module.exports = config