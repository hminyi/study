console.log(1 === 1.0); // true

console.log(0.3/0.1);
console.log(0.2-0.1);
console.log(0.3-0.2);
console.log(0.2+0.1);

// 数值范围
console.log(Math.pow(2, 1024)); // Infinity
console.log(Math.pow(2, -1075)); // 0

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324


console.log(NaN == NaN); // false
console.log(Boolean(NaN)); // false

// parseInt
console.log(parseInt('123')); // 123
console.log(parseInt('    81')); // 81
console.log(parseInt('12px')); // 12
console.log(parseInt('x12px')); // NaN

console.log(parseInt('+1')); // 1
console.log(parseInt('0x12')); // 18

console.log(parseInt(0.0000008)); // 8

console.log(parseFloat('314e-2')); // 3.14
console.log(parseFloat('\t\v\r12.34\n ')); // 12.34