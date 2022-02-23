# koa-demo

#### 使用

```js
const koa = require('koa');

let server  = new koa();
server.listen(8080);

server.use(...)
           
...
```



#### koa的优势



**测试性能**

```js
server.use(async (ctx,next)=>{
    let start = new Date().getTime();
    
    await next();
    
    let end = new Date().getTime();
    
    console.log(`timeout : ${end-start} ms`);
})
```

**捕获错误**

```js
const koa = require('koa');

let server  = new koa();
server.listen(8080);

server.use(async (ctx,next) => {
    try{
        await next();
    }catch(e){
        ctx.response.body='404';
    }
})

server.use(...);
           
...
```



#### 路由

koa强依赖router

- 没有get，post
- 只有use（不能指定地址）

**koa-router**

```js
const koa = require('koa');
const router = require('koa-router');

let server = new koa();
server.listen(8080);

//接口
let mainRouter = router();
server.use(mainRouter.routes());//---

mainRouter.use('/user',require('./routers/user'));

mainRouter.use('xxx',require('xxxx'));

.....
```

`./routers/user`

```js
const router = require('koa-router');

let ro = router();

ro.get('./a',async (ctx) => {
    ctx.response.body = '123';
});

ro.get('./b',async (ctx) => {
    ctx.response.body='456';
});

module.exports = ro.routes();
```



#### 中间件

`ctx.req`，`ctx.res`:原生request，response对象

`ctx.request`，`ctx.response`:koa封装的的request，response



**static**——处理静态文件

```js
const koa = require('koa');
const static = require('koa-static');

let server = new koa();
server.listen(8080);

//处理接口

server.use(...);
           
//处理静态文件
 
server.use(static('www'));
```



#### 中间件原理

实现自己的`static`——`my-static`

```js
const koa = require('koa');
cosnt static = require('koa-static');
const myStatic = require('./libs/my-static');//习惯放在libs下

let server = new koa();
server.listen(8080);

//使用
//server.use(static('wwww'));
server.use(myStatic('www'));
```

`./libs/my-static`——只实现读功能

```js
const fs = require('fs');
const assert = require('assert');

module.exports = function (root){
    assert(root,'argument 1:root is required');
    assert(typeof root == 'string','root must be a string');
    
    return async (ctx) => {
        ctx.response.body = 
          await new Promise((res,rej) => {
            fs.readFile(`${root}${ctx.request.path}`,(err,data)=>{
                if(err){
                    rej(err);
                }else{
                    res(data)
                }
            })
          })
        
        ....
    }
}
```



#### koa原理

使用`my-koa`

```js
const koa require('my-koa');

let server = new koa();//---class
server.listen(8080);

server.use(async (ctx,next) => {
    console.log('1');
    
    await next();
    
    console.log('2')
})

server.use(async (ctx,next) => {
    console.log('3');
    
    await new Promise((resolve,reject) => {
        setTimeout(function(){
            resolve();
        },1000);
    })
    
    console.log('4');
})

//期望的结果：1 3 4 2
```

`node_modules\my-koa\index.js`——my-koa简单实现

```js
const http = require('http');

module.exports = class {
  constructor() {
    this.__queue = [];

    this.__server = http.createServer((req, res) => {
      const _this = this;

      if (this.__queue.length > 0) {
        //准备ctx对象
        const ctx = {
          req, res,
          request: {},
          response: {
            body: ''
          }
        };
        
        _run(0);

        async function _run(n, cb) {
          let fn = _this.__queue[n];
          let str = fn.constructor.toString();
            
		  //generator过于复杂这里不实现
          /*if(str.indexOf('GeneratorFunction')!=-1){
            console.log('生成器函数');
          }else */
            
          //asyncfunction
          if (str.indexOf('AsyncFunction') != -1) {
            await fn(ctx, function () {
              return new Promise((resolve, reject) => {
                _run(n + 1, function () {
                  resolve();
                });
              });
            });
          } else 
          //普通函数
          if (str.indexOf('Function') != -1) {
            fn(ctx, function () {
              _run(n + 1);
            });
          }
	      //回调——主要解决，async函数中有异步函数不能按照预期顺序执行
          cb && cb();
        }

      } else {
        res.writeHeader(404);
        res.write('Not Found');
        res.end();
      }
    });
  }

  listen(port = 80) {
    this.__server.listen(port);
  }

  use(fn) {
    let str = fn.constructor.toString();

    if (str.indexOf('GeneratorFunction') != -1) {
      console.warn('koa中generator已经抛弃');
    }

    this.__queue.push(fn);
  }
};

```



关于async函数中的异步函数

```js
(async () => {
  console.log('1');

  await new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve();
    }, 1000);
  });

  console.log('2');

  (function () {
    console.log('3');
  })();
    
})();

// 1 2 3
```

```js
(async () => {
  console.log('1');

  await new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve();
    }, 1000);
  });

  console.log('2');

})();

(function () {
  console.log('3');
})();

//1 3 2
```

