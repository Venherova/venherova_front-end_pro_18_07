let num = Number(prompt('Enter an integer'));
let end = 100;

for(let initial = 1; initial * initial <= num; initial++) {
  console.log(initial);
}

