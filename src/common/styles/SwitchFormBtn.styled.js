import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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
