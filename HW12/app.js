function removeElement(arr, item) {
  const index = arr.indexOf(item);
  if (index > -1) {
      arr.splice(index, 1);
  }
}

function getValidNumberInput(message) {
  let number;
  do {
      number = parseInt(prompt(message));
  } while (isNaN(number));
  return number;
}

let length = getValidNumberInput('Enter the length of the array:');

let arr = [];

for (let i = 0; i < length; i++) {
    let value = getValidNumberInput(`Enter the ${i+1}-th element of the array:`);
    arr.push(value);
}

console.log('Initial array:', arr);

let itemToRemove = getValidNumberInput('Enter the item you want to delete:');

removeElement(arr, itemToRemove);

console.log('Array after deletion:', arr);
