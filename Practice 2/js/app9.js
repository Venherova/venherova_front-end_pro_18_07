let number = Number(prompt('Enter your number'));
let divisors = '';
let evenDivisorsCount = 0;
let evenDivisorsSum = 0;

for (let initial = 1; initial <= number; initial++) {
  if (number % initial === 0) {
    if (initial !== number) { 
        divisors += initial + ', ';
    } else {
        divisors += initial + '.';
    } 
    if (initial % 2 === 0) {
      evenDivisorsCount++;
      evenDivisorsSum += initial;
    }
  }
}

console.log('Divisors of a number: ' + divisors);
console.log('Number of even divisors: ' + evenDivisorsCount);
console.log('Sum of even divisors: ' + evenDivisorsSum);
