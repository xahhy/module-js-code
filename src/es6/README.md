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
1. 运行 `node ./src/commonJS/index.js` 控制台输出 `I am TW, er`
2. 用浏览器浏览 `./src/commonJS/index.html` 控制台输出 `I am TW, er`

### HINT
你可以用webpack将ES6的代码打包成ES5 js文件

```bash
webpack ./src/es6/index.js --output-path ./src/es6/ --output-filename bundle.js
```
