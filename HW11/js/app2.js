function doMath(x, znak, y) {
  switch (znak) {
      case '+':
          return x + y;
      case '-':
          return x - y;
      case '*':
          return x * y;
      case '/':
          if (y !== 0) {
              return x / y;
          } else {
              return `You can't divide by zero!`;
          }
      case '%':
          return x % y;
      case 'ˆ':
      case '^':
          return Math.pow(x, y);
      default:
          return 'Incorrect operator';
  }
}

let x = parseFloat(prompt('Enter number x:'));
let znak = prompt('Enter operator (+, -, *, /, %, ^):');
let y = parseFloat(prompt('Enter number y:'));


alert(doMath(x, znak, y));



