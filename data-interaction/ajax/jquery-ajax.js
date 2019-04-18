
/**
* 
* $.ajax([URL],[OPTIONS]) 或者 $.ajax([OPTIONS])
*
* URL：请求的API接口地址
*
* METHOD：请求的方式
*
* DATA：传递给服务器的信息可以放到DATA中
*       GET请求是基于问号传参传递过去的
*       POST请求是基于请求主体传递过去的
*       DATA的值可以是对象也可以是字符串(一般常用对象)
*       如果是对象类型，JQ会把对象转换为 xxx=xxx&xxx=xxx 的模式(x-www-form-urlencoded)
*       如果是字符串，我们写的是什么就传递什么
*
* DATA-TYPE：预设置获取结果的数据格式 TEXT/JSON/JSONP/HTML/SCRIPT/XML...
*
* ASYNC：设置同步或者异步（TRUE->异步 FALSE->同步）
*
* CACHE：设置GET请求下是否建立缓存（默认TRUE->建立缓存 FALSE->不建立缓存），
*        当设置为FALSE，并且当前请求是GET请求，JQ会在请求的URL地址末尾追加随机数（时间辍）
*
* SUCCESS：请求成功后执行的回调函数
*
* ERROR：请求失败后执行的回调函数
*
*/
$.ajax({
    url: 'http://www.baidu.com',
    method: 'GET',
    data: {
        name: 'sh',
        age: 28
    },
    dataType: 'json',
    async: true,
    cache: false,
    success: (result, textStatus, xhr) => {
        //=>RESULT就是从服务器获取的结果
        console.log(result);
        console.log(textStatus);
        console.log(xhr.getResponseHeader('date'));//=>jqXHR
    },
    error: () => {

    }
});