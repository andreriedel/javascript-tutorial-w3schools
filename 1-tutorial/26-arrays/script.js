/*
  In JavaScript, arrays use numbered indexes.
  In JavaScript, objects use named indexes.
  Arrays are a special kind of objects, with numbered indexes.
*/

const cars = ["Saab", "Volvo", "BMW"];
// const cars = new Array("Saab", "Volvo", "BMW");

cars[0] = "Opel";

let car = cars[0];
console.log(car);

/* -------------------------------------------------------------------------- */

console.log(cars);
console.log(cars.toString());
console.log(typeof cars);

/* -------------------------------------------------------------------------- */

console.log(cars.length);
console.log(cars.sort());

console.log("\n");

/* -------------------------------------------------------------------------- */

const fruits = ["Banana", "Orange", "Apple", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("\n");

fruits.forEach((value) => {
  console.log(value);
});

console.log("\n");

/* -------------------------------------------------------------------------- */

fruits.push("Lemon");
console.log(fruits);

/* -------------------------------------------------------------------------- */

// Create an array with one element:
const points1 = [40];

// Create an array with 40 undefined elements:
const points2 = new Array(40);  
console.log(points2);

/* -------------------------------------------------------------------------- */

console.log(Array.isArray(fruits));
console.log(fruits instanceof Array);
