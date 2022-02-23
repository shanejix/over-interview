let url = require('url');

let res = url.parse('https://cn.bing.com/search?q=node&src=IE-SearchBox&FORM=IE11SR');

let res2 = url.parse('https://cn.bing.com/search?q=node&src=IE-SearchBox&FORM=IE11SR',true);

console.log(res);