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

function validateRegex({ name, age }) {

  const regexes = [
    { name: 'nameRegex', regexp: /^[A-Za-zА-Яа-я\s]{2,15}$/, value: name, errorText: 'Invalid name format' },
    { name: 'ageRegex', regexp: /^(1[89]|[2-9]\d)$/, value: age, errorText: 'Invalid age format (available 18-99 ages)' },
  ];

  for (const regexItem of regexes) {
    if (!regexItem.regexp.test(regexItem.value)) {
      return { isValid: false, errorMessage: regexItem.errorText };
    }
  }

  return { isValid: true, errorMessage: '' };
}
