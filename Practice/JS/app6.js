let numString = prompt('Enter your number (3 digits)');


let firstDigit = parseInt(numString[0]);
let secondDigit = parseInt(numString[1]);
let thirdDigit = parseInt(numString[2]);

let sum = firstDigit + secondDigit + thirdDigit;
let product = firstDigit * secondDigit * thirdDigit;

console.log('The sum of the digits: ', sum);
console.log('The product of the digits: ', product);

if (sum % 2 === 0) {
    console.log('The sum of the digits is even');
} else {
    console.log('The sum of the digits is odd');
}

if (sum % 5 === 0) {
    console.log('The sum of digits is a multiple of five');
} else {
    console.log('The sum of digits is not a multiple of five');
}

if (product > 100) {
    console.log('Product of digits is bigger than 100');
} else {
    console.log('Product of digits is not bigger than 100');
}