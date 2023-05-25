import { StyledPacmanLoader } from 'common/styles';
import { Greeting } from 'components/Greeting/Greeting';
import { GuestMenu } from 'components/GuestMenu/GuestMenu';
import { useSelector } from 'react-redux';
import { selectIslogIn } from 'redux/auth/selectors';
import { selectIsLoading } from 'redux/contacts/selectors';

const Home = () => {
  const isLoginIn = useSelector(selectIslogIn);
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {!isLoading ? (
        isLoginIn ? (
          <Greeting />
        ) : (
          <GuestMenu />
        )
      ) : (
        <StyledPacmanLoader color="rgb(128, 0, 128, 0.8)" size="75px" />
      )}
    </>
  );
};

export default Home;
