// let vs const

// const immutable = "My name is Jordy";
// console.log(immutable);

// syntax : symbols and their context

// Arithmetic operators

console.log('8 divided by 5: ' + 8 / 5); // division
console.log('8 modulus 5: ' + (8 % 5)); // modulus

console.log('Math Round 8.76: ' + Math.round(8.76));

console.log('Math Floor 8.9: ' + Math.floor(8.9));

console.log('Math Ceil 8.3: ' + Math.ceil(8.3));

//  Brackets[], braces{}, parentheses()

function myFunction(arg1, arg2) {
  return arg1 + arg2;
}

const student = {
  name: 'Jordy',
  age: 31,
  print() {
    console.log(this.name + ' ' + this.age);
  },
};

const allStudents = [student, 'string one', 'string 2',];

console.log(allStudents.length);

`Hello what "you're" name`;

// // callBack functions
// const addTwo = num => {
//   return num + 2;
// }

// const minusTwo = num => {
//   return num - 2;
// }

// const nothing = () => {
//   return 'nothing';
// }

// // higher order function
// const higherOrderFunction = (func, num) => {
//   return func(num);
// }

// console.log(higherOrderFunction(addTwo, 8));

// console.log(higherOrderFunction(minusTwo, 8));

// console.log(higherOrderFunction(nothing, 8));
