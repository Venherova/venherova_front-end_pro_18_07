import React from 'react';
import './ContactList.scss';

function ContactList({ contacts, onDeleteContact }) {
  return (
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
              <button onClick={() => onDeleteContact(contact.id)}>Видалити</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ContactList;