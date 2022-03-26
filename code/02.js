// 02 数组去重

const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}];

// => [1, '1', 17, true, false, 'true', 'a', {}, {}]

/** */

// method 1 : Set

// const res1 = Array.from(new Set(arr));
const res1 = [...new Set(arr)];

console.log('res1:', res1);

// method 2 : for

function unique(arr) {
  let len = arr.length - 1;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);// del
        j--;
        len--;
      }
    }
  }

  return arr
}

console.log('res2:', unique(arr))


// method 3 : indexOf / includes

const unique2 = (arr) => {

  const res = [];

  for (let i = 0; i < arr.length; i++) {
    // if (res.indexOf(arr[i] === -1)) {
    if (!res.includes(arr[i])) {
      res.push(arr[i])
    }
  }

  return res;
};

// console.log('res3:', unique2(arr));
console.log('res3:', unique2([1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}]));

// method 4 : filter

const res4 = arr.filter((curr, idx) => {
  return arr.indexOf(curr) === idx
});

console.log('res4', res4);


// method 5 : Map

const map = new Map();
const res5 = [];

for (let item of arr) {
  if (!map.has(item)) {
    res5.push(item)
    map.set(item, true)
  }
}

console.log('res5:', res5)

/** */

// references

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set