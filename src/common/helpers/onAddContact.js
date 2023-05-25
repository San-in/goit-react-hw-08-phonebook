import { toast } from 'react-toastify';
import { addContact } from 'redux/contacts/operations';
import { changeFilter } from 'redux/filter/filterSlice';

export const onAddContact = (e, dispatch, contacts) => {
  e.preventDefault();
  const { name, number } = e.currentTarget;
  const isContactExist = contacts.find(
    contact => contact.name.toLowerCase() === name.value.toLowerCase()
  );
  if (isContactExist) {
    toast.warning(`${name.value} is already in contacts.`);
  } else if (name.value.length > 12 || number.value.lenght > 12) {
    toast.warning('Name and Phone number should be shorter than 12 symbols');
  } else {
    dispatch(
      addContact({
        name: name.value,
        number: number.value,
      })
    );
    dispatch(changeFilter(''));
  }

  e.currentTarget.reset();
};
