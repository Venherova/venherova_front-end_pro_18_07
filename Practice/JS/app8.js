let numString = prompt('Enter your number (6 digits)');

if (numString[0] === numString[5] && numString[1] === numString[4] && numString[2] === numString[3]) {
    console.log('The number is a mirror');
} else {
    console.log('The number is not a mirror');
}