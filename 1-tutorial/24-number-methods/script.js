let x = 123;
console.log(x.toString());

/* -------------------------------------------------------------------------- */

x = 123.123;
console.log(x.toExponential());
console.log(x.toExponential(2));
console.log(x.toExponential(4));

console.log(x.toFixed());
console.log(x.toFixed(2));
console.log(x.toFixed(4));

console.log(x.toPrecision());
console.log(x.toPrecision(2));
console.log(x.toPrecision(4));

console.log("\n");

/* -------------------------------------------------------------------------- */

console.log(Number(true));
console.log(Number(false));
console.log(Number("10"));
console.log(Number("  10"));
console.log(Number("10  "));
console.log(Number(" 10  "));
console.log(Number("10.33"));
console.log(Number("10,33"));
console.log(Number("10 33"));
console.log(Number("John"));
console.log(Number(new Date("1970-01-02")));

console.log("\n");

/* -------------------------------------------------------------------------- */

console.log(parseInt(true));
console.log(parseInt(false));
console.log(parseInt("10"));
console.log(parseInt("  10"));
console.log(parseInt("10  "));
console.log(parseInt(" 10  "));
console.log(parseInt("10.33"));
console.log(parseInt("10,33"));
console.log(parseInt("10 33"));
console.log(parseInt("John"));
console.log(parseInt(new Date("1970-01-02")));

console.log("\n");

/* -------------------------------------------------------------------------- */

console.log(parseFloat(true));
console.log(parseFloat(false));
console.log(parseFloat("10"));
console.log(parseFloat("  10"));
console.log(parseFloat("10  "));
console.log(parseFloat(" 10  "));
console.log(parseFloat("10.33"));
console.log(parseFloat("10,33"));
console.log(parseFloat("10 33"));
console.log(parseFloat("John"));
console.log(parseFloat(new Date("1970-01-02")));
