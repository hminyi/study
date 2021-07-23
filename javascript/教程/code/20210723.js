// 声明带函数名 体内部有作用
var print = function x() {
    console.log(typeof x);
}
// x; // Uncaught ReferenceError: x is not defined
print(); // function

var add = new Function(
    'x',
    'y',
    'return x + y'
);
// 等同于
function add(x, y) {
    return x + y;
}

// 声明覆盖
function f() {
    console.log(1);
}
f(); // 2
function f() {
    console.log(2);
}
f(); // 2

// 第一等公民
function add(x, y) {
    return x + y;
}
// 将函数赋值给一个变量
var operator = add;
// 将函数作为参数和返回值
function a(op) {
    return op;
}
a(add)(1, 1) // 2

// name 属性
function f1() {}
console.log(f1.name); // f1

var f2 = function () {};
console.log(f2.name) // "f2"

var f3 = function myName() {};
console.log(f3.name) // 'myName'

// length 属性
function f(a, b) {}
console.log(f.length);