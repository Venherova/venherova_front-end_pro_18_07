import React, { useState } from 'react';
import './AddContact.scss';

function AddContact({ onSaveContact, onCancel }) {
  const [name, setName] = useState('');
  const [username, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({ name: '', surname: '', phone: '' });

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    if (!name.trim()) {
      errors.name = 'Введіть ім\'я';
      formIsValid = false;
    }

    if (!username.trim()) {
      errors.surname = 'Введіть прізвище';
      formIsValid = false;
    }

    if (!phone.trim()) {
      errors.phone = 'Введіть телефон';
      formIsValid = false;
    } else if (!/^[0-9]{10}$/.test(phone)) {
      errors.phone = 'Номер телефону має бути у форматі 10 цифр';
      formIsValid = false;
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    onSaveContact({ name, username, phone });
  };

  return (
    <div className='container'>
    <form className='form-container' onSubmit={handleSubmit}>
      <input 
        className='input-field'
        type='text' 
        placeholder='Username' 
        value={username} 
        onChange={(e) => setSurname(e.target.value)} 
      />
      {errors.surname && <div className='error'>{errors.surname}</div>}

      <input 
        className='input-field'
        type='text' 
        placeholder="Ім\'я Призвіще"
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      {errors.name && <div className='error'>{errors.name}</div>}

      <input 
        className='input-field'
        type='tel' 
        placeholder='Телефон'
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
      />
      {errors.phone && <div className='error'>{errors.phone}</div>}

      <button type='submit' className='submit-button'>Зберегти</button>
      <button type='button' className='cancel-button' onClick={onCancel}>Скасувати</button>
    </form>
    </div>
  );
}

export default AddContact;