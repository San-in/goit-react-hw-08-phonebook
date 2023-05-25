import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterLabel } from 'components/Filter/Filter.styled';
import { selectFilterValue } from 'redux/filter/selectors';
import { onChange } from 'common/helpers';
import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilterValue);

  return (
    <>
      <FilterLabel htmlFor="find">Find contacts by name</FilterLabel>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        variant="filled"
        size="small"
        name="find"
        color="secondary"
        value={filterValue}
        onChange={e => onChange(e, dispatch)}
        onBlur={() => onChange('', dispatch)}
        sx={{
          backgroundColor: 'rgba(128,0, 128, 0.4)',
          '&:hover': {
            backgroundColor: 'rgba(128,0, 128, 0.6)',
          },
          '&:focus': {
            backgroundColor: 'rgba(128,0, 128, 0.6)',
          },
        }}
      />
    </>
  );
};
