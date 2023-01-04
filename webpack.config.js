const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const Handlebars = require("handlebars");

const packageJSON = require("./package.json");
const blueprintJSON = require("./blueprint.json");

const fs = require("fs");
const { marked } = require("marked");

const baseConfig = {
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
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				extractComments: false,
			}),
		],
	},
};

const public = Object.assign({}, baseConfig, {
	output: {
		filename: `${packageJSON.details.stylizedName}.js`,
		path: path.resolve(__dirname, "public"),
		clean: false,
		globalObject: "this",
		library: {
			name: `${packageJSON.details.stylizedName}`,
			type: "umd",
		},
	},
	plugins: [
		new webpack.BannerPlugin({
			banner: `${packageJSON.details.stylizedName}.js v${packageJSON.version}\n${packageJSON.homepage}\nBuilt: ${new Date().toLocaleDateString("en-us", {
				year: "numeric",
				month: "numeric",
				day: "numeric",
				hour: "numeric",
				minute: "numeric",
				second: "numeric",
				timeZoneName: "longOffset",
			})}`,
			entryOnly: true,
		}),
		new HtmlWebpackPlugin({
			title: `${packageJSON.details.stylizedName}.js`,
			template: "src/index.html",
			filename: "../public/index.html",
			templateParameters: {
				description: packageJSON.description,
				subtitle: packageJSON.details.subtitle,
				installationUsage: Handlebars.compile(marked.parse(fs.readFileSync("./src/readme/installation-usage.md").toString()))(
					Object.assign(
						{
							pkg: packageJSON,
						},
						blueprintJSON
					)
				),
				repo: packageJSON.repository.url.substring(0, packageJSON.repository.url.length - 4),
				homepage: packageJSON.homepage,
			},
			alwaysWriteToDisk: true,
			scriptLoading: "blocking",
			inject: "head",
		}),
		new HtmlWebpackHarddiskPlugin(),
		new CopyPlugin({
			patterns: [
				{ from: "src/style.css", to: "style.css" },
				{ from: "src/img", to: "img" },
				{ from: "brandojs-demo-cap.webp", to: "brandojs-demo-cap.webp" },
			],
		}),
	],
	devServer: {
		static: path.join(__dirname, "public"),
		compress: true,
		open: true,
		hot: true,
		port: 4000,
		historyApiFallback: true,
	},
});

const dist = Object.assign({}, baseConfig, {
	output: {
		filename: `${packageJSON.details.stylizedName}.js`,
		path: path.resolve(__dirname, "dist"),
		clean: true,
		globalObject: "this",
		library: {
			name: `${packageJSON.details.stylizedName}`,
			type: "umd",
		},
	},
	plugins: [
		new webpack.BannerPlugin({
			banner: `${packageJSON.details.stylizedName}.js v${packageJSON.version}\n${packageJSON.homepage}\nBuilt: ${new Date().toLocaleDateString("en-us", {
				year: "numeric",
				month: "numeric",
				day: "numeric",
				hour: "numeric",
				minute: "numeric",
				second: "numeric",
				timeZoneName: "longOffset",
			})}`,
			entryOnly: true,
		}),
		new CopyPlugin({
			patterns: [{ from: "src/img", to: "img" }],
		}),
	],
});

module.exports = [public, dist];
