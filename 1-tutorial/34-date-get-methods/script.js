const dt = new Date();

console.log(dt.toString());

console.log("\n");

/* -------------------------------------------------------------------------- */

console.log(dt.getFullYear()); // getYear is deprecated
console.log(dt.getMonth());
console.log(dt.getDate());
console.log(dt.getDay()); // day 0 is sunday
console.log(dt.getHours()); // local time
console.log(dt.getMinutes());
console.log(dt.getSeconds());
console.log(dt.getMilliseconds());
console.log(dt.getTime()); // returns the number of milliseconds since January 1, 1970
console.log(Date.now()); // returns the number of milliseconds since January 1, 1970

console.log("\n");

/* -------------------------------------------------------------------------- */

console.log(dt.getUTCFullYear());
console.log(dt.getUTCMonth());
console.log(dt.getUTCDate());
console.log(dt.getUTCDay());
console.log(dt.getUTCHours()); // UTC time
console.log(dt.getUTCMinutes());
console.log(dt.getUTCSeconds());
console.log(dt.getUTCMilliseconds());
console.log(dt.getTimezoneOffset()); //  returns the difference (in minutes) between local time an UTC time
console.log(dt.getTimezoneOffset() / 60);

