import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom/dist';
import { registrationUser } from 'redux/auth/operations';
import { selectIslogIn } from 'redux/auth/selectors';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { AiOutlineHome } from 'react-icons/ai';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FormBtnsSet,
  StyledAuthWrap,
  SwitchFormBtn,
  BackHomeBtn,
} from 'common/styles';
import {
  handleCancel,
  handleClickShowPassword,
  handleEmailChange,
  handleMouseDownPassword,
  handleNameChange,
  handlePasswordChange,
} from 'common/helpers';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoginIn = useSelector(selectIslogIn);

  useEffect(() => {
    isLoginIn && navigate('/contacts');
  }, [isLoginIn, navigate]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registrationUser({ name, email, password }));
    handleCancel([setEmail, setName, setPassword]);
  };

  return (
    <StyledAuthWrap>
      <BackHomeBtn to="/">
        <AiOutlineHome />
      </BackHomeBtn>
      <h3>Registration</h3>
      <Box
        component="form"
        sx={{
          padding: '20px',
          marginBottom: '20px',
          border: '2px solid rgba(25, 118, 210, 0.5)',
          maxWidth: '50vw',
          display: 'flex',
          flexDirection: 'column',
          justufyContent: 'center',
          alignItems: 'center',
          borderRadius: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',

          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            border: '2px solid #1976d2',
          },
          '&:focus': {
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            border: '2px solid #1976d2',
          },
        }}
        noValidate
        onSubmit={handleSubmit}
      >
        <TextField
          label="Name"
          type="text"
          id="name"
          value={name}
          onChange={e => handleNameChange(e, setName)}
          required
          sx={{
            width: '90%',
            marginBottom: '20px',
          }}
        />
        <TextField
          label="Email"
          type="email"
          id="email"
          value={email}
          onChange={e => handleEmailChange(e, setEmail)}
          required
          sx={{
            width: '90%',
            marginBottom: '20px',
          }}
        />
        <FormControl
          sx={{
            width: '90%',
            marginBottom: '40px',
          }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={e => handlePasswordChange(e, setPassword)}
            required
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={e => handleClickShowPassword(e, setShowPassword)}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormBtnsSet>
          <Button
            sx={{
              minWidth: 117,
            }}
            variant="contained"
            type="submit"
            endIcon={<SendIcon />}
          >
            OK
          </Button>
          <Button
            sx={{
              minWidth: 117,
            }}
            variant="outlined"
            onClick={() => handleCancel([setEmail, setName, setPassword])}
            startIcon={<DeleteIcon />}
          >
            Cancel
          </Button>
        </FormBtnsSet>
      </Box>

      <SwitchFormBtn to="/login">Go to Authorization</SwitchFormBtn>
      <ToastContainer
        autoClose={300}
        draggablePercent={60}
        style={{
          width: 200,
          fontSize: 14,
          fontWeight: 600,
        }}
      />
    </StyledAuthWrap>
  );
};

export default Registration;
