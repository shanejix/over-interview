
{
    //同步发送Ajax请求

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'xxx.txt', false);//state = 1，false->同步

    //放到等待区的时候，此时状态是1
    xhr.onreadystatechange = () => {
        console.log(xhr.readyState);//=>4
    };

    xhr.send();//state = 2

    //主栈空闲时，state = 4
}

{
    //同步发送Ajax请求

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'xxx.txt', false);

    xhr.send();
    /*状态已经为4了*/
    xhr.onreadystatechange = () => {//=>状态改变才会触发,放到等待区的时候状态已经为4了，不会在改变了，所以不会执行这个方法（啥都不会输出）
        console.log(xhr.readyState);
    };
}

{
    //异步发送Ajax请求

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'xxx.txt');//默认为true异步

    xhr.send();//=>异步操作：执行SEND后，有一个线程是去请求数据，主栈会空闲下来
    
    /*放等待区之前状态是1*/
    xhr.onreadystatechange = () => {
        console.log(xhr.readyState);//=> 2 3 4
    };
    /*主栈又空闲了*/
    //状态为2  把函数执行
    //状态为3  把函数执行
    //状态为4  把函数执行
}

