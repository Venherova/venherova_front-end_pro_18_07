let initial = 1;
let end = 500;
let sum = 0;

for (let start = initial; start <= end; start++) {
  sum += start;
}
let arithAverage = sum / 500;

console.log(`The poduct of all integers from ${ initial } to ${ end } = ${ arithAverage }`);