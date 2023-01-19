import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { PropsWithChildren, RefObject, useEffect, useRef, forwardRef } from 'react'
import { BufferGeometry, Material, Mesh } from 'three'
import gsap from 'gsap'

export const Creative = forwardRef(({ children }: PropsWithChildren, ref) => {
  return (
    <Canvas ref={ref as RefObject<HTMLCanvasElement>}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <PerspectiveCamera
        makeDefault
        fov={75}
        position={[0, 0, 4.5]}
        onUpdate={self => self.updateProjectionMatrix()}
      />
      {children}
    </Canvas>
  )
})

interface CreativeItemProps {
  position?: [number, number, number]
  rotation?: [number, number, number]
  scale?: number | [number, number, number]
  rotate?: number

  onPointerOver?: (e: unknown) => void
  onPointerOut?: (e: unknown) => void
  onClick?: (e: unknown) => void
}

export type CreativeItemMesh = Mesh<BufferGeometry, Material>

export const StandardMesh = ({ children, ...props }: PropsWithChildren<CreativeItemProps>) => {
  const ref = useRef<CreativeItemMesh>(null)

  return (
    <mesh
      {...props}
      ref={ref}>
      {children}
      <meshStandardMaterial />
    </mesh>
  )
}

export const NormalMesh = ({ children, ...props }: PropsWithChildren<CreativeItemProps>) => {
  const ref = useRef<CreativeItemMesh>(null)

  // useRotateOnScroll(ref, props)
  useFadeUp(ref, props)

  return (
    <mesh
      {...props}
      ref={ref}
      position={[0, -5, 0]}>
      {children}
      <meshNormalMaterial />
    </mesh>
  )
}

function useRotateOnScroll (ref: RefObject<CreativeItemMesh>, props: CreativeItemProps) {
  useFrame((state, delta) => {
    if (ref.current && props.rotation && props.rotate) {
      ref.current.rotation.x = props.rotation[0] + window.scrollY * props.rotate
      ref.current.rotation.y = props.rotation[1] + window.scrollY * props.rotate
    }
  })
}

function useFadeUp (ref: RefObject<CreativeItemMesh>, props: CreativeItemProps) {
  useEffect(() => {
    if (ref.current && props.position) {
      gsap.to(ref.current.position, {
        x: props.position[0],
        y: props.position[1],
        z: props.position[2],
      })
    }
  }, [])
}