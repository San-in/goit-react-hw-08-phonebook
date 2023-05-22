import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const StyledLink = styled(Link)`
  min-width: 220px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  padding: 22px 24px;
  border-radius: 20px;
  background-color: rgb(128, 0, 128, 0.9);
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

export const StyledGuestMenu = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
