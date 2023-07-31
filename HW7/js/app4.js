let num = Number(prompt('Enter integer number'))
let isPrime = true;
let current = 2;

if(num <= 1) {
    isPrime = false;
} else {
    for(let current = 2; current * current <= num; current++) {
        if(num % current === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(isPrime);