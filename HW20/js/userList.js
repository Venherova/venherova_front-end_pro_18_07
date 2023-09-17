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
      click: () => showUserForm(user)
    }
  ); // editBtnElement

  createElement(
    'input',
    actionsElement,
    '',
    { type: 'button', value: 'Delete', 'data-type': 'delete' },
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
