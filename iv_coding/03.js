function fatten(arr) {


  return arr.reduce(
    (acc, curr) => {
      // console.log(curr, acc);

      if (Array.isArray(curr)) {
        return [...acc, ...fatten(curr)]
      } else {
        return [...acc, curr]
      }

      // return acc.concat(Array.isArray(curr) ? fatten(curr) : curr)
    },
    []
  )
}

const arr = [1, 3, 4, [3, 3, [4, 6]]];

const res = fatten(arr);

console.log(res);


function fatten2(arr) {
  let res = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      // res.concat(fatten(item))
      res = [...res, ...fatten(item)]
    } else {
      // res.concat(item)
      res = [...res, item]
    }
  }

  return res
}

console.log('fatten2', fatten2(arr))