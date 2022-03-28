function hex2rgb(hex) {
  if (!isValidHex(hex)) {
    return hex;
  };

  const rgbHexArr = fomatter(hex);

  const [a, b, c] = toRGB(rgbHexArr);

  return `rgb(${a},${b},${c})`

}

function toOctNumber(hexCode) {
  let otcNumber = 0;
  const hexCodeArr = hexCode.split('');

  otcNumber += hexCodeHash[hexCodeArr[0]] * 16 + hexCodeHash[hexCodeArr[1]]

  return otcNumber;
}

function toRGB(arr) {
  const res = [];

  for (let hexCode of arr) {
    const pos = toOctNumber(hexCode);
    res.push(pos)
  }

  return res;
}

function formatter(hex) {
  const res = [];
  const hexArr = hex.split('').shift();

  if (hexArr.length === 6) {
    res.push(hexArr[0] + '' + hexArr[1])
    res.push(hexArr[2] + '' + hexArr[3])
    res.push(hexArr[4] + '' + hexArr[5])
  } else {
    res.push(hexArr[0] + '' + hexArr[0])
    res.push(hexArr[1] + '' + hexArr[1])
    res.push(hexArr[2] + '' + hexArr[2])
  }

  return res
}

const hexCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

const hexCodeHash = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  'a': 10,
  'b': 11,
  'c': 12,
  'd': 13,
  'e': 14,
  'f': 15
}

function isValidHex(hex) {
  let flag = false;

  if (typeof hex !=== 'string') {
    flag = false;
  }

  if (hex.startWith('#')) {
    const hexArr = hex.split('').shift();
    flag = hexArr.every(h => hexCode.indcudes(h.toLowerCode()))
  }

  return flag;
}


hex2rgb('#aabbcc')