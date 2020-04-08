const webpack = require('webpack');
let path = require('path');

// 可以让插件为你生成一个HTML文件，使用lodash模板提供你自己的模板，或使用你自己的loader。
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    app: [
      path.join(__dirname, '..', "/src/基本类型.ts"), 
      path.join(__dirname, '..', "/src/函数.ts"), 
      path.join(__dirname, '..', "/src/接口.ts"),
      path.join(__dirname, '..', "/src/类.ts"),
      path.join(__dirname, '..', "/src/泛型.ts"),
      path.join(__dirname, '..', "/src/枚举.ts"),
      path.join(__dirname, '..', "/src/类型推论.ts"),
      path.join(__dirname, '..', "/src/命名空间.ts"),
    ],
    // app:  path.join(__dirname, '..', "/src/函数.ts"),
  },
  // 输出配置
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '..', "/dist"),
    // publicPath 也会在服务器脚本用到(server.js)
    publicPath: '/'
  },
  // resolve用于这些选项能设置模块如何被解析。
  resolve: {
    // 指定需要被处理的文件的扩展名
    extensions: [".ts", ".tsx", ".js", ".json"]
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
    contentBase: path.join(__dirname, '..', "/dist"), // 本地服务器所加载的页面所在的目录
    historyApiFallback: true, // 不跳转
    inline: true, // 实时刷新
    port: '8088', // 端口 默认8080
    hot: true,
    after(app) {
      console.log('*****************项目已启动*******************');
    }
  },
  module: {
    rules: [
      // 安装awesome-typescript-loader库来代替ts-loader库，它俩的功能是一样的，但据说awesome-typescript-loader比ts-loader编译.ts文件速度更快。
      // 也有人说使用@babel/preset-typescript取代awesome-typescript-loader和ts-loader更好
      // 详见https://www.cnblogs.com/vvjiang/archive/2019/12/18/12057811.html（待研究）
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      // css-loader、style-loader、postcss-loader、sass-loader
      // 二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中
      // 可用extract-text-webpack-plugin插件将其分离出来
      // postcss-loader需要借助autoprefixer插件来根据浏览器的兼容性为CSS3的属性添加前缀
      {
        test: /\.css$/,
        use: [{
            loader: 'style-loader' // 将所有的计算后的样式加入页面中；
          },
          {
            loader: 'css-loader' // 使你能够使用类似@import和url(…)的方法实现require()的功能
          }
        ]
      },
      // sass-loader依赖于node-sass
      {
        test: /\.scss$/,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
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
    ]
  },
  /*插件*/
  plugins: [
    new CleanWebpackPlugin(),
    new ManifestPlugin(),

    new HtmlWebpackPlugin({
      // 输出文件名
      filename: "index.html",
      // 模板文件
      template: path.join(__dirname, '..', "/src/index.html"),
      // 引入模块(未写全部引入)
      chunks: ["app"],
    }),
  ]
};