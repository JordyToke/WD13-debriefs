// import Chai
const chai = require("chai"), assert = chai.assert;

// import our add function
const { add } = require('./add');
// import our isEEven function
const { isEven } = require('./isEven');

// tests for add functi0n
describe("Testing add funciton", () => {
  // first test case for add function
  it("Case 1: 4 + 9 = 13", () => {
    const num1 = 4, num2 = 9;
    assert(add(num1, num2) === 13, "Assert 4 + 9 is equal to 13.");
  })
})

describe('Testing isEven function', () => {
  it('Case 1: 5 is not even', () => {
    assert(isEven(5) === false, "Assert 5 is not even")
  })
  it('Case 2: 4 is even', () => {
    assert(isEven(4) === true, "Assert 4 is even")
  })
})