if(!undefined) {
    console.log('undefined is false');
}

if(!null) {
    console.log('null is false');
}

console.log(undefined == null); // true

console.log(Number(null)); // 0
console.log(5 + null); // 5

console.log(Number(undefined)); // NaN
console.log(5 + undefined); // NaN

var i;
console.log(i); // undefined

// 调用函数，没有提供对于的参数，该参数为undefined
function f(x) {
    return x;
}
console.log(f()); // undefined

// 对象没有赋值的属性
var o = new Object();
console.log(o.p); // undefined

// 函数没有返回值，默认返回undefined
function f() {}
console.log(f()); // undefined


if([]) {
    console.log('true');
}
if({}) {
    console.log('true')
}

// 数值
console.log(1 === 1.00); // true
console.log(0.1 + 0.2 === 0.3) // false