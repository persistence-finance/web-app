import { IconButton } from '../Button';
import { PopoverTrigger } from '../Popover';
import { NotificationListItem } from './ListItem';
import { List } from '../List';
import { Card } from '../Card';
import { Bell, Repeat, ShoppingCart, Tool } from 'react-feather';
import styled from 'styled-components'

export const Notifications = () => {
  return (
    <PopoverTrigger
      content={
        <Card>
          <ScrollableList>
            <NotificationListItem title={<>Bid on <b>CryptoPunk #14</b></>} subtitle="Nov 20, 20:00 pm" icon={Tool} color="primary" />
            <NotificationListItem title={<>Transfer from <b>NFT Pro</b></>} subtitle="Nov 20, 16:00 pm" icon={Repeat} />
            <NotificationListItem title={<>Bid on <b>CryptoPunk #14</b></>} subtitle="Nov 20, 13:00 pm" icon={Tool} color="primary" />
            <NotificationListItem title={<>Sale of <b>Bored Ape #33</b></>} subtitle="Nov 20, 09:00 am" icon={ShoppingCart} />
            <NotificationListItem title={<>Bid on <b>CryptoPunk #14</b></>} subtitle="Nov 20, 20:00 pm" icon={Tool} color="primary" />
            <NotificationListItem title={<>Transfer from <b>NFT Pro</b></>} subtitle="Nov 20, 16:00 pm" icon={Repeat} />
            <NotificationListItem title={<>Bid on <b>CryptoPunk #14</b></>} subtitle="Nov 20, 13:00 pm" icon={Tool} color="primary" />
            <NotificationListItem title={<>Sale of <b>Bored Ape #33</b></>} subtitle="Nov 20, 09:00 am" icon={ShoppingCart} />
          </ScrollableList>
        </Card>
      }
    >
      <IconButton>
        <Bell />
      </IconButton>
    </PopoverTrigger>
  );
};

const ScrollableList = styled(List)`
  padding: 8px;
  overflow: auto;
  max-height: 24rem;
`
