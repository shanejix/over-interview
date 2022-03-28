// Array.prototype.reduce()

const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}]

arr.reduce((acc, curr, idx, arr) => {
  // ...

  return acc
}, []);


Array.prototype.myreduce = function (callback, initial) {

  let acc;
  let start = 0;

  if (initial) {
    acc = initial
  } else {
    acc = this[0];
    start = 1
  }

  for (let i = start; i < this.length; i++) {
    callback && callback(acc, this[i], i, this)
  }

  return acc

}


