/* -------------------------------- ISO dates ------------------------------- */

let dt = new Date("2024-06-15"); // ISO 8601
console.log(dt);

dt = new Date("2024-06-15T12:30:30.500"); // uses default timezone
console.log(dt);

dt = new Date("2024-06-15T12:30:30.500-03:00") // uses specified timezone
console.log(dt);

dt = new Date("2024-06-15T12:30:30.500Z"); // uses UTC timezone
console.log(dt);

/* ------------------------------- short dates ------------------------------ */

dt = new Date("06/15/2024"); // mm/dd/yyyy
console.log(dt);

/* ------------------------------- long dates ------------------------------- */

dt = new Date("Jun 15 2024"); // mmm dd yyyy
console.log(dt);

dt = new Date("June 15 2024"); // mmm dd yyyy (full month)
console.log(dt);

dt = new Date("15 Jun 2024"); // dd mmm yyyy
console.log(dt);
