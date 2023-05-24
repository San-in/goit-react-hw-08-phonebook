import { StyledPacmanLoader } from 'common/styles';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList ';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIslogIn } from 'redux/auth/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { selectContacts, selectIsLoading } from 'redux/contacts/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isLoginIn = useSelector(selectIslogIn);

  useEffect(() => {
    isLoginIn && dispatch(fetchContacts());
  }, [dispatch, isLoginIn]);
  return (
    <>
      <h3>Phonebook</h3>
      <ContactForm />
      <h3>Contacts</h3>
      {!isLoading ? (
        contacts.length > 0 ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <p>No contacts</p>
        )
      ) : (
        <StyledPacmanLoader color="rgb(128, 0, 128, 0.8)" size="75px" />
      )}
    </>
  );
};

export default Contacts;
