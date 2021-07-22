// 自动转换为数值
var obj = {
    1: 'a',
    3.2: 'b',
    1e2: true,
    1e-2: true,
    .234: true,
    0xFF: true
};
console.log(obj);

// 方法
var obj = {
    p: function(x) {
        return 2 * x;
    }
};
console.log(obj.p(1));

// 链式调用
var o1 = {};
var o2 = { bar: 'hello' };
o1.foo = o2;
console.log(o1.foo.bar);

// 动态声明
var obj = {};
obj.foo = 123;
console.log(obj.foo); // 123

// 对象引用
var o1 = {};
var o2 = o1;

o1.a = 1;
console.log(o2.a); // 1
// 改变变量原对象引用，不会影响
o1 = 1;
console.log(o2); // {a:1}

var x = 1;
var y = x;
x = 2;
console.log(y); // 1

// 属性读取
var obj = {
    p: 'hello world'
};
console.log(obj.p);
console.log(obj['p']);

var foo = 'bar';
var obj = {
    foo: 1,
    bar: 2
}
console.log(obj.foo); // 1
console.log(obj[foo]); // 2

// 赋值
var obj = {};
obj.foo = 'hello';
obj['bar'] = 'world';
console.log(obj);

// 属性查看
var obj = {
    key1: 1,
    key2: 2
};
console.log(Object.keys(obj));

// 删除
var obj = { p: 1 };
console.log(Object.keys(obj));

delete obj.p // true
console.log(obj.p);
console.log(Object.keys(obj));

// 无法删除
var obj = Object.defineProperty({}, 'p', {
    value: 123,
    configurable: false,
})
console.log(obj); // {p:1}
console.log(delete obj.p); // false

var obj = {};
console.log(delete obj.toString); // true
console.log(obj.toString); // ƒunction toString() { [native code] }

// 遍历
var obj = {
    a: 1,
    b: 2,
    c: 3
};
for (var i in obj) {
    console.log('键名：', i);
    console.log('键值：', obj[i]);
}

var person = { name: '老张' };

for (var key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key);
    }
}