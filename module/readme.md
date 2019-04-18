### ES6



#### [export]

  ```js
// varable
export let a=xx;

//const
export const a=xx;

//fun
export function xxx(){

};

//class
export class xxx{

}

//obj
export {xxx, xxx, xxx, ...};

//default
export default xx;

//从另一个模块导出
export * from './m2';
export {x,x,x,x} from './m2';
export {default} from './m2';

  ```



#### [import]

```js
//every
import * as mod from "./xxx";

//obj
import {a, b, c, ...} from "./xxx";

//default
import xxx from './mod';

//css jpg
import "./1.jpg";
import "./1.css";

//异步引入
let promise=import("./mod1");

```



### Commonjs

- 所有代码运行在模块作用域中，不会污染全局作用域
- 模块加载时同步的（按照模块加载的顺序执行）
- 模块多次加载，只会在第一次加载时运行

原理：

单例模式



#### [require]

- 同步
- 将导入的js先执行



#### [exports.default]

