import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';
import { dellToken, setToken } from 'common/helpers/helpersAxious';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const registrationUser = createAsyncThunk(
  'auth/signup',
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', body);
      setToken(data.token);
      toast.success('User is created');
      return data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      errorMessage
        ? toast.error(errorMessage)
        : toast.error('Email is not unique');
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logInUser = createAsyncThunk(
  'auth/login',
  async (body, thunkAPI) => {
    try {
      if (!body.name && !body.password) {
        toast.warning('Both fields must be filled');
        return;
      }
      const { data } = await axios.post('/users/login', body);

      toast.success(`Welcome ${data.user.name}`);
      return data;
    } catch (error) {
      toast.error('Incorrect data');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logout',
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/logout', body);
      dellToken();
      toast.warning('You are logged out');
      return data;
    } catch (error) {
      toast.error(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
