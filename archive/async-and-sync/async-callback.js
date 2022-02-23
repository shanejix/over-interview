/**
 * f1();
 * 
 * f2();
 * 
 * 按照顺序执行；
 * 
 * 如果f1()很耗时，将f2()作为回调函数凡在f1中执行
 * 
 */

// function f1() {
//     setTimeout(() => {
//         console.log(1);
//     },99999)
// }

function f1(callback) {
    callback();
    setTimeout(() => {
        console.log(1);
    },3000)
}

function f2() {
    console.log(2);
}

f1(f2);

