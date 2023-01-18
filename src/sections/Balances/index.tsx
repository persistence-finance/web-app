import { Button } from 'components';
import { BalanceCard } from './Card';
import { PlusSquare, Repeat } from 'react-feather';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-cards';

export const Balances = () => {
  return (
    <Wrapper>
      <Swiper effect="cards" modules={[EffectCards]} grabCursor={true}>
        <Slide>
          <BalanceCard title="10.5 BTC" subtitle="$48,000" />
        </Slide>
        <Slide>
          <BalanceCard title="10.5 Eth" subtitle="$48,000" />
        </Slide>
        <Slide>
          <BalanceCard title="10.5 XYO" subtitle="$48,000" />
        </Slide>
      </Swiper>
    </Wrapper>
  );
};

export const BalanceActions = () => {
  return (
    <Actions>
      <Button variant="outlined" full><PlusSquare /> Add</Button>
      <Button variant="outlined" full><Repeat /> Swap</Button>
    </Actions>
  );
};

const Wrapper = styled.div`
  margin: 0 calc(6px - var(--gap));
`;

const Slide = styled(SwiperSlide)`
  padding: 0 calc(var(--gap) - 6px);
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;
