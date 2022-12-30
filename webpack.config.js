const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const packageJSON = require("./package.json");

module.exports = {
	entry: "./src/index.ts",
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-typescript"],
					},
				},
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js", ".jsx"],
	},
	output: {
		filename: `${packageJSON.stylizedName}.js`,
		path: path.resolve(__dirname, "dist"),
		clean: true,
		globalObject: "this",
		library: {
			name: `${packageJSON.stylizedName}`,
			type: "umd",
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: `${packageJSON.stylizedName}.js`,
			template: "src/index.html",
		}),
		new CopyPlugin({
			patterns: [
				{ from: "src/style.css", to: "style.css" },
				{ from: "src/img", to: "img" },
			],
		}),
	],
	devServer: {
		static: path.join(__dirname, "dist"),
		compress: true,
		open: true,
		hot: true,
		port: 4000,
		historyApiFallback: true,
	},
};
