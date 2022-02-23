var i = 1;
function fn(i) {
    return function (n) {
        console.log(n + (++i));
    }
}
var f = fn(2);
f(3);
fn(5)(6);
fn(7)(8);
f(4);

//1.变量声明提升，函数声明以及定义的提升

//2.函数的执行n次，会开辟n个不同的空间（地址不同）