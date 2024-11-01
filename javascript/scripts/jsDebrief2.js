function greet(nameParam) {
  console.log(`Hello, ${nameParam}!`);
}

// test greet
greet("Jordy");
greet(6);

// 2. Using return keyword

function addNumbers(num1, num2) {
  return num1 + num2;
}

// test
let addedNumbers = addNumbers(5, 9);
console.log(addedNumbers);

// 3. ES6 Arrow Functions

const addNum = (num1, num2) => {
  return num1 + num2;
}

// test
console.log(addNum(4, 3));

// 4. Understanding Scope

let globalVar = "I'm global";

const blockVar = () => {
  let localVar = "I'm block-scoped";
}

// test
console.log(`Global var: ${globalVar}
Block scoped Var: ${blockVar()}`);

// 5. Practice scoping and Variable Declaration

for (let i = 0; i < 4; i++) {
  console.log(i);
}

for (let j = 0; j < 4; j++) {
  console.log(j);
}

console.log(`declared with var: ${j}`);