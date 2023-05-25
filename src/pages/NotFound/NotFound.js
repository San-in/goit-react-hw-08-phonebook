import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { StyledLink } from 'common/styles/StyledLink.styled';
import { MainSubtitle } from 'common/styles/MainSubtitle.styled';
import { MainContentWrap } from 'common/styles/MainContentWrap.styled';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let counter = 3;
    const backToHomeId = setInterval(() => {
      if (counter <= 0) {
        clearInterval(backToHomeId);
        navigate('/', { replace: true });
      }
      counter -= 1;
    }, 1000);
    return () => clearInterval(backToHomeId);
  }, [navigate]);

  return (
    <>
      <MainContentWrap>
        <h2>404</h2>
        <MainSubtitle>
          Oops! The page you are looking for cannot be found.
        </MainSubtitle>
        <StyledLink to="/">Go Home</StyledLink>
      </MainContentWrap>
    </>
  );
};

export default NotFound;
