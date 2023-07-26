let digit = parseInt(prompt('Enter your number'));
let lastDigit = digit % 10;

console.log('Last digit of number: ', lastDigit);

if (lastDigit % 2 === 0) {
    console.log('The last digit of the number is even');
} else {
    console.log('The last digit of the number is odd');
}