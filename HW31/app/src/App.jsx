import React, { useState, useEffect } from 'react';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';

import './App.scss';

function App() {
  const [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState('list');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        const limitedData = data.slice(0, 5); // Обмежуємо масив до перших 5 записів
        setContacts(limitedData);
      });
  }, []);

  const saveContact = (newContact) => {
    setContacts([...contacts, { ...newContact, id: Date.now() }]); 
    setCurrentPage('list'); 
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter(contact => contact.id !== contactId)); 
  };

  const handleCancel = () => {
    setCurrentPage('list');
  };

  return (
    <div>
      <div className='nav-buttons'>
        <button className='nav-button' onClick={() => setCurrentPage('list')}>Контакти</button>
        <button className='nav-button' onClick={() => setCurrentPage('add')}>Додати Контакт</button>
      </div>
      {currentPage === 'list' ? (
        <ContactList contacts={contacts} onDeleteContact={deleteContact} />
      ) : (
        <AddContact onSaveContact={saveContact} onCancel={handleCancel} />
      )}
    </div>
  );
}

export default App;