/**
 *
 * Promise是ES6中新增加的内置类
 * 
 * 目的: 管控异步操作
 * 
 * 1.new Promise() 创建类的一个实例，每一个实例都可以管理一个异步操作
 * 
 *  ----必须传递一个回调函数进去，不传递会报错
 *      
 *      在回调函数中管控异步操作
 * 
 *      回调函数中会有两个参数
 * 
 *      resolve：异步操作成功做的事情
 * 
 *      reject：异步操作失败做的事情
 * 
 *  ----new Promise的时候立即执行回调函数（Promise是同步的）
 *
 * 2.基于Promise.prototype.then方法（还有catch/finally两个方法）
 * 
 * 3.多个THEN掉用，
 * 
 *    异步操作成功或者失败，先把第一个THEN中的方法执行，每当执行一个THEN会返回一个新的Promise实例，
 * 
 *    这个实例管控的是第一个THEN中方法执行的是成功还是失败
 *
 */

/*
{

    new Promise((resolve, reject) => {
        //成功执行resolve，失败执行reject

        //excutor 执行函数（激励）=>可以不管控异步操作（没有意义）

        resolve(200);

    })
        .then(result => { //resovle执时执行
            console.log(3, result);
        }, reason => {//reject执行时执行
            console.log(1);
        })
        .then(result => {//then方法存在于Promise实例的原型对象中

        }, reject => {

        }).catch(reason => {//相当于.then(null,reason =>{})

        })


    //Promise.all返回一个promise实例，等待[]中所有的promise都成功执行.then()，只要一个失败则执行.catch()
    Promise.all([]);
}

*/



//=>建议不要使用THEN中的第二个参数（看起来很乱），建议使用Promise.prototype.catch来管理失败的情况


/*let promise1 = new Promise((resolve, reject) => {
    $.ajax({
        url: 'json/data2.json',
        success(result) {
            resolve(result);
        },
        error(msg) {
            reject('no');
        }
    });
});
promise1.then(result => {
    console.log('THEN1 OK', result);
    100();
    return 100;
}).catch(msg => {
    //=>第一个CATCH
    //1.异步请求失败会执行它
    //2.第一个THEN方法失败也会执行它
    console.log('CATCH1', msg);
}).then(result => {
    console.log('THEN2 OK', result);
}).catch(msg => {
    console.log('CATCH2', msg);
});*/


let A = function A() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
};

let B = function B() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
};

let promise = A();
promise.then(() => {
    console.log(1);
    return B();
/**
 * 
 * 如果方法中返回的一个具体值，而且执行中没有错误异常，
 * 会立即执行下一个THEN中的方法（不写RETURN也是返回的了具体值：undefined），
 * 但是如果返回的是一个PROMISR实例（并且管控了一个异步操作），只能等PROMISE完成，
 * 把成功后的结果当做具体的值返回，才能进入下一个函数执行
 * 
 */
}).then(() => {
    console.log(2);
});

























