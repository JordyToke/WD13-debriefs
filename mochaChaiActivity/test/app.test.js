const Calculator = require('../src/app.js').Calculator;

// import Chai, assert, expect, should
const chai = require("chai"),
assert = chai.assert,
expect = chai.expect,
should = chai.should();


// describe tests for my Calculator
describe('Calculator tests', () => {

  // initiate some test values for to run our calculation functions with
  let num1 = 5, num2 = 9;
  const calc = new Calculator(num1, num2);

  it("Testing calculator addition", function() {
    assert.equal(calc.add(), num1 + num2);
  })

  it("Testing calculator multiplication", function() {
    assert.equal(calc.multiply(), num1 * num2);
  })

  it("Testing calculator subtraction", function() {
    assert.equal(calc.subtract(), num1 - num2);
  })

  it("Testing calculator division", function() {
    assert.equal(calc.divide(), num1 / num2);
  })
})