let end = 20;
let numbersString = ' ';
for (let start = 10; start <= end; start++) {
  if (start != end) {
    numbersString += start + ', ';
  } else {
    numbersString += start + '.';
  }
}
console.log(numbersString);

