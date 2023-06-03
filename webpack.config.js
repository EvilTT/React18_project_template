import path from 'path'
import { fileURLToPath } from 'url'
import process from 'process'
import fs from 'fs'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import FileManagerPlugin from 'filemanager-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'

//NOTE: Global variables for ES6 modules, because in ES6 modules unsupported node global variables
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const { compilerOptions } = JSON.parse(
	fs.readFileSync(path.resolve('tsconfig.json'), 'utf-8')
)

export const isDevelopmentMode = process.env.NODE_ENV === 'development'
const refreshPlugin = isDevelopmentMode ? [new ReactRefreshPlugin()] : []

// converattions alias format ts.config.ts to webpack alias format
const getWebpackAliasesFromPaths = configPaths => {
	const alias = Object.entries(configPaths).reduce(
		(webpackAliases, [configAlias, configPathList]) => {
			const [aliasKey] = configAlias.split('/')
			const [relativePathToDir] = configPathList[0].split('/*')
			return {
				...webpackAliases,
				[aliasKey]: path.resolve(__dirname, relativePathToDir),
			}
		},
		{}
	)
	return alias
}

// REFACTOR: out style configuration in other file
const CSSModuleLoader = {
	loader: 'css-loader',
	options: {
		modules: {
			auto: true,
			exportLocalsConvention: 'camelCase',
			localIdentName: isDevelopmentMode
				? '[name]_[local]'
				: '[name]_[local]_[hash:base64]',
		},
		importLoaders: 2,
		sourceMap: false,
	},
}

const CSSLoader = {
	loader: 'css-loader',
	options: {
		modules: {
			mode: 'global',
			exportLocalsConvention: 'camelCase',
		},
		importLoaders: 2,
		sourceMap: false,
	},
}

const PostCSSLoader = {
	loader: 'postcss-loader',
	options: {
		sourceMap: false,
		postcssOptions: {
			parser: 'postcss',
			config: path.resolve(__dirname, 'postcss.config.js'),
		},
	},
}

const styleLoader = isDevelopmentMode
	? 'style-loader'
	: MiniCssExtractPlugin.loader

export default {
	mode: isDevelopmentMode ? 'development' : 'production',
	target: isDevelopmentMode ? 'web' : 'browserslist',
	entry: path.resolve(__dirname, 'src/index.tsx'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle_[contenthash]_.js',
		assetModuleFilename: path.join(
			'images',
			isDevelopmentMode ? '[name].[ext]' : '[name].[contenthash][ext]'
		),
	},
	...(isDevelopmentMode && {
		devtool: 'source-map',
	}),
	devServer: {
		client: {
			progress: true,
			overlay: {
				errors: true,
				warnings: false,
				runtimeErrors: true,
			},
		},
		watchFiles: [path.resolve(__dirname, 'src')],
		static: {
			directory: path.resolve(__dirname, 'public'),
		},
		port: 8080,
		compress: true,
		open: true,
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				exclude: /\.module\.(sa|sc|c)ss$/,
				use: [styleLoader, CSSLoader, PostCSSLoader, 'sass-loader'],
			},
			{
				test: /\.module\.(scss|css)$/,
				use: [
					styleLoader,
					CSSModuleLoader,
					PostCSSLoader,
					'sass-loader',
				],
			},
			{
				test: /\.(ts|js)x?$/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
					},
				},
				resolve: {
					fullySpecified: false,
				},
				exclude: [
					/node_modules/,
					/\.test\.(tsx|ts)$/,
					/\.spec\.(tsx|ts)$/,
				],
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.svg$/i,
				type: 'asset/inline', //TODO: inline or resource, for tests
				generator: {
					filename: path.join(
						'icons',
						isDevelopmentMode
							? '[name].[ext]'
							: '[name]._[contenthash]_[ext]'
					),
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		alias: getWebpackAliasesFromPaths(compilerOptions.paths),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
			filename: 'index.html',
		}),
		new ForkTsCheckerWebpackPlugin(),
		new FileManagerPlugin({
			events: {
				onStart: {
					delete: ['build'],
				},
				// onEnd: {
				// 	copy: [
				// 		{
				// 			source: path.resolve(__dirname, 'public/static'), // NOTE: for copies static files in build
				// 			destination: 'build',
				// 		},
				// 	],
				// },
			},
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		}),
		...refreshPlugin,
	],
	// REFACTOR: ouside in other file
	optimization: {
		minimizer: [
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
					options: {
						plugins: [
							['gifsicle', { interlaced: true }],
							['jpegtran', { progressive: true }],
							['optipng', { optimizationLevel: 5 }],
							['svgo', { name: 'preset-default' }],
						],
					},
				},
			}),
		],
	},
}
