const input = {
  num1: 3,
  num2: 9,
  operation: 'ADD',
};

const calculator = function(input) {
  // Establish lowerCase for input.operator
  const newOperator = input['operation'].toLowerCase();
// check input for valid Number
  if (typeof input.num1 != 'number' || typeof input.num2 != 'number') {
    return 'Error: invalid number entry!';
  };
  
// check input if divisor is zero - not valid for division
  if ((newOperator === 'divide' && input.num2 === 0 )|| (newOperator === '/' && input.num2 === 0)) {
    return 'Error: cannot divide by 0!'
  };
  
  switch (true) {
    case newOperator === 'add' || newOperator === '+': 
      return input.num1 + input.num2;
    case newOperator === 'subtract' || newOperator === '-':
      return input.num1 - input.num2;
    case newOperator === 'multiply' || newOperator === '*':
      return input.num1 * input.num2;
    case newOperator === 'divide' || newOperator === '/':
      return input.num1 / input.num2;
    default: 
      return 'Error: invalid operation entry';

  }; // switch end

}; // calculator end



console.log(calculator(input));
