# node



特点：

- 异步无阻塞I/O操作
- 基于事件驱动



#### [Commonjs]

- 所有代码运行在模块作用域中，不会污染全局作用域

- 模块加载时同步的（按照模块加载的顺序执行）

  

#### [内置模块]



##### path:路径

- `__dirname`

- `__filename`
- path.resolve()



##### fs模块：实现I/O操作操作

- fs.readdir()
- fs.mkdir()

- fs.rmdir()
- fs.readFile()
- fs.unlink()
- fs.writeFile()
- fs.apendFile()
- fs.copyFile()



举例:

基于promise封装异步I/O操作

文件的合并以及压缩等



##### url模块

- url.parse(url)

源码



##### HTTP

- htttp.createServer()

#### [第三方模块]



#### [自定义模块]









