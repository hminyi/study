#### 概述
`Object`对象的原生方法分为两类：`Object`本身的方法与`Object`的实例方法。
1. `Object`对象本身的方法
   直接定义在`Object`对象的方法。
   ```js
   Object.print = function(o) { console.log(o); };
   ```
2. `Object`的实例方法
   定义在`Object`原型对象`Object.prototype`上的方法。可以被`Object`实例直接使用。
   ```js
   Object.prototype.print = function() {
      console.log(this);
   };

   var obj = new Object();
   obj.print() // Object
   ```

### Object()
*`Object`本身是一个函数，可以当作工作方法使用，将任意值转换为对象。*

如果参数为空（或者为`undefined` 和 `null`），`Object()`返回一个空对象。
```js
var obj = Object();
// 等同于
var obj = Object(undefined);
var obj = Object(null);
console.log(obj instanceof Object); // true
```

*如果`Object`方法的参数是一个对象，它总是返回该对象，即不用转换。*
```js
var arr = [];
var obj = Object(arr); // 返回原数组
obj === arr // true

var value = {};
var obj = Object(value) // 返回原对象
obj === value // true

var fn = function () {};
var obj = Object(fn); // 返回原函数
obj === fn // true
```

利用这一点，可以写一个判断变量是否为对象的函数。
```js
function isObject(value) {
  return value === Object(value);
}

isObject([]) // true
isObject(true) // false
```

### Object 构造函数
`Object`不仅可以当作工具函数使用，还可以当作构造函数使用，即前面可以使用new命令。

`Object`构造函数的首要用途，是直接通过它来生成新对象。

```js
var obj = new Object();
// 等同于
var obj = {}; // 字面量
```

### Object 的静态方法

#### Object.keys(),Object.getOwnPropertyNames()
用来遍历对象的属性。

对于一般的对象来说，`Object.keys()`和`Object.getOwnPropertyNames()`返回的结果是一样的。只有涉及不可枚举属性时，才会有不一样的结果。`Object.keys`方法只返回可枚举的属性，`Object.getOwnPropertyNames`方法还返回不可枚举的属性名。
```js
var a = ['hello', 'world'];
console.log(Object.keys(a)); // ["0", "1"]
console.log(Object.getOwnPropertyNames(a)); // ["0", "1", "length"]
```
由于没有提供计算对象属性个数的方法，所以可以用这两个方法替代。
```js
var obj = {
    p1: 123,
    p2: 456
};
console.log(Object.keys(obj).length); // 2
console.log(Object.getOwnPropertyNames(obj).length); // 2
```

#### 其他方法
1. 对象属性模型的相关方法
   - `Object.getOwnPropertyDescriptor()`：获取某个属性的描述对象。
   - `Object.defineProperty()`：通过描述对象，定义某个属性。
   - `Object.defineProperties()`：通过描述对象，定义多个属性。

2. 控制对象状态的方法
   - `Object.preventExtensions()`：防止对象扩展。
   - `Object.isExtensible()`：判断对象是否可扩展。
   - `Object.seal()`：禁止对象配置。
   - `Object.isSealed()`：判断一个对象是否可配置。
   - `Object.freeze()`：冻结一个对象。
   - `Object.isFrozen()`：判断一个对象是否被冻结。

3. 原型链相关方法
   - `Object.create()`：该方法可以指定原型对象和属性，返回一个新的对象。
   - `Object.getPrototypeOf()`：获取对象的Prototype对象。

### Object 的实例方法
`Object` 实例对象的方法，主要有六个。

- `Object.prototype.valueOf()`：返回当前对象对应的值。
- `Object.prototype.toString()`：返回当前对象对应的字符串形式。
- `Object.prototype.toLocaleString()`：返回当前对象对应的本地字符串形式。
- `Object.prototype.hasOwnProperty()`：判断某个属性是否为当前对象自身的属性，还是继承自原型对象的属性。
- `Object.prototype.isPrototypeOf()`：判断当前对象是否为另一个对象的原型。
- `Object.prototype.propertyIsEnumerable()`：判断某个属性是否可枚举。

#### Object.prototype.valueOf()
`valueOf`方法的作用是返回一个对象的“值”，默认情况下返回对象本身。
```js
var obj = {};
console.log(obj.valueOf() === obj); // true
```
`valueOf`方法的主要用途是，JavaScript *自动类型转换时会默认调用这个方法*

#### Object.prototype.toString()
`toString`方法的作用是返回一个对象的字符串形式，默认情况下返回类型字符串。

*数组、字符串、函数、Date 对象都分别部署了自定义的`toString`方法，覆盖了`Object.prototype.toString`方法。*
```js
Object.prototype.toString.call(value)
```
不同数据类型的`Object.prototype.toString`方法返回值如下。

- 数值：返回`[object Number]`。
- 字符串：返回`[object String]`。
- 布尔值：返回`[object Boolean]`。
- `undefined`：返回`[object Undefined]`。
- `null`：返回`[object Null]`。
- 数组：返回`[object Array]`。
- `arguments` 对象：返回`[object Arguments]`。
- 函数：返回`[object Function]`。
- `Error` 对象：返回`[object Error]`。
- `Date` 对象：返回`[object Date]`。
- `RegExp` 对象：返回`[object RegExp]`。
- 其他对象：返回`[object Object]`。

利用这个特性，可以写出一个比`typeof`运算符更准确的类型判断函数。
```js
var type = function (o){
  var s = Object.prototype.toString.call(o);
  return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

type({}); // "object"
type([]); // "array"
type(5); // "number"
type(null); // "null"
type(); // "undefined"
type(/abcd/); // "regex"
type(new Date()); // "date"
```

```js
var type = function (o){
  var s = Object.prototype.toString.call(o);
  return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

['Null',
 'Undefined',
 'Object',
 'Array',
 'String',
 'Number',
 'Boolean',
 'Function',
 'RegExp'
].forEach(function (t) {
  type['is' + t] = function (o) {
    return type(o) === t.toLowerCase();
  };
});

type.isObject({}) // true
type.isNumber(NaN) // true
type.isRegExp(/abc/) // true
```

#### Object.prototype.toLocaleString()
`Object.prototype.toLocaleString`方法与`toString`的返回结果相同，也是返回一个值的字符串形式。

*主要作用是留出一个接口，让各种不同的对象实现自己版本的`toLocaleString`，用来返回针对某些地域的特定的值。*

目前，主要有三个对象自定义了`toLocaleString`方法。

- `Array.prototype.toLocaleString()`
- `Number.prototype.toLocaleString()`
- `Date.prototype.toLocaleString()`

#### Object.prototype.hasOwnProperty()
`Object.prototype.hasOwnProperty`方法接受一个字符串作为参数，返回一个布尔值，表示该实例对象自身是否具有该属性。

```js
var obj = {
    p: 123
};
console.log(obj.hasOwnProperty('p')); // true
console.log(obj.hasOwnProperty('toString')); // false
```