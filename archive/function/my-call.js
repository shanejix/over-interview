Function.prototype.myCall = function (ctx, ...arg) {
    
    //校验ctx
    ctx = ctx ? Object(ctx) : window;

    //保证属性的唯一性
    const fn = Symbol('fn');

    //绑定
    ctx[fn] = this;

    //传参
    let res = ctx[fn](...arg);

    //回收
    Reflect.deleteProperty(ctx, fn) // 等同于 delete ctx[fn]
    
    //返回
    return res;
}