import { createContext, PropsWithChildren, useContext, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { Breakpoints } from '../Theme';
import { Underlay } from '../Popover';
import { useToggleScroll } from 'hooks/media';

const LayoutContext = createContext<{
  asideOpen: boolean
  setAsideOpen: (v: boolean) => void
  toggleAside: () => void
} | null>(null);

export const useLayoutContext = () => {
  const layout = useContext(LayoutContext);
  if (!layout) throw new Error('LayoutContext.Provider not found in ancestors');
  return layout;
};

export const Layout = ({ children }: PropsWithChildren) => {
  const [asideOpen, setAsideOpen] = useState(false)

  const toggleAside = () => setAsideOpen(o => !o)

  useToggleScroll(asideOpen)

  return (
    <LayoutContext.Provider value={{ asideOpen, setAsideOpen, toggleAside }}>
      <LayoutWrapper>{children}</LayoutWrapper>
    </LayoutContext.Provider>
  );
};

export const PageLayout = styled.div`
  display: flex;
  flex: 1;

  ${Breakpoints.Lg} {
    flex-direction: column;
  }
`;

export const Main = ({ children }: PropsWithChildren) => {
  const { asideOpen, toggleAside } = useLayoutContext();

  return <MainWrapper disabled={asideOpen}>
    {children}
    {asideOpen && <Underlay onClick={toggleAside} />}
  </MainWrapper>
};

export const Aside = ({ children }: PropsWithChildren) => {
  const { asideOpen } = useLayoutContext();

  return <AsideWrapper open={asideOpen}>{children}</AsideWrapper>;
};

const LayoutWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  height: 100%;
  flex-direction: row-reverse;

  ${Breakpoints.Md} {
    flex-direction: column;
  }
`;

const MainWrapper = styled.main<{ disabled?: boolean }>`
  position: relative;
  flex: 1;
  border: calc(var(--border-size) / 2) solid var(--border-color);
  border-top: 0;
  border-bottom: 0;
  display: flex;
  flex-direction: column;
  padding: var(--gap);
  gap: var(--gap);
`

const AsideWrapper = styled.aside<{ open?: boolean }>`
  background-color: var(--background-primary);
  width: 440px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  padding: var(--gap);
  gap: var(--gap);

  ${Breakpoints.Lg} {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    transition: ${p => p.open ? 'transform 0.3s ease-in, visibility 0s linear 0s' : 'transform 0.3s ease-in, visibility 0s linear 0.3s'};
    transform: ${p => p.open ? 'translate3d(0, 0, 0)' : 'translate3d(100%, 0, 0)'};
    visibility: ${p => p.open ? 'visible' : 'hidden'};
    overflow-y: auto;
    overflow-x: hidden;
  }

  ${Breakpoints.Md} {
    bottom: 46px;
  }
`;
