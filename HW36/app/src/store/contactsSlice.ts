import { createSlice, createAsyncThunk, createEntityAdapter, EntityState } from '@reduxjs/toolkit';
import { RootState } from './store';

const contactsAdapter = createEntityAdapter();

interface Contact {
  id: string;
  username: string;
  name: string;
  phone: string;
}

export const fetchContactsAsync = createAsyncThunk<Contact[]>(
  'contacts/fetchContacts',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: Contact[] = await response.json();
    return data.slice(0, 5);
  }
);

interface ContactsState extends EntityState<Contact> {}

export const {
  selectAll: selectAllContacts,
  selectById: selectContactById,
} = contactsAdapter.getSelectors<RootState>(state => state.contacts);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsAdapter.getInitialState() as ContactsState,
  reducers: {
    contactAdded: contactsAdapter.addOne,
    contactRemoved: contactsAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContactsAsync.fulfilled, (state, action) => {
      contactsAdapter.setAll(state, action.payload);
    });
  },
});

export const { contactAdded, contactRemoved } = contactsSlice.actions;
export default contactsSlice.reducer;