function debounce(func, wait) {
  let timer = null;

  return function () {
    clearTimeout(timer)

    timer = setTimeout(() => func(), wait)
  }

}


function foo(...args) {
  console.log(1)
  return args
}

const bar = debounce(foo, 3000);

for (let i = 0; i < 30000; i++) {
  bar()
}