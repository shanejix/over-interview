function Parent(...args) {
  this.args = args
  this.getArgs = function () {
    console.log(this.args)
  }
}

Parent.prototype.method = function () {
  console.log('perent method')
}

function Child(...args) {
  Parent.call(this, ...args)
  this.childArgs = args
}

function _extends(Child, Parent) {
  let proto = Object.create(Parent.prototype);
  Child.prototype = proto;
  Child.prototype.constructor = Child;
};

_extends(Child, Parent)


const child = new Child(1, 2);

console.log(child)
console.log(child.__proto__.__proto__)
console.log(Object.getPrototypeOf(child))

child.method()


