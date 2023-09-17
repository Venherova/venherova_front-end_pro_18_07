function showUserInfo(user) {
  checkUserForm();

  const parentSelector = '#userInfo';
  const parent = document.getElementById('userInfo');
  parent.innerHTML = '';

  const userProperties = [
    { element: 'span', label: 'Login', prop: 'login' },
    { element: 'span', label: 'Password', prop: 'password' },
    { element: 'span', label: 'Name', prop: 'name' },
    { element: 'span', label: 'Last name', prop: 'lastName' },
    { element: 'span', label: 'Age', prop: 'age' },
    { element: 'span', label: 'Email', prop: 'email' },
    { element: 'span', label: 'Phone number', prop: 'phoneNumber' },
    { element: 'span', label: 'Card', prop: 'card' },
    { element: 'input', config: { type: 'button', value: 'Close' }, handler: { click: () => cleanElement('#userInfo') }},
  ];

  for (const item of userProperties) {
    switch (item.element) {
      case 'input':
        createElement(item.element, parentSelector, '', item.config, item.handler); 
        break;
      default:
        createElement(item.element, parentSelector, `${item.label}: ${user[item.prop]}`);
    }
  }
}
