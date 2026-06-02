 
 const prompt = require('prompt-sync')();
 // Control Constants

//  1 conditional / Selection statements :-  if, if...else, if...else if...else, switch
// 2. loops / Iteration statements :- for, while, do...while, for...in(object), for...of(array and string)
// 3. Jump statements :- break, continue, return, throw


                // 1. Conditional / Selection statements

// if statement :- check eligibility for vote or not 
let age = 43
 if(age>=18) {
    console.log("You are eligible for vote");
 }
 else {
    console.log("you are underage");
    
 }

 // write a praograme to check whelther a nuber is positive, negative or zero
 let number = -5;
 if(number > 0) {
    console.log("The number is positive");
    }
else if(number < 0) {
    console.log("The number is negative");
}
else {
    console.log("The number is zero");
}

// Nested if - a student passes if makrs  >= 40 , if marks >=80 , show distinnction.
let marks = 85;
if(marks >= 40) {
    console.log("You have passed the exam");
}
else {
    console.log("You have failed the exam");
}

// switch case 1 . print the grade based on letter ( a =excellent 1---20, b=Good  80-60, c = Average=60-35, D = Poor 35-0, default = Invalid grade )

let grade = 'A';
switch(grade) {
    case 'A':
        console.log("Excellent");
    break;
    case 'B':
        console.log("Good");
    break;
    case 'C':
        console.log("Average");
    break;
    case 'D':
        console.log("Poor");
    break;
    default:
        console.log("Invalid grade");
}


// print the season based on month in the year (3,4,5 = summer) (11, 12,1,2 = winter) (6,7,8,9,10 = rainly) default = Invalid month
let month = 4;
switch(month) {
    case 3:
    case 4:
    case 5:
        console.log("Summer");
    break;
    case 11:
    case 12:
    case 1:
    case 2:
        console.log("Winter");
    break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log("Rainy");
    break;
    default:
        console.log("Invalid month");
}

          

          // 2. Loops / Iteration statements

// for loop - print the first 10 natural numbers
for(let i = 1; i <= 10; i++) {
    console.log(i);
}

// while loop - print the   number form 1 to 5 using while loop
let j = 1;
while(j <= 5) {
    console.log(j);
    j++;
}

// do - while loop: ATM machine: keep asking  Pin nutil the user enter the 1234.
let pin;
do {
    pin = prompt("Enter your PIN:");
} while (pin !== "1234");

// For...of loop - print all fruits in a basket
let fruits = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape'];
for(let fruit of fruits) {
    console.log(fruit);
}

//for...in loop - print all student details form an object.

let student = { 
    name : "gaurav",
    age : 22,
    grade : "A",
    city : "Rewa",
    state : "Madhya Pradesh",
    country : "India",
}
for(let key in student) {
    console.log(key + ": " + student[key]);   // key will return the property name and student[key] will return the value of that property
}

// for..Each loop - print  the equare of all number in an array;
let arr = [1, 2, 3, 4, 5];
arr.forEach(function(num) {
    console.log(num * num);
});



                         // control flow modifierr
 
// break Statement- Question: stop printing when number reaches 3;
let number1 =10 ;
for(let i = 1; i <= number1; i++) {
    if(i === 3) {
        break;  // it will exit the loop when i is equal to 3
    }
        console.log(i);
}

// Continue Statement - Question: skip printhing the number 3;
for(let i = 1; i <= number1; i++) {
    if(i === 3) {
        continue;  // it will skip when the current number is equal to 3 ;
    }
    console.log(i);
}