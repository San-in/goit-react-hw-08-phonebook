import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList ';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIslogIn } from 'redux/auth/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { ContactListWrap, ContactWrap } from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoginIn = useSelector(selectIslogIn);

  useEffect(() => {
    isLoginIn && dispatch(fetchContacts());
  }, [dispatch, isLoginIn]);
  return (
    <ContactWrap>
      <ContactForm />
      <ContactListWrap>
        {contacts.length > 0 ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <p>No contacts</p>
        )}
      </ContactListWrap>
    </ContactWrap>
  );
};

export default Contacts;
