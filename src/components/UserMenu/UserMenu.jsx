import { Menu, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutUser } from 'redux/auth/operations';
import { selectIslogIn, selectUserInfo } from 'redux/auth/selectors';
import { BiExit } from 'react-icons/bi';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import { BiUserPin } from 'react-icons/bi';
import { IconContext } from 'react-icons';

export const UserMenu = ({ anchorEl, handleClose }) => {
  const { name, email } = useSelector(selectUserInfo);
  const isLoginIn = useSelector(selectIslogIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogOut = () => {
    dispatch(logOutUser());
    !isLoginIn && navigate('/');
  };
  return (
    <>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <IconContext.Provider value={{ className: 'react-icons' }}>
          <MenuItem onClick={handleClose}>
            <BiUserPin /> Name: {name}
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <MdOutlineMarkEmailRead /> Email: {email}
          </MenuItem>
          <MenuItem
            onClick={e => {
              handleClose(e);
              onLogOut();
            }}
          >
            <BiExit />
            Log out
          </MenuItem>
        </IconContext.Provider>
      </Menu>
    </>
  );
};
