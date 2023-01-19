import {
  Card,
  CardImageWrapperTall,
  CardImage,
  CardAvatarWrapper,
  CardAvatar,
  GaussianBlur,
  CardContent,
  CardTitle,
  CardSubtitle,
  Creative,
  NormalMesh
} from 'components';
import { ReactNode } from 'react';

interface NftCardProps {
  title: string;
  subtitle: string;
  image: string;
  avatar: ReactNode;
}

export const NftCard = ({ title, subtitle, image, avatar }: NftCardProps) => {
  return (
    <Card>
      <CardImageWrapperTall>
        <CardImage src={image} />
      </CardImageWrapperTall>
      <GaussianBlur>

      </GaussianBlur>
      <CardAvatarWrapper>
        <CardAvatar src={image} />
        {/* <Creative>
          <NormalMesh
            position={[0, -0.7, 0]}
            rotation={[Math.PI * 0.3, Math.PI * 1.8, 0]}
            scale={2.6}
            rotate={0.01}
          >
            {avatar}
          </NormalMesh>
        </Creative> */}
      </CardAvatarWrapper>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
      </CardContent>
    </Card>
  );
};
