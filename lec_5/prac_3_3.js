const sumArray = (arr) => arr.reduce((sum, num) => sum + num, 0);

console.log(sumArray([1, 3, 6, 8]));
console.log(sumArray([]));
console.log(sumArray([9]));