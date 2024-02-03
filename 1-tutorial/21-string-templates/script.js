let text;

// With template literals, you can use both single and double quotes inside a string.
text = `He's often called "Johnny"`;

// Template literals allows multiline strings.
text =
`The quick
brown fox
jumps over
the lazy dog`;

/* -------------------------------------------------------------------------- */

const firstName = "John";
const lastName = "Doe";

text = `Welcome ${firstName}, ${lastName}!`; // string interpolation
console.log(text);

/* -------------------------------------------------------------------------- */

const header = "Templates Literals";
const tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2>`;

html += "<ul>";

for (const x of tags)
  html += `<li>${x}</li>`;

html += "</ul>";

document.querySelector("#demo").innerHTML = html;
