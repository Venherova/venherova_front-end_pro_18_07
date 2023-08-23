/**
 * task 1
 * input focus
*/

let input = document.getElementById('input');
let description = document.getElementById('required-name');

input.addEventListener('focus', () => {
  description.style.display = 'block';
});

input.addEventListener('blur', () => {
  description.style.display = 'none';
});

/**
 * task 2
 * get & open link
*/

let link = "";
let getLink = document.getElementById('get-link');
let openLink = document.getElementById('open-link');

getLink.addEventListener('click', () => {
  const userLink = prompt('Enter the link');

  if (userLink) {
    if (userLink.startsWith('http://') || userLink.startsWith('https://')) {
        link = userLink;
    } else {
        link = "https://" + userLink;
    }
    openLink.disabled = false;
    openLink.innerText = `Go to: ${link}`
  }
});

openLink.addEventListener('click', () => {
  if (link) {
    window.open(link, '_blank')
  } else {
    alert('The link was not established');
  }
});

/** 
 * task 3  
 * create table
 */

let createTableButton = document.getElementById('create-table');
let tableSection = document.getElementById('table-section');

function makeTable() {
  const existingTable = tableSection.querySelector('table');
  if (existingTable) {
    return;
  }

  const table = document.createElement('table');
  const count = 10;
  let number = 1;

  for(let i = 0; i < count; i++) {
    let tr = document.createElement('tr');

    for(let j = 0; j < count; j++) {
      let td = document.createElement('td');
      td.innerText = number++;

      tr.appendChild(td);
    }

    table.appendChild(tr);
    tableSection.appendChild(table);
  }

  table.style.display = 'table';
}

createTableButton.addEventListener('click', () => makeTable());


/** 
 * task 4
 * show random image
 * */

let showImageButton = document.getElementById('show-image');
let imageWrapper = document.getElementById('image-wrapper');

function randomImage() {
  const existingImage = imageWrapper.querySelector('img');
  if (existingImage) {
    imageWrapper.removeChild(existingImage);
  }

  let image = document.createElement('img'); 

  let randomNum = Math.floor(Math.random() * 9) + 1;
  let imagePath = `images/${randomNum}.jpg`;
  image.src = imagePath;
  image.alt = `${randomNum}.jpg`;
  image.style.width = '100%';

  imageWrapper.appendChild(image);
}

showImageButton.addEventListener('click', () => randomImage());
