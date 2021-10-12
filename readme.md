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

> js 文件 和 css 文件添加图片

```javascript
import Icon from "./vue.icon";

// 将图像添加到我们已经存在的 div 中。
const myIcon = new Image();
myIcon.src = Icon;
element.appendChild(myIcon);
```

```css
background: url(./static/logo192.png) no-repeat;
background-size: contain;
```

### 输出管理

1. 首先回退资源 确保文件夹保持整洁干净 如下所示

```html
webpack-demo |- package.json |- webpack.config.js |- /dist |- /src |- index.js
|- print.js |- /node_modules
```

2. 添加第二个入口文件 src/print.js 并写入以下内容

```javascript
export default function printMe() {
  console.log("I get called from print.js!");
}
```

3. 修改相应文件 确保能够正确打包

- index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>管理输出</title>
    <script src="./print.bundle.js"></script>
  </head>
  <body>
    <script src="./index.bundle.js"></script>
  </body>
</html>
```

- index.js

```javascript
import _ from "lodash";
import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
```

- webpack.config.js

```javascript
const path = require("path");

module.exports = {
  // 多个入口文件
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  output: {
    // 根据入口文件动态命名
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
```

4. 执行 `npm run build` 打包 并打开 index.html 查看结果

### 设置 HtmlWebPackPlugin

1. 首先安装插件，并且调整 `webpack.config.js` 文件

```javascript
npm i -D html-webpack-plugin
```

2. 配置 webpack.config.js 文件来清理 /dist 文件夹

```javascript
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    
    // 加上这句表示在每次打包时 都会清除dist文件夹下的文件 然后将打包后的文件放入其中
    clean: true,
   },
```
