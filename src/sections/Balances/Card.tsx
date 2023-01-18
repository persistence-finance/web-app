import { Card, CardInner, GaussianBlur, CardTitle, CardSubtitle } from 'components/Card';
import styled from 'styled-components';

interface BalanceCardProps {
  title: string;
  subtitle: string;
}

export const BalanceCard = ({ title, subtitle, ...rest }: BalanceCardProps) => {
  return (
    <GaussianCard {...rest}>
      <GaussianBlur>
        <BalanceCardTitle>{title}</BalanceCardTitle>
        <BalanceCardSubtitle>{subtitle}</BalanceCardSubtitle>
      </GaussianBlur>
    </GaussianCard>
  );
};

const GaussianCard = styled(Card)`
  text-align: center;

  ${CardInner} {
    padding: 32px;
  }
`

const BalanceCardTitle = styled(CardTitle)`
  position: relative;
  font-size: 2rem;
`

const BalanceCardSubtitle = styled(CardSubtitle)`
  position: relative;
  font-size: 1.5rem;
`
