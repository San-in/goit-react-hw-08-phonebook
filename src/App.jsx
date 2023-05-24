import { Suspense, lazy, useEffect } from 'react';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PrivateRoot } from 'common/PrivateRoot';
import { selectToken } from 'redux/auth/selectors';
import { setToken } from 'common/helpers/helpersAxious';
import { PublicRoot } from 'common/PublicRoot';
import { StyledPacmanLoader } from 'common/styles';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const Registration = lazy(() => import('pages/Registration'));
const Authorization = lazy(() => import('pages/Authorization'));
const NotFound = lazy(() => import('pages/NotFound'));

export const App = () => {
  const token = useSelector(selectToken);

  useEffect(() => {
    token && setToken(token);
  }, [token]);

  return (
    <Suspense
      fallback={
        <StyledPacmanLoader color="rgb(128, 0, 128, 0.8)" size="75px" />
      }
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 40,
          color: '#010101',
          height: '100%',
        }}
      >
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<PublicRoot component={<Home />} />} />
            <Route
              path="contacts"
              element={<PrivateRoot component={<Contacts />} />}
            />
          </Route>
          <Route
            path="/register"
            element={
              <PublicRoot
                component={<Registration />}
                redirectTo="/contacts"
                restrict
              />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoot
                component={<Authorization />}
                redirectTo="/contacts"
                restrict
              />
            }
          />
          <Route path="*" element={<PublicRoot component={<NotFound />} />} />
        </Routes>
      </div>
    </Suspense>
  );
};
