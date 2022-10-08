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
/*                        logical assignment operators                        */
/* -------------------------------------------------------------------------- */

let l1 = 0b0010; // 2
l1 |= 0b00001; // liga o último bit (3)
console.log(l1);

let l2 = 0b0010; // 2
l2 &= 0b0000; // desliga todos os bits (0)
console.log(l2);

let l3 = 0b0010; // 2
l3 ^= 0b1111; // inverte os bits (13)
console.log(l3);
