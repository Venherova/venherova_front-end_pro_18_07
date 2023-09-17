function showRows(users) {
  for (let user of users) {
    showUserRow(user);
  }
}

function showModal(userId) {
  modal.show(userId);
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

function showPassword() {
  const passwordInput = document.querySelector(`input[name="password"]`);
  passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
}

function handleSaveUser(userEdit = null) {
  const formElements = document.forms[0].elements;

  const login = formElements.login.value.trim();
  const password = formElements.password.value.trim();
  const name = formElements.name.value.trim();
  const lastName = formElements.lastName.value.trim();
  const age = formElements.age.value.trim();
  const email = formElements.email.value.trim();
  const phoneNumber = formElements.phoneNumber.value.trim();
  const card = formElements.card.value.trim();

  const user = {
    login,
    password,
    name,
    lastName,
    age,
    email,
    phoneNumber,
    card,
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

function validateUser(user) {
  let validationResult;

  validationResult = checkEmptyFields(user);
  if (!validationResult.isValid) {
    return validationResult;
  }

  validationResult = validateRegex(user);
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