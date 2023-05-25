import React from 'react';
import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { selectFilteredList } from 'redux/filter/selectors';
import { NotificationText } from './ContactList.styled';
import { List } from '@mui/material';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredList);

  return (
    <>
      {filteredContacts.length ? (
        <List>
          {filteredContacts.map(item => {
            return <ContactItem item={item} key={item.id} />;
          })}
        </List>
      ) : (
        <NotificationText>No matches</NotificationText>
      )}
    </>
  );
};
