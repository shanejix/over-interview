export

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



import

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

