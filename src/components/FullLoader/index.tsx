import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Creative } from '../Creative';
import { LogoMesh } from '../Logo';
import { useRef, RefObject } from 'react';
import { Group } from 'three';
import styled from 'styled-components';

export const FullLoader = () => {
  return (
    <CreativeWrapper>
      <Creative 
        // ONLY NEEDED IF TAKING A SCREENSHOT
        // gl={{ preserveDrawingBuffer: true }} 
      >
        <CreativeLoader />
        <OrbitControls />
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

export function useMeshSpinner(ref: RefObject<Group>) {
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 2;
      ref.current.rotation.y += delta * 2;
    }
  });
}

const CreativeLoader = () => {
  const ref = useRef<Group>(null);

  useMeshSpinner(ref);

  return <LogoMesh barbellRef={ref} />;
};


function useTakeScreenshot () {
  const gl = useThree((state) => state.gl);

  const screenshot = () => {
    const link = document.createElement('a');
    link.setAttribute('download', 'canvas.png');
    link.setAttribute(
      'href',
      gl.domElement.toDataURL('image/png').replace('image/png', 'image/octet-stream'),
    );
    link.click();
  };

  return screenshot
}