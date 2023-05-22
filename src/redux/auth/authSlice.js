import { createSlice } from '@reduxjs/toolkit';
import { STATUS } from 'redux/constants';
import { AnyOfActionsFilteredByStatus, getAction } from 'redux/helpersActions';
import * as operations from 'redux/auth/operations';
import * as handlers from 'redux/auth/helpersHandlers';

const { registrationUser, logInUser, logOutUser } = operations;

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '' },
    token: null,
    isLoginIn: false,
    error: null,
    isLoading: false,
  },
  extraReducers: builder => {
    builder
      .addCase(getAction(registrationUser), handlers.registration)
      .addCase(getAction(logInUser), handlers.login)
      .addCase(getAction(logOutUser), handlers.logout)
      .addMatcher(
        AnyOfActionsFilteredByStatus(STATUS.PENDING, operations),
        handlers.pending
      )
      .addMatcher(
        AnyOfActionsFilteredByStatus(STATUS.FULFILLED, operations),
        handlers.fulfilled
      )
      .addMatcher(
        AnyOfActionsFilteredByStatus(STATUS.REJECTED, operations),
        handlers.rejected
      );
  },
});

export const authReducer = authSlice.reducer;
