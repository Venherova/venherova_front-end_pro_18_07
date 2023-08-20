function getCharactersFromUser() { 
  let characters = prompt('Enter the character set for the key (at least 2 characters):');
  
  while (!characters || characters.length < 2) {
    alert('The character set is incorrect! Try again.');
    characters = prompt('Enter the character set for the key (at least 2 characters):');
  }

  return characters;
}

function getLengthFromUser() {
  let length = parseInt(prompt('Enter the key length:'));

  while (isNaN(length)) {
    alert('incorrect step down. try again!');
    length  = parseInt(prompt('Enter the key length:'));
  }
  
  return length;
}

function generateKey(length, characters) {
  let result = '';
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
  }
  return result;
}

let characters = getCharactersFromUser();
let length = getLengthFromUser();
const key = generateKey(length, characters);
console.log(key);




