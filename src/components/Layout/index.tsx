import { createContext, PropsWithChildren, useContext, useState } from 'react';
import styled from 'styled-components';
import { Breakpoints } from '../Theme';

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

  --gap: 32px;

  ${Breakpoints.Md} {
    flex-direction: column;

    --gap: 16px;
  }
`;

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
    bottom: 46px;
    transition: ${p => p.open ? 'transform 0.3s ease-in, visibility 0s linear 0s' : 'transform 0.3s ease-in, visibility 0s linear 0.3s'};
    transform: ${p => p.open ? 'translate3d(0, 0, 0)' : 'translate3d(100%, 0, 0)'};
    visibility: ${p => p.open ? 'visible' : 'hidden'};
    overflow-y: auto;
    overflow-x: hidden;
  }
`;
