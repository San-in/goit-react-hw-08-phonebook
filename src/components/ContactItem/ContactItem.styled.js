import styled from '@emotion/styled';
import { ListItemIcon } from '@mui/material';

export const StyledListItemText = styled.div`
  display: flex;
  padding: 5px 0 5px 10px;
  gap: 10px;
  border: 1px solid rgba(128, 0, 128, 0.8);
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const StyledListItemIcon = styled(ListItemIcon)`
  padding: 0;
`;
