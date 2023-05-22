import { StyledFormBtn } from 'components/ContactForm/ContactForm.styled';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom/dist';
import { registrationUser } from 'redux/auth/operations';
import { selectIslogIn } from 'redux/auth/selectors';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoginIn = useSelector(selectIslogIn);

  useEffect(() => {
    isLoginIn && navigate('/contacts');
  }, [isLoginIn, navigate]);

  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };
  const handleCancel = () => {
    setName('');
    setEmail('');
    setPassword('');
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registrationUser({ name, email, password }));
    handleCancel();
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />

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
        <StyledFormBtn onClick={handleCancel}>Cancel</StyledFormBtn>
      </form>
      <NavLink to="/">Go Home</NavLink>
      <NavLink to="/login">Go to Authorization</NavLink>
    </div>
  );
};

export default Registration;
