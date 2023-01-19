import styled from 'styled-components';
import { Button, Creative, gradientBorderOuter, gradientBorderInner, NormalMesh } from 'components';

export const Banner = () => (
  <Outer>
    <Inner>
      {/* <Typography>Persistence Pools Maximize Capital Efficiency!</Typography> */}
      <Typography>Increase revenue utilizing blockchain and AI</Typography>
      <Button variant="filled">View record</Button>

      <CreativeWrapper>
        <Creative>
          <NormalMesh
            position={[0, -0.7, 0]}
            rotation={[Math.PI * 0.3, Math.PI * 1.8, 0]}
            rotate={0.01}
            scale={2.75}
          >
            <torusGeometry args={[1, 0.2]} />
          </NormalMesh>
        </Creative>
      </CreativeWrapper>
    </Inner>
  </Outer>
);

const Outer = styled.section`
  ${gradientBorderOuter}
  position: relative;
  width: 100%;
  isolation: isolate;
`;

const Inner = styled.div`
  ${gradientBorderInner}
  padding: 40px;
  padding-right: 30%;
`

const Typography = styled.h1`
  color: var(--primary-text-color);
  font-size: 2.8rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
`;

const CreativeWrapper = styled.div`
  position: absolute;
  right: 0;
  top: -60px;
  bottom: 0px;
  width: 60%;
`;
