function deepClone(obj, hash = new WeakMap()) {

  // null 
  if (typeof obj === null) {
    return obj
  }

  // 除去 null 的原始类型
  if (typeof obj !== 'object') {
    return obj
  }

  // 引用类型 RegExp
  if (obj instanceof RegExp) {
    return new RegExp(obj)
  }

  // 引用类型 Date
  if (obj instanceof Date) {
    return new Date(obj)
  }

  // 去除 RegExp 和 Date 引用类型的其他 object 引用类型，先查看缓存是否存在
  if (hash.get(obj)) {
    return hash.get(obj)
  }

  // 没有就创建
  let cloneObj = new obj.constuctor();

  // 创建后加入缓存
  hash.set(obj, cloneObj)


  // 遍历复制
  for (let key in obj) {
    if (obj.hashOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], hash)
    }
  }

  return cloneObj
}
