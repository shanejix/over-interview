const objTmp = {
  a: { b: { c: 1 } },
  d: 2,
  e: [3, { f: 4, g: [5] }, [6, 7]],
  h: 8
};

// const res = {
//   "a.b.c": 1,
//   d: 2,
//   "e[0]": 3,
//   "e[1].f": 4,
//   "e[1].g[0]": 5,
//   "e[2][0]": 6,
//   "e[2][1]": 7,
//   h: 8
// };

function fattenObj(obj, res = {}, prevKey = '', isArr = false) {

  for (let [key, value] of obj.entries()) {
    // console.log(key, value)

    if (typeof value === 'object' && value !== null) {
      const theKey = isArr ? prevKey + '[' + key + ']' : prevKey + key;
      fattenObj(value, res, theKey)
    }

    if (Array.isArray(value)) {
      const theKey = isArr ? prevKey + '[' + key + ']' : prevKey + key + '.';
      fattenObj(value, res, theKey, true)
    }

    const theKey = isArr ? prevKey + '[' + key + ']' : prevKey + key;
    res[theKey] = value;
  }
}

const res = fattenObj(objTmp, {})

console.log('res', res)