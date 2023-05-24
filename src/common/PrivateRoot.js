import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIslogIn } from 'redux/auth/selectors';
import { selectIsLoading } from 'redux/contacts/selectors';

export const PrivateRoot = ({ component, redirectTo = '/' }) => {
  const isLoading = useSelector(selectIsLoading);
  const isLogIn = useSelector(selectIslogIn);
  const shouldRedirect = !isLoading && !isLogIn;
  const location = useLocation();

  return shouldRedirect ? (
    <Navigate to={redirectTo} state={location} />
  ) : (
    component
  );
};
