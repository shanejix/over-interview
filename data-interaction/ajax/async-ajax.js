{
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'xxx', true);
    xhr.send();//=>AJAX任务开始(异步),此时状态是1
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 2) {
            console.log(1);
        }
        if (xhr.readyState === 4) {
            console.log(2);
        }
    };
    console.log(3);
    //=>3 1 2
}
{
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/temp/list', true);//=>异步
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 2) {
            console.log(1);
        }
        if (xhr.readyState === 4) {
            console.log(2);
        }
    };
    xhr.send();
    console.log(3);
    //=>3 1 2
}