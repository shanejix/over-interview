
//基于自调用函数，闭包的模式实现一个Promise封装的ajax库，借鉴axios的模式

; (function anonymose() { 

    //dafault options
    let _dafault = {
        method = 'GET',
        url = '',
        baseURL ='',
        headers = {},
        dataType = 'JSON',
        cache ='true',
        data = null,//post serise 
        params =null//get serise
    };

    //promise ajax
    let ajaxPromise = function ajaxPromise(options) {
        let { method, url, baseURL, headers, data, dataType, cache, params } = options;

        if (/^(GET|DELETE|HEAD|OPTIONS)&/i.test(method)) {
            //get serise 
            if (params) {
                url+=`${ajaxPromise.check(url)}${ajaxPromise.formDate(params)}`
            }
            if (cache) {
                url+=`${ajaxPromise.check(url)}_=${+(new Date())}`
            }

            data = null;//get 
        } else {
            //post serise
            if (data) {
                data = ajaxPromise.formDate(data);
            }
        }

        //ajax promise
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open(method, `${baseURL}${url}`);
            //headers or not ?
            if (headers !== null && typeof headers == 'object') {
                for (let key in headers) {
                    if (headers.hasOwnProperty(key)) {
                        let val = headers[key];
                        val = encodeURIComponent(val);//chinese
                        xhr.setRequestHeader(key, val);
                    }
                }
            }
            xhr.onreadystatechange = function () { 
                if (xhr.readyState == 4) {
                    //success
                    if (/^(2|3)\d{2}&/test(xhr.status)) {
                        let result = xhr.responseText;
                        dataType = dataType.toUpperCase();
                        dataType === 'JSON' ? result = JSON.parse(result) : (dataType === 'XML' ? result = xhr.responseXML : null);
                        resolve(result);
                        return;
                    }
                    //error
                    reject(xhr.statusText)
                }
            };
            xhr.send(data);
        })

     };

    //urser setting dafault options
    ajaxPromise.dafault = _dafault;

    //formdata urlencoded
    ajaxPromise.formDate = function (obj) { 
        let str = '';

        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                str+=`${key}=${obj[key]}&`
            }
        }

        return str.slice(0, str.length - 1);

    };
    
    //check url
    ajaxPromise.check = function (url) {
        return url.indexOf('?') > -1 ? '&' : '?';
     };

    //get serise methods
    ['get', 'delete', 'head', 'options'].forEach(item => {
        ajaxPromise[item] = function anonymous(url, options = {}) {
            options = {
                ..._default,
                ...options,
                url: url,
                method: item.toUpperCase()
            };
            return ajaxPromise(options);
        };
    });

    //pots serise methos
    ['post', 'put', 'patch'].forEach(item => {
        ajaxPromise[item] = function anonymous(url, data,options = {}) {
            options = {
                ..._default,
                ...options,
                url: url,
                data:data,
                method: item.toUpperCase()
            };
            return ajaxPromise(options);
        };
    });

    //mount window
    window.ajaxPromise = ajaxPromise;

}(window))