// Array.prototype.every()

const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}]

arr.every((curr, idx, arr) => {
  // ...
}, null);


Array.prototype.myevery = function (callback, thisArg) {

  for (let i = 0; i < this.length; i++) {
    if (callback && !callback.call(thisArg, this[i], i, this)) {
      return false
    }
  }

  return true
}


