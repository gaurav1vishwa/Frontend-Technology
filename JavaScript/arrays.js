  
               // Arrays in JavaScript

// Arrays are ordered, indexed collections that can hold any mix of data types.


// Creating an array
let myArray = [1, 'hello', true, null, undefined, { name: 'Alice' }, [1, 2, 3]];

let arr = new Array(1,2,3,4,5); // Using the Array constructor

// Accessing elements
console.log(myArray); 
console.log(myArray[0]); // 1
console.log(myArray[1]); // 'hello'
console.log(myArray[5]); // { name: 'Alice' }

// Modifying elements
myArray[1] = 'world';
console.log(myArray[1]); // 'world'
console.log(myArray); // [1, 'world', true, null, undefined, { name: 'Alice' }, [1, 2, 3]]

console.log(arr); // [1, 2, 3, 4, 5]

// add elements to the array

arr.push(6); // Adds 6 to the end of the array
arr.unshift(0); // Adds 0 to the beginning of the array
console.log(arr); // [0, 1, 2, 3, 4, 5, 6]

// remove elements from the array

arr.pop(); // Removes the last element (6)
arr.shift(); // Removes the first element (0)
console.log(arr); // [1, 2, 3, 4, 5]
// Array length
console.log(arr.length); // 5


// Iterating over an array
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}



// splice and slice methods

// splice(start, deleteCount, item1, item2, ...)
let  newArry = [1, 2, 3, 4, 5];
console.log(newArry); // [1, 2, 3, 4, 5]   

console.log(newArry.splice(2, 2)); // Removes 2 elements starting from index 2
console.log(newArry); // [1, 2, 5]  

console.log(newArry.splice(1,0, 10,11)); // Inserts 'a' and 'b' at index 1 without removing any elements
console.log(newArry); // [1, 'a', 'b', 2, 5]

console.log(newArry.splice(0,0,'a',{name : "Gaurav"})) // Inserts 'a' at index 0 without removing any elements
console.log(newArry); // ['a', 1, 'a', 'b', 2, 5]

    // slice(start, end)  it will  not modify the original array an return a new array  i mean the copy array;
let originalArray = ['a', 'b', 'c', 'd', 'e'];
console.log(originalArray); // ['a', 'b', 'c', 'd', 'e']

console.log(originalArray.slice(1, 4)); // ['b', 'c', 'd']  it will return a new array from index 1 to index 3 (end index is not included)
console.log(originalArray); // ['a', 'b', 'c', 'd', 'e']  original array is not modified

console.log(originalArray.slice(2)); // ['c', 'd', 'e']  it will return a new array from index 2 to the end of the array

console.log(originalArray.slice(-2)); // ['d', 'e']  it will return a new array from the last 2 elements of the array


   // indexOf and includes methods
let fruits = ['apple', 'cherry', 'date', 'fig', 'grape', 'banana'];
console.log(fruits); // ['apple', 'banana', 'cherry', 'date', 'fig', 'grape']

console.log(fruits.indexOf('cherry')); // 2  it will return the index of the first occurrence of 'cherry' in the array  
console.log(fruits.indexOf('kiwi')); // -1  it will return -1 if the element is not found in the array

console.log(fruits.includes('banana')); // true  it will return true if 'banana' is found in the array
console.log(fruits.includes('kiwi')); // false  it will return false if 'kiwi' is not found in the array


   // sort the array 
let numbers = [5, 2, 9, 1, 5, 6];
console.log(numbers); // [5, 2, 9, 1, 5, 6]

numbers.sort();
console.log(numbers); // [1, 2, 5, 5, 6, 9]  it will sort the array in ascending order by default

     // reverse the array
numbers.reverse();
console.log(numbers); // [9, 6, 5, 5, 2, 1]  it will reverse the order of the elements in the array


// Using forEach method
fruits.forEach(function(element) {
    console.log(element );
});


let  newNumber = [1, 2, 3, 4, 5];
let sum = 0;
newNumber.forEach(element => (sum += element));
console.log("The sum of newNumber array is " +  sum); // 15 it will calculate the sum of all the elements in the array
// and it will not give me any array its give  the valuse 

       // map method it will return a new array whatever we want to return in the callback function
let squaredNumbers = newNumber.map(element => element * element);
console.log(squaredNumbers); // [1, 4, 9, 16, 25] it will return a new array with the squared values of the original array


   // filter methoed
   // it will return a new array with all the elememts that pass the test i mean the condition in the callback function
let evenNumbers = newNumber.filter(element => element % 2 === 0);
let oddNumbers = newNumber.filter(element => element %2 !== 0);
console.log(oddNumbers); // [1, 3, 5] it will return a new array with only the odd numbers from the original array
console.log(evenNumbers); // [2, 4] it will return a new array with only the even numbers from the original array


  // join method it will join all the elements of the array into a string and return the string
  let color = [ 'red','green','black','blue'];
  let result = color.forEach(element=> process.stdout.write(element + ' '));  // it will print all the element of arry in the same line with space between them;
  console.log(result); 
  console.log(color.join(' ')); // 'red green black blue' it will join all the elements of the array into a string with space between them
