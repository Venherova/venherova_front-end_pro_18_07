function showRows(users) {
  for (let user of users) {
    showUserRow(user);
  }
}

function showUserRow(user) {
  const container = createElement('div', '#users', '', { 'data-user-id': user.id }); // container

  createElement('div', container, user.id); // idElement
  createElement('div', container, user.name + ' ' + user.lastName); // nameElement

  const actionsElement = createElement('div', container, '', { className: 'actions', 'data-id': user.id });

  createElement(
    'input',
    actionsElement,
    '',
    { type: 'button', value: 'Edit', 'data-type': 'edit' },
    {
      click: () => showUserForm(user, 'edit')
    }
  ); // editBtnElement

  createElement(
    'input',
    actionsElement,
    '',
    { type: 'button', value: 'Delete', 'data-type': 'delete' },
    // {
    //   click: handleDeleteUser
    // }
    {
      click: () => showModal(user.id),
    }
  ); // deleteBtnElement

  createElement(
    'input',
    actionsElement,
    '',
    { type: 'button', value: 'View', 'data-type': 'view' },
    {
      click: () => showUserInfo(user)
    }
  ); // viewBt
}

function showModal(userId) {
  modal.show(userId);
}

function showUserInfo(user) {
  checkUserForm();

  const parentSelector = '#userInfo';
  const parent = document.getElementById('userInfo');
  parent.innerHTML = '';


  createElement(
    'span',
    parentSelector,
    `login: ${ user.login }`,
  ); // login
  
  createElement(
    'p',
    parentSelector,
    `name: ${ user.name }`,
  ); // name
  
  createElement(
    'p',
    parentSelector,
    `last name: ${ user.lastName }`,
  ); // lastName

  createElement(
    'p',
    parentSelector,
    `email: ${ user.email }`,
  ); // email
  
  createElement(
    'input',
    parentSelector,
    '',
    {
      type: 'button',
      value: 'Close',
    },
    {
      click: () => cleanElement('#userInfo'),
    }
  );
}

function checkViewUserElements() {
  const existingEl = document.getElementById('userInfo');
  if (existingEl) {
    cleanElement('#userInfo');
  }
}

function checkUserForm() {
  const existingForm = document.getElementById('form');
  if (existingForm) {
    cleanElement('#form form');
  }
}

function showUserForm(user = null, type = 'add') {
  checkViewUserElements();
  checkUserForm();

  const parentSelector = '#form form';
  
  createElement(
    'input',
    parentSelector,
    '',
    {
      name: 'login',
      type: 'text',
      placeholder: 'Enter login',
      value: user ? user.login : '',
    }
  ); // login input

  createElement(
    'input',
    parentSelector,
    '',
    {
      name: 'name',
      type: 'text',
      placeholder: 'Enter name',
      value: user ? user.name : '',
    }
  ); // name input

  createElement(
    'input',
    parentSelector,
    '',
    {
      name: 'lastName',
      type: 'text',
      placeholder: 'Enter last name',
      value: user ? user.lastName : '',
    }
  ); // lastName input

  createElement(
    'input',
    parentSelector,
    '', 
    {
      name: 'email',
      type: 'text',
      placeholder: 'Enter email',
      value: user ? user.email : '',
    }
  ); // email input

  createElement(
    'input',
    parentSelector,
    '',
    {
      type: 'button',
      value: 'Save',
    },
    {
      click: () => {
        switch (type) {
          case 'edit':
            handleSaveUser(user);
            break;
          case 'add':
          default:
            handleSaveUser(user);
        }
      }
    }
  );

  createElement(
    'p',
    parentSelector,
    '',
    {
      id: 'error-form',
    }
  );
}

function handleSaveUser(userEdit = null) {
  const formElements = document.forms[0].elements;

  const login = formElements.login.value.trim();
  const name = formElements.name.value.trim();
  const lastName = formElements.lastName.value.trim();
  const email = formElements.email.value.trim();


  const user = {
    login,
    name,
    lastName,
    email,
    id: userEdit ? userEdit.id : generateId(), 
  };

  const validationResult = validateUser(user);

  if (!validationResult.isValid) {
    const errorForm = document.getElementById('error-form');
    errorForm.innerHTML = validationResult.errorMessage;
  } else {
    userEdit ? editUser(user) : saveUser(user);
    cleanElement('#form form');
  }
}

function generateId() {
  return Math.floor(Math.random() * 1000);
}

function checkEmptyFields(data) {
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      if ((typeof data[key] === 'string' && !data[key]) || data[key] === undefined) {
        return { isValid: false, errorMessage: `Empty ${key} fields` };
      }
    }
  }

  return { isValid: true, errorMessage: '' };;
}

function checkEmailValidator(email) {
  const emailPattern = /^([-a-zA-Z0-9!#$%&'*+\/=?^_`{|}~]|(?<!^)\.(?![@.]))+@((((?<!@)-(?!\.))|[a-zA-Z0-9])+\.)+[a-zA-Z]{2,6}$/;

  if (!emailPattern.test(email)) {
    return { isValid: false, errorMessage: 'Invalid email format' };
  }

  return { isValid: true, errorMessage: '' };
}

function validateUser(user) {
  let validationResult;

  validationResult = checkEmptyFields(user);
  if (!validationResult.isValid) {
    return validationResult;
  }

  validationResult = checkEmailValidator(user.email);
  if (!validationResult.isValid) {
    return validationResult;
  }

  return { isValid: true, errorMessage: '' };
}


function editUser(user) {
  const index = users.findIndex(userEl => userEl.id === user.id);
  users[index] = user;

  updateStorage();
  cleanElement('#users');
  showRows(users);
}

function saveUser(newUser) {
  users.push(newUser);
  updateStorage();
  showUserRow(newUser);
}

function handleDeleteUser(userId) {
  checkViewUserElements();
  checkUserForm();
  deleteUserById(+userId);
}

function deleteUserById(id) {
  const indexToRemove = users.findIndex(user => user.id === id);
  users.splice(indexToRemove, 1);
  removeElement(`div[data-user-id="${id}"]`);
  updateStorage();
}

function updateStorage() {
  localStorage.setItem('users', JSON.stringify(users));
}