let end = 30;
let numbersString = ' ';
for (let start = 20; start <= end; start += 0.5) {
  if (start <= end) {
    numbersString += start + ' ';
  }
}
console.log(numbersString);