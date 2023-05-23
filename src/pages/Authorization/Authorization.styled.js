import styled from '@emotion/styled';
import img from 'images/bg-modern.jpg';
import { Link } from 'react-router-dom';

export const FormBtnsSet = styled.div`
  display: flex;
  gap: 15px;
`;

export const StyledAuthWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const SwitchFormBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  padding: 18px 20px;
  font-size: 24px;
  border-radius: 20px;
  background-color: rgb(128, 0, 128, 0.8);
  box-shadow: 0 0 5px 3px rgba(255, 255, 255, 0.5);
  &:hover,
  &:focus {
    background-color: rgb(128, 0, 128, 1);
    filter: saturate(1.5);
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const BackHomeBtn = styled(SwitchFormBtn)`
  margin-right: 40%;
`;
