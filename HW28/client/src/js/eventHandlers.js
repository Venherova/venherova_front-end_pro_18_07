import axios from "axios";
import { basicUrl } from './common.js';
import { createElement, cleanElement } from "./domHelpers.js";
import Hamburger from './Hamburger.js';

let products = [];
const cart = {
  products: [],
  totalPrice: 0,
};
const checkoutBtn = document.getElementById('checkout');
const infoModal = new bootstrap.Modal('#infoModal');


export async function handleCategoryClick(event) {
  const categoryId = event.target.getAttribute('data-id');
  
  const { data } = await axios(`${basicUrl}/api/products/${categoryId}`);
  products = data;

  const currentContent = document.querySelector('#content');
  if (currentContent) {
    cleanElement('#content')
  }

  data.forEach(item => {
    const wrapper = createElement(
      'div',
      '#content',
      '',
      {
        className: 'card product',
      },
    )
    const productBody = createElement(
      'div',
      wrapper,
      '',
      { className: 'card-body'}
    )
    createElement(
      'h5',
      productBody,
      `${item.name}`,
      { className: 'product__title'},
    )
    createElement(
      'p',
      productBody,
      `$${item.price}`,
      { className: 'product__price' },
    )
    createElement(
      'input',
      productBody,
      '',
      { 
        type: 'button',
        value: 'Add to card',
        'data-type': `add-${item.id}`,
        className: 'btn btn-primary product__btn',
        'data-product': item.id,
        'data-category': categoryId,
      },
      {
        click: item.configurable ? handleConfigurableItemClick : handleProductClick,
      }
    )
  })
}

function handleConfigurableItemClick(event) {


  const productId = event.target.getAttribute('data-product');
  const myProduct = getProduct(productId);

  cart.products.push(myProduct);

  prepareModalForNewProduct(productId);
}

function prepareModalForNewProduct(productId) {
  resetHamburgerForm();
  document.getElementById('infoModal').setAttribute('data-product-id', productId);
  infoModal.show();
}

function handleProductClick(event) {
  const categoryId = event.target.getAttribute('data-category');
  const productId = event.target.getAttribute('data-product');
  const product = getProduct(productId);

  cart.products.push(product)

  if (cart.products.length > 0) {
    checkoutBtn.style.display = 'block';
  }
  cart.totalPrice = calculateTotalPrice(cart);
  showCart();
}

function getProduct(productId) {
  return products.find(item => item.id == productId);
}

let chooseButton = document.getElementById('choose-btn');

chooseButton.addEventListener('click', () => {
  createHamburger();

  infoModal.hide();

  if (cart.products.length > 0) {
    checkoutBtn.style.display = 'block';
  }
  cart.totalPrice = calculateTotalPrice(cart);
  showCart();
});


function resetHamburgerForm() {
  const form = document.getElementById('hamburgerForm');
  form.size.value = 'small';
  form.stuffing.value = 'cheese';

  form.mayo.checked = false;
  form.sauce.checked = false;
}

function createHamburger() {
  const form = document.getElementById('hamburgerForm');
  let size, stuffing;

  switch(form.size.value) {
    case 'small': size = Hamburger.SIZE_SMALL; 
    break;
    case 'large': size = Hamburger.SIZE_LARGE; 
    break;
  }

  switch(form.stuffing.value) {
    case 'cheese': stuffing = Hamburger.STUFFING_CHEESE; 
    break;
    case 'salad': stuffing = Hamburger.STUFFING_SALAD; 
    break;
    case 'potato': stuffing = Hamburger.STUFFING_POTATO; 
    break;
  }

  const hamburger = new Hamburger(size, stuffing);
  
  if (form.mayo.checked) {
    hamburger.addTopping(Hamburger.TOPPING_MAYO);
  }
  if (form.sauce.checked) {
    hamburger.addTopping(Hamburger.TOPPING_SAUCE);
  }

  const modalElement = event.target.closest('.modal');
  const productId = modalElement.getAttribute('data-product-id');

  updateProductInCart(productId, hamburger);
}

function updateProductInCart(productId, toppingsData) {
  const productToUpdate = cart.products.find(product => product.id === Number(productId) && product.configurable === true);
  if (productToUpdate) {
    productToUpdate.toppings = toppingsData;
  }
}

let checkoutButton = document.getElementById('checkout');

checkoutButton.addEventListener('click', () => {
  disableUI();
  showNewOrderButton();
  axios.post(`${basicUrl}/api/order`, { order: cart })
});


function disableUI() {
  const addToCartButtons = document.querySelectorAll('.product__btn');
  addToCartButtons.forEach(button => button.disabled = true);

  checkoutBtn.disabled = true;
}

function showCart() {
  const cartElement = document.getElementById('cart');
  cartElement.innerHTML = cartToHTML(cart); 
  cartElement.style.display = 'block';
}

function hideCart() {
  const cartElement = document.getElementById('cart');
  cartElement.style.display = 'none';
}

function calculateTotalPrice(cart) {
  return cart.products.map(product => {
    let productPrice = product.price;
    
    if (product.toppings) {
      productPrice += product.toppings.size.price;
      productPrice += product.toppings.stuffing.price;
      const toppingsPrice = product.toppings.toppings.reduce((acc, topping) => acc + topping.price, 0);
      productPrice += toppingsPrice;
    }

    return productPrice;
  }).reduce((acc, curr) => acc + curr, 0);
}

function cartToHTML(cart) {
  let html = '<div class="card"><ul class="list-group list-group-flush">';

  cart.products.forEach(product => {
    html += `<li class="list-group-item d-flex justify-content-between align-items-center">
              ${product.name}
              <span class="badge bg-primary rounded-pill">$${product.price}</span>
              </li>`;
    if (product.toppings) {
      html += `<li class="list-group-item">
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Size: $${product.toppings.size.price}</li>
                <li class="list-group-item">Stuffing: $${product.toppings.stuffing.price}</li>
                <li class="list-group-item">Toppings: `;
      product.toppings.toppings.forEach(topping => {
        html += `<span class="badge bg-secondary rounded-pill">$${topping.price}</span> `;
      });
      html += `</li></ul>`;
    }
    html += `</li>`;
  });

  html += `</ul>`;
  html += `<div class="card-footer">Total Price: <strong>$${cart.totalPrice}</strong></div></div>`;

  return html;
}

function showNewOrderButton() {
  const newOrderButton = document.getElementById('new-order-btn');
  const wrapperElement = document.getElementById('new-button');
  if (!newOrderButton) {
    createElement('input', wrapperElement, '', {
      type: 'button',
      value: 'Create New Order',
      id: 'new-order-btn',
      className: 'btn btn-success',
    }, {
      click: resetOrder,
    });
  } else {
    newOrderButton.style.display = 'block';
  }
}

function resetOrder() {
  cart.products = [];
  cart.totalPrice = 0;
  hideCart();

  enableUI();
}

function enableUI() {
  const addToCartButtons = document.querySelectorAll('.product__btn');
  addToCartButtons.forEach(button => button.disabled = false);
  
  checkoutBtn.disabled = false;
  
  const newOrderButton = document.getElementById('new-order-btn');
  newOrderButton.style.display = 'none';
}
