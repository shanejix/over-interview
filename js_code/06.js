// Array.prototype.forEach()

const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}]

arr.forEach((curr, idx, arr) => {
  // ...
}, null);


Array.prototype.myforEach = function (callback, thisArg) {

  const res = [];

  for (let i = 0; i < this.length; i++) {
    callback && callback.call(thisArg, this[i], i, this)
  }

  return res
}


