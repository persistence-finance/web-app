import { gradientBorderInner, gradientBorderOuter } from '../Theme';
import styled from 'styled-components';

export const WalletAddress = () => {
  return (
    <Wrapper>
      <Inner>
        <AddressText>0xa1b2...c3d4</AddressText>
        <AvatarWrapper>
          <Avatar src="/assets/stacked-waves-haikei.svg" />
        </AvatarWrapper>
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${gradientBorderOuter}
`;

const Inner = styled.div`
  ${gradientBorderInner}
  color: var(--main-text-color);
  font-size: 1.5rem;
  height: 60px;

  display: flex;
  align-items: center;
  padding: 2px;
`;

const AddressText = styled.p`
  padding: 0 16px;
`;

const AvatarWrapper = styled.div`
  ${gradientBorderOuter}
  border-radius: calc(var(--border-radius) - 4px);
  width: 56px;
  height: 56px;
`;

// Using div + background-image instead of img in order to avoid object-fit image flash
// https://stackoverflow.com/questions/64187659/react-js-image-size-flickers-on-reload-with-object-fit-cover-css-property
const Avatar = styled.div<{ src: string }>`
  width: 100%;
  height: 100%;
  ${gradientBorderInner}
  border-radius: calc(var(--border-radius) - 6px);
  background: url(${p => p.src});
  background-size: cover;
  /* object-fit: cover; */
`;
