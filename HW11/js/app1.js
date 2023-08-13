function createSum() {
  let initial = 0;

  return function sum(number) {
    initial += number;
    return initial;
  };
}

const sum = createSum();

console.log(sum(3));  
console.log(sum(5));  
console.log(sum(20)); 





