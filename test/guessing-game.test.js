// IMPORT MODULES under test here:
// import example from '../src/example.js';
import compareNumbers from '../compare-numbers.js';

const test = QUnit.test;

test('should return 0 if the usernumber and correctNumber are the same', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const correctNumber = 5;
    let userNumber = 5; 
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(userNumber, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 0);
});

test('should return -1 if the usernumber is lower than correctNumber', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const correctNumber = 5;
    let userNumber = 1; 
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(userNumber, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, -1);
});
test('should return 1 if the usernumber is larger than correctNumber', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const correctNumber = 5;
    let userNumber = 9; 
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(userNumber, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 1);
});