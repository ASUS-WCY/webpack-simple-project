const path = require("path");
const HtmlWebPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  // 入口文件
  entry: {
    index: "./src/index.js",
  },

  // 配置 webpack-dev-server
  devServer: {
    static: './dist',
    hot: true
  },

  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }]
  },

  // 配置插件
  plugins: [
    new HtmlWebPlugin({
      title: 'Development',
    })
  ],

  output: {

    // 打包后文件名称
    filename: '[name].bundle.js',

    // 打包后文件路径
    path: path.resolve(__dirname, "dist"),

    // 每次打包时 都会清除dist文件夹下的文件 然后将打包后的文件放入其中
    clean: true
  },

};