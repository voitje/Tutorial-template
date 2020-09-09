const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { HOST, PORT, paths } = require('../bin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: 'src',
		historyApiFallback: true,
		hot: true,
		host: HOST,
		port: PORT,
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: paths.appHtml,
			// TODO: uncomment if favicon is created
			favicon: paths.appFavicon,
		}),
	],
	module: {

	},
});
