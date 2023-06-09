import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';
import { selectIslogIn } from 'redux/auth/selectors';

import {
  Conteiner,
  StyledNavLink,
} from 'components/SharedLayout/SharedLayout.styled';
import { StyledAppBar, StyledBox } from './MenuAppBar.styled';
import { useState } from 'react';
import { UserMenu } from 'components/UserMenu/UserMenu';

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const isLoginIn = useSelector(selectIslogIn);

  const handleMenu = ({ currentTarget }) => {
    setAnchorEl(currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledBox width={'100%'}>
      <Conteiner>
        <StyledAppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <StyledNavLink to="/">Home</StyledNavLink>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 55 }}>
              {isLoginIn && (
                <StyledNavLink to="/contacts">Contacts</StyledNavLink>
              )}
            </Typography>
            {isLoginIn && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                {isLoginIn && (
                  <UserMenu anchorEl={anchorEl} handleClose={handleClose} />
                )}
              </div>
            )}
          </Toolbar>
        </StyledAppBar>
      </Conteiner>
    </StyledBox>
  );
}
