import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIslogIn } from 'redux/auth/selectors';
import { selectIsLoading } from 'redux/contacts/selectors';

export const PublicRoot = ({ component, restrict, redirectTo = '/' }) => {
  const isLoading = useSelector(selectIsLoading);
  const isLogIn = useSelector(selectIslogIn);
  const shouldRedirect = !isLoading && isLogIn && restrict;
  const { state } = useLocation();

  return shouldRedirect ? (
    <Navigate to={state ? state : redirectTo} />
  ) : (
    component
  );
};
