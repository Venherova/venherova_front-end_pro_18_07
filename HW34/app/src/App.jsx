import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, fetchContacts } from './store/actions/contactActions';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';

import './App.scss';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSaveContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const handleCancel = () => {};

  return (
  <Router>
    <div>
      <div className='nav-buttons'>
        <Link to='/' className='nav-button'>Контакти</Link>
        <Link to='/add' className='nav-button'>Додати Контакт</Link>
      </div>
      <Routes>
        <Route exact path='/' element={<ContactList contacts={contacts} onDeleteContact={handleDeleteContact} />} />
        <Route path='/add' element={<AddContact onSaveContact={handleSaveContact} onCancel={handleCancel} />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
