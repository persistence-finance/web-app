import {
  ListItem,
  ListItemAvatarWrapper,
  ListItemContent,
  ListItemTitle,
  ListItemSubtitle,
} from '../ListItem';
import { Icon } from 'react-feather'
import { ReactNode } from 'react'
import styled from 'styled-components';

interface NotificationListItemProps {
  title: ReactNode;
  subtitle: ReactNode;
  icon: Icon;
  color?: 'primary' | 'secondary'
}

export const NotificationListItem = ({ title, subtitle, color, icon: IconCmp }: NotificationListItemProps) => {
  return (
    <InnerListItem>
      <ListItemAvatarWrapper color={color}>
        <IconCmp height="1em" width="1em" color="currentColor" />
      </ListItemAvatarWrapper>
      <ListItemContent>
        <ListItemTitle>{title}</ListItemTitle>
        <ListItemSubtitle>{subtitle}</ListItemSubtitle>
      </ListItemContent>
    </InnerListItem>
  );
};

const InnerListItem = styled(ListItem)`
  --border-radius: 8px;
`