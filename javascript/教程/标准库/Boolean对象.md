### 概述
`Boolean`对象是 JavaScript 的三个包装对象之一。作为构造函数，它主要用于生成布尔值的包装对象实例。

```js
var b = new Boolean(true);

typeof b // "object"
b.valueOf() // true

if (new Boolean(false)) {
  console.log('true');
} // true

if (new Boolean(false).valueOf()) {
  console.log('true');
} // 无输出

```

### Boolean 函数的类型转换作用

`Boolean`对象除了可以作为构造函数，还可以单独使用，将任意值转为布尔值
```js
Boolean(undefined) // false
Boolean(null) // false
Boolean(0) // false
Boolean('') // false
Boolean(NaN) // false

Boolean(1) // true
Boolean('false') // true
Boolean([]) // true
Boolean({}) // true
Boolean(function () {}) // true
Boolean(/foo/) // true
```

*使用双重的否运算符（`!`）也可以将任意值转为对应的布尔值。*