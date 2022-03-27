function mynew(F, ...args) {
  let obj = {};

  Object.setPrototypeOf(obj, F.prototype)

  const res = F.apply(obj, args)

  const isObject = typeof res === 'object' && typeof res !== 'null';
  const isFunction = typeof res === 'function';

  return isObject || isFunction ? res : obj

}


function Foo(...args) {
  this.args = args
}

const res = mynew(Foo, 1, 2, 3)

console.log(res)