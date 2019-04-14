#### [进程和线程]

- 进程包含线程，线程是程序执行的最小单位
- 进程分配独立的空间和地址，切换开销大
  - 代码段
  - 堆栈段
  - 数据段
- 线程共享进程中的数据段（全局变量，静态变量），切换开销小
- 进程间通信难，线程间通信容易

多线程和单线程（single thread）

- 浏览器是多线程功的，JavaScript是单线程的
- 浏览器只分配一个线程来执行JavaScript
- 单线程：一次只能完成一件任务。如果有多个任务，就必须排队，前面一个任务完成，再执行后面一个任务（按顺序执行）
- 多线程：类推

单线程的特点

- 简单
- 假死
  如果一个任务耗时过长，后面的任务必须排队等待，拖延整个程序->卡死
  - 死循环
  - while(true)

#### [同步（Synchronous）和异步（Asynchronous）]

- 同步：
  - 在主线程上（主栈，主任务队列）同一时间只能执行一个任务
  - 当前任务进栈—>当前任务完成—>当前任务出栈—>下一个任务进栈
- 异步：
  - 在主线程上（主栈，主任务队列），发现某个任务是异步操作
  - 主栈移除异步操作—>放到等待队列中（"任务队列"（task queue））—>主栈执行完成（主栈空闲）—>异步任务重新放到主栈中执行

JavaScript中异步编程的方法

- 回调函数
- 事件监听
- 发布/订阅
- promise
- Ajax

回调函数：先执行程序的主要逻辑，将耗时的操作延迟执行

- 简单
- 流程混乱，难于阅读和维护（众人皆知的回调地域）
- 高耦合（coupling）
- 每个任务只能指定一个回调函数

事件监听：不取决代码的顺序，取决于事件是否发生

- 容易理解
- 可以绑定多个事件，每个事件可以指定多个回调函数
- "去耦合"（Decoupling)
- 事假驱动，流程不清晰

"发布/订阅模式"（publish-subscribe pattern）：又称"观察者模式"（observer pattern）

- 某个任务执行完成，向信号中心"发布"（publish）一个信号，
- 其他任务可以向信号中心"订阅"（subscribe）这个信号，从而知道什么时候自己可以开始执行

Promise：异步任务返回一个Promise对象

- 链式调用，流程清晰
- 可以指定多个回调函数


JavaScript中的异步本质=>通过某些机制来管控任务的执行顺序

#### [宏任务和微任务]

- 宏任务：macro task
  - 定时器
  - 事件绑定
  - Ajax
  - 回调函数
  - Node中的fs
- 微任务：micro task
  - Promise（async/await）
  - process.nextTick
- 执行顺序优先级：
  - sync task => micro task => macro task

#### [任务队列]

（1）所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。

（2）主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。

（3）一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。

（4）主线程不断重复上面的第三步

#### [Event Loop]

主线程从"任务队列"中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为Event Loop（事件循环）
[event loop](http://www.ruanyifeng.com/blogimg/asset/2014/bg2014100802.png)



#### 参考

- http://www.ruanyifeng.com/blog/2018/02/node-event-loop.html
- http://www.ruanyifeng.com/blog/2012/12/asynchronous%EF%BC%BFjavascript.html
- http://www.ruanyifeng.com/blog/2014/10/event-loop.html

