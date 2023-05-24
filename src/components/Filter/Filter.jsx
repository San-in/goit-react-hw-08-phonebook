import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterLabel, FilterInput } from 'components/Filter/Filter.styled';
import { selectFilterValue } from 'redux/filter/selectors';
import { onBlur, onChange } from 'common/helpers';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilterValue);

  return (
    <>
      <FilterLabel htmlFor="find">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        name="find"
        id="find"
        value={filterValue}
        onChange={e => onChange(e, dispatch)}
        onBlur={onBlur}
      />
    </>
  );
};
