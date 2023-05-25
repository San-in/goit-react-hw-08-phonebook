import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/operations';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { ListItemIcon } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { StyledListItemText } from './ContactItem.styled';

export const ContactItem = ({ item: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <ListItemText>
      <StyledListItemText>
        <>
          <p>Name: {name}</p> <p>Phone: {number}</p>
        </>
        <ListItemButton
          onClick={({ currentTarget: { id } }) => dispatch(deleteContact(id))}
          id={id}
        >
          <ListItemIcon>
            <DeleteForeverIcon />
          </ListItemIcon>
        </ListItemButton>
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
