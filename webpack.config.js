module.exports = {
	entry:__dirname+"/src/index.js",
	output:{
		filename:"bundle.js",
		path:__dirname+"/dist"
	},
	module:{
		rules:[
			{
				test:/\.vue$/,
				use:"vue-loader"
			}
		]
	}
}
