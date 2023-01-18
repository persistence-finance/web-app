import {
  ListItem,
  ListItemAvatarWrapper,
  ListItemContent,
  ListItemTitle,
  ListItemSubtitle,
} from 'components';
import { Icon } from 'react-feather'
import { ReactNode } from 'react'

interface TransactionListItemProps {
  title: ReactNode;
  subtitle: ReactNode;
  icon: Icon;
  color?: 'primary' | 'secondary'
}

export const TransactionListItem = ({ title, subtitle, color, icon: IconCmp }: TransactionListItemProps) => {
  return (
    <ListItem>
      <ListItemAvatarWrapper color={color}>
        <IconCmp height="1em" width="1em" color="currentColor" />
      </ListItemAvatarWrapper>
      <ListItemContent>
        <ListItemTitle>{title}</ListItemTitle>
        <ListItemSubtitle>{subtitle}</ListItemSubtitle>
      </ListItemContent>
    </ListItem>
  );
};
