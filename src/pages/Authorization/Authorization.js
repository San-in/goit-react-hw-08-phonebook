import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/auth/operations';
import { AiOutlineHome } from 'react-icons/ai';
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
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Visibility, VisibilityOff } from '@mui/icons-material';
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
  handleEmailChange,
  handleMouseDownPassword,
  handlePasswordChange,
} from 'common/helpers';

const Authorization = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logInUser({ email, password }));
    handleCancel([setEmail, setPassword]);
  };

  const handleClickShowPassword = () => setShowPassword(show => !show);

  return (
    <StyledAuthWrap>
      <BackHomeBtn to="/">
        <AiOutlineHome />
      </BackHomeBtn>
      <h3>Authorization</h3>
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
                  onClick={handleClickShowPassword}
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
            onClick={() => handleCancel([setEmail, setPassword])}
            startIcon={<DeleteIcon />}
          >
            Cancel
          </Button>
        </FormBtnsSet>
      </Box>

      <SwitchFormBtn to="/register">Go to Registration</SwitchFormBtn>
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

export default Authorization;
