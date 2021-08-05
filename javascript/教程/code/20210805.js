var obj = {
    p: 'a'
};
console.log(Object.getOwnPropertyDescriptor(obj, 'p'));
// Object { value: "a",
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
console.log(Object.getOwnPropertyDescriptor(obj, 'toString')); // undefined

var obj = Object.defineProperties({}, {
    p1: {value: 1, enumerable: true},
    p2: {value: 2, enumerable: false}
})
console.log(Object.getOwnPropertyNames(obj)); // ["p1", "p2"]
console.log(Object.keys(obj)); // ["p1"]
console.log(Object.getOwnPropertyNames(Object.prototype));
// ["constructor", "__defineGetter__", "__defineSetter__", "hasOwnProperty", "__lookupGetter__", "__lookupSetter__", "isPrototypeOf", "propertyIsEnumerable", "toString", "valueOf", "__proto__", "toLocaleString"]


var obj = Object.defineProperty({}, 'p', {
    value: 123,
    writable: false,
    enumerable: true,
    configurable: false
})
console.log(obj.p); // 123
obj.p = 234;
console.log(obj.p); // 123

var obj = {};
Object.defineProperty(obj, 'foo', {});
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));
// {
// configurable: false
// enumerable: false
// value: undefined
// writable: false
// }

var obj = new Object();
console.log(Object.isExtensible(obj)); // true
Object.preventExtensions(obj);
console.log(Object.isExtensible(obj)); // false