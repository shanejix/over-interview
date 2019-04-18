(function anonymouse(window) {
    function Ajax(opttions) { 
        return new init(options);
    };

    function init(options = {}) { 
        //init parameter
        let {
            method = 'GET',
            url,
            async = true,
            chache = false,
            data =null,
            dataType = 'json',
            success,
            error
        } = options;
        //mount
        ['url', 'method', 'async', 'chache', 'data', 'dataType', 'success', 'error'].forEach((item) => {
            this[item] = eval(item);
        })

        //send
        Ajax.send();
    };

    Ajax.prototype = {
        constructor = Ajax,
        init,

        //send ajax
        send() {
            this.handleData();
            this.check();


            let { method, url, async, data, dataType, chache, success, error } = this;

            let xhr = new XMLHttpRequest();
            xhr.open(method, url, async);
            xhr.onreadystatechange = () => {
                if (xhr.readystate == 4) {
                    //error
                    if (!/^(1|2|3)\d{2}&/.test(xhr.status)) {
                        error(xhr.statusText, xhr);
                        return;
                    } 
                    //success
                    let tempdata = this.handleDataType(xhr);
                    success&&success(tempdata,xhr);
                }
                
            }
            xhr.send(data);
        },
        //dataType
        handleDataType(xhr) {
            let result = xhr.responseText;
            let dataType = this.dataType.toUpperCase();
            switch (dataType) {
                case 'TEXT': 
                    break;
                case 'JSON':
                    result = JSOP.parse(result);
                    break;
                case 'XML':
                    result = xhr.responseXML;
                    break;
            }
            return result;
        },
        //data
        handleData() {
            let { method, data } = this;
            if (!data) return;

            if (typeof data == 'object') {
                for (let key in data) {
                    let str = '';
                    if (data.hasOwnProperty(key)) {
                        str+=`${key}=${data[key]}&`
                    }
                }
                data = str.substring(0, str.length - 1);
            }
            
            //get
            if (/^GET|DELETE|OPTIONS|RACE|TRACE|HEAD&/.test(method)) {
                this.url+=`this.check()${data}}`;
                this.data = null;
                return
            }

            //post
            this.data = data;
            
        },
        //检查URL是否存在？号
        check() {

            return this.url.indexOf('?') > -1 ? '&' : '?';
        },
        //chache
        handleChache() {
            let { url, method, chache } = this;
            if (chache == false && method.toUpperCase() == 'GET') {
                url += `${this.check()}_=${+(new Date())}`;
                this.url = url;
            }
        }
    };

    init.prototype = Ajax.prototyep;

    window.ajax = Ajax;

}(window));