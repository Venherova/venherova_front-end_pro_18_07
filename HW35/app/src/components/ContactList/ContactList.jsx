import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactRemoved, selectAllContacts } from '../../store/contactsSlice';

import Modal from '../Modal/Modal'; 
import './ContactList.scss';

function ContactList() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const contacts = useSelector(selectAllContacts);

  const handleDeleteClick = (contactId) => {
    setIsModalOpen(true);
    setSelectedContact(contactId);
  };

  const handleConfirmDelete = () => {
    dispatch(contactRemoved(selectedContact));
    setIsModalOpen(false);
  };

  if (!contacts || contacts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
      >
        Ви впевнені, що хочете видалити цей контакт?
      </Modal>

      <table className='contact-table'>
        <thead>
          <tr>
            <th>Username</th>
            <th>Ім'я Прізвище</th>
            <th>Телефон</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td>{contact.username}</td>
              <td>{contact.name}</td>
              <td>{contact.phone}</td>
              <td>
                <button onClick={() => handleDeleteClick(contact.id)}>Видалити</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactList;
