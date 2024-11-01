
const documentBody = document.body;

// 1. Javascript Basics
console.log("\n1. Javascript Basics\n");
console.log("Javascript is a high-level, dynamic, interpreted programming language. It is used for adding interactivity to websites, both on the client and server side. JavaScript is single-threaded and supports event-driven, asynchronous programming.");
// Javascript is a high-level, dynamic, interpreted programming language. It is used for adding interactivity to websites, both on the client and server side. JavaScript is single-threaded and supports event-driven, asynchronous programming.

// 2. Variables and Data Types
console.log("\n2. Variables and Data Types\n");

const fullName = 'Jordy Toke';
let age = 31;
let isEmployed = false;

// logging variable values and types
console.log(`fullName: ${fullName} (${typeof(fullName)})
age: ${age} (${typeof(age)})
Employed: ${isEmployed} (${typeof(isEmployed)})`);

// 3. Using Built-in Methods
console.log("\n3. Using Built-in Methods\n");

let greeting = 'Hello, World!';
// logging string method results
console.log('Transform greeting with .toUpperCase() method:\n' + greeting.toUpperCase());
console.log('Find World in greeting using .includes() method:\n' + greeting.includes('World'));
console.log('Extract Hello from greeting using .substring() method:\n' + greeting.substring(0, 5));

// 4. If-Else, Switch, and Ternary Operator
console.log("\n4. If-Else and Ternary Operator\n");

const checkEligibility = (age) => {
  if (age < 18) {
    console.log('Minor');
  } else if (age < 65) {
    console.log('Adult');
  } else {
    console.log('Senior Citizen');
  };
}

let empolymentStatus = isEmployed ? 'Employed' : 'Unemployed';
// test empolyment status
console.log(empolymentStatus);

// 5. Switch statement
console.log("\n5. Switch statement\n");

const getDayName = (dayNum) => {
  switch (dayNum) {
    case 1:
      console.log('Monday');
    break;
    case 2:
      console.log('Tuesday');
    break;
    case 3:
      console.log('Wednesday');
    break;
    case 4:
      console.log('Thursday');
    break;
    case 5:
      console.log('Friday');
    break;
    case 6:
      console.log('Saturday');
    break;
    case 7:
      console.log('Sunday');
    break;
  }
}

let dayNum = 4;

getDayName(dayNum);