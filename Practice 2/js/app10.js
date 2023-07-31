let multiTable = '';

for (let i = 1; i <= 10; i++ ) {
   for(let j = 1; j <= 10; j++) {
    let product = i * j;
    multiTable += `${ i } x ${ j } = ${ product } \n`;
   }  
}

console.log(multiTable);
