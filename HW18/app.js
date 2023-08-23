function generateList(array) {
  let ul = document.createElement('ul');

  for (let item of array) {
      let li = document.createElement('li');

      if (Array.isArray(item)) {
          let innerList = generateList(item);
          li.appendChild(innerList);
      } else {
          li.textContent = item;
      }

      ul.appendChild(li);
  }

  return ul;
}

let testArray = [1, 2, [1.1, 1.2, 1.3], 3];
document.body.appendChild(generateList(testArray));







Regenerate
