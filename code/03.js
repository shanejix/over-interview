// 类数组转化为数组


// Array.form
arr.from(document.querySelectorAll('div'));

// ...
[...document.querySelectorAll('div')]

// slice.call
Array.prototype.slice.call(document.querySelectorAll('div'));

// concat.apply
Array.prototype.concat.apply([], document.querySelectorAll('div'));
