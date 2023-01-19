import { NftCard } from './Card';
import styled from 'styled-components';
import { Bar, Heading, Grid, Link, Breakpoints } from 'components';

export const RecommendedNFTs = () => {
  return (
    <Wrapper>
      <Bar>
        <Heading>Recommended NFTs</Heading>
        <Link>Marketplace</Link>
      </Bar>

      <Grid>
        <NftCard
          title="Voiceless humanity"
          subtitle="Digital artist"
          image="/assets/stacked-waves-haikei.svg"
          avatar={<torusGeometry args={[0.8, 0.2]} />}
        />
        <NftCard
          title="Entangled humanity"
          subtitle="Digital artist"
          image="/assets/stacked-steps-haikei.svg"
          avatar={<boxGeometry args={[1, 2]} />}
        />
        <NftCard
          title="Shortsighted humanity"
          subtitle="Digital artist"
          image="/assets/low-poly-grid-haikei.svg"
          avatar={<coneGeometry args={[1, 1.5]} />}
        />
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  --columns: 3;

  ${Breakpoints.Md} {
    --columns: 1;
  }
`;