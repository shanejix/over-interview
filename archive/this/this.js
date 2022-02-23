
/**
 * 
 *   THIS:当前方法执行的主体=>谁执行的这个方法,那么THIS就是谁,
 *      
 *  因此，THIS和当前方法在哪创建的或者在哪执行的都没有必然的关系)
 * 
 */

//1.给元素的某个事件绑定方法，方法中的THIS都是当前操作的元素本身
{
    document.body.onclick = function () {
        //=>this:body
        console.log(this);
    };
}

//2.函数执行，看函数前面是否有点，有的话，点前面是谁,THIS就是谁，没有点，THIS是WINDOW（在JS的严格模式下，没有点THIS是UNDEFINED）
{
    let fn = function () {
        console.log(this);
    };
    let obj = {
        name: '哈哈',
        fn: fn
    };
    fn();//=>this:window
    obj.fn();//=>this:obj
}

//3.构造函数执行，方法中的this一般都是当前类的实例
{
    let Fn = function () {
        console.log(this);
    };
    let f = new Fn;
}

//4.箭头函数中没有自己的THIS,THIS是上下文中的THIS(上级作用域)
{
    let obj = {
        fn: function () {
            // this:obj
            console.log(this);
            setTimeout(() => {
                //this:obj
                console.log(this);
            }, 1000);
        }
    };
    obj.fn();
}

//5.在小括号表达式中，会影响THIS的指向
{
    let obj = {
        fn: function () {
            console.log(this);
        }
    };
    obj.fn();//=>this:obj
    ;(12, obj.fn)();//=>this:window
}

//6.使用call/apply/bind可以改变this指向
// fn.call(obj);//=>this:obj
// fn.call(12);//=>this:12
// fn.call();//=>this:window 非严格模式下call/apply/bind第一个参数不写或者写null和undefined，this都是window，严格模式下写谁this就是谁，不写是undefined
