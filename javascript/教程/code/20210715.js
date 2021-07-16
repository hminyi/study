// 变量提升
console.log(a); // undefined
var a = 1;

// --> 注释
// function countdown(n) {
//     while (n-- > 0) console.log(n);
// }
// countdown(3)

// 区块
{
    var b = 3;
}
console.log(b); // 3

// if条件判断
var x = 1;
// var y = 2;
var y = 0;
if (x = y) {
    console.log(x);
}
// if (x = 2) {
//     console.log(x); // 不报错
// }
// if (2 = x) {
//     console.log(x); // 报错
// }

// 无限循环
// for (;;) {
//     console.log('Hello World');
// }

// 跳出循环
top:
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 3; j++) {
            if (i === 1 && j === 1) break top;
            console.log('i=' + i + ', j=' + j);
        }
    }
console.log(123);

// 跳到外层循环
top:
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (i === 1 && j === 1) continue top;
            console.log('i=' + i + ', j=' + j);
        }
    }