// Primitive → simple, immutable values
// Non-primitive → complex, mutable objects



// Primitive Data Types

// These store single values.

// 1. Number


let age = 21;
let price = 99.99;

console.log(age);
console.log(price);


// 2. String

let name = "Shni";
let city = 'Bhopal';

console.log(name);
console.log(city);


// 3. Boolean

let isStudent = true;
let isLoggedIn = false;

console.log(isStudent);
console.log(isLoggedIn);


// 4. Undefined

let x;
console.log(x);

// 5. Null


let data = null;
console.log(data);

// 6. BigInt

let bigNumber = 123456789012345678901234567890n;

console.log(bigNumber);


// 7. Symbol

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2);


                //    🔹 Non-Primitive Data Types

                //       These can store collections of values.
 
// 8. Object

let student = {
    name: "Shni",
    age: 22,
    course: "BTech"
};

console.log(student);

// 🔹 Array

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);
console.log(fruits[1]);

// 🔹 Function

function greet() {
    console.log("Hello World");
}

greet();



// 🔹 Checking Data Types using typeof

console.log(typeof 10);           // number
console.log(typeof "Hello");      // string
console.log(typeof true);         // boolean
console.log(typeof undefined);    // undefined
console.log(typeof null);         // object (JavaScript bug)
console.log(typeof 10n);          // bigint
console.log(typeof Symbol());     // symbol
console.log(typeof {});           // object
console.log(typeof []);           // object
console.log(typeof function(){}); // function