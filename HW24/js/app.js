let person;
let agePerson = 18;
let car;
const infoModal = new bootstrap.Modal('#infoModal')

function validateFormData(data, type) {
  let validationResult;

  validationResult = checkEmptyFields(data);
  if (!validationResult.isValid) {
    return validationResult;
  }

  if (type === 'person') {
    validationResult = validateRegex(data);
    if (!validationResult.isValid) {
      return validationResult;
    }
  }

  return { isValid: true, errorMessage: '' };
}

function createPerson() {
  const name = document.getElementById('personName').value;
  const age = document.getElementById('personAge').value;
   
  const validationResult = validateFormData({ name, age }, 'person');

  if (!validationResult.isValid) {
    showModal('Form error', validationResult.errorMessage);
    return;
  }

  if (name && age >= agePerson) {
    person = new Person(name, age);
    person.getInfo();
  } else {
    showModal('Create person error', 'Invalid input for person');
  }
}

function createCar() {
  const brand = document.getElementById('carBrand').value;
  const model = document.getElementById('carModel').value;
  const engineSize = document.getElementById('engineSize').value;
  const engineType = document.getElementById('engineType').value;

  const validationResult = validateFormData({ brand, model, engineSize, engineType }, 'car');

  if (!validationResult.isValid) {
    showModal('Form error', validationResult.errorMessage);
    return;
  }

  if (brand && model && engineSize && engineType) {
    car = new Car(brand, model, engineSize, engineType);
    if(person) {
      car.setOwner(person);
    }
    car.getInfo();
  } else {
    showModal('Create car error', 'Invalid input for car');
  }
}

function showModal(title, text) {
  const infoModalLabel = document.getElementById('infoModalLabel');
  const modalBody = document.getElementById('infoModalBody');
  
  
  let html = '';
  html += `<p>${text}</p>`;

  infoModalLabel.innerHTML = title;
  modalBody.innerHTML = html;
  infoModal.show();
}