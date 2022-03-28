Array.prototype.mysplice = function (start, len, ...values) {

  if (len === 0) {
    return []
  }

  len = start + len > this.length - 1
    ? this.length - start
    : this.length

}