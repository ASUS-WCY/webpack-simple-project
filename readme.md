### webpack 起步

1. `npm init -y` 初始化项目

2. 首先安装 `webpack` 和 `webpack-cli`

> `npm i webpack webpack-cli -D`

3. 创建 index.html 文件 和 src/index.js 文件

> 在 index.html 添加 `<script src="bundle.js"></script>`

4. 创建 `webpack.config.js` webpack 配置文件

```javascript
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
};
```

5. 配置 `package.json` 文件

```json

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack --mode development",
    "build": "webpack --mode production"
  },

```

6. 执行 `npm run dev` 编译文件 编译完成后打开 index.html 查看是否编译成功

<br/>

### 资源管理

1. 加载 css

   > 为加载 css 需要在项目中引入 `style-loader` 和 `css-loader`
   > 执行`npm i -D style-loader css-loader`

2. 修改 webpack.config.js

```javascript
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```

> webpack 根据正则表达式，来确定应该查找哪些文件，并将其提供给指定的 loader。 <br/>
> 在这个示例中，所有以 .css 结尾的文件，都将被提供给 style-loader 和 css-loader。

3. 加载 images 图片

> 通过 webpack5 中内置的 Asset Modules 来加载 images 图片
> 在 webpack.config.js 中添加配置项

```javascript
rules: [
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
     ],
```

> js文件 和 css文件添加图片

```javascript
  import Icon from './vue.icon';

  // 将图像添加到我们已经存在的 div 中。
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
```

```css
  background: url(./static/logo192.png) no-repeat;
  background-size: contain;
```


