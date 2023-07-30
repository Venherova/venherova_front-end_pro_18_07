let initial = 100;
let end = 200;
let numbers = '';

for (let start = initial; start <= end; start++) {
  if (start % 3 === 0) {
    if (start < 197) {
      numbers += start + ', ';
    } else {
      numbers += start + '.';
    }
  }
}
console.log(numbers);
