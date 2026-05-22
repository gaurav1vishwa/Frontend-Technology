// Different types of function declaration 

function greet() {
    console.log("Heloo Everyone! form function declaration ");
    
}
greet();

// function expression ;
let greet1 = function() {
    console.log("Hello how are you from function expression");  
}
greet1();

// function which are shorted the code and its called as arrow function and here there is no need to use the keywords functions
 const arrow = (a,b)=> {
    console.log("hey this is arraow ");
    console.log(a+b);
    
}
arrow(10,20);

// IIFE - Immediately invoked function Expression (Anoonymous function);
(function(){
    console.log("this is Immediately invoked function Expression");
    
})();   // we can use it just using the () not extra things 




//       Practice  4 ways you need to create a function for adding 3 numbers ;


// function declaration 
function add(a,b,c) {
    return a+b+c;
}
console.log(add(10,20,30));

// function expression
const addfn = function(a,b,c) {
    return a+b+c;
}
console.log(addfn(10,20,30));

// arrow function

const arrowfn = (a,b,c) => {
    console.log(a+b+c);
}
arrowfn(10,20,30);

//IIFE 

(function(a,b,c) {
console.log(a+b+c);

})(10,20,30);