import { Greeting } from 'components/Greeting/Greeting';
import { GuestMenu } from 'components/GuestMenu/GuestMenu';
import { useSelector } from 'react-redux';
import { PacmanLoader } from 'react-spinners';
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
        <PacmanLoader color="#36d7b7" />
      )}
    </>
  );
};

export default Home;
