let initial = 15;
let end = 35;
let product = 1;
 

 for (let start = initial; start <= end; start++) {
  product *= start;
}

console.log(`The poduct of all integers from ${ initial } to ${ end } = ${ product }`);

