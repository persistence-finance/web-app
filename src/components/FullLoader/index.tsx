import { useFrame } from '@react-three/fiber';
import { Creative, CreativeItemMesh } from '../Creative';
import { useRef } from 'react';
import styled from 'styled-components';

export const FullLoader = () => {
  return (
    <CreativeWrapper>
      <Creative>
        <CreativeLoader />
      </Creative>
    </CreativeWrapper>
  );
};

const CreativeWrapper = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CreativeLoader = () => {
  const ref = useRef<CreativeItemMesh>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 2;
      ref.current.rotation.y += delta * 2;
    }
  });

  return (
    <mesh
      position={[0, 0, 0]}
      rotation={[Math.PI * 0.3, Math.PI * 1.8, 0]}
      scale={1}
      ref={ref}
    >
      <meshNormalMaterial />
      <torusGeometry args={[1, 0.2]} />
    </mesh>
  );
};