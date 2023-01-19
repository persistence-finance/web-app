import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  height: 100%;
  overflow: hidden;
  flex-direction: row-reverse;

  --gap: 32px;
`;

export const PageLayout = styled.div`
  display: flex;
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
  /* flex-basis: 440px; */
  width: 440px;
  display: flex;
  flex-direction: column;
  padding: var(--gap);
  gap: var(--gap);
`;
