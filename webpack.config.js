const path = require("path");
const HtmlWebPlugin = require('html-webpack-plugin')

module.exports = {

  // 入口文件
  entry: {
    index: "./src/index.js",
    print: "./src/print.js"
  },

  // 配置插件
  plugins: [
    new HtmlWebPlugin({
      title: '管理输出',
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