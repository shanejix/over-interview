// Array.prototype.filter()

const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}]

arr.filter((curr, idx, arr) => { }, null);


Array.prototype.myfilter = function (callback, thisArg) {

  const res = [];

  for (let i = 0; i < this.length; i++) {
    callback && callback.call(thisArg, this[i], i, this) && res.push(this[i])
  }

  return res
}


