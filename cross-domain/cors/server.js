//设置请求源
res.setHeader('Access-Control-Allow-Origin', 'xx'); 

//是否允许发送cookie
res.setHeader('Access-Control-Allow-Credentials', false);

//CORS请求增加6个外的额外字段
res.setHeader('Access-Control-Expose-Headers', 'NAME');

//CORS请求外方法除了get，post，head
res.setHeader('Access-Control-Request-Method', 'PUT');

//CORS请求额外发送的头信息字段
res.setHeader('Access-Control-Request-Headers');

//指定本次预检请求的有效期，单位为秒
res.setHeader('Access-Control-Max-Age', 6);

//服务器支持的所有跨域请求的方法，返回的是所有支持的方法，而不单是浏览器请求的那个方法
res.setHeader('Access-Control-Allow-Methods', 6);

