/*
 * “...”在ES6的语法中，三个点有三种含义
 *   1.剩余运算符
 *   2.拓展运算符
 *   3.展开运算符
 */


{//剩余运算符

    let ary = [12, 23, 34];
    let [...arg] = ary; //=>ary.slice(0)

    function fn(context, ...arg) {
        //=>获取传递值中的第一个和剩下的
        console.log(context, arg);
        //=>ARG是一个数组 / ARGUMENTS是类数组
    }

    function sum(...arg) {
        //=>传递几个实参,ARG中就存储多少个,此时的ARG和ARGUMENTS一样的,
        //区别是ARG是一个数组, ARGUMENTS是一个类数组
    }
}


{//展开运算符

    let arr = [1, 2, 3, 4];
    fn(...ary);
    //数组中的每一项分别传递给一个函数

    let obj = { name: 'xxx', age: 20 };
    let newObj = { ...obj, sex: 0 };
    //=>{name: 'xxx', age: 20,sex:0} 把原有对象展开(克隆)放到新对象中

}
