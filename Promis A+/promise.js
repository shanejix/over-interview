
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