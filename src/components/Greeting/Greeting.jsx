import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUserInfo } from 'redux/auth/selectors';

export const Greeting = () => {
  const user = useSelector(selectUserInfo);
  return (
    <div>
      <h2>Dear {user.name}!</h2>
      <p>Let's start to use your personal phonebook right now!</p>
      <NavLink to="/contacts">GO</NavLink>
    </div>
  );
};
