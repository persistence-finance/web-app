import styled from "styled-components"
import { Link } from 'react-router-dom';
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

export const Footer = () => {
  return <Wrapper>
    <main>
      <section>
        <h4>Main</h4>
        <Links>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sales">Shop</Link></li>
          <li><Link to="/trends">Trends</Link></li>
        </Links>
      </section>
      <section>
        <h4>Account</h4>
        <Links>
          <li><Link to="/wallet">Wallet</Link></li>
          <li><Link to="/account">Account</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </Links>
      </section>
      <section>
        <h4>Developers</h4>
        <Links>
          <li><ExternalLink href="https://docs.persistence.finance">Documentation</ExternalLink></li>
          <li><ExternalLink href="https://github.com/persistence.finance">Github</ExternalLink></li>
        </Links>
      </section>
      <section>
        <h4>About</h4>
        <Links>
          <li><Link to="/privacy">Privacy</Link></li>
          <li><Link to="/terms">Terms</Link></li>
          <li><ExternalLink href="https://twitter.com/persistence_fi">Twitter</ExternalLink></li>
        </Links>
      </section>
    </main>
  </Wrapper>
}

const Wrapper = styled.footer`
  background-color: var(--background-secondary);
  // RESPONSIVE GAP
  // 25px at 500px width
  // 75px at 1500px width
  --gap: clamp(25px, 5vw, 75px);

  main {
    padding: 66px var(--gap);
    margin: auto;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    gap: var(--gap);

    @media (max-width: 1439px) {
      flex-wrap: wrap;
      padding-top: 24px;
      padding-bottom: 104px;
    }

    section {
      flex: 1 1 220px;
    }

    section:last-child {
      flex: 1 0 320px;
    }

    h4 {
      color: var(--primary-text-color);
      font-size: 20px;
      line-height: 32px;
      margin: 0;
    }

    a {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Links = styled.ul`
  padding: 0;
  list-style-type: none;

  li {
    font-size: 16px;
    line-height: 32px;
    border-top: var(--border-size) solid var(--border-color);
    padding: 10px;
    white-space: nowrap;
    padding-right: 36px;
    position: relative;

    a {
      color: var(--bold-text-color);
    }

    a:after {
      content: url(/assets/arrow-link.svg);
      height: 16px;
      width: 16px;
      right: 10px;
      position: absolute;
    }
  }
`;

const ExternalLink = ({ children, href, ...props }: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => {
  return <a href={href} {...props} target="_blank" rel="noopener norefferer">{children}</a>
}