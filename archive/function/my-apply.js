Function.prototype.myapply = function (ctx, arg) {

    //校验
    let ctx = ctx ? Object(stx) || window : {};

    //保证属性名的唯一性

    ctx.fn = Symbol(fn);

    //绑定
    ctx.fn = this;

    //传参
    let res = ctx.fn(...arg);//数组展开

    //回收
    delete ctx.fn;

    //返回

    return res;

    
}