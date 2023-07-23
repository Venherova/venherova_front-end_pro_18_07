let number = Number(prompt('Enter a five-digit number'));
let result = '';

while(number > 0) {
  let digit = number % 10;
  result = digit + ' ' + result;
  number = Math.floor(number / 10);
}

console.log(result.trim());

alert(result.trim());

