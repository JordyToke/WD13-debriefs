// Part 1: Objects and Functions
// i. Describe the JavaScript ES6 Object syntax.
// ii. Use this keyword
// Part 2. Getters and Setters
// iii. Define getters and setters
const person = {
  _name: 'Jordy',
  _age: 31,
  greet() {
    console.log('Welcome ' + this._name + '!');
  },
  get name() {
    return this._name;
  },
  get age() {
    return this._age;
  },
  set name(newName) {
    // validation checking?
    this._name = newName;
  },
  set age(newAge) {
    // validation?
    this._age = newAge;
  }
}

// testing greeting
person.greet();
// testing setters and getters
person.name = 'Toke';
person.age = 29;
console.log(`Persons name: ${person.name}\nPersons age: ${person.age}`);


// Part 3: Factory Functions and Destructuring
// iv. Create factory functions

const createCar = (make, model) => {
  return { 
    _make: make,
    _model: model,
    get make() {
      return this._make;
    },
    get model() {
      return this._model;
    },
    drive() {
      console.log("I am driving the car");
    }
  };
};

const myCar = createCar('Toyota', 'Hilux');


// v. Use Destructuring Techniques
let { make, model } = myCar;

// testing
console.log(make + ' ' + model);

// Part 4: Classes and Inheritance
// vi. Create Classes

class Animal {
  #name;
  constructor(name) {
    this.#name = name
  };
  speak() {
    console.log(this.#name + ' says Wassup?');
  }
  get name() {
    return this.#name;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  };
  speak() {
    console.log(this.name + ' says Wassup Dog?');
  }
}

// animal testing
const aminal = new Animal("Boris");
console.log(aminal.name);
aminal.speak();

// dog testing
const michael = new Dog('Michael');
michael.speak();

// Part 5: Modules and Transpilation
// vii. Identify Modules
// viii. Use Modules to reuse code

const math = require('./math');

// testing
console.log(math.add(8, 736));

// Part 6: Browser Compatibility and Transpilation
// ix. Explain Browser Compatibility for JavaScript
// some old browsers dont support some ES6 features Opera, Internet Explorer etc

// x. Transpile JavaScript ES6 Code to ES5
// Babel can transpile ES6 JS to be compatible with older syntax.

