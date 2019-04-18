/**
 * 
 * ajax异步请求从服务器获取数据有——误差
 * 
 * 例如：服务器返回的时间是——格林尼治时间（字符串）和北京时间相差8小时
 * 
 * 因此，实际中应该尽可能的减小这个误差——针对ajax做的优化
 * 
 *  1.当readystate == 2时，接收到响应头时（数据在响应头中），处理相应逻辑，而不是readystate == 4请求体时响应，
 * 
 *  2.设置http请求方式为HEAD——响应头，比get，post要快
 * 
 * 
 * 
 */


let serverTime = null;

let xhr = new XMLHttpRequest();

xhr.open('HEAD', 'www.baidu.com');

xhr.onreadystatechange = () => {
    if (xhr.readyState == 2 && xhr.status == '200') {
        serverTime = xhr.getResponseHeader('date');

        //服务器返回的时间是字符串——格林尼治时间
        
        new Date(serverTime);//data对象
    }
}
xhr.send();