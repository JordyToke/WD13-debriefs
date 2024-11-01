// Task 1: Describe JavaScript's function syntax
console.log('%cTask 1', 'color:green;font-weight:bold');
// 1. Create a function named greet that accepts a name as a parameter and logs a greeting message to the console.
console.log('%c1', 'color:green;font-weight:bold');
const greet = (name) => {
  console.log('Hello ' + name + ' we hope you have a nice day.');
}
greet('Jordy');

// 2. Write a function named calculateArea that accepts two parameters: length and width, and returns the area of a rectangle.
console.log('%c2', 'color:green;font-weight:bold');
const rectangleArea = (length, height) => {
  return length * height;
}
console.log('Rectangle with sides of length 5 and 8 has an area of ' + rectangleArea(5, 8) + 'units squared.');

// Task 2: Practice passing data to functions
console.log('%cTask 2', 'color:green;font-weight:bold');
// 1. Create a function displayMessage that takes a message as a parameter and prints it to the console.
console.log('%c1', 'color:green;font-weight:bold');
const displayMessage = (message) => {
  console.log(message);
}
displayMessage('This is a message');

// 2. Write a function called addNumbers that takes two numbers as arguments and logs their sum.
console.log('%c2', 'color:green;font-weight:bold');
const addNumbers = (num1, num2) => {
  return num1 + num2;
}
console.log('Add numbers 8 and 21: ' + addNumbers(8, 21));

// Task 3: Use the return keyword, ES6 arrow functions, and concise body syntax
console.log('%cTask 3', 'color:green;font-weight:bold');
// Create an arrow function multiply that takes two numbers as arguments, multiplies them, and returns the result.
console.log('%c1', 'color:green;font-weight:bold');
const multiply = (num1, num2) => {
  return num1 * num2;
}
console.log('Multiply numbers 8 and 21: ' + multiply(8, 21));


// Write a concise arrow function isEven that takes a number as an argument and returns true if the number is even, and false otherwise.
console.log('%c2', 'color:green;font-weight:bold');
const  isEven = num => num%2 === 0;
let num = 57;
console.log(`Test if ${num} is even: ` + isEven(num));

// Task 4: Classify global and block-level scope in JavaScript
console.log('%cTask 4', 'color:green;font-weight:bold');
// Declare a global variable username and a function printUsername that prints the variable inside the function.
console.log('%c1', 'color:green;font-weight:bold');
let username = 'User';
const printUsername = () => {
  console.log(username);
}
printUsername();

// Inside a block (e.g., an if statement), declare a block-scoped variable using let or const. Try logging the variable outside the block and observe what happens.
console.log('%c2', 'color:green;font-weight:bold');
if (1) {
  let myName = 'Jordy';
}

try {
  console.log(myName);
} catch(error) {
  console.log(`%c${error}`, 'color:red');
}

// Task 5: Practice scoping when declaring variables
console.log('%cTask 5', 'color:green;font-weight:bold');
// Create a function scopeTest that defines a variable inside the function and logs it. Try to log the same variable outside the function and observe the error.
console.log('%c2', 'color:green;font-weight:bold');
const scopeTest = () => {
  let blockScoped = 'I\'m scoped to this block';
  console.log('Print blockscoped variable inside the block: ' + blockScoped);
}

try {
  console.log('Print blockscoped variable outside the block: ' + blockScoped);
} catch(error) {
  console.log(`%c${error}`, 'color:red');
}


// Inside a loop, declare a variable using let and observe its scope within and outside the loop.
console.log('%c1', 'color:green;font-weight:bold');
for (let i = 0; i < 10; i++) {
  let blockScoped = 'I am block-scoped';
  console.log('Print blockscoped variable inside the block: ' + blockScoped);
}

// console.log('Print blockscoped variable outside the block: ' + blockScoped);

// Task 6: Describe the arrays data structure in JavaScript
console.log('%cTask 6', 'color:green;font-weight:bold');
// Create an array called fruits that contains a list of 5 fruits. Log the array to the console.
console.log('%c1', 'color:green;font-weight:bold');
let fruits = ['apple', 'banana', 'mango', 'kiwifruit', 'dragon fruit'];

console.log(fruits);

// Access and log the second and fourth elements from the fruits array.
console.log('%c2', 'color:green;font-weight:bold');
console.log('Fruits second element is ' + fruits[1] + '\nFruits fourth element is ' + fruits[3]);

// Task 7: Use array methods and properties
console.log('%cTask 7', 'color:green;font-weight:bold');
// Add a fruit to the end of the fruits array using an array method and log the updated array.
console.log('%c1', 'color:green;font-weight:bold');
console.log(fruits[fruits.push('Pineapple') - 1]);

// Remove the first fruit from the fruits array and log the new array.
console.log('%c2', 'color:green;font-weight:bold');
fruits = fruits.slice(1, fruits.length);
console.log(fruits);

// Task 8: Use for and while loops to execute blocks of code multiple times
console.log('%cTask 8', 'color:green;font-weight:bold');
// Write a for loop that iterates over the fruits array and logs each fruit to the console.
console.log('%c1', 'color:green;font-weight:bold');
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// hard copy fruit array
let fruitsCpy = [];
fruits.forEach(fruit => {
  fruitsCpy.push(fruit);
})
// Create a while loop that continues running until the array fruits becomes empty. Inside the loop, remove the last fruit and log it.
console.log('%c2', 'color:green;font-weight:bold');
while(fruits[0]) {
  console.log(fruits.pop());
}

// Task 9: Use iterator methods to simplify the process of looping over arrays
// Use the forEach method to log each fruit from the fruits array to the console.
console.log('%cTask 9', 'color:green;font-weight:bold');
console.log('%c1', 'color:green;font-weight:bold');
fruitsCpy.forEach(fruit => {
  console.log(fruit);
});

// Use the map method to create a new array where each fruit name is converted to uppercase, and log the new array.
console.log('%c2', 'color:green;font-weight:bold');
let mappedFruits = fruitsCpy.map((fruit) => {
  return fruit.toUpperCase();
});

console.log(mappedFruits);
