const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

const pkgTitle = "bRando.js";

module.exports = {
	entry: "./src/index.ts",
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},

	output: {
		filename: pkgTitle,
		path: path.resolve(__dirname, "dist"),
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html",
		}),
		new CopyPlugin({
			patterns: [{ from: "src/style.css", to: "style.css" }],
		}),
	],

	devServer: {
		static: path.join(__dirname, "dist"),
		compress: true,
		port: 4000,
	},
};
