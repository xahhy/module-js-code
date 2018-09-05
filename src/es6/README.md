### 描述
commonJS文件夹内三个js文件分别为:
- index.js - 入口文件，依赖于模块renderTemplate
- renderTemplate.js - 模版渲染模块，依赖于printToConsole
- printToConsole.js - 输出模块

用ES6标准来导出/导入模块

### ES6的用法
导出一个函数/对象
```js
export default 函数;
```
导出多个函数/对象
```js
export {
  函数1,
  函数2
}
```

导入
```js
import 函数/对象 from 模块路径;

import {函数1/对象1, 函数12对象2} from 模块路径;
```

### 要求
1. 运行程序并在NODE控制台输出 `I am TW, er`
2. 用浏览器浏览 `./src/commonJS/index.html` 控制台输出 `I am TW, er`

### HINT

1. 部分浏览器已经原生支持ES6标准了，所以你可以直接用script标签引入es6的入口文件，但是:
 - script标签的type不能是`application/javascript`而必须是`module`
 - 源码中的import的模块路径必须带后缀(.js)
 
2. 在node 8.5.0之后已经开始原生支持ES6语法，但是, ES6模块化还是一个实验性feature，你必须:
 - 使用`--experimental-modules`来启用es6模块化支持
 - 所有的模块化文件的扩展名必须是.mjs

3. 建议使用webpack将ES6的代码打包成ES5代码然后运行

```bash
webpack ./src/es6/index.js --output-path ./src/es6/ --output-filename bundle.js
```
