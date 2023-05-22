import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

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
      <section>
        <h2>404</h2>
        <p>Oops! The page you are looking for cannot be found.</p>
        <NavLink to="/">Go Home</NavLink>
      </section>
    </>
  );
};

export default NotFound;
