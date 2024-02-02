/* -------------------------------------------------------------------------- */
/*                            arithmetic operators                            */
/* -------------------------------------------------------------------------- */

let x = 10;

console.log(x + 5);
console.log(x - 5);
console.log(x * 5);
console.log(x / 5);
console.log(x ** 2);
console.log(x % 3);
console.log(++x);
console.log(--x);

console.log('\n');

/* -------------------------------------------------------------------------- */
/*                            assignment operators                            */
/* -------------------------------------------------------------------------- */

let a = 6;
console.log(a += 3);

let b = 6;
console.log(b -= 3);

let c = 6;
console.log(c *= 3);

let d = 6;
console.log(d /= 3);

let e = 6;
console.log(e %= 3);

let f = 6;
console.log(f **= 3);

console.log('\n');

/* -------------------------------------------------------------------------- */
/*                              string operators                              */
/* -------------------------------------------------------------------------- */

let firstName = "Andre";
let lastName = "Zambroni";
let fullName = firstName + " " + lastName;

fullName += " " + "Riedel";

console.log(fullName);

/* -------------------------------------------------------------------------- */

let str1 = 5 + 5;
let str2 = 5 + 5 + "5"; // do the sum and then concatenate
let str3 = "5" + 5;
let str4 = "Hello" + 5;

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);

console.log('\n');

/* -------------------------------------------------------------------------- */
/*                            comparison operators                            */
/* -------------------------------------------------------------------------- */

let var1 = 55, var2 = "55";
let var3 = 60;

console.log(var1 == var2);
console.log(var1 === var2);
console.log(var1 != var2);
console.log(var1 !== var2);
console.log(var1 > var3);
console.log(var1 >= var3);
console.log(var1 < var3);
console.log(var1 <= var3);

console.log(
  (var1 > var3) ? "var1 é maior" : "var3 é maior"
);

console.log("A" < "B");
console.log("20" < "5");

console.log('\n');

/* -------------------------------------------------------------------------- */
/*                               type operators                               */
/* -------------------------------------------------------------------------- */

let array = ["larissa", "andre", "andressa"];

console.log(typeof array);
console.log(array instanceof Array);

console.log('\n');

/* -------------------------------------------------------------------------- */
/*                              logical operators                             */
/* -------------------------------------------------------------------------- */

let bool1 = true, bool2 = false;

if (bool1 && bool2) {
  console.log("Os dois são verdadeiros.");
} else {
  console.log("Pelo menos um deles é falso.")
}

if (bool1 || bool2) {
  console.log("Pelo menos um deles é verdadeiro.");
} else {
  console.log("Os dois são falsos.")
}

if (!bool1) {
  console.log("bool1 é falso.");
} else {
  console.log("bool1 é verdadeiro.")
}

console.log('\n');


/* -------------------------------------------------------------------------- */
/*                              bitwise operators                             */
/* -------------------------------------------------------------------------- */

/* --------------------------------- and (&) -------------------------------- */

let and1 = 0b00100110; // número 38 em binário
let and2 = 0b00101000; // número 40 em binário
//           --------
//           00100000     número 32 em binário

console.log(and1 & and2);

/* --------------------------------- or (|) --------------------------------- */

let or1 = 0b00100110; // número 38 em binário
let or2 = 0b00101000; // número 40 em binário
//          --------
//          00101110     número 46 em binário

console.log(or1 | or2);

/* --------------------------------- xor (^) -------------------------------- */

let xor1 = 0b00100110; // número 38 em binário
let xor2 = 0b00101000; // número 40 em binário
//           --------
//           00001110     número 14 em binário

console.log(xor1 ^ xor2);

/* --------------------------------- not (~) -------------------------------- */

let num = 5; // em binário (32 bits): 00000000000000000000000000000101
let notNum = ~num; // em binário (32 bits): 11111111111111111111111111111010

/* como os números em JavaScript são sempre assinalados (signed), o resultado
retornará -6; caso fosse unsigned o resultado seria 4294967290 */

console.log(notNum);

/* ----------------------------- left shift (<<) ---------------------------- */

let lf = 0b0101; // número 5 em binário
//         ----
//         1010     número 10 em binário

console.log(lf << 1);

/* ---------------------------- right shift (>>) ---------------------------- */

let rs1 = 0b0101; // número 5 em binário
//         ----
//         0010     número 2 em binário

console.log(rs1 >> 1);

/* um deslocamento a direita (>>) de um número negativo é feito da seguinte
maneira: (exemplo: 5 >> 2)

1° passo: é feito o deslocamento
  11111111111111111111111111111011 -> xx111111111111111111111111111110

2° passo: no lugar do 'x' é preenchido com 1 para manter o sinal
  11111111111111111111111111111110

o número obtido é -2
*/

let rs2 = -5;
console.log(rs2 >> 2);

/* -------------------------- unsigned right shift -------------------------- */

/* um deslocamento a direita nao assinalado (>>>) de um número negativo é feito
da seguinte maneira: (exemplo: 5 >>> 2)

  11111111111111111111111111111011 -> 00111111111111111111111111111110

o número obtido é 1073741822
*/

let urs = -5;
console.log(urs >>> 2);
