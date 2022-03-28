function is(x, y) {

  // 0 === -0 false
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // NaN === NaN true
    return x !== x && y !== y
  }
}


console.log(is(0, -0));
console.log(is(NaN, NaN));