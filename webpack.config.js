var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, './output'),
    publicPath: '/output/',
    filename: 'app.js'
  },
  module: {
    rules: [
      {test:/\.vue$/, use: 'vue-loader'},
      {test:/\.js$/, exclude: /node_modules/, use: {loader:'babel-loader'}},
      {test:/\.sass$/, use:['style-loader','css-loader','sass-loader']}
    ]
  },
  resolve: {
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    port:8001,
    open: true
  },
  devtool: '#eval-source-map'
}
