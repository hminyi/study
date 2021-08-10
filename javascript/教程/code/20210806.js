var arr = new Array(2);
console.log(arr); // [empty × 2]

var arr = [1, 2, 3];
console.log(arr.valueOf());
console.log(arr.toString());
var arr = [1, 2, 3, [4.5, 5]];
console.log(arr.toString());

// push
var arr = [];
console.log(arr.push(1)); // 1
console.log(arr.push('a')); // 2
console.log(arr.push(true, {})); // 4
console.log(arr); // [1, 'a', true, {}]
// pop
console.log(arr.pop()); // {}
console.log(arr); // [1, "a", true]

// shift()
var a = ['a', 'b', 'c'];
console.log(a.shift()); // a
console.log(a); // ["b", "c"]
// unshift()
console.log(a.unshift('x', 'z')); // 3
console.log(a); // ["x", "z", "b", "c"]

// join()
var a = [1, 2, 3, 4];
console.log(a.join()); // 1,2,3,4
console.log(a.join('|')); // 1|2|3|4
console.log([undefined, null].join('#')); // '#'
console.log(['a',, 'b'].join('-')); // a--b

// concat()
var a = ['hello'].concat(['world']);
console.log(a); // ["hello", "world"]
[2].concat({a: 1})
// [2, {a: 1}]
var a = [1, 2, 4];
a.concat(4, 5, 6); // [1, 2, 3, 4, 5, 6]

// reverse()
var a = ['a', 'b', 'c'];
a.reverse(); //  ["c", "b", "a"]
console.log(a); //  ["c", "b", "a"]
// slice
var a = Array.prototype.slice.call({ 0: 'a', 1: 'b', length: 2 });
console.log(a); // ["a", "b"]

// splice
var a = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(a.splice(4, 2, 1, 3)); // ["e", "f"]
console.log(a); // ["a", "b", "c", "d", 1, 3]

console.log(a.splice(-2, 2)); // [1, 3]
console.log(a); // ["a", "b", "c", "d"]

var a = [1, 1, 2];
console.log(a.splice(1, 0, 2)); // []
console.log(a); // [1, 2, 1, 2]

var a = [1, 2, 3, 4];
console.log(a.splice(2)); // [3, 4]
console.log(a); // [1, 2]

// sort
var a = [10111, 1101, 111];
a.sort();
console.log(a); // [10111, 1101, 111]
a.sort(function (a, b) {
    return a - b;
});
console.log(a); // [111, 1101, 10111]

// map
var numbers = [1, 2, 3];
console.log(numbers.map(function(n) {
    return n + 1;
})); // [2, 3, 4]
console.log(numbers); // [1, 2, 3]

var a = ['a', 'b', 'c'];
var b = [1, 2];
console.log(b.map(function (e) {
    return this[e];
}, a)); // ["b", "c"]

var f = function(n) {return 'a';};
[1, undefined, 2].map(f); // ["a", "a", "a"]
[1, null, 2].map(f); // ["a", "a", "a"]
[1, , 2].map(f) // ["a", , "a"]

var a = [1, 2, 3, 4, 5];
var b = a.filter(function (elem) {
    return (elem > 3);
})
console.log(b);
// [4, 5]
 