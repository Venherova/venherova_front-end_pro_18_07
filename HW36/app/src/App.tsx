import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store/store'; // import AppDispatch from your store configuration
import { fetchContactsAsync } from './store/contactsSlice';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';

import './App.scss';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchContactsAsync());
  }, [dispatch]);

  return (
    <Router>
      <div>
        <div className='nav-buttons'>
          <Link to='/' className='nav-button'>Контакти</Link>
          <Link to='/add' className='nav-button'>Додати Контакт</Link>
        </div>

        <Routes>
          <Route path='/' element={<ContactList />} />
          <Route path='/add' element={<AddContact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
