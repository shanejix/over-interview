Array.prototype.myflat = function (deep = Infinity) {
  let arr = this;
  let i = 0;

  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
    i++;
    if (i >= deep) {
      break
    }
  }

  return arr
}