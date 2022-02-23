//将伪数组转化为数组

//call
{
    function fn() {
        console.dir(arguments);
    
        let arg = [].slice.call(arguments);//[].prototy.call(arguments);
    
        console.dir(arg);
    }
    
    fn(1, 2, 3, 4, 5);
}

//es6
{
    function fn() {
        console.dir(arguments);
    
        let arg = [...arguments];//展开运算符
    
        console.dir(arg);
    }
    
    fn(1, 2, 3, 4, 5);
}

//form
{
    function fn() {
        console.dir(arguments);
    
        let arg = Array.from(arguments);
    
        console.dir(arg);
    }
    
    fn(1, 2, 3, 4, 5);
}



