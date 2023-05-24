import { MainContentWrap } from 'common/styles/MainContentWrap.styled';
import { StyledLink } from 'common/styles/StyledLink.styled';
import { useSelector } from 'react-redux';
import { selectUserInfo } from 'redux/auth/selectors';
import { MainSubtitle } from 'common/styles/MainSubtitle.styled';

export const Greeting = () => {
  const user = useSelector(selectUserInfo);
  return (
    <MainContentWrap>
      <h2>Dear {user.name}!</h2>
      <MainSubtitle>
        Let's start to use your personal phonebook right now!
      </MainSubtitle>
      <StyledLink to="/contacts">GO</StyledLink>
    </MainContentWrap>
  );
};
