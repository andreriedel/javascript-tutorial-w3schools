// declared variable with var
var x = 1;

// declared variable with let
let y = 2;

// undeclared variable
z = 3;
console.log(z);

// declared const
const w = 4;
// always use const if the type should not be changed (arrays and objects)

// declared varibale with undefined type; not initialized
let name;

// multiple variables
let person = "John Doe", carName = "Volvo", price = 200;

// You cannot re-declare a variable declared with let or const.
/*
  let carName = "Volvo";
  let carName;
*/

let a = "5" + 2 + 3;
let b = 2 + 3 + "5";

console.log(a, b);
