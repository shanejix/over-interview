/**
 * 
 * new操作符的原理：
 * 
 * 1.创建一个新对象
 * 
 * 2.将对象的__proto__指向构造函数的prototype对象
 * 
 * 3.绑定this
 * 
 * 3.返回这个新对象
 * 
 */

function myNew(constructor) {//构造函数作为参数

    //创建一个新对象
    let newObj = {};

    //将对象的__proto__指向构造函数的prototype对象
    newObj.__proto__ == constructor.prototype;

    //绑定this
    constructor.call(newObj);

    //返回这个新对象
    return newObj;
}