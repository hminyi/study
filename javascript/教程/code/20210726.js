var obj = { p : 1 };
console.log(obj + 2); // [object Object]2

console.log(obj.valueOf().toString()); // [object Object]

var obj = new Date();
obj.valueOf = function() {return 1};
obj.toString = function() {return 'hello'};
console.log(obj + 2); // hello2

console.log(6.5 % 2.1); // 0.19999999999999973


var x = 1;
var y = 1;
console.log(x++); // 1
console.log(++y); // 2