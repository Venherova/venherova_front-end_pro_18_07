const cities = {
  od: 'Odessa',
  dn: 'Dnipro',
  ny: 'New York',
  to: 'Toronto'
}

const languages = {
  en: 'English',
  de: 'Deutsch',
  ru: 'Russian',
  ua: 'Ukrainian',
}

const genders = {
  m: 'Male',
  f: 'Female',
}

function getCities(items) {
  const cityKey = items.value;
  return cities[cityKey];
}

function getLanguages(key) {
  return languages[key];
}

function getGender(key) {
  return genders[key];
}

function getCheckedItems(items) {
  const values = [];
  for(let i = 0; i < items.length; i++ ) {
    if(items[i].checked) {
      values.push(getLanguages(items[i].value));
    }
  }

  return values;
}

function saveData(formElements) {
  return {
    'First name': formElements.firstName.value,
    'Last name': formElements.lastName.value,
    'Birth date': formElements.dateOfBirth.value,
    gender: getGender(formElements.gender.value),
    languages: getCheckedItems(formElements.languages),
    city: getCities(formElements.city),
    address: formElements.address.value,
  }
}

function checkText(value, type) {
  let error = document.getElementById(type === 'name' ? 'errorName' : 'errorLastname');
  error.style.color = 'red';
  error.style.fontSize = '12px';

  error.innerHTML = !value.match(/^[a-zA-Zа-яА-Я]+$/) && value ? 'Invalid data' : '';
  toggleButton();
  return value
}

 function checkEmpty(userData) {
  let errorForm = document.getElementById('errorForm');
  errorForm.style.color = 'red';
  errorForm.style.fontSize = '16px';
  errorForm.innerHTML = '';

  for (const key in userData) {
    if (Object.hasOwnProperty.call(userData, key)) {
      if ((typeof userData[key] === 'string' && !userData[key]) || userData[key] === undefined) {
        errorForm.innerHTML = `Empty ${key} fields`;
        return false;
      }
      if (Array.isArray(userData[key]) && userData[key].length === 0) {
        errorForm.innerHTML = `Empty ${key} fields`;
        return false;
      }
    }
  }
  return true;
 }

function toggleButton() {
  const errorName = document.getElementById('errorName').innerHTML;
  const errorLastname = document.getElementById('errorLastname').innerHTML;

  document.getElementById('btn').disabled = !!(errorName || errorLastname);
}

function createTable(data) {
  let tableContainer = document.getElementById('tableContainer');
  const table = document.createElement('table');

  for(let i = 0; i < 2; i++) {
    let tr = document.createElement('tr');
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        let td = document.createElement('td');
        const element = i === 1 ? data[key] : key;
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

document.getElementById('btn').addEventListener('click', () => {
  let form = document.forms.mainForm;
  let formElements = form.elements;

  const userData = saveData(formElements);

  if (checkEmpty(userData)) {  
    createTable(userData);
    form.style.display = 'none';
  }
})

