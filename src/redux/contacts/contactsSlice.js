import { createSlice } from '@reduxjs/toolkit';
import { STATUS } from 'common/constants';
import { logOutUser } from 'redux/auth/operations';
import {
  AnyOfActionsFilteredByStatus,
  getAction,
} from 'common/helpers/helpersActions';
import * as operations from 'redux/contacts/operations';
import * as handlers from 'redux/contacts/helpersHandlers';

const { addContact, deleteContact, fetchContacts } = operations;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getAction(fetchContacts), handlers.fulfilledGet)
      .addCase(getAction(addContact), handlers.fulfilledPost)
      .addCase(getAction(deleteContact), handlers.fulfilledDelete)
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

export const contactsReducer = contactsSlice.reducer;
