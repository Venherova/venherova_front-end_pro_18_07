let length = parseInt(prompt('Enter the length of the array:'));
let arr = [];

for (let i = 0; i < length; i++) {
  arr.push(parseInt(prompt('Enter a number for the array:')));
}

document.write('Initial array: ' + arr.join(', ') + '<br>');

arr.sort((a, b) => a - b);

document.write('Sorted array: ' + arr.join(', ') + '<br>');

arr.splice(1, 3);

document.write('Array after deleting elements: ' + arr.join(', '));