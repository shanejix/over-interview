// Array.prototype.map()

const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}]

arr.map((curr, idx, arr) => {
  return curr + 1
}, null);


Array.prototype.mymap = function (callback, thisArg) {

  const res = [];

  for (let i = 0; i < this.length; i++) {
    // callback && (res[i] = callback.call(thisArg, this[i], i, this));
    res[i] = callback && callback.call(thisArg, this[i], i, this)
  }

  return res
}


