/**
 * 
 * 工厂模式（Factory Pattern）:
 * 
 *  将实现同一功能的代码封装，达到批量生产的目的（函数实现），减少冗余代码，提高重用性
 * 
 */

function createPerson(name, age) {
    var obj = {};
    obj.name = name;
    obj.age = age;
    return obj;
}

var p1 = createPerson('xxx', 25);
var p2 = createPerson('xxx', 25);