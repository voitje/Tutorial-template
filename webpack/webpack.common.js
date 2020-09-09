

const { NODE_ENV, isPROD, isDEV, API_DOMAIN, paths } = require('../bin');

module.exports = {
	target: 'web',
	stats: {
		children: false,
		modules: false,
	},
	entry: {
		app: paths.appIndexJs,
	},
	output: {
		filename: `[name]-[hash]${isPROD ? '.min' : ''}.js`,
		path: paths.appBuild,
		publicPath: '/',
	},
	plugins: [

	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader'
			}
		]
	},
	resolve: {
		alias: {
			//   '@assets': paths.resolveApp('src/assets/'),
			//   '@api': paths.resolveApp('src/api/'),
			//   '@components': paths.resolveApp('src/components/'),
			//   '@context': paths.resolveApp('src/context/'),
			//   '@pages': paths.resolveApp('src/pages/'),
			//   '@store': paths.resolveApp('src/store/'),
			//   '@utils': paths.resolveApp('src/utils/'),
		},
		extensions: ['.ts', '.tsx', '.js']
	},
};
