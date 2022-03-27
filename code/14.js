Array.prototype.mycall = function (thisArg, ...argsArr) {

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

  const result = thisArg[func](...argsArr)

  delete thisArg[func];

  return result

}


function foo(...args) {
  return args
}

foo.myapply(null, [1, 2])