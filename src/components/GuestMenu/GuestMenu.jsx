import { Auth, StyledGuestMenu, StyledLink } from './GuestMenu.styled';

export const GuestMenu = () => {
  return (
    <StyledGuestMenu>
      <h2>Start to use all our feathures</h2>
      <Auth>
        <StyledLink to="/register">Registration</StyledLink>
        <StyledLink to="/login">Log in</StyledLink>
      </Auth>
    </StyledGuestMenu>
  );
};
