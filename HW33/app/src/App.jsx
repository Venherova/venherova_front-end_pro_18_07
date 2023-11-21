import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';

import './App.scss';

function App() {
  const [contacts, setContacts] = useState([]);

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
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter(contact => contact.id !== contactId)); 
  };

  const handleCancel = () => {
    
  };

  return (
  <Router>
    <div>
      <div className='nav-buttons'>
        <Link to='/' className='nav-button'>Контакти</Link>
        <Link to='/add' className='nav-button'>Додати Контакт</Link>
      </div>
      <Routes>
        <Route exact path='/' element={<ContactList contacts={contacts} onDeleteContact={deleteContact} />} />
        <Route path='/add' element={<AddContact onSaveContact={saveContact} onCancel={handleCancel} />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;