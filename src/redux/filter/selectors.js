import { selectContacts } from 'redux/contacts/selectors';

export const selectFilterValue = state => state.filter.value;

export const selectFilteredList = state => {
  const filteredValue = selectFilterValue(state);
  const contacts = selectContacts(state);
  return filteredValue
    ? contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filteredValue.toLowerCase());
      })
    : contacts;
};
