function deepClone(obj, hash = new WeakMap()) {
  if (typeof obj === null) {
    return obj
  }

  if (typeof obj !== 'object') {
    return obj
  }

  if (obj instanceof RegExp) {
    return new RegExp(obj)
  }

  if (obj instanceof Date) {
    return new Date(obj)
  }

  if (hash.get(obj)) {
    return hash.get(obj)
  }

  let cloneObj = new obj.constuctor();

  hash.set(obj, cloneObj)

  for (let key in obj) {
    if (obj.hashOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], hash)
    }
  }

  return cloneObj
}