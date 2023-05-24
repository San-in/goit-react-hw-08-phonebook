import { changeFilter } from 'redux/filter/filterSlice';

export const onChange = ({ target: { value } }, dispatch) => {
  dispatch(changeFilter(value));
};
