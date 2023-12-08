import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactRemoved, selectAllContacts } from '../../store/contactsSlice';

import Modal from '../Modal/Modal'; 
import './ContactList.scss';

// Припущення структури даних для контакту
interface Contact {
  id: string;
  username: string;
  name: string;
  phone: string;
}

function ContactList() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedContact, setSelectedContact] = useState<string | null>(null);
  const contacts = useSelector(selectAllContacts) as Contact[];

  const handleDeleteClick = (contactId: string) => {
    setIsModalOpen(true);
    setSelectedContact(contactId);
  };

  const handleConfirmDelete = () => {
    if (selectedContact) {
      dispatch(contactRemoved(selectedContact));
      setIsModalOpen(false);
    }
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
          {contacts.map((contact: Contact) => (
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
