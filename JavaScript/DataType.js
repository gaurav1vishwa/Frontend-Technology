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

// string - "" or ' ' or ` `
let userName = "Shni";
let city = 'Bhopal';
// ES6 string literals (template literals) - `` and ${} for interpolation
let message = `Hello, ${userName}! Welcome to ${city}.`;

console.log(userName);
console.log(city);
console.log(message);
console.log("My name is " + userName);
console.log("My name is", userName);  // this is also a valid way to print the string and variable together.
// but you should keep in mind that when you use comma to print the string and variable together then it will add a space between them.
// but when you use + to print the string and variable together then it will not add a space between them. so you should use + to print the string and variable together if you want to avoid the space between them.


// 3. Boolean

let isStudent = true;
let isLoggedIn = false;

console.log(isStudent);
console.log(isLoggedIn);


// 4. Undefined

let x;
console.log(x);
console.log(typeof x);
console.log(0/0);  // NaN (Not a Number)
console.log(1/0);  // Infinity
console.log(-1/0); // -Infinity
console.log(0/1);  // 0

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
console.log(student.name);
console.log(student.age);
console.log(student.course);
console.log(Object.keys(student));  // to get the keys of the object
console.log(Object.values(student));  // to get the values of the object
console.log(Object.entries(student));  // to get the key-value pairs of the object as an array of arrays



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


let b = 3.16;
const pi = 3.14; console.log(b, typeof b);     // if you wwant to give the mutlitple statement in one line then you can use semicolon to separate the statements.
console.log(pi, typeof pi);


//   SOME IMPORTANT POINTS TO REMEMBER




// Why JavaScript is a Dynamically Typed Language

// A language is called dynamically typed when:

// You do not need to declare the data type of a variable.
// The type is decided automatically at runtime.

// In JavaScript, a variable can store different types of values at different times.



// Why JavaScript is a Loosely Typed Language

// A language is called loosely typed when it automatically converts one data type into another if needed.