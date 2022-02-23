# express_demo

#### `express`流水线

`express`对相同的请求方法及路径可以实现分块处理——方便

```js
const express=require('express');

let server = express().listen(8080);

server.get('/reg',(req,res,next)=>{
    //校验数据
    ...
    next();
})

server.get('/reg',(req,res,next)=>{
    //检查用户名是否存在
    ...
    next();
})

server.get('/reg',(req,res,next)=>{
    //验证码
    ...
    next();
})

server.get('/reg',(req,res,next)=>{
    //发送邮箱
    ...
    next();
})

server.get('/reg',(req,res,next)=>{
    //写入数据库
})
```

#### 如何使用中间件

以`body-parser`为例

引库

```js
const express=require('express');
const bodyParser=require('body-parser');
```

创建服务

```js
let server=express();
server.listen(8080);
```

使用中间件

```js
server.use(bodyParser.urlencoded({extended: false}));//server.use--配置--核心在这里

server.post('/', (req, res)=>{
  console.log(req.body);//body-parser新增的req.body属性
});
```

#### 实现自己的中间件

以仿写`body-parser`为例

```js
server.use(bodyParser.urlencoded({extended: false}));//server.use--配置--核心在这里

server.post('/', (req, res)=>{
  console.log(req.body);//body-parser新增的req.body属性
});
```

**原理**是这样的

```js
server.use(bodyParser.urlencoded({extended: false}));//核心在这里

//use匹配任何字段，不写默认匹配所有，回调函数的next是分步操作，中间件的核心

server.use((req, res, next)=>{
  let str='';

  req.on('data', data=>{
    str+=data;
  });
  req.on('end', ()=>{
    req.body=querystring.parse(str);

    next();//下一步
  });
});

server.post('/', (req, res)=>{
  console.log(req.body);//body-parser新增的req.body属性
});
```

#### 封装自己的`body-parser`

引库：自用的库习惯放在`libs`下

```js
const myBodyParser=require('./libs/my-body-parser');
```

创建服务

```js
let server=express();
server.listen(8080);
```

使用

```js
server.use(myBodyParser.urlencoded);

server.post('/', (req, res)=>{
  console.log(req.body);
});
```

实现`my-body-parser`简单封装

```js
const querystring=require('querystring');

exports.urlencoded=function (req, res, next){
  let str='';

  req.on('data', data=>{
    str+=data;
  });
  req.on('end', ()=>{
    req.body=querystring.parse(str);

    next();
  });
}
```

#### 实现自己的`express`

引库

自用的包都放在`libs`下

```js
const express=require('./libs/my-express');
const logger=require('./libs/my-logger');
```

创建服务

```js
let server=express();
server.listen(8080);
```

使用中间件以及其他

```js

server.get(logger);

server.get('/', (req, res, next)=>{
  console.log('abc')

  next();
});

server.get('/', (req, res, next)=>{
  console.log('ddd')
  res.send('adfasdfasd');
  res.end();
});
```

**封装**自己的`express`以及**原理**

```js
//依赖项

const http=require('http');
const assert=require('assert');
const url=require('url');

//导出一个模块——express本质是一个函数的调用

module.exports=function(){
    //创建一个队列，用于响应按顺序执行的任务——核心
  	let queue=[];
	
    //创建并且返回一个http服务
    
    let server=http.createServer((req, res)=>{
        let {pathname, query}=url.parse(req.url, true);

        req.query=query;//添加属性——技巧
        res.send=function (any){
            
            //数据
            //Buffer//string//arr//json

            if(any instanceof Buffer || typeof any=='string'){
                res.write(any);
            }else{
                res.write(JSON.stringify(any));
            }
        };

        //queue的核心——按按顺序执行
        
        __run(0);

        function __run(n){
            for(let i=n;i<queue.length;i++){
                if(queue[i].path==pathname || queue[i].path=='*'){
                    queue[i].fn(req, res, ()=>{
                        __run(i+1);//执行下一个
                    });
                    break;
                }
            }
        }
    });
    
    //server.get实现
    
    server.get=function (){
        //这里实现接收一个或两个参数
        assert(arguments.length==2 || arguments.length==1, 'argument error');

        let path,fn;

        if(arguments.length==2){
            path=arguments[0];
            fn=arguments[1];
        }else if(arguments.length==1){
            fn=arguments[0];
            path='*';
        }

        //加入队列
        
        queue.push({path, fn});
    };
    
  //server.post实现同上
    
  //server.use实现同上
    
  //返回一个服务
    
  return server;
};

```

