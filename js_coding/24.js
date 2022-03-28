const shallowClone = (obj) => {
  const newObj = {};

  for (let key of obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      newObj[key] = obj[key]
    }
  }

  return newObj
}

function deepClone(obj, has = new WeakMap) {
  if (obj === null || obj === undefined) {
    return obj
  }

  if (obj instanceof Date) {
    return new Date(obj)
  }

  if (obj instanceof RegExp) {
    return new RegExp(obj)
  }

  if (obj !== 'object') {
    return obj
  }

  if (has.get(obj)) {
    return has.get(obj)
  }

  let cloneObj = new obj.constructor()
  hash.set(obj, cloneObj);

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // cloneObj[key] = obj[key]
      cloneObj[key] = deepClone(obj[key], hash)
    }
  }

  return cloneObj
}