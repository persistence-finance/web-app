import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import styled from 'styled-components';
import { ForwardedRef, forwardRef, RefObject } from 'react';
import { Group } from 'three';

export const Logo = () => {
  return (
    <Wrapper>
      <Canvas>
        <LogoMesh />

        {/* <OrbitControls /> */}
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
    </Wrapper>
  );
};

export const LogoMesh = (props: { onClick?: () => void; barbellRef?: RefObject<Group> }) => {
  return (
    <group {...props}>
      {/* BARBELL */}
      <group ref={props.barbellRef} position={[0, 2, -2]} rotation={[0, Math.PI * 0.6, -Math.PI * 0.05]}>
        <mesh position={[-2, 0, 0]}>
          <sphereGeometry args={[0.6, 10, 10]} />
          <meshNormalMaterial />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.1, 0.1, 4]} />
          <meshNormalMaterial />
        </mesh>
        <mesh position={[2, 0, 0]}>
          <sphereGeometry args={[0.6, 10, 10]} />
          <meshNormalMaterial />
        </mesh>
      </group>

      {/* BAR GRAPH */}
      <group position={[0, 0, -3]}>
        {[1, 2, 2.5, 1.5, 4, 3.4, 3].map((v, i, arr) => (
          <mesh
            key={i}
            position={[
              (i - Math.floor(arr.length / 2)) * (10 / arr.length + 0.05),
              -3 + v / 2,
              0,
            ]}
          >
            <boxGeometry args={[10 / arr.length, v, 10 / arr.length]} />
            <meshNormalMaterial />
          </mesh>
        ))}
      </group>
    </group>
  );
};

const Wrapper = styled.div`
  width: 82px;
  height: 82px;
`;
