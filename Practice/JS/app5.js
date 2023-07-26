let numString = prompt('Enter your number (2 digits)');

let firstDigit = parseInt(numString[0]);
let secondDigit = parseInt(numString[1]);

console.log('First digit: ', firstDigit);
console.log('Second digit: ', secondDigit);

if (firstDigit > secondDigit) {
    console.log('First digit is bigger');
} else if (firstDigit < secondDigit) {
    console.log('Second digit is bigger');
} else {
    console.log('Digits are equal');
}