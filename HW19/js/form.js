function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getCities(items) {
  const cityKey = items.value;
  return cities[cityKey];
}

function getCurrentDateFormatted() {
  const date = new Date();

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');  // getMonth() возвращает месяц от 0 до 11
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

function saveData(formElements, product) {
  return {
    product: product.name,
    price: product.price,
    date: getCurrentDateFormatted(),
    name: formElements.userName.value,
    delivery: formElements.delivery.value,
    payment: paymentMethods[formElements.payment.value],
    city: getCities(formElements.city),
    comment: formElements.comment.value,
    quantity: formElements.quantity.value,

  }
}

function checkEmpty(data) {
  let errorForm = document.getElementById('error-form');
  errorForm.innerHTML = '';

  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      if ((typeof data[key] === 'string' && !data[key]) || data[key] === undefined) {
        errorForm.innerHTML = `Empty ${key} fields`;
        return false;
      }
      if (Array.isArray(data[key]) && data[key].length === 0) {
        errorForm.innerHTML = `Empty ${key} fields`;
        return false;
      }
    }
  }
  return true;
 }

 function createTable(data) {
  let tableContainer = document.getElementById('table-container');
  const table = document.createElement('table');

  for(let i = 0; i < 2; i++) {
    let tr = document.createElement('tr');
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        let td = document.createElement('td');
        const element = i === 1 ? data[key] : capitalizeFirstLetter(key);
        td.innerText = element;
        tr.appendChild(td);
      }
    }
    table.appendChild(tr);
    tableContainer.appendChild(table);
  }
  table.style.display = 'table';
  table.border = 1;
}

function createDeliveryForm(product) {
  let formContainer = document.getElementById('form-container');
  let orderForm = document.createElement('form');
  orderForm.name = 'orderForm';
  
  for (const item of formData) {
    let element = document.createElement(item.element);
    element.name = item.name;
    element.type = item.type;
    element.placeholder = item.placeholder;
    element.id = item.name;

    if (item.type === 'button') {
      element.value = item.placeholder;
    }
  
    if (item.element === 'select') {
      for (const optionItem of item.options) {
        let optionElement = document.createElement('option');
        optionElement.value = optionItem.value;
        optionElement.innerHTML = optionItem.label;
        element.appendChild(optionElement);
      }
    }

    if (item.type === 'radio') {
      element.value = item.value;
      element.id = item.value;
      
      let label = document.createElement('label');
      label.htmlFor = item.value;
      label.innerHTML = item.placeholder;

      let divWrapper = document.createElement('div');
      divWrapper.appendChild(element);
      divWrapper.appendChild(label);

      orderForm.appendChild(divWrapper);
      continue;
    } else {
      orderForm.appendChild(element);
    }  
  }
  
  formContainer.appendChild(orderForm);

  document.getElementById('delivery-btn').addEventListener('click', () => {
    let form = document.forms.orderForm;
    let formElements = form.elements;
  
    const data = saveData(formElements, product);

    if (checkEmpty(data)) {
      createTable(data);
      form.style.display = 'none';
      let orderElement = document.getElementById('order');
      orderElement.innerHTML = (`Product ${product.name} was bought!`);

      prepareOrdersToDb(data);
    }
  })
}
