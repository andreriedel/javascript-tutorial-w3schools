let fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.sort();
console.log(fruits);

fruits.reverse();
console.log(fruits);

/* -------------------------------------------------------------------------- */

const months = ["Jan", "Feb", "Mar", "Apr"];

console.log(months.toSorted());
console.log(months.toReversed());

/* -------------------------------------------------------------------------- */

let points = [40, 100, 1, 5, 25, 10];

points.sort((a, b) => a - b);
console.log(points);

points.sort((a, b) => b - a);
console.log(points);

/* --------------------------- Fisher Yates Method -------------------------- */

points = [40, 100, 1, 5, 25, 10];

for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}

console.log(points);

/* -------------------------------------------------------------------------- */

points = [40, 100, 1, 5, 25, 10];

function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}

console.log(myArrayMin(points));
console.log(Math.min(...points)); // spread

/* -------------------------------------------------------------------------- */

const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

cars.sort((a, b) => a.year - b.year);
console.log(cars);
