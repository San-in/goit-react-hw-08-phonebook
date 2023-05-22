import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import img from 'images/bg-modern.jpg';

export const MainWrapper = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;
export const StyledFooter = styled.footer`
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  padding: 16px;
  background-color: #fad9e5;
`;
export const StyledOutlet = styled.div`
  flex-grow: 1;
  background-color: white;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const Conteiner = styled.div`
  max-width: 1480px;
  margin: 0 auto;
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 20px;
  &:hover,
  &:focus,
  &:active {
    outline: none;
    background-color: purple;
    box-shadow: 0 0 5px 3px rgba(255, 255, 255, 0.5);
  }
  &.active {
    background-color: purple;
    box-shadow: inset 0 0 5px 3px rgba(255, 255, 255, 0.5);
  }
`;
