
// types of operators in JavaScript
// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators  
// 4. Logical Operators
// 5. Bitwise Operators
// 6. String Operators
// 7. Conditional (Ternary) Operator
// 8. Comma Operator


function arithmeticOperators() {
    let a = 10;
    let b = 5;      
    console.log("Addition: " + (a + b)); // 15
    console.log("Subtraction: " + (a - b)); // 5        
    console.log("Multiplication: " + (a * b)); // 50
    console.log("Division: " + (a / b)); // 2
    console.log("Modulus: " + (a % b)); // 0
    console.log("Exponentiation: " + (a ** b)); // 100000
    console.log("Increment: " + (++a)); // 11
    console.log("Decrement: " + (--b)); // 4
}   


function assignmentOperators() {
    let x = 10;
    x += 5; // x = x + 5
    console.log("Addition Assignment: " + x); // 15
    x -= 3; // x = x - 3
    console.log("Subtraction Assignment: " + x); // 12
    x *= 2; // x = x * 2
    console.log("Multiplication Assignment: " + x); // 24
    x /= 4; // x = x / 4
    console.log("Division Assignment: " + x);
    x %= 5; // x = x % 5
    console.log("Modulus Assignment: " + x); // 4
    x **= 3; // x = x ** 3
    console.log("Exponentiation Assignment: " + x); // 64
}


function comparisonOperators() {
    let a = 10;
    let b = 5;
    console.log("Equal to: " + (a == b));
    console.log("Not equal to: " + (a != b));
    console.log("Strict equal to: " + (a === b)); // false, because they are of different types
    console.log("Strict not equal to: " + (a !== b));
    console.log("Greater than: " + (a > b));
    console.log("Less than: " + (a < b));
    console.log("Greater than or equal to: " + (a >= b));
    console.log("Less than or equal to: " + (a <= b));
}


function logicalOperators() {
    let x = true;
    let y = false;
    console.log("Logical AND: " + (x && y));
    console.log("Logical OR: " + (x || y));
    console.log("Logical NOT: " + (!x));
}

// arithmeticOperators();
// assignmentOperators();
// comparisonOperators();
// logicalOperators();


function Operators() {
    let a = 5;
    let y = a++ + ++a;
    console.log(y);
    
    console.log(true + true);  // always return integer values
    console.log(true + false);  // return integer values

    console.log([] == false);    // return true;  empty array is treated as false

    console.log("" == 0);  // return true;  empty string is also treated as false

    console.log(5 && 10); // return 10;  returns the last evaluated operand

    console.log(0 || 100); // return 100;  returns the first truthy operand

    console.log(!"hello"); // false;  returns the boolean opposite of the operand
    console.log(!0);  // true;  returns the boolean opposite of the operand

    console.log("10" * "2"); // 20 ;  // it performs task

    console.log("10" / 2); // 5      // it performs task


    console.log("hello" + 2);  // return string;

    console.log("hello" * 2); // return NaN;  not a number
    
    console.log(typeof NaN);  // return number;

    console.log([] + []); // nothing; "" empty string

    console.log([] + {});  // [object Object]

    console.log({} + {}); // return NaN;  because it is treated as code block

    console.log({} + []); // return 0;  because it is treated as code block

    console.log(typeof null); // return object;  this is a known bug in JavaScript

    console.log([] != []); // true;  because they are different objects in memory

    console.log("2" > "12"); // true;  because it compares the first character of the string

    console.log(2 > "12");   // false;  because it converts the string to a number before comparison

    console.log(Boolean("false")); // true;  any non-empty string is treated as true

    console.log(Boolean("")); // false

    console.log(100 / "10") // 10;

    console.log(true == "1"); // true

    console.log(false == "0"); // true;

    console.log(false === "0"); // false;

    console.log(null == undefined); // true;

    console.log(1 < 2 <3); // true;

    console.log(3 > 2 > 1); // false;

    console.log(+ "10"); // 10;

    console.log(- "10"); // -10;

    console.log(+ "hello"); // NaN

    let p = 10;
    console.log(p+= 5); // 15

    let q = 10;
    console.log(q*= 3); // 30

    console.log(2 ** 3); // 8  its show the power of 2 to 3
 
    console.log(typeof typeof 1); // string  because typeof always return string and type of 1 is "number" and than angain type of "number" is string

    console.log([] instanceof Array);// true

    console.log({} instanceof Object); // true

    console.log([] ==""); // true

    console.log([] == false); // true

    console.log([0] == 0); // true

     console.log([0] == false); // true
    
    console.log([0] == ""); // true

     console.log([0] == []); // false  because they are different objects in memory

    console.log([1] ==1); // true

     console.log([1] == true); // true

     console.log([1] === 1); // false  because they are of different types and also different objects in memory

     console.log([1] === true); // false  because they are of different types and also different objects in memory
    

}

Operators();