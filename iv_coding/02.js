// 输入
const entryObj = {
  a: {
    b: {
      c: {
        dd: 'abcdd',
      },
    },
    d: {
      xx: 'adxx',
    },
    e: 'ae',
  },
};

// 输出
const outputObj = {
  'a.b.c.dd': 'abcdd',
  'a.d.xx': 'adxx',
  'a.e': 'ae',
};

function falattenObj(value, prevKey, res = {}) {

  if (typeof value === 'object') {
    for (let key in value) {
      if (value.hasOwnProperty(key)) {

        let aKey;
        if (prevKey === '') {
          aKey = key
        } else {
          aKey = prevKey + '.' + key;
        }

        if (typeof value[key] === 'object') {
          falattenObj(value[key], aKey, res)
        } else {
          res[aKey] = value[key]
        }
      }
    }
  } else {
    res[key] = value
  }

}

const res = {};

falattenObj(entryObj, '', res)

console.log(res)