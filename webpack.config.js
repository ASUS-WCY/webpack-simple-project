const path = require("path");

module.exports = {

  // 入口文件
  entry: "./src/index.js",
  output: {

    // 打包后文件名称
    filename: "bundle.js",

    // 打包后文件路径
    path: path.resolve(__dirname, "dist"),
  },

  // 模块化?
  module: {
    rules: [{

        // 对所有以.css结尾的文件
        test: /\.css$/i,

        // 使用style-loader 和 css-loader 加载器
        // 加载器执行顺序从后往前
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jepg|gif|ico)$/i,
        type: 'asset/resource',
      }
    ]
  }
};