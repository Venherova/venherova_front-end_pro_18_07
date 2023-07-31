let num = Number(prompt('Enter your number'))
let current = 3;
let isPowerOfThree = num === 1 ? true : false;

while (current <= num && !isPowerOfThree) {
    if(current === num) {
        isPowerOfThree = true;
    }
    current *= 3;
}

console.log(isPowerOfThree);