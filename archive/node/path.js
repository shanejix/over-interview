let path = require('path');

console.log(path.resolve());//当前目录的绝对路径

console.log(path.resolve(__dirname), 'xxx/xxx.js');//拼接

//__dirname 以定义的为主，paht.resolve()以执行的为准