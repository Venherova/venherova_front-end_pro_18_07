let end = 20;
let numbersString = ' ';
for (let start = 10; start <= end; start++) {
  if (start != 20) {
    numbersString += start + ', ';
  } else {
    numbersString += start + '.';
  }
}
console.log(numbersString);

