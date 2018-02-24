// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer.js');

// unit tests for our `adder` function
describe('adder', function() {

  it('Should return fizz if multiple of 3', function() {
    const normalCases = [3,6,9,12];
    const expected ='fizz'
    // for each set of inputs (a, b), `adder` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal(expected);
    });
  });

  it('Should return buzz if multiple of 5', function() {
    const normalCases = [5, 25, 125];
    const expected ='buzz'
    // for each set of inputs (a, b), `adder` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal(expected);
    });
  });

  it('Should return fizzbuzz if multiple of 3 and 5', function() {
    const normalCases = [15, 30];
    const expected ='fizz-buzz'
    // for each set of inputs (a, b), `adder` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal(expected);
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = ['a','awdawd', false];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        adder(input[0], input[1]);
      }).to.throw(Error);
    });
  });
});