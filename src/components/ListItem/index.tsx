import { gradientBorderInner, gradientBorderOuter } from '../Theme';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export const ListItem = ({ children }: PropsWithChildren) => (
  <Wrapper>
    <Inner>{children}</Inner>
  </Wrapper>
);

const Wrapper = styled.li`
  background-color: var(--background-primary);
  ${gradientBorderOuter}
`;

const Inner = styled.div`
  ${gradientBorderInner}
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ListItemAvatarWrapper = styled.div<{ color?: 'primary' | 'secondary' }>`
  background: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0) 20%,
    ${p => p.color === 'primary' ? 'var(--primary-color-50)' : 'var(--secondary-color-50)'}
  );
  background-size: 100% 200%;
  background-position: 100%;
  color: var(--white);
  border-radius: 12px;
  padding: var(--border-size);
  height: 56px;
  width: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

export const ListItemContent = styled.div<{ textAlign?: string }>`
  padding-top: 0;
  text-align: ${(p) => p.textAlign};
`;

export const ListItemTitle = styled.h6`
  color: var(--main-text-color);
  font-size: 1.5rem;

  b {
    color: var(--bold-text-color);
  }
`;

export const ListItemSubtitle = styled.p`
  color: var(--secondary-text-color);
  font-size: 1.35rem;

  b {
    color: var(--bold-text-color);
  }
`;
