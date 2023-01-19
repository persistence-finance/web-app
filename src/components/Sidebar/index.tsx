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
import { Breakpoints } from 'components';

export const Sidebar = () => {
  return (
    <>
      <Spacer />
      <Wrapper>
        <LogoWrapper>
          <ReactLink to="/">
            <Logo />
          </ReactLink>
        </LogoWrapper>

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

  ${Breakpoints.Md} {
    height: 50px;
  }
`

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: var(--background-secondary);
  display: flex;
  flex-direction: column;
  z-index: 1;

  ${Breakpoints.Md} {
    flex-direction: row;
    align-items: center;
    top: initial;
    right: 0;
  }
`;

const LogoWrapper = styled.div`
  height: 116px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${Breakpoints.Md} {
    height: initial;
    flex-direction: row;
    align-items: center;
  }
`

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

  ${Breakpoints.Md} {
    width: 50px;
    height: 46px;
    font-size: 1.4rem;
    margin-bottom: 0;
    padding: 6px 0;

    &:first-of-type {
      margin-left: auto;
    }

    &:before {
      top: initial;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 60%;
      background: radial-gradient(ellipse at bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0));
    }
    
    &:after {
      top: initial;
      width: 100%;
      height: 6px;
      left: 0;
      bottom: 0;
      right: 0;
      border-radius: 3px 3px 0 0;
      background: ${p => p.active ? `linear-gradient(to right, var(--primary-color), var(--secondary-color))` : 'currentColor'};
    }
  }
`;

const BottomIcons = styled.div`
  margin-top: auto;

  ${Breakpoints.Md} {
    margin-top: 0;
    margin-left: auto;
  }
`
