const webpack = require('webpack');
let path = require('path');

// 可以让插件为你生成一个HTML文件，使用lodash模板提供你自己的模板，或使用你自己的loader。
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    app1: path.join(__dirname, '..', "/src/app1.js"),
  },
  // 输出配置
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '..', "/dist"),
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
    port: '8080', // 端口 默认8080
    hot: true,
    after(app) {
      console.log('*****************项目已启动8080*******************');
    }
  },
  module: {
    rules: [
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
      // babel-loader
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude:'/node_modules/'
      }
    ]
  },
  /*插件*/
  plugins: [
    new CleanWebpackPlugin(),
    new ManifestPlugin(),
    // 启动HMR(实时热更新)
    // HMR 不适用于生产环境，这意味着它应当只在开发环境使用。
    // new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, '..', "/src/index.html"),
      chunks: ["app1"],
    }),
  ]
};