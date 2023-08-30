function getAndClearElements(id) {
  const element = document.getElementById(id);
  element.innerHTML = '';
  return element;
}

function showCategories() {
  const parentElement = document.getElementById('left');

  for (let categoryKey in categories) {
    const category = categories[categoryKey];

    let element = document.createElement('div');
    element.textContent = category.name;
    element.setAttribute('data-category', categoryKey)
    parentElement.appendChild(element);
  }
}

function showProducts(products, category) {
  const parentElement = getAndClearElements('center');

  for (let product of products) {
    let element = document.createElement('div');
    element.textContent = `${product.name} $${product.price}`;
    element.setAttribute('data-product', product.id);
    element.setAttribute('data-category', category);

    parentElement.appendChild(element);
  }
}

function showProductInfo(product) {
  const parentElement = getAndClearElements('right');

  let descriptionElement = document.createElement('div');
  descriptionElement.innerHTML = product.description;

  parentElement.appendChild(descriptionElement);
}

function createOrderButton(product) {
  const parentElement = document.getElementById('right');

  let button = document.createElement('button');
  button.innerHTML = 'Buy';
  button.id = 'buy-btn';
  parentElement.appendChild(button);

  document.getElementById('buy-btn').addEventListener('click', () => {
    alert(`Product ${product.name} was bought`);

    const elements = ['center', 'right'];
    for (const element of elements) {
      getAndClearElements(element);
    }
  });
}

showCategories();



document.getElementById('left').addEventListener('click', event => {
  if (event.target.nodeName === 'DIV') {
    const categoryKey = event.target.getAttribute('data-category');
    const categoryProducts = categories[categoryKey].products;
    showProducts(categoryProducts, categoryKey);
  }
});


document.getElementById('center').addEventListener('click', event => {
  if (event.target.nodeName === 'DIV') {
    const productId = event.target.getAttribute('data-product');
    const categoryKey = event.target.getAttribute('data-category');

    const product = categories[categoryKey].products.find(product => product.id == productId);

    console.log(product);
    showProductInfo(product);
    createOrderButton(product);
  }
});


