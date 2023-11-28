import { combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './contactsReducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export default rootReducer;
