import { gradientBorderInner, gradientBorderOuter } from '../Theme';
import { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  size?: 'small';
  variant?: 'outlined' | 'filled';
  full?: boolean
  onClick?: () => void
}

export const Button = ({ size, variant, full, ...props }: PropsWithChildren<ButtonProps>) => (
  <Wrapper size={size} variant={variant} full={full}>
    <button {...props} />
  </Wrapper>
)
  
const Wrapper = styled.div<ButtonProps>`
  border-radius: 12px;
  display: inline-block;
  padding: var(--border-size);
  background: ${p => p.variant === 'outlined' ? 
    'linear-gradient(to right, var(--primary-color), var(--secondary-color))' : 
    'var(--border-gradient)'
  };

  ${p => p.full ? 'width: 100%;' : ''}

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    font-size: 1.2rem;
    ${p => p.full ? 'width: 100%;' : ''}
    padding: ${(p) => (p.size === 'small' ? '4px 12px' : '12px 32px')};
    color: ${(p) => (p.variant === 'filled' ? 'var(--white)' : 'var(--main-text-color)')};
    background: ${(p) =>
      p.variant === 'filled'
      ? 'linear-gradient(to right, var(--primary-color), var(--secondary-color))'
      : p.variant === 'outlined'
      ? 'var(--background-primary)'
      : 'none'};

    transition: transform 0.2s ease-in-out;
    transform: translateY(0);

    &:hover {
      transform: translateY(-2px);
    }
  }

  svg {
    width: 1em;
    height: 1em;
  }

  svg:first-child {
    margin-right: 0.5rem;
  }
  
  svg:last-child {
    margin-left: 0.5rem;
  }
`;

export const IconButton = (
  props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
) => (
  <IconButtonWrapper>
    <button {...props} />
  </IconButtonWrapper>
);

const IconButtonWrapper = styled.div`
  ${gradientBorderOuter}

  button {
    color: var(--main-text-color);
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    ${gradientBorderInner}
    border: none;
    width: 60px;
    height: 60px;
    cursor: pointer;
  }

  svg {
    width: 1em;
    height: 1em;
    color: currentColor;
  }
`;
