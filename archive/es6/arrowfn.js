//1.箭头函数中没有arguments

{
    let fn = (...arg) => {
        console.log(arguments);
        //=>Uncaught ReferenceError: arguments is not defined
        console.log(arg);
        //=>可以使用剩余运算符代替，而且ARG是一个数组
    };
    fn(10, 20, 30, 40);
}

//2.箭头函数中没有自己的执行主体(THIS)，它的THIS都是继承上下文中的THIS(上级作用域)

{
    let obj = {
        fn: (function () {
            //=>this:window
            return function () {
                console.log(this);
            }
        })()
    };
    obj.fn();//=>this:obj  如果想让obj.fn执行,this也是window，该如何处理?
    obj.fn.call(window);//=>this:window
}

{
    let obj = {
        fn: (function () {
            //=>this:window
            let _this = this;//=>window
            return function () {
                // console.log(this);
                console.log(_this);//=>_this只是一个变量，不是私有的，找上级作用域中的
            }
        })()
    };
    obj.fn();//=>this:window
    obj.fn.call(window);//=>this:window
}

{

    let obj = {
        fn: (function () {
            //=>this:window
            return () => {
                console.log(this);
            }
        })()
    };
    obj.fn();//=>this:window ,在箭头函数中使用到的THIS都是直接找上下文中的THIS来使用
}