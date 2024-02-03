/* Valores primitivos não podem ter atributos ou métodos (na maioria das
linguagens), no entanto o JavaScript trata valores primitivos como objetos
ao utilizar atributos e métodos. */

// Os métodos sempre retornam novas strings.

const nome = "Andre Riedel";

console.log(nome.length); // Tamanho da string.

/* ----------------------- Extraindo partes da string ----------------------- */

console.log(nome.slice(6, 12));

console.log(nome.substring(6, 12)); /* O método substring é similar ao slice
mas não aceita valores negativos. */

console.log(nome.substring(6)); /* Caso seja omitido o segundo parâmetro
o método pega até o final da string. */

console.log(nome.substr(6, 6)); /* O método substr é similar ao slice, a
diferença é que o segundo parâmetro indicia a quantidade de caracteres a serem
extraídos a partir do índice dado no primeiro parâmetro. */

console.log("\n");

/* -------------------------- Substituindo valores -------------------------- */

console.log(nome.replace("Riedel", "Zambroni"));

/* O método replace é case sensitive. Para mudar esse comportamente pode-se
utilizar RegExp */

console.log(nome.replace(/RIEDEL/i, "Zambroni"));

const nomeEstranho = "Andre Riedel Riedel";

console.log(nomeEstranho.replace(/Riedel/g, "Zambroni")); /* Para encontrar todas as
ocorrências. */

/* -------------------------------------------------------------------------- */

console.log(nomeEstranho.replaceAll("Riedel", "Zambroni"));
console.log(nomeEstranho.replaceAll(/Riedel/g, "Zambroni"));

console.log("\n");

/* -------------------------------------------------------------------------- */

console.log(nome.toLowerCase());
console.log(nome.toUpperCase());

console.log("\n");

/* -------------------------------------------------------------------------- */

const str1 = "Andre";
const str2 = "Riedel";

console.log(str1.concat(" ", str2));

console.log("\n");

/* -------------------------------------------------------------------------- */

console.log(" Ola Mundo ".trim()); // Sem espaços em branco nas bordas.
console.log(" Ola Mundo ".trimStart());
console.log(" Ola Mundo ".trimEnd());

console.log("\n");

/* ----------------------------- String padding ----------------------------- */

let text = "5";

console.log(text.padStart(4,'-'));
console.log(text.padEnd(4,'-'));

console.log("\n");

/* --------------------------- Extraindo caractere -------------------------- */

console.log(nome.charAt(0));
console.log(nome.charCodeAt(0)); /* Retorna o código do caractere
(unicode/tabela ASCII) em decimal. */
console.log(nome.at(0));
console.log(nome.at(-1)); // Aceita valores negativos.
console.log(nome[0]);

/* Strings não são arrays em JavaScript, ou seja não deve-se usar nome[0] = 'E'
por exemplo. Para realizar esse tipo de coisa converta a string para array. */

console.log("\n");

/* --------------------------- Repetindo a string --------------------------- */

console.log(nome.repeat(2));

console.log("\n");

/* ------------------------- Convertendo para array ------------------------- */

console.log(nome.split(""));
