var arr = ['a', 'b', 'c'];
console.log(arr.length); // 3

arr.length = 1;
console.log(arr); // ["a"]
// 新增空位
arr.length = 3;
console.log(arr);
console.log(arr[1]); // undefined
console.log(2 in arr);// false

// in 运算符
var arr = ['a', 'b', 'c'];
console.log(2 in arr); // true
