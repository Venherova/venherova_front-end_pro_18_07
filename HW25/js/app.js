let house;
let currentApartment = 0;
let currentPerson = 0;
const infoModal = new bootstrap.Modal('#infoModal')

 
function createApartmentForms(totalApartments) {
  const formContainer = createElement('div', '#apartmentForms');
  const form = createElement('form', formContainer, null, { className: 'batchApartmentForm' });

  for (let i = 0; i < totalApartments; i++) {
    createElement('h5', form, `Apartment ${i+1}`);
    createElement('input', form, null, { type: 'number', placeholder: 'Rooms in apartment', 'data-rooms': `${i}` });
    createElement('input', form, null, { type: 'number', placeholder: 'People in apartment', 'data-people': `${i}` });
  }

  createElement('button', form, 'Next', { className: 'btn btn-primary' });
}

document.getElementById('houseForm').addEventListener('submit', function (event) {
  event.preventDefault();
  
  const address = document.getElementById('address').value;
  const floors = +document.getElementById('floors').value;
  const apartmentsPerFloor = +document.getElementById('apartmentsPerFloor').value;
  
  if (!address || !floors || !apartmentsPerFloor) {
    showModal('Form error', 'Fill all the fields!');
    return;
  }

  house = new House(address, floors, []);
  for (let i = 0; i < floors * apartmentsPerFloor; i++) {
    house.appartments.push(new Appartment(i + 1, 0, []));
  }
  
  createApartmentForms(floors * apartmentsPerFloor);
  this.style.display = 'none';
});

document.getElementById('apartmentForms').addEventListener('submit', function (event) {
  event.preventDefault();

  if (event.target.className === 'batchApartmentForm') {
    const roomsInputs = [...event.target.querySelectorAll('input[data-rooms]')];
    const peopleInputs = [...event.target.querySelectorAll('input[data-people]')];
      
    roomsInputs.forEach((roomInput, index) => {
      const roomsInApartment = +roomInput.value;
      const peopleInApartment = +peopleInputs[index].value;

      if (!roomsInApartment || !peopleInApartment) {
        showModal('Form error', 'Fill all fields for each apartment!');
        return;
      }

      house.appartments[index].roomsAmount = roomsInApartment;
      house.appartments[index].people = Array(peopleInApartment).fill(null);
    });

    if (roomsInputs.some((roomInput, index) => !+roomInput.value || !+peopleInputs[index].value)) {
      return;
    }

    createPeopleForms();

    document.getElementById("apartmentForms").style.display = "none";
  }
});

function createPeopleForms() {
  const form = createElement('form', '#peopleForms', null, { className: 'peopleForm' });

    house.appartments.forEach((apartment, apartmentIndex) => {
      apartment.people.forEach((_, personIndex) => {
        createElement('h5', form, `Person in apartment ${apartmentIndex+1}`);
        createElement(
            'input', 
            form, 
            null, 
            {
                type: 'text', 
                placeholder: 'Full Name', 
                'data-apartment': `${apartmentIndex}`, 
                'data-person': `${personIndex}`
            }
        );
        if (apartmentIndex === house.appartments.length - 1 && personIndex === apartment.people.length - 1) {
            createElement('button', form, 'Submit', { className: 'btn btn-primary' });
        }
      });
    });
}

function allPeopleFormsFilled() {
  console.log(house.appartments);
  return house.appartments.every(apartment => apartment.people.every(person => person !== null));
}

document.getElementById('peopleForms').addEventListener('submit', function (event) {
  event.preventDefault();

  const nameInputs = [...event.target.querySelectorAll('#peopleForms input[type="text"]')];
  nameInputs.forEach(input => {
    const personName = input.value;
    const apartmentIndex = +input.dataset.apartment;
    const personIndex = +input.dataset.person;
    
    if (!personName) {
      showModal('Form error', 'Fill the field!');
      return;
    }

    house.appartments[apartmentIndex].people[personIndex] = new Person(personName);
  });

  if (allPeopleFormsFilled()) {
    house.showInfo();
    document.getElementById('peopleForms').style.display = 'none';
  }
});

function showModal(title, text) {
  const infoModalLabel = document.getElementById('infoModalLabel');
  const modalBody = document.getElementById('infoModalBody');
  
  let html = '';
  html += `<p>${text}</p>`;

  infoModalLabel.innerHTML = title;
  modalBody.innerHTML = html;
  infoModal.show();
}
