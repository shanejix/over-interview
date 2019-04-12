
/*
 * call
 *  
 * [fn].call([this],[param]...)：
 *      
 * 1.fn.call：当前实例(函数FN)通过原型链的查找机制，找到Function.prototype上的call方法  
 *            =>function call(){[native code]}
 * 
 * 2.fn.call()：把找到的call方法执行
 * 
 * 
 *
 *  
 * [fn].call([this],[param]...)方法的内部实现：
 * 
 * 1.将要操作的的函数（call中的this）的this关键字修改成第一个参数
 * 
 * 2.将要操作的函数（call中的this）执行，并且将第一个参数以后的参数传给函数
 * 
 * 
 */


//实现call思路

Function.prototype.mycall = function () {
    let param1 = arguments[0],
        paramOther = [];//=>把ARG中除了第一个以外的实参获取到

    //=>this:fn 当前要操作的函数(函数类的一个实例)

    //把FN中的THIS关键字修改为PARAM1 =>把THIS(CALL中)中的this关键字修改为param1

    //=>把fn执行，把paramOther分别传递给fn

    // this(paramOther)  =>fn(paramOther)

};



//demo

function print(text) {
    console.dir(this);
    document.write(this.value + ' - ' + text + '<br>');
}

var a = { value: 10, print: print };
var b = { value: 20, print: print };

var p = print.bind(a);
p('a');             // this => a, output "10 - a"
p.call(b, 'b');     // this => a, output "10 - b"
p.apply(b, ['b']);  // this => a, output "10 - b"




/*
 * CALL中的细节
 * 
 *   1.非严格模式下，如果参数不传，或者第一个传递的是null/undefined，THIS都指向WINDOW
 * 
 *   2.在严格模式下，第一个参数是谁，THIS就指向谁（包括null/undefined），不传THIS是undefined
 */
fn.call(obj, 10, 20);//=>this:obj a=10 b=20
fn.call(10, 20);//=>this:10 a=20 b=undefined
fn.call();//=>this:window a=undefined b=undefined
fn.call(null);//=>this:window
fn.call(undefined);//=>this:window














