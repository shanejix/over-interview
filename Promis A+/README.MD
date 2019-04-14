#### [Primis A+]

> 三种状态：pending（进行中），fulfilled（已完成），reject（已失败）



#### [Primise]



异步：

- 回调地域



Promise：

- 语法糖
- 管控异步操作
- 解决回调地域



Promise原理

- code



Generator：

- code



Async/Await：

- Generator函数的语法糖
- 将 Generator 函数的星号（*）替换成 async
- 将 yield 替换成 await
- 仅此而已

> 同 Generator 函数一样，async 函数返回一个 Promise 对象，可以使用 then 方法添加回调函数。
> 当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再接着执行函数体内后面的语句



注意：

- await 命令后面的 Promise 对象，运行结果可能是 rejected，所以最好把 await 命令放在 try...catch 代码块中
- await 命令只能用在 async 函数之中，如果用在普通函数，就会报错




#### 参考

http://www.ruanyifeng.com/blog/2015/05/async.html
