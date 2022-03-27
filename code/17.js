function throttle1(func, wait) {
  let start = +new Date()

  return function () {
    let end = +new Date()

    if (end - start >= wait) {
      func();
      start = +new Date();
    }
  }
}

function throttle2(func, wait) {
  let start = +new Date()
  let timer = null;

  return function () {
    let end = +new Date()
    let remaining = wait - (end - start);

    clearTimeout(timer)

    if (remaining <= 0) {
      func()
      start = +new Date()
    } else {
      timer = setTimeout(() => func(), remaining)
    }
  }
}

function foo() {
  console.log('1')
}

const bar = throttle2(foo, 3000);


for (let i = 0; i < 300000000000; i++) {
  bar()
}