/* --------------------------- member of operator --------------------------- */

console.log("MEMBER OF OPERATORS");

const family = {
  father: "Carlos", // colon assignment and comma
  mother: "Laina",
  brother: "Breno"
};

console.log(family.father); // member of operator
console.log(family["father"]); // member of operator

// member of opereator in indexed objects
const list = {
  0: "kiwi",
  1: "banana",
  2: "mango",
  3: "apple"
};

console.log(list[0]);

console.log('\n');

/* ----------------------- optional chaining operator ----------------------- */

// returns undefined if an object is undefined or null (instead of throwing an error)

console.log("OPTIONAL CHAINING OPERATOR");

const car = {
  type: "Fiat",
  model: "500",
  color: "white"
};

console.log(car?.type);
console.log(car?.name);
console.log(car.name);

console.log('\n');

/* --------------------------- increment operators -------------------------- */

console.log("INCREMENT OPERATORS");

let a = 5;
console.log(++a); // prefix increment

let b = 5;
console.log(b++); //postfix increment

let c = 5;
console.log(--c); // prefix decrement

let d = 5;
console.log(d--); //postfix decrement

console.log('\n');

/* ----------------------------- unary operators ---------------------------- */

console.log("UNARY OPERATORS");

const x = 10;
console.log(typeof x);

void(console.log("evaluate void"));

// using the car object...
console.log(car);
delete(car.color);
console.log(car);

console.log('\n');

/* -------------------------- relational operators -------------------------- */

console.log("RELATIONAL OPERATORS");

const arr = ["kiwi", "banana", "mango"];
console.log(arr instanceof Array);

const date = {
  day: 11,
  month: 2,
  year: 2002
}

console.log("day" in date);

console.log('\n');

/* ---------------------------- logical operators --------------------------- */

console.log("LOGICAL OPERATORS");

/* or: If just one value is true assign that value. If both are true, assign the
       first one. If both are falsy values assign the second one. */

const or1 = false || 5;
console.log(or1);

const or2 = null || 5;
console.log(or2);

const or3 = undefined || 5;
console.log(or3);

const or4 = '' || 5;
console.log(or4);

const or5 = 0 || 5;
console.log(or5);

const or6 = 5 || false;
console.log(or6);

const or7 = 5 || 10;
console.log(or7);

const or8 = undefined || false;
console.log(or8);

console.log('\n');

// ----------------------------------

/* and: To assign a value, both values must be true. If both are true, assign
        the second one. If both values are false, null or undefined, assign
        the first element. If the first is true and the second not, assign the
        second value. If the first isn't true, assign the first one. */

const and1 = true && 5;
console.log(and1);

const and2 = false && undefined;
console.log(and2);

const and3 = 5 && false;
console.log(and3);

const and4 = false && 5;
console.log(and4);

console.log('\n');
// ----------------------------------

/* nullish coalescing: It's a especial case of the logical or operator. In that
                       case returns the second value if the first is only null
                       or undefined. Otherwise return the first value */

const nc1 = null ?? 5;
console.log(nc1);

const nc2 = undefined ?? 5;
console.log(nc2);

const nc3 = false ?? 5;
console.log(nc3);

const nc4 = '' ?? 5;
console.log(nc4);

const nc5 = 0 ?? 5;
console.log(nc5);

console.log('\n');

/* ---------------------------- ternary operator ---------------------------- */

console.log("TERNARY OPERATOR");

const idade = 16;
let message = (idade >= 18) ? "maior de idade" : "menor de idade";

console.log(message);

console.log('\n');

/* -------------------------- assignment operators -------------------------- */

console.log("ASSIGNMENT OPERATORS");

let ao1 = undefined;
ao1 ||= 5; // same as ao1 = undefined || 5; result in 5
console.log(ao1);

let ao2 = undefined;
ao2 &&= 5; // same as a02 = undefined && 5; result in undefined
console.log(ao2);

let ao3 = false;
ao3 ??= 5; // same as a03 = false ?? 5; result in false
console.log(ao3);

function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator(); // "Generator { }"

console.log(gen);

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3