// display function
const display = (element, output) => {
  element.innerHTML = output;
};

// higher order calculator function
const calculator = (num1, num2, func) => {
  return func(num1, num2);
}

// arithmetic callback functions for calculator
const add = (num1, num2) => {
  return num1 + num2;
}
const subtract = (num1, num2) => {
  return num1 - num2;
}
const multiply = (num1, num2) => {
  return num1 * num2;
}
const divide = (num1, num2) => {
  return num1 / num2;
}

// para selector
const para = document.querySelector('#para') ? ;

// calling display function with para as an argument and calculator as a callback with multiply as a callback
display(para, calculator(5, 4, multiply));

// clock para selector
const clock = document.querySelector('#clock');

const displayClock = () => {
  // get current time
  let time = new Date(Date.now());
  // log and display current time
  // console.log(time);
  display(clock, time);
  // set timeout
  setTimeout(displayClock, 1000);
}

// run our clock function
displayClock();
