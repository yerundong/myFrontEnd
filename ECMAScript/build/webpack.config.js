const webpack = require('webpack');
let path = require('path');

// 可以让插件为你生成一个HTML文件，使用lodash模板提供你自己的模板，或使用你自己的loader。
const HtmlWebpackPlugin = require('html-webpack-plugin');

// copy-webpack-plugin 的作用是拷贝文件或文件夹
// reference：https://github.com/webpack-contrib/copy-webpack-plugin
const CopyWebpackPlugin = require('copy-webpack-plugin')

// 压缩优化js文件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

// extract-text-webpack-plugin 是 mini-css-extract-plugin的前身，不过在 webpack4 算是废了。
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// 把js中import导入的样式文件，单独打包成一个css文件，结合html-webpack-plugin，以link的形式插入到html文件中。
// 此插件不支持HMR，若修改了样式文件，是不能即时在浏览器中显示出来的，需要手动刷新页面。
// 不能与style-loader同用
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


// 在每次构建前清理 /dist 文件夹
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');


// 用于生成文件映射清单（manifest.json）
const ManifestPlugin = require('webpack-manifest-plugin');

// const autoprefixer = require('autoprefixer');

module.exports = {
  mode: 'development', // development（开发）、production（生产）
  // 入口文件
  entry: {
  },
  // 输出配置
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '..', "/dist"),
    // publicPath 也会在服务器脚本用到(server.js)
    publicPath: '/'
  },
  // 选择一种 source map 格式来增强调试过程。不同的值会明显影响到构建(build)和重新构建(rebuild)的速度。
  // 你可以直接使用 SourceMapDevToolPlugin/EvalSourceMapDevToolPlugin 来替代使用 devtool 选项，因为它有更多的选项。
  // 切勿同时使用 devtool 选项和 SourceMapDevToolPlugin/EvalSourceMapDevToolPlugin 插件。
  // devtool 选项在内部添加过这些插件，所以你最终将应用两次插件。
  // source map有多种组合，有的适合开发，有的适合生产，具体参考官网
  // cheap-module-eval-source-map是开发环境中最快的
  // 在开发环境中我们使用：cheap-module-eval-source-map
  // 在生产环境中我们使用：cheap-module-source-map。
  devtool: 'cheap-module-eval-source-map',
  /*开发服务器*/
  devServer: {
    contentBase: path.join(__dirname, '..', "/"), // 本地服务器所加载的页面所在的目录
    historyApiFallback: true, // 不跳转
    inline: true, // 实时刷新
    port: '8099', // 端口 默认8080
    hot: true,
    after(app) {
      console.log('*****************项目已启动*******************');
    }
  },
  module: {
    rules: [
      // css-loader、style-loader、postcss-loader、sass-loader
      // 二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中
      // postcss-loader需要借助autoprefixer插件来根据浏览器的兼容性为CSS3的属性添加前缀
      // sass-loader依赖于node-sass
      {
        test: /\.(sa|sc|c)ss$/,
        use: [{
            loader: MiniCssExtractPlugin.loader
          },
          // {
          //   loader: 'style-loader' // 把js中import导入的样式文件打包到js文件中，运行js文件时，将样式自动插入到<style>标签中。
          // },
          {
            loader: 'css-loader' // 使你能够使用类似@import和url(…)的方法实现require()的功能
          },
          {
            loader: 'sass-loader' // 允许使用sass语法
          }
        ]
      },
      // webpack加载css背景图片、img元素指向的网络图片、使用es6的import引入的图片时，需要使用url-loader或者file-loader。
      // url-loader可以将图片转为base64字符串，能更快的加载图片，一旦图片过大，会默认使用file-loader
      // 所以一般使用url-loader
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      },
      // 处理文字字体（未深入研究）
      {
        test: /\.(woff2?|woff|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: [
      //     'file-loader'
      //   ]
      // },
      // 导入 CSV、TSV 和 XML数据需要（json数据默认可以）
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      },
    ]
  },
  /*插件*/
  plugins: [
    new CleanWebpackPlugin(),
    new ManifestPlugin(),
    // 启动HMR(实时热更新)
    // HMR 不适用于生产环境，这意味着它应当只在开发环境使用。
    // new webpack.HotModuleReplacementPlugin(),

    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../static'),
      to: path.resolve(__dirname, '../dist/static'),
      ignore: ['.*']
    }]),

    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      reloadAll: true,
    }),

    new UglifyJsPlugin({
      uglifyOptions: {
        // compress: {
        //   warnings: false
        // }
      },
      sourceMap: true,
      parallel: true
    }),
  ]
};