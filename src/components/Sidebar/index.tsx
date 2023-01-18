import { PropsWithChildren } from 'react';
import { Link as ReactLink, useMatch } from 'react-router-dom';
import styled from 'styled-components';
import { Logo } from '../Logo';
import {
  Home,
  ShoppingCart,
  BarChart,
  User,
  Settings,
  DollarSign,
  Icon,
  LogOut
} from 'react-feather';

export const Sidebar = () => {
  return (
    <>
      <Spacer />
      <Wrapper>
        <Logo />

        <NavIcon to="/" icon={Home}>Home</NavIcon>
        <NavIcon to="/sales" icon={ShoppingCart}>Shop</NavIcon>
        <NavIcon to="/trends" icon={BarChart}>Trends</NavIcon>
        <NavIcon to="/wallet" icon={DollarSign}>Wallet</NavIcon>
        <NavIcon to="/account" icon={User}>Account</NavIcon>
        <NavIcon to="/settings" icon={Settings}>Settings</NavIcon>

        <BottomIcons>
          <Link>
            <LogOut />
            <VisuallyHidden>Logout</VisuallyHidden>
          </Link>
        </BottomIcons>
      </Wrapper>
    </>
  );
};

const Spacer = styled.div`
  width: 100px;
`

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: var(--background-secondary);
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const NavIcon = ({ children, to, icon: IconCmp }: PropsWithChildren<{ icon: Icon; to: string; }>) => {
  const isMatch = useMatch(to)
  return (
    <Link to={to} active={!!isMatch} as={ReactLink}>
      <IconCmp width="1em" height="1em" />
      <VisuallyHidden>{children}</VisuallyHidden>
    </Link>
  );
};

const VisuallyHidden = ({}: PropsWithChildren) => null;

const Link = styled.a<{ active?: boolean }>`
  position: relative;
  display: block;
  color: ${p => p.active ? 'var(--white)' : 'var(--main-text-color)'};
  font-size: 1.8rem;
  width: 100px;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  &:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    width: 60%;
    background: radial-gradient(ellipse at left, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    opacity: ${p => p.active ? 1 : 0};
    transition: opacity 0.3s ease-in;
  }
  
  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    width: 6px;
    border-radius: 0 3px 3px 0;
    background: ${p => p.active ? `linear-gradient(to bottom, var(--primary-color), var(--secondary-color))` : 'currentColor'};
    opacity: ${p => p.active ? 1 : 0};
    transition: opacity 0.3s ease-in;
  }

  &:hover {
    &:before {
      opacity: 1;
    }
    &:after {
      opacity: 1;
    }
  }
`;

const BottomIcons = styled.div`
  margin-top: auto;
`
