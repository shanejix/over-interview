Array.prototype.myjoin = function (str = ',') {
  let resStr = ''

  for (let i = 0; i < this.length; i++) {
    let item = this[i];

    resStr = i === 0 ? item : `${resStr}${str}${item}`

  }

  return resStr
}