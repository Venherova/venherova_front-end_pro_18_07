function removeChars(str, charsToRemove) {
  let result = '';

  for (let char of str) {
      if (!charsToRemove.includes(char)) {
          result += char;
      }
  }

  return result;
}

let inputStr = prompt('Enter the original string:');
let charsStr = prompt('Enter the characters to be deleted, separating them with a space:');
let charsArray = charsStr.split(' ');

let resultStr = removeChars(inputStr, charsArray);
alert(`Result: ${resultStr}`);
