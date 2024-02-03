let text = "Please locate where 'locate' occurs!";

console.log(text.indexOf("locate", 0));
console.log(text.lastIndexOf("locate"));

console.log("\n");

/* -------------------------------------------------------------------------- */

console.log(text.search("locate"));
console.log(text.search(/locate/));

console.log("\n");

/* -------------------------------------------------------------------------- */

text = "The rain in SPAIN stays mainly in the plain";

console.log(text.match("ain"));
console.log(text.match(/ain/));
console.log(text.match(/ain/g));
console.log(text.match(/ain/gi));

console.log("\n");

/* -------------------------------------------------------------------------- */

const iterator = text.matchAll(/ain/gi); // returns an iterator
console.log(Array.from(iterator));

console.log("\n");

/* -------------------------------------------------------------------------- */

text = "Hello world, welcome to the universe";

console.log(text.includes("world", 0));
console.log(text.startsWith("Hello", 0));
console.log(text.endsWith("universe"));
