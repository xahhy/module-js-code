### 描述
commonJS文件夹内三个js文件分别为:
- index.js - 入口文件，依赖于模块renderTemplate
- renderTemplate.js - 模版渲染模块，依赖于printToConsole
- printToConsole.js - 输出模块

用common JS标准来导出/导入模块

### commonJS的用法
导出
```js
module.exports = 函数or对象;
```

导入
```js
const XX = require(文件路径);
```

### 要求
1. 运行 `node ./src/commonJS/index.js` 控制台输出 `I am TW, er`
2. 用浏览器浏览 `./src/commonJS/index.html` 控制台输出 `I am TW, er`

### HINT
node实现了并使用了commonJS标准，所以commonJS的模块导出和导入在node环境可以直接运行，但是浏览器并没有任何模块化的实现，
所以需要将commonJS标准的代码编译成浏览器能够识别的文件(bundle.js). 你可以通过以下方式实现:

1. [webpack](https://webpack.js.org/)
 ```bash
  npm install -D webpack webpack-cli
  webpack ./src/commonjs/index.js --output-path ./src/commonjs/ --output-filename bundle.js
 ```
2. [browserify](http://browserify.org/)
 ```bash
 npm install -g browserify
 browserify ./src/commonjs/index.js > ./src/commonjs/bundle.js
 ```
