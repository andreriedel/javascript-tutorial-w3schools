let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345);
console.log(x);
console.log(typeof x)

// A BigInt can not have decimals.

/* -------------------------------------------------------------------------- */

let hex = 0x20000000000003n;
let oct = 0o400000000000000003n;
let bin = 0b100000000000000000000000000000000000000000000000000011n;

/* -------------------------------------------------------------------------- */

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(9007199254740992 === 9007199254740993); // not safe integers

/* -------------------------------------------------------------------------- */

console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));
console.log(Number.isSafeInteger(10));
console.log(Number.isSafeInteger(12345678901234567890));
