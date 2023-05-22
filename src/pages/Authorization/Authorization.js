import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom/dist';
import { logInUser } from 'redux/auth/operations';
import { StyledFormBtn } from 'components/ContactForm/ContactForm.styled';

const Authorization = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };
  const handleCancel = () => {
    setEmail('');
    setPassword('');
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logInUser({ email, password }));
    handleCancel();
  };

  return (
    <div>
      <h2>Authorization</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <StyledFormBtn type="submit">Ok</StyledFormBtn>
        <StyledFormBtn type="button" onClick={handleCancel}>
          Cancel
        </StyledFormBtn>
      </form>
      <NavLink to="/">Go Home</NavLink>
      <NavLink to="/register">Go to Registration</NavLink>
    </div>
  );
};

export default Authorization;
