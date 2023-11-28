export const FETCH_CONTACTS = 'FETCH_CONTACTS';
export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';

export const fetchContacts = () => {
  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: FETCH_CONTACTS, payload: data.slice(0, 5) });
      })
      .catch(err => {
        console.log(err);
    });
  };
};

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact
});

export const deleteContact = (contactId) => ({
  type: DELETE_CONTACT,
  payload: contactId
});
