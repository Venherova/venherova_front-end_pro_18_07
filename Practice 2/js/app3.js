let end = 10;
let  multiTable = '';
let initialNumber = 7;

for (let start = 1; start <= end; start++) {
  let product = start * initialNumber;
  multiTable += `${ initialNumber } x ${ start } = ${ product } \n`;
}
console.log(multiTable);
