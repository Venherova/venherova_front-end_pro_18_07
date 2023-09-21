let userBirthdateElement = document.getElementById('userBirthdate');
let userBirthdateDisplay = document.getElementById('userBirthdateDisplay');


function createUserBirthdateButtons() {
  createElement(
    'input',
    userBirthdateElement,
    '', 
    { name: 'userBirthdate', type: 'text', value: '', placeholder: 'Enter your birthdate' }
  );

  createElement(
    'input',
    userBirthdateElement,
    '', 
    {
      type: 'button',
      value: 'Transform date',
      id: 'close',
    }, 
    {
      click: () => transfromDate(),
    }
  );
}

function validate(value) {
  const regex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/;
  if (!regex.test(value)) {
    return { isValid: false, errorMessage: 'Invalid date format. Please use format DD.MM.YYYY'};
  }
  return { isValid: true, errorMessage: ''};
}

let errorUserDateVisible = false;

function transfromDate() {
  const formElements = document.forms[0].elements;
  const userBirthdate = formElements.userBirthdate.value.trim();

  const validationResult = validate(userBirthdate);

  if (!validationResult.isValid) {
    cleanElement('#userBirthdateDisplay');

    if (!errorUserDateVisible) {
      const errorElement = createElement(
        'div',
        userBirthdateElement,
        '', 
        { id: 'errorForm' },
      );
      appendAlert(errorElement, validationResult.errorMessage, 'warning');
      errorUserDateVisible = true;
    }
  } else {
    const currentAlert = document.querySelector('#errorForm');
    if (currentAlert) {
      removeElement('#errorForm')
    }
    errorUserDateVisible = false;

    let birthdateArray = userBirthdate.split('.').reverse();
    let day = birthdateArray.join('-');
    
    userBirthdateDisplay.innerText = moment(day).format('DD MMMM YYYY');
  }
}


