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


// 闭包
function createIncrementor(start) {
    return function () {
        return start++;
    }
}
var inc = createIncrementor(5);
console.log(inc());
console.log(inc());
console.log(inc());

// 封装
function Person(name) {
    var _age;
    function setAge(n) {
        _age = n;
    }
    function getAge() {
        return _age;
    }

    return {
        name: name,
        getAge: getAge,
        setAge: setAge
    }
}
var p1 = Person('张三');
console.log(p1);
p1.setAge(25);
console.log(p1.getAge());

// 函数立即执行
(function() {
    console.log(123);
})();
(function() {
    console.log(123);
}());

var i = function() {
    console.log(435);
}();
true && function() {
    console.log(345);
}();
0, function() {
    console.log(789);
}()

// eval
eval('var a = 1;');
console.log(a); // 1

eval('3x'); // Uncaught SyntaxError: Invalid or unexpected token