document.write("This is a variable declaration example using var keyword.<br>");

var x = 5;
document.writeln("The value of the variable x is: " + x + "<br>");

document.writeln( 3 + 4 + "<br>" );

document.writeln( "3" + 7+ "<br>" );

document.writeln( "3" + "4" + "<br>" );     

document.writeln( 3 + "4" + "<br>" );

document.writeln( 3 + 4 + "5" + "<br>" );

document.writeln( "3" + 4 + 5 + "<br>" );


document.writeln( "<h1> Variable in JavaScript </h1>" + "<br>" );
// Variable declaration using var , let and const

var a = 10;
 console.log(a); // Output: 10
// the scope of the var is function scope and it can be re-assigned a new value. 
a = 20;
console.log(a); // Output: 20

let b = 30;
console.log(b); // Output: 30
// the scope of the let is block scope and it can be re-assigned a new value. but cant be re-declared in the same scope.

b = 40;
console.log(b); // Output: 40

const c = 50;
console.log(c); // Output: 50
// c = 60; // This will throw an error because c is a constant
// the scope of the const is block scope and it cannot be re-assigned a new value.

var a = 100;
console.log(a); // Output: 100


// let  b = 300;  // This will throw an error because b has already been declared with let

// const c = 500; // This will throw an error because c has already been declared with const


// scope of var 
function varTest() {
    var x = 1; 
    if (true) {
        var x = 2;      
        console.log(x);  // Output: 2
    }   
    console.log(x);  // Output: 2
}

varTest();

// scope of let and const
function letConstTest() {
    let y = 1;
    const z = 1;

    if (true) {
        let y = 20;      
        const z = 20;

        console.log(y);
        console.log(z);
    }

    console.log(y);
    console.log(z);
}   

letConstTest();



// variable declaration rules in JavaScript
// 1. Variable names must begin with a letter, underscore (_) or dollar sign ($).
// 2. Variable names can contain letters, digits, underscores, and dollar signs.
// 3. Variable names are case-sensitive.
// 4. Variable names cannot be reserved keywords in JavaScript.2

let stu_age = 20;
let Stu_age = 25;
console.log(stu_age);
let $salary = 50000;
