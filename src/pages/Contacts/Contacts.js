import { ContactForm } from 'components/ContactForm/ContactForm';

import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIslogIn } from 'redux/auth/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { ContactListWrap, ContactWrap } from './Contacts.styled';
import { ContactList } from 'components/ContactList/ContactList';
import { ToastContainer } from 'react-toastify';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoginIn = useSelector(selectIslogIn);

  useEffect(() => {
    isLoginIn && dispatch(fetchContacts());
  }, [dispatch, isLoginIn]);

  return (
    <>
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
      <ToastContainer
        autoClose={500}
        draggablePercent={60}
        style={{
          width: 200,
          fontSize: 14,
          fontWeight: 600,
        }}
      />
    </>
  );
};

export default Contacts;
