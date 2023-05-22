import { AppBar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)`
  width: 100%;
  background: linear-gradient(
    45deg,
    #9c27b0 0%,
    #b537a2 30%,
    #d6348b 50%,
    #e86555 70%,
    #ff9800 100%
  );
  opacity: 0.8;
`;

export const StyledAppBar = styled(AppBar)`
  background-color: transparent;
  box-shadow: none;
`;
