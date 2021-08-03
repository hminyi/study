var err = new Error('出错了');
console.log(err.message);

function throwit() {
    throw new Error('');
}

function catchit() {
    try {
        throwit();
    } catch (error) {
        console.log(error.stack);
    }
}
catchit();

// var 1a; // Uncaught SyntaxError: Invalid or unexpected token
// console.log 'hello'); // Uncaught SyntaxError: Unexpected string

// unknownVariable; // Uncaught ReferenceError: unknownVariable is not defined

// new Array(-1); // Uncaught RangeError: Invalid array length

// new 123; // Uncaught TypeError: 123 is not a constructor

function UserError(message) {
    this.message = message || '默认信息';
    this.name = 'UserError';
}
UserError.prototypr = new Error();
UserError.prototype.constructor = UserError;

var err = new UserError('自定义错误');
console.log(err.message);
console.log(err.stack); // undefined

// var x = -1;

// if (x <= 0) {
//   throw new Error('x 必须为正数');
// }
// Uncaught Error: x 必须为正数

// function UserError(message) {
//     this.message = message || '默认信息';
//     this.name = 'UserError';
// }

// throw new UserError('出错了！');

try {
    throw new Error('出错了！');
} catch (e) {
    console.log(e.name + ": " + e.message);
    console.log(e.stack);
    // Error: 出错了！
    // at 20210803.js:52
}

// function cleanUp() {
//     try {
//         throw new Error('出错了。。。');
//         console.log('此行不会执行');
//     } finally {
//         console.log('完成清理工作');
//     }
// }
// cleanUp();
// // 完成清理工作
// // Uncaught Error: 出错了。。。
// // at cleanUp (20210803.js:62)
// // at 20210803.js:68

// finally 在 return 之前
var count = 0;
function countUp() {
    try {
        return count;
    } finally {
        count++;
    }
}
countUp();
// 0
console.log(count); // 1