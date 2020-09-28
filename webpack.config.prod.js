const webpack = require("webpack");
module.exports = {
	mode: "production",
	entry: {
		index: "./Client/index.js",
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
					},
				],
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|gif|ico)$/,
				use: ["file-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./Client/index.html",
			filename: "./index.html",
		}),
		new CleanWebpackPlugin({
			cleanAfterEveryBuildPatterns: ["dist"],
		}),
	],
	optimization: {},
	resolve: {
		modules: ["node_modules"],
		extensions: [".js", ".json", ".jsx", ".css"],
	},
};