/* -------------------- ways to create a new object date -------------------- */

/*
new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)
*/

/* -------------------------------------------------------------------------- */

let dt = new Date();
console.log(dt);

console.log(dt.toString());
console.log(dt.toDateString());
console.log(dt.toTimeString());
console.log(dt.toUTCString());
console.log(dt.toISOString());

/* ------------------------------- date string ------------------------------ */

dt = new Date("February 19, 2024 12:30:30.500");
console.log(dt);

dt = new Date("2024-02-19 12:30:30.500");
console.log(dt);

/* -------------------------------------------------------------------------- */

dt = new Date(2024, 1, 19, 12, 30, 30, 500);
console.log(dt);

dt = new Date([2024, 2, 19]);
console.log(dt);

/* ------------------------------ milliseconds ------------------------------ */

dt = new Date(100000000000);
console.log(dt);

dt = new Date(-100000000000);
console.log(dt);
