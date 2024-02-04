let x = 123e5; // 12300000
let y = 123e-5; // 0.00123
console.log(x);
console.log(y);

/* -------------------------------------------------------------------------- */

x = "100";
y = "10";

let z = x / y;
console.log(z);

/* -------------------------------------------------------------------------- */

x = 100 / "Apple";
console.log(x); // NaN
console.log(typeof x);
console.log(isNaN(x));

/* -------------------------------------------------------------------------- */

x = 2 / 0; // Infinity
y = -2 / 0; // -Infinity
console.log(x, y);
console.log(typeof x);

/* -------------------------------------------------------------------------- */

x = 0xFF; // hexadecimal
console.log(x);
console.log(x.toString(16));

/* -------------------------------------------------------------------------- */

x = 123;
y = new Number(123);
console.log(x, y);
console.log(typeof x);
console.log(typeof y);
console.log(x == y);
console.log(x === y);
