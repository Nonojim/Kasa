import {NavLink} from 'react-router-dom';
import styled, {keyframes} from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  color: #ff6060;
  text-decoration: none;
  font-size: 1.34em;
  text-align: center;
  font-weight: 500;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  padding: 10px;
  border: 6px solid;
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  margin-left: 50%;
  height: 0;
  width: 0;
`;
