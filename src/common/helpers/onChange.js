import { changeFilter } from 'redux/filter/filterSlice';

export const onChange = (e, dispatch) => {
  if (e === '') {
    dispatch(changeFilter(''));
    return;
  }
  dispatch(changeFilter(e.target.value));
};
