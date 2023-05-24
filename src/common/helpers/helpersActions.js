import { isAnyOf } from '@reduxjs/toolkit';
import { STATUS } from 'common/constants';

export const AnyOfActionsFilteredByStatus = (status, operations) => {
  const arrayOfActions = Object.values(operations);
  const actionsFilteredByStatus = arrayOfActions.map(
    itemOperation => itemOperation[status]
  );
  return isAnyOf(...actionsFilteredByStatus);
};

export const getAction = (itemOperation, status = STATUS.FULFILLED) =>
  itemOperation[status].type;
