import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/operations';
import ListItemText from '@mui/material/ListItemText';
import { IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { StyledListItemText } from './ContactItem.styled';

export const ContactItem = ({ item: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <ListItemText>
      <StyledListItemText>
        <>
          <p>
            Name: <br /> {name}
          </p>
          <p>
            Phone:
            <br /> {number}
          </p>
        </>
        <IconButton
          aria-label="delete"
          onClick={({ currentTarget: { id } }) => dispatch(deleteContact(id))}
          id={id}
          color="secondary"
          sx={{
            marginLeft: 'auto',
          }}
        >
          <DeleteForeverIcon />
        </IconButton>
      </StyledListItemText>
    </ListItemText>
  );
};

ContactItem.propTypes = {
  item: PropTypes.exact({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
