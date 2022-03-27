Array.prototype.mybind = function (thisArg, ...argsArr) {

  if (typeof this !== 'function') {
    throw Error('no function')
  }

  if (thisArg === undefined || thisArg === null) {
    thisArg = window;
  } else {
    thisArg = Object(thisArg)
  }

  let func = this;

  return function (...args) {
    return func.apply(
      this instanceof func ? this : thisArg,
      args
    )
  }
}


function foo(...args) {
  return args
}

const bar = foo.mybind(null, [1, 2])

bar(1, 2)