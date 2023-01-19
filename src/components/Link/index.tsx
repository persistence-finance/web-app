import { Breakpoints } from "../Theme"
import { PropsWithChildren } from "react"
import { ArrowRight } from "react-feather"
import styled from "styled-components"

export interface LinkProps {
  // href: string
  // alt: string
}

export const Link = ({ children, ...props }: PropsWithChildren<LinkProps>) => (
  <Wrapper {...props}>
    {children} <ArrowRight />
  </Wrapper>
)

const Wrapper = styled.a`
  color: var(--main-text-color);
  font-size: 1.5rem;
  display: flex;
  text-decoration: none;
  align-items: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  ${Breakpoints.Md} {
    font-size: 1rem;
  }
`