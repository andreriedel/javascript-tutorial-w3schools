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
let str2 = 5 + 5 + '5'; // do the sum and then concatenate
let str3 = '5' + 5;
let str4 = "Hello" + 5;

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);

console.log('\n');

/* -------------------------------------------------------------------------- */
/*                               type operators                               */
/* -------------------------------------------------------------------------- */

let array = ["larissa", "andre", "andressa"];

console.log(typeof array);
console.log(array instanceof Array);

console.log('\n');

/* -------------------------------------------------------------------------- */
/*                              bitwise operators                             */
/* -------------------------------------------------------------------------- */

/* --------------------------------- and (&) -------------------------------- */

let and1 = 0b00100110; // n??mero 38 em bin??rio
let and2 = 0b00101000; // n??mero 40 em bin??rio
//           --------
//           00100000     n??mero 32 em bin??rio

console.log(and1 & and2);

/* --------------------------------- or (|) --------------------------------- */

let or1 = 0b00100110; // n??mero 38 em bin??rio
let or2 = 0b00101000; // n??mero 40 em bin??rio
//          --------
//          00101110     n??mero 46 em bin??rio

console.log(or1 | or2);

/* --------------------------------- xor (^) -------------------------------- */

let xor1 = 0b00100110; // n??mero 38 em bin??rio
let xor2 = 0b00101000; // n??mero 40 em bin??rio
//           --------
//           00001110     n??mero 14 em bin??rio

console.log(xor1 ^ xor2);

/* --------------------------------- not (~) -------------------------------- */

let num = 5; // em bin??rio (32 bits): 00000000000000000000000000000101
let notNum = ~num; // em bin??rio (32 bits): 11111111111111111111111111111010

/* como os n??meros em JavaScript s??o sempre assinalados (signed), o resultado
retornar?? -6; caso fosse unsigned o resultado seria 4294967290 */

console.log(notNum);

/* ----------------------------- left shift (<<) ---------------------------- */

let lf = 0b0101; // n??mero 5 em bin??rio
//         ----
//         1010     n??mero 10 em bin??rio

console.log(lf << 1);

/* ---------------------------- right shift (>>) ---------------------------- */

let rs1 = 0b0101; // n??mero 5 em bin??rio
//         ----
//         0010     n??mero 2 em bin??rio

console.log(rs1 >> 1);

/* um deslocamento a direita (>>) de um n??mero negativo ?? feito da seguinte
maneira: (exemplo: 5 >> 2)

1?? passo: ?? feito o deslocamento
  11111111111111111111111111111011 -> xx111111111111111111111111111110

2?? passo: no lugar do 'x' ?? preenchido com 1 para manter o sinal
  11111111111111111111111111111110

o n??mero obtido ?? -2
*/

let rs2 = -5;
console.log(rs2 >> 2);

/* -------------------------- unsigned right shift -------------------------- */

/* um deslocamento a direita nao assinalado (>>>) de um n??mero negativo ?? feito
da seguinte maneira: (exemplo: 5 >>> 2)

  11111111111111111111111111111011 -> 00111111111111111111111111111110

o n??mero obtido ?? 1073741822
*/

let urs = -5;
console.log(urs >>> 2);