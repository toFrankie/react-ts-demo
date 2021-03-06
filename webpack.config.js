const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const apiMocker = require('mocker-api')

module.exports = {
  target: 'web',
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: './src/index.tsx',

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[chunkhash].bundle.js', // non-entry
    clean: true
  },

  optimization: {
    moduleIds: 'named',
    usedExports: true,
  },

  devServer: {
    contentBase: false,
    publicPath: '/',
    open: true,
    hot: true,
    host: '0.0.0.0',
    port: 8080,
    useLocalIp: true,
    compress: true,
    historyApiFallback: true,
    before: app => {
      apiMocker(app, path.resolve(__dirname, './mocker/index.js'))
    }
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },

  plugins: [
    new ReactRefreshWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'react-ts demo',
      inject: true,
      hash: true
    }),

    // Automatically load modules instead of having to import or require them everywhere.
    // new webpack.ProvidePlugin({
    //   React: 'React'
    // }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),

    new ESLintPlugin({
      fix: true // This option will change source files.
    })
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              plugins: [require.resolve('react-refresh/babel')]
            }
          }
        ]
      },
      {
        test: /\.less$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                mode: 'local',
                localIdentName: '[local]-[hash:4]',
                exportLocalsConvention: 'camelCase'
              }
            }
          },
          'postcss-loader',
          'less-loader'
        ]
      }
    ]
  }
}
