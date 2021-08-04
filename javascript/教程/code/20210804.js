Object.prototype.print = function() {
    console.log(this);
};

var obj = new Object();
obj.print() // Object

Object.print = function(o) {
    console.log(o);
}

var obj = Object();
// 等同于
var obj = Object(undefined);
var obj = Object(null);
console.log(obj instanceof Object); // true

var a = ['hello', 'world'];
console.log(Object.keys(a)); // ["0", "1"]
console.log(Object.getOwnPropertyNames(a)); // ["0", "1", "length"]

var obj = {
    p1: 123,
    p2: 456
};
console.log(Object.keys(obj).length); // 2
console.log(Object.getOwnPropertyNames(obj).length); // 2

console.log(Object.getOwnPropertyDescriptor(obj, 'p1'));

var obj = {};
console.log(obj.valueOf() === obj); // true

// toString()
console.log(Object.prototype.toString.call(2));

var date = new Date();
console.log(date.toString());
console.log(date.toLocaleString());

var obj = {
    p: 123
};
console.log(obj);
console.log(obj.hasOwnProperty('p')); // true
console.log(obj.hasOwnProperty('toString')); // false