const fruits = ["Apple", "Orange", "Apple", "Mango"];

console.log(fruits.indexOf("Apple"));
console.log(fruits.lastIndexOf("Apple"));

console.log(fruits.includes("Mango"));

/* -------------------------------------------------------------------------- */

const numbers = [4, 9, 16, 25, 29];

let result = numbers.find((value) => value > 18);
console.log(result);

result = numbers.findLast((value) => value > 18);
console.log(result);

result = numbers.findIndex((value) => value > 18);
console.log(result);

result = numbers.findLastIndex((value) => value > 18);
console.log(result);
