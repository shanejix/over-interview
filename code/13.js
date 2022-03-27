Array.prototype.myapply = function (thisArg, ...argArr) {

  if (typeof this !== 'function') {
    throw Error('no function')
  }

  if (thisArg === null || thisArg === undefined) {
    thisArg = window
  } else {
    thisArg = Object(thisArg)
  }

  const func = new Symbol('func');

  thisArg[func] = this;

  return thisArg[func](...argArr)

}


function foo(...args) {
  return args
}

foo.myapply(null, [1, 2])