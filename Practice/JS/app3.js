let a = parseInt(prompt('Enter first number'));
let b = parseInt(prompt('Enter second number'));

if (b % a === 0) {
    console.log('The number a is a divisor of b');
} else {
    console.log('The number a is not a divisor of b');
}

if (a % b === 0) {
    console.log('The number b is a divisor of a');
} else {
    console.log('The number b is not a divisor of a');
}