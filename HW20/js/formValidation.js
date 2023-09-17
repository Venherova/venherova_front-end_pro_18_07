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

function validateRegex({ password, name, lastName, age, email, phoneNumber, card }) {
  const regexes = [
    { name: 'passwordRegex', regexp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,12}$/, value: password, errorText: 'Invalid password format (6-12 char, A-Z a-z 0-9)' },
    { name: 'nameRegex', regexp: /^[A-Za-zА-Яа-я\s]{2,15}$/, value: name, errorText: 'Invalid name format' },
    { name: 'lastNameRegex', regexp: /^[A-Za-zА-Яа-я\s]{2,20}$/, value: lastName, errorText: 'Invalid last name format' },
    { name: 'ageRegex', regexp: /^(1[6-9]|[2-9][0-9])$/, value: age, errorText: 'Invalid age format (available 16-99 ages)' },
    { name: 'emailRegex', regexp: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, value: email, errorText: 'Invalid email format' },
    { name: 'phoneRegex', regexp: /^380\d{9}$/, value: phoneNumber, errorText: 'Invalid phone format (format 38ХХХХХХХХХХ)' },
    { name: 'cardNumberRegex', regexp: /^(\d{16})$/, value: card, errorText: 'Invalid card format' },
  ];

  for (const regexItem of regexes) {
    if (!regexItem.regexp.test(regexItem.value)) {
      return { isValid: false, errorMessage: regexItem.errorText };
    }
  }

  return { isValid: true, errorMessage: '' };
}
