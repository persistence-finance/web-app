import styled from 'styled-components';
import { CollectionCard } from './Card';
import { Bar, Heading, Link, Grid } from 'components';

export const HotCollections = () => {
  return (
    <Wrapper>
      <Bar>
        <Heading>Hot Collections</Heading>
        <Link>View All</Link>
      </Bar>

      <Grid columns={4}>
        <CollectionCard
          title="Top-notch artworks"
          subtitle="$128.5K"
          image="/assets/low-poly-grid-haikei.svg"
          avatar={<torusKnotGeometry args={[0.5, 0.2]} />}
        />
        <CollectionCard
          title="Waves in bloom"
          subtitle="350.7K"
          image="/assets/stacked-steps-haikei.svg"
          avatar={<torusGeometry args={[0.8, 0.2]} />}
        />
        <CollectionCard
          title="No-brainers"
          subtitle="262.3K"
          image="/assets/stacked-waves-haikei.svg"
          avatar={<boxGeometry args={[1, 2]} />}
        />
        <CollectionCard
          title="Integrity in details"
          subtitle="180.9K"
          image="/assets/low-poly-grid-haikei.svg"
          avatar={<coneGeometry args={[1, 1.5]} />}
        />
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

