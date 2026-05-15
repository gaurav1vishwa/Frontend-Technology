
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

arithmeticOperators();
assignmentOperators();
comparisonOperators();
logicalOperators();
