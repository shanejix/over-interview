Object.defineProperty(
  Object,
  'myassign',
  {
    value: function (target, ...args) {
      if (target === null) {
        throw Error('not null')
      }

      const to = Object(target);

      for (let source of args) {
        if (typeof source !== null) {
          for (let key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              to[key] = source[key]
            }
          }
        }
      }

      return to;
    },
    enumerable: false,
    writable: false,
    configurable: true
  }
)

const res = Object.myassign({}, { 'foo': 1, bar: '2' });

console.log(res)