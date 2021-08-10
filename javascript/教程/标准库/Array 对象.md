### 构造函数
`Array`是原生对象，同时也是一个构造函数，可以用它生成新的数组。
```js
var arr = new Array(2);
arr.length // 2
arr // [empty x 2]
```

*如果没有使用`new`关键字，运行结果也是一样的。*
```js
var arr = Array(2);
// 等同于
var arr = new Array(2);
```

*`Array()`作为构造函数，行为很不一致。因此，不建议使用它生成新数组，直接使用数组字面量是更好的做法。*
```js
// 多参数时，所有参数都是返回的新数组的成员
new Array(1, 2) // [1, 2]
new Array('a', 'b', 'c') // ['a', 'b', 'c']
```

**注意**：*如果参数是一个正整数，返回数组的成员都是空位。虽然读取的时候返回`undefined`，但实际上该位置没有任何值。虽然这时可以读取到`length`属性，但是取不到键名。*

### 静态方法
#### Array.isArray()
`Array.isArray`方法返回一个布尔值，表示参数是否为数组。它可以弥补`typeof`运算符的不足。

```js
var arr = [1, 2, 3];
typeof arr // "object"
Array.isArray(arr) // true
```

### 实例方法
#### valueOf(), toString()
*数组的valueOf方法返回数组本身。*
```js
var arr = [1, 2, 3];
arr.valueOf() // [1, 2, 3]
```
数组的`toString`方法返回数组的字符串形式。
```js
var arr = [1, 2, 3, [4.5, 5]];
console.log(arr.toString()); // 1,2,3,4.5,5
```

#### push(), pop()
*`push`方法用于数组的末端添加一个或多个元素。并返回添加新元素后的数组长度。该方法会改变原数组。*
```js
var arr = [];
console.log(arr.push(1)); // 1
console.log(arr.push('a')); // 2
console.log(arr.push(true, {})); // 4
console.log(arr); // [1, 'a', true, {}]
```

*`pop`方法用于删除数组的最后一个元素，并返回该元素。该方法会改变原数组。*
```js
console.log(arr.pop()); // {}
console.log(arr); // [1, "a", true]
```

*对于空数组使用pop方法，不会报错，而是返回`undefined`。*
*`push`和`pop`结合使用，就构成了“**后进先出**”的栈结构（stack）*

#### shift(), unshift()
*`shift()` 用于删除数组的第一个元素，并返回该元素。该方法会改变原数组。*
```js
var a = ['a', 'b', 'c'];
console.log(a.shift()); // a
console.log(a); // ["b", "c"]
```

*`push()`和`shift()`结合使用，就构成了“**先进先出**”的队列结构（queue）。*

*`unshift()`用于在数组的第一个位置添加元素，并返回添加新元素后的数组长度。该方法会改变原数组。*

可以接受多个参数。

```js
console.log(a.unshift('x', 'z')); // 3
console.log(a); // ["x", "z", "b", "c"]
```

#### join()
以指定参数作为分隔符，将所有数组成员连接为一个字符串返回。*如果不提供参数，默认用逗号分隔。*
```js
var a = [1, 2, 3, 4];
console.log(a.join()); // 1,2,3,4
console.log(a.join('|')); // 1|2|3|4
```

*如果数组成员是 `undefined` 或 `null` 或 `空位`，会被转为空字符串。*
```js
console.log([undefined, null].join('#')); // '#'
console.log(['a',, 'b'].join('-')); // a--b
```

通过`call`方法，这个方法也可以用于字符串或类似数组的对象。
```js
Array.prototype.join.call('hello', '-')
// "h-e-l-l-o"

var obj = { 0: 'a', 1: 'b', length: 2 };
Array.prototype.join.call(obj, '-')
// 'a-b'
```

#### concat()
用于多个数组的合并。将新数组的成员添加到原数组成员的后部，然后返回一个新数组，*原数组不变*。
```js
var a = ['hello'].concat(['world']);
console.log(a); // ["hello", "world"]
[2].concat({a: 1})
// [2, {a: 1}]
```

除了数组作为参数，*`concat`也接受其他类型的值作为参数，添加到目标数组尾部。*
```js
[1, 2, 3].concat(4, 5, 6); // [1, 2, 3, 4, 5, 6]
```

*如果数组成员包括对象，`concat`方法返回当前数组的一个浅拷贝。所谓“浅拷贝”，指的是新数组拷贝的是对象的引用。*
```js
var obj = { a: 1 };
var oldArray = [obj];

var newArray = oldArray.concat();

obj.a = 2;
newArray[0].a // 2
```

#### reverse()
用于颠倒排列数组元素，返回改变后的数组。注意，*该方法将改变原数组。*

```js
var a = ['a', 'b', 'c'];

a.reverse() // ["c", "b", "a"]
a // ["c", "b", "a"]
```

#### slice()
`slice()`方法用于提取目标数组的一部分，返回一个新数组，原数组不变。

```js
arr.slice(start, end);
```
*它的第一个参数为起始位置（从0开始，会包括在返回的新数组之中），第二个参数为终止位置（但该位置的元素本身不包括在内）。如果省略第二个参数，则一直返回到原数组的最后一个成员。*

```js
var a = ['a', 'b', 'c'];

a.slice(0) // ["a", "b", "c"]
a.slice(1) // ["b", "c"]
a.slice(1, 2) // ["b"]
a.slice(2, 6) // ["c"]
a.slice() // ["a", "b", "c"]
```
*如果`slice()`方法的参数是负数，则表示倒数计算的位置。*

```js
var a = ['a', 'b', 'c'];
a.slice(-2) // ["b", "c"]
a.slice(-2, -1) // ["b"]
```

*`slice()`方法的一个重要应用，是将类似数组的对象转为真正的数组。*
```js
Array.prototype.slice.call({ 0: 'a', 1: 'b', length: 2 })
// ['a', 'b']

Array.prototype.slice.call(document.querySelectorAll("div"));
Array.prototype.slice.call(arguments);
```

#### splice()

*用于删除原数组的一部分成员，并可以在删除的位置添加新的数组成员，返回值是被删除的元素。注意，该方法会改变原数组。*

```js
arr.splice(start, count, addElement1, addElement2, ....);
```
第一个参数是删除的起始位置（从0开始），第二个参数是被删除的元素个数。*如果后面还有更多的参数，则表示这些就是要被插入数组的新元素。*
```js
var a = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(a.splice(4, 2, 1, 3)); // ["e", "f"]
console.log(a); // ["a", "b", "c", "d", 1, 3]
```

*起始位置如果是负数，就表示从倒数位置开始删除。*

*如果淡出地插入元素，`splice`方法的第二个参数可以设为`0`。*
```js
var a = [1, 1, 2];
console.log(a.splice(1, 0, 2)); // []
console.log(a); // [1, 2, 1, 2]
```

*如果值提供一个参数，等同于将原数组在指定位置拆分成两个数组。*
```js
var a = [1, 2, 3, 4];
console.log(a.splice(2)); // [3, 4]
console.log(a); // [1, 2]
```

#### sort()

*对数组成员进行排序，默认是按照字典顺序排序。排序后，原数组将被改变。按照字典顺序。数值会被先转成字符串，再按照字典顺序进行比较。*
```js
var a = [10111, 1101, 111];
a.sort();
console.log(a); // [10111, 1101, 111]
```

*`sort`的参数函数本身接受两个参数，表示进行比较的两个数组成员。如果该函数的返回值大于`0`，表示第一个成员排在第二个成员后面；其他情况下，都是第一个元素排在第二个元素前面。*
```js
a.sort(function (a, b) {
    return a - b;
});
console.log(a); // [111, 1101, 10111]
```

#### map()

*将数组的所有成员依次传入参数函数，然后把每一次的执行结果组成一个新数组返回。不会改变原数组。*

```js
var numbers = [1, 2, 3];
console.log(numbers.map(function(n) {
    return n + 1;
})); // [2, 3, 4]
console.log(numbers); // [1, 2, 3]
```

*`map()`方法向它传入三个参数：当前成员、当前位置和数组本身。*

*`map()`方法可以接受第二个参数，用来邦定回调函数内部的 `this` 变量*
```js
var a = ['a', 'b', 'c'];
var b = [1, 2];
console.log(b.map(function (e) {
    return this[e];
}, a)); // ["b", "c"]
```

*如果数组有空位，`map()`方法的回调函数在这个位置不会执行，会跳过数组的空位。*
```js
var f = function(n) {return 'a';};
[1, undefined, 2].map(f); // ["a", "a", "a"]
[1, null, 2].map(f); // ["a", "a", "a"]
[1, , 2].map(f) // ["a", , "a"]
```

#### forEach()

`forEach()`方法与`map()`方法很相似，也是对数组的所有成员依次执行参数函数。但是，`forEach()`方法不返回值，只用来操作数据。这就是说，如果数组遍历的目的是为了得到返回值，那么使用`map()`方法，否则使用`forEach()`方法。

*注意，`forEach()`方法无法中断执行，总是会将所有成员遍历完。如果希望符合某种条件时，就中断遍历，要使用`for`循环。*

`forEach()`方法也会跳过数组的空位。

#### filter()

*`filter()`方法用于过滤数组成员，满足条件的成员组成一个新数组返回。*
*它的参数是一个函数，所有数组成员依次执行该函数，返回结果为 `true` 的成员组成一个新数组返回。该方法不会改变原数组。*
```js
var a = [1, 2, 3, 4, 5];
var b = a.filter(function (elem) {
    return (elem > 3);
})
console.log(b);
// [4, 5]
```

*`filter()`方法返回数组`arr`里面所有布尔值为`true`的成员。*
```js
var arr = [0, 1, 'a', false];

arr.filter(Boolean)
// [1, "a"]
```

`filter()`方法的参数函数可以接受三个参数：*当前成员，当前位置和整个数组。*
*`filter()`方法还可以接受第二个参数，用来绑定参数函数内部的`this`变量。*
```js
var obj = { MAX: 3 };
var myFilter = function (item) {
  if (item > this.MAX) return true;
};

var arr = [2, 8, 3, 4, 1, 3, 2, 9];
arr.filter(myFilter, obj) // [8, 4, 9]
```

#### some(), every()

表示判断数组成员是否符合某种条件。返回一个布尔值。
*它们接受一个函数作为参数，该函数接受三个参数：当前成员、当前位置和整个数组，然后返回一个布尔值。*

*`some`方法是只要一个成员的返回值是`true`，则整个`some`方法的返回值就是`true`，否则返回`false`。*

*`every`方法是所有成员的返回值都是`true`，整个`every`方法才返回`true`，否则返回`false`。*

*注意，对于空数组，`some`方法返回`false`，`every`方法返回`true`，回调函数都不会执行。*
```js
function isEven(x) { return x % 2 === 0 }

[].some(isEven) // false
[].every(isEven) // true
```

*`some`和`every`方法还可以接受第二个参数，用来绑定参数函数内部的`this`变量。*

#### reduce(), reduceRight()

*`reduce()`方法和`reduceRight()`方法依次处理数组的每个成员，最终累计为一个值。它们的差别是，`reduce()`是从左到右处理（从第一个成员到最后一个成员），`reduceRight()`则是从右到左（从最后一个成员到第一个成员）*

reduce()方法和reduceRight()方法的第一个参数都是一个函数。该函数接受以下四个参数。
```js
[1, 2, 3, 4, 5].reduce(function (
  a,   // 累积变量，必须
  b,   // 当前变量，必须
  i,   // 当前位置，可选
  arr  // 原数组，可选
) {
  // ... ...
})
```

*如果要对累积变量指定初值，可以把它放在`reduce()`方法和`reduceRight()`方法的第二个参数。*

```js
[1, 2, 3, 4, 5].reduce(function (a, b) {
  return a + b;
}, 10);
// 25
```

#### indexOf(), lastIndexOf()

`indexOf`方法返回给定元素在数组中第一次出现的位置，如果没有出现则返回`-1`。
*`indexOf`方法还可以接受第二个参数，表示搜索的开始位置。*
```js
['a', 'b', 'c'].indexOf('a', 1) // -1
```

*上面代码从1号位置开始搜索字符`a`，结果为`-1`，表示没有搜索到。*

`lastIndexOf`方法返回给定元素在数组中最后一次出现的位置，如果没有出现则返回`-1`。

注意，*这两个方法不能用来搜索`NaN`的位置，即它们无法确定数组成员是否包含`NaN`。两个方法内部，使用严格相等运算符（`===`）进行比较，而`NaN`是唯一一个不等于自身的值。*
