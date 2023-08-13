function create2DArray() {
  let mainLength = parseInt(prompt('Enter the length of the main array:'));

  let arr = new Array(mainLength);

  for (let i = 0; i < mainLength; i++) {
      let innerLength = parseInt(prompt('Enter the length of the internal array for the element № ${i+1}:'));
      arr[i] = new Array(innerLength);

      for (let j = 0; j < innerLength; j++) {
          arr[i][j] = prompt('Enter a value for the element [${i}][${j}]:');
      }
  }

  return arr;
}

console.log(create2DArray());