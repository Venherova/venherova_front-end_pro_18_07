let numString = prompt('Enter your number (3 digits)');

let firstDigit = parseInt(numString[0]);
let secondDigit = parseInt(numString[1]);
let thirdDigit = parseInt(numString[2]);

if (firstDigit === secondDigit && secondDigit === thirdDigit) {
    console.log('All digits are equal');
} else if (firstDigit === secondDigit || secondDigit === thirdDigit || firstDigit === thirdDigit) {
    console.log('The digits are the same');
} else {
    console.log('There are no identical digits');
}