### 描述
AMD文件夹内三个js文件分别为:
- index.js - 入口文件，依赖于模块renderTemplate
- renderTemplate.js - 模版渲染模块，依赖于printToConsole
- printToConsole.js - 输出模块

用AMD标准来导出/导入模块, requirejs是常用的AMD标准的实现.
```bash
npm install --save requirejs
```

### AMD标准的用法
定义一个模块
```js
define(模块名称, () => {
  
});
```

定义一个模块, 并引入依赖
```js
define(模块名称, [依赖模块名, 依赖模块名] ,(依赖1, 依赖2) => {
  
});
```

定义一个立即调用的匿名模块
```js
define([依赖模块名, 依赖模块名] ,(依赖1, 依赖2) => {
  
});
```


### 要求
1. 运行 `node ./src/amd/index.js` 控制台输出 `I am TW, er`
2. 用浏览器浏览 `./src/amd/index.html` 控制台输出 `I am TW, er`

### HINT
无论浏览器还是node都没有实现AMD标准(`define`会是undefined)，所以你需要在你的入口文件(index.js)里面引入requirejs.

```js
if (!define) {
  define = require('requirejs');
}
```

在浏览器环境你还需要显示的引入requirejs.js并指明入口文件
```html
<script type="application/javascript"
            data-main="index.js"
            src="../../node_modules/requirejs/require.js"></script>
```


