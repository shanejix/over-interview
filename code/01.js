// 01 数组扁平化

const arr = [1, [2, [3, [4, 5]]], 6];
// => [1, 2, 3, 4, 5, 6]

// method 1 : flat(Infinity)

const res = arr.flat(Infinity)

console.log(res)

// method 2: arr.reduce

function flatDeep(arr, d = 1) {
  return d > 0
    ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
    : arr.slice();
};

const res2 = flatDeep(arr, Infinity);

console.log(res2)

// method 2 another

function flatten(arr) {

  return arr.reduce(
    (acc, curr) => {
      return acc.concat(Array.isArray(curr) ? flatten(curr) : curr)
    },
    []
  )
}

console.log(flatten(arr));


// method 3 : RegExp

const res3 = JSON.stringify(arr).replace(/\[|\]/g, '').split(',');

console.log(res3)

// method 3 perform

const str = '[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']';

console.log(JSON.parse(str))


// method 4 : recursivity

const res4 = [];
const recursivity = (arr) => {

  for (let item of arr) {
    if (Array.isArray(item)) {
      recursivity(item)
    } else {
      res4.push(item)
    }
  }
}

recursivity(arr);

console.log(res4);




//

// references

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
