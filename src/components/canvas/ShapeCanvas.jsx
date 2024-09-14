import * as THREE from 'three'
import { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Bvh,
  Instances,
  Instance,
  OrbitControls,
  Environment,
} from '@react-three/drei'
import { PassionType } from '../../constants/type'
import LoaderCanvas from './LoaderCanvas'

const randomVector = (r) => [
  r / 2 - Math.random() * r,
  r / 2 - Math.random() * r,
  r / 2 - Math.random() * r,
]
const randomEuler = () => [
  Math.random() * Math.PI,
  Math.random() * Math.PI,
  Math.random() * Math.PI,
]
const data = Array.from({ length: 150 }, (r = 10) => ({
  random: Math.random(),
  position: randomVector(r),
  rotation: randomEuler(),
}))

function Shapes({ shape }) {
  return (
    <Instances limit={200} range={200}>
      {shape === PassionType.Design ? (
        <icosahedronGeometry />
      ) : shape === PassionType.Build ? (
        <boxGeometry />
      ) : (
        <sphereGeometry />
      )}

      <meshStandardMaterial />
      {data.map((props, i) => (
        <Shape
          key={i}
          index={i}
          scale={
            shape === PassionType.Build
              ? 1
              : shape === PassionType.Design
              ? 0.75
              : 0.7
          }
          {...props}
        />
      ))}
    </Instances>
  )
}

function Shape({ scale, random, index, color = new THREE.Color(), ...props }) {
  const ref = useRef()
  const [hovered, setHover] = useState(false)

  useFrame((state) => {
    const t = state.clock.getElapsedTime() + random * 10000
    ref.current.rotation.set(
      Math.cos(t / 4) / 2,
      Math.sin(t / 4) / 2,
      Math.cos(t / 1.5) / 2
    )
    ref.current.position.y = Math.sin(t / 1.5) / 2
    ref.current.scale.x =
      ref.current.scale.y =
      ref.current.scale.z =
        THREE.MathUtils.lerp(ref.current.scale.z, hovered ? 1.2 : 1, 0.1)
    ref.current.color.lerp(
      color.set(hovered ? '#94a3b8' : '#606877'),
      hovered ? 1 : 0.1
    )
  })

  return (
    <group {...props} scale={scale}>
      <Instance
        ref={ref}
        onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
        onPointerOut={(e) => setHover(false)}
      />
    </group>
  )
}

export default function ShapeCanvas({ shape }) {
  const [orbit, setOrbit] = useState(false)

  useEffect(() => {
    setOrbit((prev) => !prev)
  }, [shape])

  return (
    <Canvas camera={{ position: [0, 0, -3.5], scale: 1 }}>
      <Suspense fallback={<LoaderCanvas />}>
        <color attach="background" args={['#0a102b']} />
        <ambientLight intensity={0.5 * Math.PI} />
        <directionalLight intensity={1} position={[5, 25, 20]} />
        <Bvh firstHitOnly>
          <Shapes shape={shape} />
        </Bvh>
        <Environment preset="city" />

        <OrbitControls
          autoRotate
          reverseOrbit={orbit}
          autoRotateSpeed={
            shape === PassionType.Design
              ? 3
              : shape === PassionType.Build
              ? 4
              : 2.5
          }
          enableZoom={false}
        />
      </Suspense>
    </Canvas>
  )
}
