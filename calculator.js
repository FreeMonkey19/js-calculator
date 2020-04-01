const input = {
  num1: 9,
  num2: 3,
  operation: 'divide',
};

const calculator = function(input) {
  if (typeof input.num1 != 'number' || typeof input.num2 != 'number') {
    return 'Error: invalid number entry!';
  };
  

  if ((input.operation.toLowerCase() === 'divide' && input.num2 === 0 )|| (input.operation === '/' && input.num2 === 0)) {
    return 'Error: cannot divide by 0!'
  };
  
 switch (true) {
   case input.operation.toLowerCase() === 'add' || input.operation === '+': 
    return input.num1 + input.num2;
      break;
    case input.operation.toLowerCase() === 'subtract' || input.operation === '-':
      return input.num1 - input.num2;
        break;
    case input.operation.toLowerCase() === 'multiply' || input.operation === '*':
      return input.num1 * input.num2;
        break;
    case input.operation.toLowerCase() === 'divide' || input.operation === '/':
      return input.num1 / input.num2;
        break;
    default: 
      return 'Error: invalid operation entry';

 }; // switch end

}; // calculator end



console.log(calculator(input));
