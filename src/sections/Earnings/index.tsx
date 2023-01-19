import { useState } from 'react';
import styled from 'styled-components';
import { Heading, Bar, Button, BarChart, Card, CardContent, CardTitle, CardSubtitle } from 'components';

const ranges = [
  { name: '1M', value: 30 },
  { name: '6M', value: 6 },
  { name: '1Y', value: 12 },
];

export const Earnings = () => {
  const [range, setRange] = useState(ranges[0]);

  return (
    <Wrapper>
      <Bar>
        <Heading>Earnings</Heading>
        {ranges.map((r) => (
          <Button
            key={r.name}
            size="small"
            variant={range === r ? 'filled' : undefined}
            onClick={() => setRange(r)}
          >
            {r.name}
          </Button>
        ))}
      </Bar>
      <BarChart
        series={new Array(range.value).fill(0).map(() => [Date.now(), Math.random() * 5])}
        popover={<Popover />}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

const Popover = ({ date = '', value = 0 }: { date?: string; value?: number }) => {
  return (
    <Card>
      <CardContent>
        <CardTitle>Earnings</CardTitle>
        <CardSubtitle>{new Date(date).toLocaleDateString()}</CardSubtitle>
        <CardSubtitle>${Number(value).toFixed(2)}</CardSubtitle>
      </CardContent>
    </Card>
  )
}