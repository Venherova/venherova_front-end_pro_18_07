let end = 20;
let squaresString = '';

for (let start = 10; start <= end; start++) {
  let square = start * start;
  if (start != end) {
    squaresString += square + ', ';
  } else {
    squaresString += square + '.';
  }
}

console.log(squaresString);
