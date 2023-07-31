let end = 100;
let  currencyPrice = '';
let сurrency = 40;

for (let initial = 10; initial <= end; initial += 10) {
  let product = initial * сurrency;
  currencyPrice += `${ сurrency } x ${ initial } = ${ product } \n`;
}
console.log(currencyPrice);