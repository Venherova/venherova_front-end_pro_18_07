function showProducts() {
  for(let i = 0; i < products.length; i++) {
    console.log(`#${(i + 1)} Product: ${products[i].name} | Price: UAH ${products[i].price}`);
  }
}

function getProducts() {
  let chosenCategory = prompt('Enter the category (tv or phone) which you wanna buy:');
  let foundProducts = products.filter(product => product.category === chosenCategory);
  
  return foundProducts;
}

function getProductId(selectedProducts) {
  let productsS = '';
  for (const product of selectedProducts) {
    productsS += `#${product.id} Product: ${product.name} | Price: UAH ${product.price} \n `
  }

  let userPropose = `Enter the product number which you wanna buy:\n ${productsS}`;

  let chosenId = parseInt(prompt(userPropose));
  
  while (!selectedProducts.find(product => product.id === chosenId)) {
    alert('This product is not available! Please try again.');
    chosenId = parseInt(prompt(userPropose));
  }
  
  return chosenId;
}

function getProductQuantity() {
  let chosenQuantity = parseInt(prompt('Enter the quantity of product:'));
  
  while (!Number.isInteger(chosenQuantity) || chosenQuantity <= 0) {
    alert('The number is incorrect! Try again.');
    chosenQuantity = parseInt(prompt('Enter the quantity of product:'));
  }

  return chosenQuantity;
}

function calculateCost(selectedProducts, productId, quantity) {
  let chosenProduct = selectedProducts.find(product => product.id === productId);
  let initialPrice = chosenProduct.price * quantity;
  console.log('Price: UAH', initialPrice);
  return initialPrice;
}

function calculateFinalCost(totalCost, startDiscountFrom, discount) {
  const discountValue = (100 - discount) / 100;

  if (totalCost > startDiscountFrom) {    
    alert(`You got a discount ${ discount }%!`);
    return `Congrats! You got a discount, the final price is: ${ totalCost * discountValue } UAH`;
  }

  return `The final price is: ${ totalCost } UAH`;
}
