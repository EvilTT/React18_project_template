import { isDevelopmentMode } from './webpack.config.js'

const plugins = ['@babel/plugin-transform-runtime']
isDevelopmentMode && plugins.push('react-refresh/babel')

export default {
	presets: [
		'@babel/preset-env',
		'@babel/preset-react',
		'@babel/preset-typescript',
	],
	plugins,
}
