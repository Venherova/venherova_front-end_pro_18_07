import { ADD_CONTACT, DELETE_CONTACT, FETCH_CONTACTS } from '../actions/contactActions';

const initialState = {
  contacts: []
};

function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CONTACTS:
        return { ...state, contacts: action.payload };
    case ADD_CONTACT:
        return { ...state, contacts: [...state.contacts, action.payload] };
    case DELETE_CONTACT:
        return { ...state, contacts: state.contacts.filter(contact => contact.id !== action.payload) };
    default:
        return state;
}
}

export default contactsReducer;
