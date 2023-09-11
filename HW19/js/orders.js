function getOrdersFromDB() {
  return JSON.parse(localStorage.getItem('orders'));
}

function setOrdersToDb(data) {
  localStorage.setItem('orders', JSON.stringify(data));
}

function getMaxId(orders) {
  let maxId = 0;
  for (let order of orders) {
      if (order.id > maxId) {
          maxId = order.id;
      }
  }
  return maxId;
}

function prepareOrdersToDb(data) {
  let arrayData = [];
  arrayData = getOrdersFromDB() || [];
  arrayData = [...arrayData, { ...data, id: getMaxId(arrayData) + 1 }];

  setOrdersToDb(arrayData);
}

function deleteOrderFromDb(orderId) {
  let orders = getOrdersFromDB();
  let index = orders.findIndex(el => el.id === orderId);
  orders.splice(index, 1)

  setOrdersToDb(orders);
  showOrders();
}

function createOrderContainerElement(id) {
  let container = document.createElement('div')
  container.id = `container-${id}`;
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.border = '1px solid gray';
  container.style.borderRadius = '5px';
  container.style.padding = '5px';
  container.style.margin = '5px 0';
  container.style.transition = '3s ease';

  return container;
}

function createDeleteOrderButton(orderId) {
  let button = document.createElement('button');
  button.style.height = 'fit-content';
  button.innerHTML = 'Delete';
  button.id = `delete-btn-${orderId}`;

  return button;
}

function showOrder(orderId) {
  const orderDetails = document.getElementById(`order-details-${orderId}`);
  const orderSummary = document.getElementById(`order-summary-${orderId}`);

  if (orderDetails.style.display === 'none') {
    orderDetails.style.display = 'flex';
    orderSummary.style.display = 'none';
  } else {
    orderDetails.style.display = 'none';
    orderSummary.style.display = 'flex';
  }
}

function createElement(elementName, value, isInnerHtml = true) {
  let element = document.createElement(elementName);
  if (isInnerHtml) {
    element.innerHTML = value;
  }
  element.id = value
  return element;
}

function hideOrders() {
  const myOrdersElement = document.getElementById('my-orders');
  myOrdersElement.style.display = 'none';
}

function showOrders() {
  let orders = getOrdersFromDB();

  const leftElement = document.getElementById('left');

  const myOrdersElement = document.getElementById('my-orders');
  if (myOrdersElement) {
    leftElement.removeChild(myOrdersElement);
  }

  let myOrders = createElement('div', 'my-orders', false);
  myOrders.style.margin = '5px';
  myOrders.appendChild(createElement('p', 'My orders:'));
  leftElement.appendChild(myOrders);

  for (const orderItem of orders) {    
    let orderContainer = createOrderContainerElement(orderItem.id);
    orderContainer.innerHTML = '';

    let orderSummary = createElement('div', 'order-summary', false);
    orderSummary.id = `order-summary-${orderItem.id}`;
    orderSummary.style.display = 'flex';
    orderSummary.style.flexDirection = 'column';
    orderSummary.appendChild(createElement('span', `Date: ${orderItem.date}`));
    orderSummary.appendChild(createElement('span', `Price: $${orderItem.price}`));
    orderContainer.appendChild(orderSummary);

    let orderDetails = createElement('div', 'order-details', false);
    orderDetails.id = `order-details-${orderItem.id}`;
    orderDetails.style.flexDirection = 'column';
    orderDetails.style.display = 'none';

    for (const key in orderItem) {
      if (Object.hasOwnProperty.call(orderItem, key)) {
        let capitalizedKey = capitalizeFirstLetter(key);
        let el = createElement('span', key === 'price' ? `${capitalizedKey}: $${orderItem[key]}` : `${capitalizedKey}: ${orderItem[key]}`);
        orderDetails.appendChild(el);
      }
    }

    orderContainer.appendChild(orderDetails);

    let deleteBtn = createDeleteOrderButton(orderItem.id);
    orderContainer.appendChild(deleteBtn);

    myOrders.appendChild(orderContainer);

    document.getElementById(`container-${orderItem.id}`).addEventListener('click', () => {
      showOrder(orderItem.id)
    });

    document.getElementById(`delete-btn-${orderItem.id}`).addEventListener('click', (event) => {
      event.stopPropagation();
      deleteOrderFromDb(orderItem.id)
    });
  }
}
