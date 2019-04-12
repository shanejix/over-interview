// let Promise= require('./myPromise');
let Promise= require('./myPromise.then');

new Promise((resolve, reject) => {

    console.log(1);

    resolve(2);

    reject(3);

}).then(result => {
    console.log(result)
}, reason => {
    console.log(reason)
});