import React, { Suspense, lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectToken } from 'redux/auth/selectors';
import { setToken } from 'redux/helpersAxious';
import { PrivateRoot } from 'components/PrivateRoot';
import { PublicRoot } from './PublicRoot';
import { PacmanLoader } from 'react-spinners';
import { ToastContainer } from 'react-toastify';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const Registration = lazy(() => import('pages/Registration'));
const Authorization = lazy(() => import('pages/Authorization/Authorization'));
const NotFound = lazy(() => import('pages/NotFound'));

export const App = () => {
  const token = useSelector(selectToken);

  useEffect(() => {
    token && setToken(token);
  }, [token]);

  return (
    <Suspense fallback={<PacmanLoader color="#36d7b7" />}>
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
