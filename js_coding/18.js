function add(...argsArr) {

  const _argsArr = [...argsArr];

  function func(...args) {
    _argsArr.push(...args)

    return func
  }

  func.console = function () {
    console.log(_argsArr)
  }

  func.sum = function () {
    return _argsArr.reduce((sum, curr) => {
      return sum += curr
    }, 0)
  }

  func.toString = function () {
    return _argsArr.reduce((sum, curr) => {
      return sum += curr
    }, 0)
  }

  return func
}


const res1 = add(1)(2)(3)(4);
const res2 = add(1, 2, 4)(2)(3)(4);

console.log(res1.console())
console.log(res2.console())
console.log(res1.sum())
console.log(res2.sum())
console.log(res1.toString())
console.log(res2.toString())