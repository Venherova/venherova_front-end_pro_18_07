let myBirthdateElement = document.getElementById('myBirthdate');
let myBirthdateDisplay = document.getElementById('birthdateDisplay');


function createMyBirthdateButtons() {
  createElement(
    'input',
    myBirthdateElement,
    '', 
    {
      type: 'button',
      value: 'My birthday',
      id: 'birthdayButton',
    }, 
    {
      click: () => changeDateFormat(),
    }
  );
  
  createElement(
    'input',
    myBirthdateElement,
    '', 
    {
      type: 'button',
      value: 'Close',
      id: 'close',
    }, 
    {
      click: () => cleanElement('#birthdateDisplay'),
    }
  );
}

function changeDateFormat() {
  const birthdate = moment('14-11-1986', 'DD-MM-YYYY');
  myBirthdateDisplay.innerText = birthdate.format('DD/MM/YYYY');
}
