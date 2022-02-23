function jsonp({url,params,cb}) {
    return new Promise((resolve, reject) => {
        
        params = { ...params, cb };
        let arr = [];
        for (let key in params) {
            if (params.hasOwnProperty(key)) {
                arr.push(`${key}=${params[key]}`);
            }
        }
        arr.join('&');

        let script = document.createElement('script');
        srcript.src = url;
        document.body.appendChild(script);

        window[cb] = function (data) {
            resolve(data);
            document.doby.removeChild(script);
        }

    })
}

jsonp({
    url ='',
    params = {},
    cb ='show'
}).then(data => {
    console.log(data);
});


//服务端返回：show({xxx:xxx,....})

//jsonp，前台定义一个函数fn通过get请求的方式传递给后天（？cb=fn）

//后天将处理的数据（data）返回：‘fn(data)’;

//执行