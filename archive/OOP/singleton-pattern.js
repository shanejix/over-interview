/**
 * 
 * 单例设计模式（singleton pattern）：
 * 
 * 通过字面量方式创建的对象被保存在堆中，对象名被称为‘命名空间’，把描述事务的属性存放到命名空间中，
 * 
 * 多个命名空间中的内容互不冲突（便于分组，分类）——单独的实例；
 * 
 * 所谓的单例设计模式：只创建一个实例
 * 
 * 作用：
 * 
 * 把一件事务的属性和特征进行“分组、归类”(存储在同一个堆内存空间中)，因此避免了全局变量之间的冲突和污染
 * 
 */

 //简单

{
    var person1={
        name:"xxx",
        age:18
    };

    var person2 = {
        name: 'xxxx',
        age:25
    }
}

//单例模式

var nameSpace = (function () {
    var n = 12;
    function fn() {
        //...
    }
    function sum() {

    }
    return {
        fn: fn,
        sum: sum
    }
});

//可用于模块化开发：团队协作，功能模块划分，模块封装，暴露共用的方法

//模块一
var skipRender = (function () {
    var fn = function () {
        //...
    };
    //...
    return {
        init: function () {

        },
        fn:fn
    }
})();
skipRender.init();

//模块二
var weatherRender = (function () {
    var fn = function () {

    };
    return {
        init: function () {
            fn();//=>调取自己模块中的方法直接调取使用即可
            skipRender.fn();//=>调取别人模块中的方法
        }
    }
})();
weatherRender.init();


