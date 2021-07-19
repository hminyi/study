### null 和 undefined
#### 概述
`null` 和 `undefined` 都可以表示“没有”。

在`if`语句中，它们都会被自动转为`false`，相等运算符（`==`）甚至直接报告两者相等。

```js
if(!undefined) {
    console.log('undefined is false');
}
// undefined is false

if(!null) {
    console.log('null is false');
}
// null is false

undefined == null
// true
```

`null`表示“空”的对象，转为数值时为0；`undefined`是一个“此处无定义”的原始值，转为数值时为`NaN`。

```js
Number(null) // 0
5 + null // 5

Number(undefined) // NaN
5 + undefined // NaN
```

```js
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
```

### 布尔值

运算符返回布尔值
- 前置逻辑运算符：`!`（Not）
- 相等运算符：`===`，`!==`，`==`，`!=`
- 比较运算符：`>`，`>=`，`<`，`<=`

除了下面六个值被转为`false`，其他值都视为`true`
- `undefined`
- `null`
- `false`
- `0`
- `NaN`
- `""` 或 `''`

注意：空数组（[]）和空对象（{}）对应的布尔值，都是`true`
```js
if([]) {
    console.log('true');
}
if({}) {
    console.log('true')
}
```