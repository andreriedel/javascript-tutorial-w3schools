const numbers = [45, 4, 9, 16, 25];

numbers.forEach((value, index, array) => {
  console.log(index + " - " + value);
});

/* -------------------------------------------------------------------------- */

let newNumbers = numbers.map((value) => {
  return value * 2;
});

console.log(newNumbers);

newNumbers = numbers.flatMap((value) => {
  return value * 2;
});

console.log(newNumbers);

/* -------------------------------------------------------------------------- */

let over18 = numbers.filter((value) => {
  return value > 18;
});

console.log(over18);

/* -------------------------------------------------------------------------- */

let sum = numbers.reduce((total, value) => {
  return total + value;
}, 100);

console.log(sum);

sum = numbers.reduceRight((total, value) => {
  return total + value;
}, 100);

console.log(sum);

/* -------------------------------------------------------------------------- */

let allOver18 = numbers.every(val => val > 18);
console.log(allOver18);

let someOver18 = numbers.some(val => val > 18);
console.log(someOver18);

/* -------------------------------------------------------------------------- */

console.log(Array.from("ABCDEFG"));

/* -------------------------------------------------------------------------- */

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys(); // returns an array iterator

console.log(keys)

for (let x of keys) {
  console.log(x);
}

/* -------------------------------------------------------------------------- */

const f = fruits.entries(); // returns an array iterator

console.log(f)

for (let x of f) {
  console.log(x);
}

/* -------------------------------------------------------------------------- */

const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");

console.log(myMonths);
