import styled from 'styled-components';
import { Heading, Bar, Link, List } from 'components';
import { TransactionListItem } from './ListItem';
import { Repeat, ShoppingCart, Tool } from 'react-feather';

export const Transactions = () => {
  return (
    <Wrapper>
      <Bar>
        <Heading>Transactions</Heading>
        <Link>View All</Link>
      </Bar>

      <List>
        <TransactionListItem title={<>Bid on <b>CryptoPunk #14</b></>} subtitle="Nov 20, 20:00 pm" icon={Tool} color="primary" />
        <TransactionListItem title={<>Transfer from <b>NFT Pro</b></>} subtitle="Nov 20, 16:00 pm" icon={Repeat} />
        <TransactionListItem title={<>Bid on <b>CryptoPunk #14</b></>} subtitle="Nov 20, 13:00 pm" icon={Tool} color="primary" />
        <TransactionListItem title={<>Sale of <b>Bored Ape #33</b></>} subtitle="Nov 20, 09:00 am" icon={ShoppingCart} />
        <TransactionListItem title={<>Bid on <b>CryptoPunk #14</b></>} subtitle="Nov 20, 20:00 pm" icon={Tool} color="primary" />
        <TransactionListItem title={<>Transfer from <b>NFT Pro</b></>} subtitle="Nov 20, 16:00 pm" icon={Repeat} />
        <TransactionListItem title={<>Bid on <b>CryptoPunk #14</b></>} subtitle="Nov 20, 13:00 pm" icon={Tool} color="primary" />
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.section``;
