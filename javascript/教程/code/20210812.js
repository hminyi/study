console.log(new Number(123).valueOf()); // 123
console.log(new String('abc').valueOf()); // "abc"
console.log(new Boolean(true).valueOf()); // true

console.log(new Number(123).toString()); // "123"
console.log(new String('abc').toString()); // "abc"
console.log(new Boolean(true).toString()); // "true"


var str = "abc";
console.log(str.length); // 3
// 等同于
var strObj = new String(str);
console.log(strObj);
console.log(strObj.length); // 3

