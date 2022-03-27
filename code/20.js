function myinstanceof(left, right) {
  if (typeof left !== 'object' && typeof left !== 'function' || typeof left === null) {
    return false
  }

  let proto = Object.getPrototypeOf(left)

  while (true) {
    if (proto === null) {
      return false
    }
    if (proto === right.prototype) {
      return true
    }

    proto = Object.getPrototypeOf(proto)
  }
}

function foo() { }

// const bar = new foo()

// console.log(Object.getPrototypeOf(bar) === foo.prototype)

// const res = myinstanceof(bar, foo)
const res = myinstanceof(foo, Function)

console.log(res)