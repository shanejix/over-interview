#### [Ajax]



目的：异步编程；防止页面刷新，实现局部刷新——提高用户体验



使用：

```js
//创建ajax实例
let xhr = new XMLHttpRequest();//兼容ie6，new ActivexObject

//初始化
xhr.open('GET',url,aysnc,usernamw,password);

//监听
xhr.onreadystateChange = function(){
    if(xhr.readystate == 4 && xhr.status == 200){
        //....
    }
}

//发送
xhr.send({});

```



#### [关于HTTP]

请求方式

- GET/DELETE/HEAD/OPTIONS/TRACE/CONNECT
- POST/PUT

所有的请求都可以给服务器端传递内容，也都可以从服务器端获取内容

- GET：从服务器端获取数据(给的少拿的多)

- POST：向服务器端推送数据(给的多拿的少)

- DELETE：删除服务器端的某些内容（一般是删除一些文件）

- PUT：向服务器上存放一些内容（一般也是存放文件）

- HEAD：只想获取服务器返回的响应头信息，不要响应主体中的内容

- OPTIONS：一般使用它向服务器发送一个探测性请求，如果服务器端返回的信息了，说明当前客户端和服务器端建立了连接，我们可以继续执行其它请求了（TRACE是干这件事的，但是axios这个AJAX类库在基于cross domain进行跨域请求的时候，就是先发送OPTIONS请求进行探测尝试，如果能连通服务器，才会继续发送其它的请求）



#### [GET VS POST]

一，传递给服务器信息的方式不一样

-   GET是基于URL地址“问号传参”的方式把信息传递给服务器，POST是基于“请求主体”把信息传递给服务器

```
[GET]
xhr.open('GET','/temp/list?xxx=xxx&xxx=xxx')

[POST]
xhr.send('xxx=xxx&xxx=xxx')
```

  原因：URL的长度有限制，GET的数据量小可以通过URL，POST的数据量大，超过的部分会忽略

二，GET不安全，POST相对安全

- GET通过URL传递，容易被捕获，POST通过请求主体
- 都没有绝对的安全

三， GET会产生不可控制的缓存,POST不会

不可控：浏览器自主记忆的缓存，无法基于JS控制

GET请求产生缓存是原因：

- 连续多次向相同的地址（并且传递的参数信息也是相同的）发送请求，
- 浏览器会把之前获取的数据从缓存中拿到返回，导致无法获取服务器最新的数据（POST不会）

解决方案：

```
xhr.open('GET',`/temp/list?lx=1000&_=${Math.random()}`); 
//保证每次请求的地址不完全一致：在每一次请求的末尾追加一个随机数即可(使用_作为属性名就是不想和其它的属性名冲突)或者时间戳
```



#### [Ajax状态]:readystate

|      |                                                              |
| :--: | :----------------------------------------------------------- |
|  0   | UNSENT  创建XHR                                              |
|  1   | OPENED  已执行OPEN操作,待发送                                |
|  2   | HEADERS_RECEIVED 已执行send方法（AJAX任务开始），客户端已接收响应头信息 |
|  3   | LOADING 响应主体内容正在返回                                 |
|  4   | DONE 完成                                                    |



#### [HTTP网络状态码(STATUS)]

状态码能够清楚的反映出当前交互的结果及原因

|      |                                                              |
| :--: | ------------------------------------------------------------ |
| 200  | 成功,服务器成功返回信息=>不一定是业务需要的                  |
| 301  | Moved Permanently 永久转移=>域名更改，访问原始域名重定向到新的域名 |
| 302  | Move temporarily 临时转移=>用作服务器负载均衡,把所有的图片放到单独的服务器上“图片处理服务器” |
| 304  | Not Modified 设置缓存=>不经常更新的资源文件，例如：CSS/JS/HTML/IMG等,CTRL+F5强制刷新页面 |
| 400  | Bad Request 请求参数错误                                     |
| 401  | Unauthorized 无权限访问                                      |
| 404  | Not Found  找不到资源(地址不存在)                            |
| 413  | Request Entity Too Large 和服务器交互的内容资源超过服务器最大限制 |
| 500  | Internal Server Error 未知的服务器错误                       |
| 503  | Service Unavailable 服务器超负荷                             |



#### [XHR的属性和方法]



|        属性         |                  描述                   |
| :-----------------: | :-------------------------------------: |
|    xhr.response     |              响应主体内容               |
|  xhr.responseText   | 响应主体的内容是字符串（JSON或XML格式） |
|   xhr.responseXML   |         响应主体的内容是XML文档         |
|     xhr.status      |            返回的HTTP状态码             |
|   xhr.statusText    |              状态码的描述               |
|     xhr.timeout     |           设置请求超时的时间            |
| xhr.withCredentials |              是否允许跨域               |


  

|             方法             |          描述           |
| :--------------------------: | :---------------------: |
|         xhr.abort()          |    强制中断AJAX请求     |
| xhr.getAllResponseHeaders()  |   获取所有响应头信息    |
| xhr.getResponseHeader([key]) | 获取KEY对应的响应头信息 |
|          xhr.open()          |       打开url请求       |
|    xhr.overrideMimeType()    |      重写MIME类型       |
|          xhr.send()          |      发送AJAX请求       |
|    xhr.setRequestHeader()    |       设置请求头        |


   

 
