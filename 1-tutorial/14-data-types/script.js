let x = 16 + 4 + "Volvo"; // realiza a operação e depois faz a concatenação
console.log(x);

let y = "Volvo" + 16 + 4; // apenas faz a concatenação
console.log(y);

let z = 123e5; // notação científica com expoente positivo
console.log(z);

let w = 123e-5; // notação científica com expoente negativo
console.log(w);

let bigint = BigInt("123456789012345678901234567890");
console.log(bigint);

/* --------------------------- undefined variables -------------------------- */

let color = undefined;
console.log(color);
console.log(typeof color);

/* ----------------------------- empty variables ---------------------------- */

let name = '';
console.log(name);
console.log(typeof name);

/* ----------------------------- null variables ----------------------------- */

person = null; 
console.log(person);
console.log(typeof person);
