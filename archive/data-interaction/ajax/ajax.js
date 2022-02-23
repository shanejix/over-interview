{
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'xxx.xml');

    //=>设置的请求头信息不能出现中文而且必须在OPEND之后才可以设置成功
    xhr.setRequestHeader('shane', '@@@');


    xhr.onreadystatechange = () => {

        if (xhr.readyState === 2) {
            //=>获取的结果是格林尼治时间，而且是字符串
            let time = xhr.getResponseHeader('date');
            console.log(time, new Date(time));
            //=>new Date()获取当前客户端时间
            //=>new Date(时间字符串) 把指定的时间字符串格式化为标准的北京时间(不在是字符串了，而是DATE类的实例，也是标准的时间格式数据)
        }

        if (xhr.readyState === 4) {
            console.log(xhr.responseText);
        }
    };
    xhr.send(null);

}

