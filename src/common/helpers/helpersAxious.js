import axios from 'axios';

export const setToken = token => {
  axios.defaults.headers.common['Authorization'] = token;
};
export const dellToken = () => {
  axios.defaults.headers.common['Authorization'] = '';
};
