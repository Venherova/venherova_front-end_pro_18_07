function getAndClearElements(id) {
  const element = document.getElementById(id);
  element.innerHTML = '';
  return element;
}

function showCategories() {
  const parentElement = document.getElementById('left');
  let categoryContainer = document.createElement('div');
  categoryContainer.id = 'category-container';

  for (let categoryKey in categories) {
    const category = categories[categoryKey];

    let element = document.createElement('div');
    element.textContent = category.name;
    element.setAttribute('data-category', categoryKey)
    setItemStyle(element);

    categoryContainer.appendChild(element);
  }

  parentElement.appendChild(categoryContainer);
}

function hideOrShowCategories(action) {
  const categoryContainer = document.getElementById('category-container');
  categoryContainer.style.display = action;
}

function showCategoriesButton() {
  const leftElement = document.getElementById('left');

  let button = document.createElement('button');
  button.innerHTML = 'Show categories';
  button.id = 'show-categories-btn';
  button.style.display = 'none';
  setItemStyle(button);
  leftElement.appendChild(button);
  
  document.getElementById('show-categories-btn').addEventListener('click', () => {
    hideOrShowCategories('block');
    hideOrders();
    
    button.style.display = 'none';

    const myOrderBtn = document.getElementById('my-orders-btn');
    myOrderBtn.style.display = 'block';
  });
}

function myOrderButton() {
  const leftElement = document.getElementById('left');

  let myOrderBtn = document.createElement('button');
  myOrderBtn.innerHTML = 'My orders';
  myOrderBtn.id = 'my-orders-btn';
  setItemStyle(myOrderBtn);

  leftElement.appendChild(myOrderBtn);

  document.getElementById('my-orders-btn').addEventListener('click', () => {
    hideOrShowCategories('none');
    showOrders();
    myOrderBtn.style.display = 'none';

    const categoriesBtn = document.getElementById('show-categories-btn');
    categoriesBtn.style.display = 'block';

    const elements = ['order', 'table-container', 'error-form', 'center', 'right'];
    for (const element of elements) {
      getAndClearElements(element);
    }
  });
}

function setItemStyle(element) {
  element.style.cursor = 'pointer';
  element.style.padding = '5px';
  element.style.margin = '5px';
  element.style.border = '1px solid gray';
  element.style.borderRadius = '5px';
}

function showProducts(products, category) {
  const parentElement = getAndClearElements('center');

  for (let product of products) {
    let element = document.createElement('div');
    element.textContent = `${product.name} - $${product.price}`;
    element.setAttribute('data-product', product.id);
    element.setAttribute('data-category', category);
    setItemStyle(element);

    parentElement.appendChild(element);
  }
}

function showProductInfo(product) {
  const parentElement = getAndClearElements('right');

  let itemsElements = ['name', 'description', 'price'];

  for (const item of itemsElements) {
    let element = document.createElement('span');
    element.style.margin = '5px';

    element.textContent = item === 'price' ? `Product ${item}: $${product[item]}` : `Product ${item}: ${product[item]}`;  

    parentElement.appendChild(element);
  }
}

function createOrderButton(product) {
  const parentElement = document.getElementById('right');

  let button = document.createElement('button');
  button.innerHTML = 'Buy';
  button.id = 'buy-btn';
  setItemStyle(button);
  parentElement.appendChild(button);

  document.getElementById('buy-btn').addEventListener('click', () => {
    let orderElement = document.getElementById('order');
    orderElement.innerHTML = (`Product ${product.name} was selected!`);

    const elements = ['center', 'right'];
    for (const element of elements) {
      getAndClearElements(element);
    }

    createDeliveryForm(product);
  });
}

document.getElementById('left').addEventListener('click', event => {
  if (event.target.nodeName === 'DIV') {
    const categoryKey = event.target.getAttribute('data-category');
    if (categoryKey) {
      const categoryProducts = categories[categoryKey].products;
      showProducts(categoryProducts, categoryKey);
    }

    const elements = ['order', 'form-container', 'table-container', 'error-form', 'right'];
    for (const element of elements) {
      getAndClearElements(element);
    }
  }
});


document.getElementById('center').addEventListener('click', event => {
  if (event.target.nodeName === 'DIV') {
    const productId = event.target.getAttribute('data-product');
    const categoryKey = event.target.getAttribute('data-category');
    if (categoryKey) {
      const product = categories[categoryKey].products.find(product => product.id == productId);

      showProductInfo(product);
      createOrderButton(product);
    }
  }
});

showCategories();
myOrderButton();
showCategoriesButton();
