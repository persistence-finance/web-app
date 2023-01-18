import { gradientBorderOuter, gradientBorderInner } from '../Theme';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export const Card = ({ children, ...props }: PropsWithChildren) => {
  return <CardOuter {...props}>
    <CardInner>
      {children}
    </CardInner>
  </CardOuter>
}

export const CardImageWrapper = styled.div`
  isolation: isolate;
  position: relative;
  padding-top: 32.5%;
  border-radius: 13px 13px 4px 4px;
  overflow: hidden;
`;

export const CardImageWrapperTall = styled(CardImageWrapper)`
  padding-top: 56.5%;
`

// Using div + background-image instead of img in order to avoid object-fit image flash
// https://stackoverflow.com/questions/64187659/react-js-image-size-flickers-on-reload-with-object-fit-cover-css-property
export const CardImage = styled.div<{ src: string }>`
  position: absolute;
  background: url(${p => p.src});
  background-size: cover;
  /* object-fit: cover; */
  height: 100%;
  width: 100%;
  top: 0;
`;

export const CardAvatarWrapper = styled.div`
  ${gradientBorderOuter}
  position: relative;
  margin: auto;
  margin-top: -30px;
  border-radius: 50%;
  height: 60px;
  width: 60px;
`;

// Using div + background-image instead of img in order to avoid object-fit image flash
// https://stackoverflow.com/questions/64187659/react-js-image-size-flickers-on-reload-with-object-fit-cover-css-property
export const CardAvatar = styled.div<{ src: string }>`
  height: 100%;
  width: 100%;
  background: url(${p => p.src});
  background-size: cover;
  border-radius: 50%;
  /* object-fit: cover; */
`;

export const CardContent = styled.div<{ textAlign?: string }>`
  padding: 16px;
  padding-top: 0;
  text-align: ${(p) => p.textAlign};
`;

export const CardTitle = styled.h6`
  color: var(--main-text-color);
  font-size: 1.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const CardSubtitle = styled.p`
  color: var(--secondary-text-color);
  font-size: 1.35rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const CardOuter = styled.article`
  ${gradientBorderOuter}
  flex: 1;
`;

export const CardInner = styled.div`
  ${gradientBorderInner}
`;

export const GaussianBlur = styled.div`
  position: relative;

  &:before {
    content: '';
    filter: blur(10px);
    background: var(--background-gradient);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`
