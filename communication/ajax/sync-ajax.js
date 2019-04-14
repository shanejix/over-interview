{
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'xx', false);
    xhr.onreadystatechange = () => {//=>监听前的状态是1
        if (xhr.readyState === 2) {
            console.log(1);
        }
        if (xhr.readyState === 4) {
            console.log(2);
        }
    };
    xhr.send();
    console.log(3);
    //=>2 3  

    //为啥不是3 2？？？
}

{
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '笔记.MD', false);
    xhr.send();
    //=>事件绑定前状态已经是4了
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 2) {
            console.log(1);
        }
        if (xhr.readyState === 4) {
            console.log(2);
        }
    };
    console.log(3);
    //=>3
}