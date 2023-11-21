import React, {useState} from 'react';
import Modal from '../Modal/Modal'; 
import './ContactList.scss';

function ContactList({ contacts, onDeleteContact }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleDeleteClick = (contactId) => {
    setIsModalOpen(true);
    setSelectedContact(contactId);
  };

  const handleConfirmDelete = () => {
    onDeleteContact(selectedContact);
    setIsModalOpen(false);
  };

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