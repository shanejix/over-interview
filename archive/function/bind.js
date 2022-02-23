/*
 * bind：语法和call一模一样，区别在于立即执行还是等待执行
 *  
 *  fn.call(obj,10,20) 改变FN中的THIS,并且把FN立即执行
 * 
 *  fn.bind(obj,10,20) 改变FN中的THIS,此时的FN并没有执行（不兼容IE6~8）
 * 
 */


let fn = function (a, b) {
    console.log(this);
};
let obj = { name: "OBJ" };

//=>把FN绑定给点击事件，点击的时候执行FN
document.onclick = fn;

//=>在绑定的时候,先把FN执行,把执行的返回值(UNDEFINED)绑定给事件,当点击的时候执行的是undefined
document.onclick = fn();


//=>需求：点击的时候执行FN，让FN中的THIS是OBJ

document.onclick = fn;//=>this:document

//=>虽然this确实改为obj了，但是绑定的时候就把fn执行了(call是立即执行函数)，
//点击的时候执行的是fn的返回值undefined
document.onclick = fn.call(obj);

//=>bind属于把fn中的this预处理为obj，此时fn没有执行，当点击的时候才会把fn执行
document.onclick = fn.bind(obj);