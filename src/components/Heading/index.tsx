import { Breakpoints } from '../Theme';
import styled from 'styled-components';

export const Heading = styled.h4`
  color: var(--main-text-color);
  font-size: 2rem;
  margin-right: auto;
  
  ${Breakpoints.Md} {
    font-size: 1.5rem;
  }
`;
