let fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.length);
console.log(fruits.toString());
console.log(fruits.join(" * "));

/* -------------------------------------------------------------------------- */

console.log(fruits.at(0));
console.log(fruits[0]);

console.log("\n");

/* -------------------------------------------------------------------------- */

console.log(fruits.pop());

fruits.push("Kiwi");
console.log(fruits);

console.log(fruits.shift());

fruits.unshift("Lemon");
console.log(fruits);

delete fruits[3];
console.log(fruits);

console.log("\n");

/* -------------------------------------------------------------------------- */

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

console.log(myGirls.concat(myBoys));
console.log(myGirls.concat("Maria"));

/* -------------------------------------------------------------------------- */

fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log(fruits.copyWithin(2, 0, 2));

/* -------------------------------------------------------------------------- */

const myArr = [[1,2],[3,4],[5,6]];
console.log(myArr.flat());

console.log("\n");

/* -------------------------------------------------------------------------- */

fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

/* const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
console.log(spliced); */

/* -------------------------------------------------------------------------- */

fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
console.log(citrus);
