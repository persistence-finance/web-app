import {
  Card,
  CardImageWrapper,
  CardImage,
  CardAvatarWrapper,
  CardContent,
  CardTitle,
  CardSubtitle,
  Creative,
  NormalMesh
} from 'components';
import { ReactNode } from 'react';

interface CollectionCardProps {
  title: string;
  subtitle: string;
  image: string;
  avatar: ReactNode
}

export const CollectionCard = ({ title, subtitle, image, avatar }: CollectionCardProps) => {
  return (
    <Card>
      <CardImageWrapper>
        <CardImage src={image} />
      </CardImageWrapper>
      <CardAvatarWrapper>
        <Creative>
          <NormalMesh
            position={[0, -0.7, 0]}
            rotation={[Math.PI * 0.3, Math.PI * 1.8, 0]}
            scale={2.6}
            rotate={0.01}
          >
            {avatar}
          </NormalMesh>
        </Creative>
      </CardAvatarWrapper>
      <CardContent textAlign="center">
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
      </CardContent>
    </Card>
  );
};
