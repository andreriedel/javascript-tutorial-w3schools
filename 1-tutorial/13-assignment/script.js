/* -------------------------------------------------------------------------- */
/*                            assignment operators                            */
/* -------------------------------------------------------------------------- */

let a1 = 5; // normal assignment
console.log(a1);

let a2 = 5;
a2 += 5;
console.log(a2);

let a3 = 10;
a3 -= 5;
console.log(a3);

let a4 = 10;
a4 *= 5;
console.log(a4);

let a5 = 10;
a5 /= 5;
console.log(a5);

let a6 = 10;
a6 %= 3;
console.log(a6);

let a7 = 10;
a7 **= 2;
console.log(a7);

console.log('\n');

/* -------------------------------------------------------------------------- */
/*                             increment operators                            */
/* -------------------------------------------------------------------------- */

let i1 = 5;
console.log(++i1); // prefix increment

let i2 = 5;
console.log(i2++); // postfix increment

let i3 = 5;
console.log(--i3); // prefix decrement

let i4 = 5;
console.log(i4--); // postfix decrement

console.log('\n');

/* -------------------------------------------------------------------------- */
/*                         shift assignment operators                         */
/* -------------------------------------------------------------------------- */

let s1 = 0b0101; // 5
s1 <<= 1;
console.log(s1);

let s2 = 0b0101;
s2 >>= 1;
console.log(s2);

let s3 = 0b0101;
s3 >>>= 1;
console.log(s3);

console.log('\n');

/* -------------------------------------------------------------------------- */
/*                        bitwise assignment operators                        */
/* -------------------------------------------------------------------------- */

let b1 = 0b0010; // 2
b1 |= 0b00001; // liga o último bit (3)
console.log(b1);

let b2 = 0b0010;
b2 &= 0b0000; // desliga todos os bits (0)
console.log(b2);

let b3 = 0b0010;
b3 ^= 0b1111; // inverte os bits (13)
console.log(b3);

console.log('\n');

/* -------------------------------------------------------------------------- */
/*                        logical assignment operators                        */
/* -------------------------------------------------------------------------- */

let l1 = 0;
l1 &&= 100;
console.log(l1);

let l2 = 0;
l2 ||= 100;
console.log(l2);

let l3 = 0; 
l3 ??= 100; // nullish coalescing, similar to 'or' but just 'undefined' and 'null' are falsy values
console.log(l3);

console.log('\n');

/* -------------------------------------------------------------------------- */
/*                            member of operators                             */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/*                         optional chaining operator                         */
/* -------------------------------------------------------------------------- */

// returns undefined if an object is undefined or null (instead of throwing an error)

const car = {
  type: "Fiat",
  model: "500",
  color: "white"
};

console.log(car?.type);
console.log(car?.name);
console.log(car.name);

console.log('\n');

/* -------------------------------------------------------------------------- */
/*                               unary operators                              */
/* -------------------------------------------------------------------------- */

const u = 10;
console.log(typeof u);

void(console.log("evaluate void"));

// using the car object...
console.log(car);
delete(car.color);
console.log(car);

console.log('\n');

/* -------------------------------------------------------------------------- */
/*                            relational operators                            */
/* -------------------------------------------------------------------------- */

const arr = ["kiwi", "banana", "mango"];
console.log(arr instanceof Array);

const date = {
  day: 11,
  month: 2,
  year: 2002
}

console.log("day" in date);

console.log('\n');

/* -------------------------------------------------------------------------- */
/*                                  generator                                 */
/* -------------------------------------------------------------------------- */


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
