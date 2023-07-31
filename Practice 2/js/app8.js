let initial = 100;
let end = 200;
let numbers = '';
let divisor = 3

for (let start = initial; start <= end; start++) {
  if (start % divisor === 0) {
    if (start < end - divisor) {
      numbers += start + ', ';
    } else {
      numbers += start + '.';
    }
  }
}
console.log(numbers);
