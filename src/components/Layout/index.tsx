import styled from 'styled-components';
import { Breakpoints } from '../Theme'

export const Layout = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  height: 100%;
  flex-direction: row-reverse;

  --gap: 32px;

  ${Breakpoints.Md} {
    flex-direction: column;
  }
`;

export const PageLayout = styled.div`
  display: flex;
  flex: 1;

  ${Breakpoints.Lg} {
    flex-direction: column;
  }
`

export const Main = styled.main`
  flex: 1;
  border: calc(var(--border-size) / 2) solid var(--border-color);
  border-top: 0;
  border-bottom: 0;
  display: flex;
  flex-direction: column;
  padding: var(--gap);
  gap: var(--gap);
`;

export const Aside = styled.aside`
  width: 440px;
  display: flex;
  flex-direction: column;
  padding: var(--gap);
  gap: var(--gap);

  ${Breakpoints.Lg} {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate3d(100%, 0, 0);
    visibility: hidden;
  }
`;
