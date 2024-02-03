const car = {
  type: "Fiat",
  model: "500",
  color: "white"
};

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",

  fullName : function() {
    return this.firstName + " " + this.lastName; // this refers to the object
  }
  
};

console.log(person.firstName);
console.log(person["firstName"]);

console.log(person.fullName());

/* -------------------------------------------------------------------------- */

console.log(this); // alone, this refers to the global object

function sum(a, b) {
  console.log(this); // in a function, this refers to the global object

  return a + b;
}

sum(5, 5);

"use strict"
function minus(a, b) {
  console.log(this); // in that case, this is undefined

  return a - b;
}

minus(5, 5);

// in an event, this refers to the element that received the event

// methods like call(), apply(), and bind() can refer this to any object
