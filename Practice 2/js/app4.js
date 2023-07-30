let initial = 1;
let end = 15;
let sum = 0;

for (let start = initial; start <= end; start++) {
  sum += start;
}

console.log(`The sum of all integers from ${ initial } to ${ end } = ${ sum }`);
