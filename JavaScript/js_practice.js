const prompt = require("prompt-sync")();

// write a function which accepts two numbers and returns their sum;
function fn(a , b) {
    return a + b;
}

console.log(fn(1, 2)); // 3

// write a function which check if given no is positive or negative
let num = prompt("enter a number");
function checkNumber(num) {
    if(num >0) {
       console.log("given number is positive");
    } else if(num <0) {
        console.log("given number is negative");
    }
    else {
        console.log("given number is zero");
    }
}

checkNumber(num); // given number is positive


// write a function which accepts student marks and prints  grade accordingly

let marks = prompt("enter student marks");

function grade(marks) {
    if(marks >= 90 && marks <= 100) {
        console.log("grade is A");
    }   else if( marks >= 70 && marks < 80) {
        console.log("grade is B");
    }
    else if(marks >= 60 && marks < 70) {
        console.log("grade is C");
    }
    else if(marks >= 0 && marks < 60) {
        console.log("Low Marks");
    }
    else {
        console.log("Not a valid marks");
    }
}
grade(marks);



function print_numbers(n) {
    for(let i = 1; i <= n; i++) {
        console.log(i);
    }
}

print_numbers(5); // 1 2 3 4 5


function printing(n) {
    for(let i = 1; i <= n; i++) {
        if(i%3==0){
            console.log("fizz");
        }
        else {
            console.log(i);
        }
    }
}

printing(10); // fizz fizz fizz




function printing(n) {
    for(let i = 1; i <= n; i++) {
        if(i%3==0){
            console.log("fizz");
        }
        else if(i%5==0) {
            console.log("buzz");
        }
        else {
            console.log(i);
        }
    }
}

printing(10);

function printing(n) {
    for(let i = 1; i <= n; i++) {
         if(i%3==0 && i%5==0){
            console.log("fizz buzz");
        }
        else if(i%3==0){
            console.log("fizz");
        }
        else if(i%5==0) {
            console.log("buzz");
        }
        else {
            console.log(i);
        }
    }
}

printing(10);


// write a function which will return reverse of given number

function reverseNumber(num) {
    let reversed = 0;
    while(num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num =Math.floor(num / 10);
    }
    return reversed;
}

console.log(reverseNumber(1234)); // 4321



// reverse number in other way 


function reverse(num) {
    let newNum = num + "";  // 1234 => "1234"
    let arr = newNum.split(""); // '1234' =>  [ '1', '2', '3', '4']

    arr.reverse();   // '4321' => ['4', '3', '2', '1']
    let reversedNum = arr.join("");
    console.log(reversedNum);

}
reverse(12345); // string



function reverseString(str) {
    let arr = str.split(""); // "hello" => ['h', 'e', 'l', 'l', 'o']
    arr.reverse();
    let reversedStr = arr.join("");
    console.log(reversedStr);
}
reverseString("hello"); // "olleh"



function reverseStrings(str) {
 let arr = [];
 for(let i = str.length - 1; i >= 0; i--) {
    arr.push(str.charAt(i)  ); // "hello" => ['o', 'l', 'l', 'e', 'h']
 }
 let reversedStr = arr.join("");
    console.log(reversedStr);
}
reverseStrings("hello"); // "olleh"