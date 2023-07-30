let initial = 30;
let end = 80;
let sum = 0;

for (let start = initial; start <= end; start++) {
  if (start % 2 === 0) {
    sum += start;
  }
}

console.log(`The sum of even numbers from ${ initial } to ${ end } = ${ sum }`);

