import { StyledGuestMenu, StyledLink } from './GuestMenu.styled';

export const GuestMenu = () => {
  return (
    <StyledGuestMenu>
      <StyledLink to="/register">Registration</StyledLink>
      <StyledLink to="/login">Log in</StyledLink>
    </StyledGuestMenu>
  );
};
