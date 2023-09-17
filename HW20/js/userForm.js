function showUserForm(user = null) {
  checkViewUserElements();
  checkUserForm();

  const parentSelector = '#form form';

  const inputConfigs = [
    { element: 'label', config: { type: 'label', label: 'Enter login'}},
    { element: 'input', config: { name: 'login', type: 'text', value: user ? user.login : '' }},
    { element: 'label', config: { type: 'label', label: 'Enter password (6-12 characters)'}},
    { element: 'input', config: { name: 'password', type: 'password', value: user ? user.password : '' }},
    { element: 'input', config: { type: 'button', value: 'Show Password' }, handler: { click: () => showPassword() }},
    { element: 'label', config: { type: 'label', label: 'Enter name'}},
    { element: 'input', config: { name: 'name', type: 'text', value: user ? user.name : '' }},
    { element: 'label', config: { type: 'label', label: 'Enter last name'}},
    { element: 'input', config: { name: 'lastName', type: 'text', value: user ? user.lastName : '' }},
    { element: 'label', config: { type: 'label', label: 'Enter age (16+)'}},
    { element: 'input', config: { name: 'age', type: 'number', value: user ? user.age : '' }},
    { element: 'label', config: { type: 'label', label: 'Enter email'}},
    { element: 'input', config: { name: 'email', type: 'text', value: user ? user.email : '' }},
    { element: 'label', config: { type: 'label', label: 'Enter phone number (38XXXXXXXXXX)'}},
    { element: 'input', config: { name: 'phoneNumber', type: 'number', value: user ? user.phoneNumber : '' }},
    { element: 'label', config: { type: 'label', label: 'Enter your card number (16 characters)'}},
    { element: 'input', config: { name: 'card', type: 'number', value: user ? user.card : '' }},
    { element: 'input', config: { type: 'button', value: 'Save' }, handler: { click: () => handleSaveUser(user) }},
    { element: 'span', config: { id: 'error-form' }},
  ];
  
  for (const item of inputConfigs) {
    switch (item.config.type) {
      case 'button':
        createElement(item.element, parentSelector, '', item.config, item.handler); 
        break;
      case 'label':
        createElement(item.element, parentSelector, item.config.label);
        break;
      default:
        createElement(item.element, parentSelector, '', item.config);
    }
  }
}
