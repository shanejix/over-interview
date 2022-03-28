function debounce(func, wait) {
  let timer = null;

  return function () {
    clearTimeout(timer)

    timer = setTimeout(() => func(), wait)
  }

}

function debounce2(func, wait, immediate) {
  let timer = null;

  return function () {

    clearTimeout(timer)

    if (immediate) {

      let callNow = !timer;

      timer = setTimeout(() => func(), wait);

      if (callNow) {
        func()
      }

    } else {

      timer = setTimeout(() => func(), wait)
    }
  }

}


function foo(...args) {
  console.log(1)
  return args
}

const bar = debounce(foo, 3000);

const bar1 = debounce2(foo, 3000, true);

for (let i = 0; i < 30000; i++) {
  // bar()
  bar1()
}

// for (let i = 0; i < 30000000; i++) {
//   bar()
// }