const webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// __dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
// path.resolve总是返回一个以相对于当前的工作目录（working directory）的绝对路径

module.exports = {
    // mode: 'development',// development（开发）、production（生产）
    entry: {
        index: path.resolve(__dirname + "/src/index.js"),
        hello: path.resolve(__dirname + "/src/modules/hello/hello.js"),
    }, // 唯一的入口文件
    output: {
        path: path.resolve(__dirname + "/dist"), // 存放编译打包后文件的文件夹
        filename: "[name].js" // 打包后输出文件的文件名
    },
    /*开发工具*/
    // devtool: 'eval-source-map', // source-map打包方式
    /*本地服务器*/
    devServer: {
        contentBase: "./pack", // 本地服务器所加载的页面所在的目录
        historyApiFallback: true, // 不跳转
        inline: true, // 实时刷新
        port: '8089' // 端口 默认8080
    },
    /*loader配置*/
    // 将符合条件的源文件转换为对应的目标格式文件
    module: {
        rules: [
            // babel
            {
                test: /(\.js)$/, // 匹配loaders所处理文件的拓展名的正则表达式（必填）
                use: {
                    loader: "babel-loader", // loader的名称（必填）
                    // options: {presets: ["es2015"]}// 可以配置在babelrc里，webpack自动调用
                },
                // exclude屏蔽不需要处理的文件夹,include手动添加必须处理的文件夹
                exclude: /node_modules/
            },
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
    },
    /*插件*/
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new webpack.optimize.OccurrenceOrderPlugin(), // 为组件分配ID 内置
        new webpack.optimize.UglifyJsPlugin(), // 压缩插件  内置
        new ExtractTextPlugin("style.css"), // 分离CSS和JS文件
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery",
            "window.jQuery": "jquery"
        }),
        new HtmlWebpackPlugin({ // new一个这个插件的实例，并传入相关的参数
            template: path.resolve(__dirname + "/src/index.html"), // 模板文件
            chunks: ["index"],
        }),
        new HtmlWebpackPlugin({
            filename:'./modules/hello/hello.html',
            template: path.resolve(__dirname + '/src/modules/hello/hello.html'),
            chunks: ["index", "hello"],
        }),
    ],
}