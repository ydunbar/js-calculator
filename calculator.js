const exampleAdditionInput = {
  num1: 10,
  num2: 5,
  operation: '+',
}

const validOperations = ['add', '+', 'subtract', '-', 'multiply', '*', 'divide', '/'];

const validate = function(input) {
  // validate numbers
  let isValid = true;
  let nums = [input.num1, input.num2];
  for (let num in nums) {
    if ((nums[num]).toString().match(/^[a-zA-Z]+$/)) {
      console.log('Please enter valid numbers');
      isValid = false;
    } 
  }
  // validate operation 
  if (validOperations.includes(input.operation) === false) {
    console.log('Please enter valid operation');
    isValid = false;
  }
  return isValid;
}


const calculate = function(input) {
  if(validate(input)) {
    switch (input.operation) {
    case 'add':
    case '+':
      return (input.num1 + input.num2);
    case 'subtract':
    case '-':
      return (input.num1 - input.num2);
    case 'multiply':
    case '*':
      return (input.num1 * input.num2);
    case 'divide':
    case '/':
      // handle 0 division
      if (input.num1 === 0 || input.num2 === 0) {
        console.log('undefined');
      } else {
        return (input.num1 / input.num2);
      }    
    }
  }
}

calculate(exampleAdditionInput);