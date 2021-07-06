const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  target: 'web',
  mode: 'development',
  devtool: 'eval-source-map',
  entry: './src/index.jsx',

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[chunkhash].bundle.js' // non-entry
  },

  optimization: {
    moduleIds: 'named'
  },

  devServer: {
    contentBase: false,
    publicPath: '/',
    open: true,
    port: 8081,
    hot: true,
    // useLocalIp: true,
    compress: true
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.json'],
  },

  plugins: [
    new ReactRefreshWebpackPlugin(),

    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'react-ts demo',
      inject: true,
      hash: true
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],

  module: {
    rules: [
      {
        test: /\.js|jsx$/,
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
      }
    ]
  }
}
