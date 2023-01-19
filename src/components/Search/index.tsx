import { gradientBorderInner, gradientBorderOuter } from '../Theme';
import styled from 'styled-components';

export const Search = () => (
  <Wrapper>  
    <Input placeholder="Search NFT, collection or artist" />;
  </Wrapper>
)

const Wrapper = styled.div`
  ${gradientBorderOuter}
  max-width: 100%;
  width: 380px;
  height: 60px;
`

const Input = styled.input`
  ${gradientBorderInner}
  border: none;
  color: var(--secondary-text-color);
  padding: 16px;
  font-size: 1.5rem;
  width: 100%;
  height: 100%;
  max-width: 100%;
  display: block;
`;
