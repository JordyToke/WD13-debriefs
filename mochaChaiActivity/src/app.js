class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  add() {
    return this.num1 + this.num2;
  }

  multiply() {
    return this.num1 * this.num2;
  }

  subtract() {
    return this.num1 - this.num2;
  }

  divide() {
    return this.num1 / this.num2;
  }
}

module.exports = {
  Calculator:Calculator
}