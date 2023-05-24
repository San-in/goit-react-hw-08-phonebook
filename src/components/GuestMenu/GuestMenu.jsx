import { MainContentWrap } from 'common/styles/MainContentWrap.styled';
import { StyledLink } from 'common/styles/StyledLink.styled';
import { Auth } from 'components/GuestMenu/GuestMenu.styled';

export const GuestMenu = () => {
  return (
    <MainContentWrap>
      <h2>Start to use all our feathures</h2>
      <Auth>
        <StyledLink to="/register">Registration</StyledLink>
        <StyledLink to="/login">Log in</StyledLink>
      </Auth>
    </MainContentWrap>
  );
};
