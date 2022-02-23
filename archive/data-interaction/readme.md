#### [数据通信]

ajax

fetch

jsonp

ajax2.0

websocket



#### [URL/URN/URI:URI=URL+URN]

URI（统一资源标识符）

​	baidu@163.com

URL（统一资源定位符）

​	www.baidu.com

URN（统一资源名称）



#### [传输协议]

HTTP：

超文本传输协议（除了传递普通的文本，还可以传递文件流或者进制编码等信息），

是目前最常用的WEB传输协议



HTTPS：

基于SSL（Secure Sockets Layer 安全套接层）加密的HTTP传输协议，

比HTTP更加的安全（涉及支付的网站一般都是基于HTTPS完成的）



FTP：

文件传输协议，一般用来实现资源文件在服务器上的上传下载



#### [域名] Domain Name

一级域名（顶级域名）  qq.com

二级域名   sports.qq.com

三级域名   kbs.sports.qq.com



#### [端口号]

用来区分同一台服务器上不同服务的标识（可以指定），不同服务之间一般是不能使用相同的端口号的

HTTP =>默认端口号80

HTTPS =>默认端口号443

FTP =>默认端口号21



一台服务器上的端口号范围：0~65535之间



#### [请求路径名称]

 path

 pathname



#### [问号传参及哈希值]

?xxx=xxx&...#xxx

问号传参是客户端把信息传递给服务器的一种方式(也有可能是跳转到某一个页面，把参数值传递给页面用来标识的)

哈希值一般都跟客户端服务器交互没啥关系，主要用于页面中的锚点定位和HASH路由切换



#### [HTTP报文]

起始行：请求起始行、响应起始行

首部（头）：请求头、响应头、通用头

主体：请求主体、响应主体



General 通用头

```
Request URL: http://www.baidu.cn/  请求地址
Request Method: GET  请求方式:GET/POST/DELETE/PUT/HEAD/OPTION...
Status Code: 304 Not Modified   响应的HTTP状态码
Remote Address: 192.138.0.0  主机地址(服务器外网IP地址)
Referrer Policy: no-referrer-when-downgrade
```

Request Headers 请求头 [客户端设置，服务器接收]

```
GET / HTTP/1.1  =>起始行(描述当前请求的一些基本信息：用的是1.1版本传输协议进行内容传输的)
Host: http://www.baidu.cn/
Connection: keep-alive
Cache-Control: max-age=0
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.9
Cookie: ... =>cookie信息一般都是放到头文件中实现和服务器端的数据通信的
If-Modified-Since: Sun, 06 May 2018 10:02:42 GMT
```

Response Headers 响应头 [服务器端设置，客户端获取]

```
HTTP/1.1 304 Not Modified  =>响应起始行（HTTP状态码）
Date: Tue, 22 May 2018 09:18:56 GMT  =>服务器响应内容时候的“服务器端时间”（客户端获取这个时间的时候已经和真实的时间产生误差了，因为服务器返回内容到客户端接收到，也是需要时间的），并且这个时间是格林尼治时间（比北京时间慢8小时，北京时间是GMT+0800）
Connection: keep-alive
ETag: "700a6f-17f43-56b86a77513d3"
Vary: Accept-Encoding,User-Agent
Server: yunjiasu-nginx  //=>管理WEB服务的工具
CF-RAY: 41ee32c192db66b8-TSN
```

Response [响应主体]

```
 
```

Request Payload / Form Data  [请求主体]

```

```



#### [客户端和服务器端信息交互的方式]



[客户端传递给服务器]

   A:问号传参

​    /stu/info?id=12&lx=man

   B:设置请求头

​    客户端把需要传递给服务器的内容设置到请求头信息中（自定义请求头）,服务器可以通过接收请求头信息把内

容得到

   C:设置请求主体

​    xhr.send(json）

[服务器返回给客户端]

   A:设置响应头信息

   B:设置响应主体











