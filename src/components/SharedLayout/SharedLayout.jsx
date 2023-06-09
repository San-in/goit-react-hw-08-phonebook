import { Outlet } from 'react-router-dom/dist';
import { MainWrapper, StyledFooter, StyledOutlet } from './SharedLayout.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MenuAppBar from 'components/MenuAppBar/MenuAppBat';

export const SharedLayout = () => {
  return (
    <MainWrapper>
      <MenuAppBar />
      <StyledOutlet>
        <Outlet />
      </StyledOutlet>
      <>
        <StyledFooter>Created by Sanin Oleksandr</StyledFooter>
        <ToastContainer
          autoClose={500}
          draggablePercent={60}
          style={{ width: 200, fontSize: 14, fontWeight: 600 }}
        />
      </>
    </MainWrapper>
  );
};
