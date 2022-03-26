// Array.prototype.some()

const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}]

arr.some((curr, idx, arr) => {
  // ...
}, null);


Array.prototype.mysome = function (callback, thisArg) {

  for (let i = 0; i < this.length; i++) {
    if (callback && callback.call(thisArg, this[i], i, this)) {
      return true
    }
  }

  return false
}


