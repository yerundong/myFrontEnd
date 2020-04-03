const webpack = require('webpack');
let path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',// development（开发）、production（生产）
  entry: path.resolve(__dirname + "/src/index.js"),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname + "/dist")
  },
  module: {
    rules: [

      // css-loader、style-loader
      // 二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中
      // 可用extract-text-webpack-plugin插件将其分离出来
      {
        test: /\.css$/,
        use: [{
          loader: "style-loader" // 将所有的计算后的样式加入页面中；
        }, {
          loader: "css-loader" // 使你能够使用类似@import和url(…)的方法实现require()的功能
        }]
      },
      // node-sass
      {
        test: /\.scss/,
        use: [{
            loader: 'style-loader'
        }, {
            loader: 'css-loader'
        }, {
            loader: 'sass-loader'
        }]
    }
    ]
  }
};