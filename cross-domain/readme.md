#### [同源策略]

- 协议

- 域名

- 端口

都相同，同域，为了安全



http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html



#### [跨域的方法]



##### 一级域名相同，二级域名不同



###### `document.domain`

- 客户端
- 服务端



##### 完全不同源



###### 片段识别符（fragment identifier）

- URL的`#`号后面的部分，比如`http://example.com/x.html#fragment`的`#fragment`
- 如果只是改变片段标识符，页面不会重新刷新

- 子窗口通过监听`hashchange`事件得到通知



###### window.name





###### 跨文档通信API（Cross-document messaging）

- `window.postMessage`



###### 架设服务器代理

- 浏览器请求同源服务器，再由后者请求外部服务



###### JSONP

- 通过添加一个`<script>`元素，向服务器请求JSON数据(不受同源政策限制)；

- 服务器收到请求后，将数据放在一个指定名字的回调函数里传回来
- 只能发`GET`请求



###### WebSocket



###### CORS

- CORS是跨源资源分享（Cross-Origin Resource Sharing）
- 比jsonp更加强大



<http://www.ruanyifeng.com/blog/2016/04/cors.html>





