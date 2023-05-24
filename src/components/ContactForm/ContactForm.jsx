import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { onAddContact } from 'common/helpers/onAddContact';
import { Box, Button, TextField } from '@mui/material';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  return (
    <>
      <Box
        component="form"
        sx={{
          padding: '20px',
          marginBottom: '20px',
          border: '2px solid rgba(128, 0, 128, 0.8)',
          maxWidth: '50vw',
          display: 'flex',
          flexDirection: 'column',
          justufyContent: 'center',
          alignItems: 'center',
          borderRadius: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',

          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            border: '2px solid rgb(128, 0, 128, 1)',
          },
          '&:focus': {
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            border: '2px solid rgb(128, 0, 128, 1)',
          },
        }}
        noValidate
        onSubmit={e => onAddContact(e, dispatch, contacts)}
      >
        <TextField
          label="Name"
          type="text"
          id="name"
          color="secondary"
          required
          sx={{
            width: '90%',
            marginBottom: '20px',
          }}
        />
        <TextField
          label="Phone"
          type="tel"
          id="number"
          color="secondary"
          required
          sx={{
            width: '90%',
            marginBottom: '20px',
          }}
        />
        <Button
          type="submit"
          color="secondary"
          sx={{
            fontWeight: 600,
            '&:hover': {
              border: '1px solid rgba(128, 0, 128, 0.8)',
            },
          }}
        >
          Add Contact
        </Button>
      </Box>
    </>
  );
};
