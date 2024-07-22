import * as THREE from 'three'
import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  useGLTF,
  Preload,
  Environment,
  OrbitControls,
  Html,
} from '@react-three/drei'
import LoaderCanvas from './LoaderCanvas'

function Laptop(props) {
  const mesh = useRef()
  const group = useRef()
  const laptop = useGLTF('./laptop/scene.gltf')

  useFrame((state, dt) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 2) / 20 + 0.5,
      0.1
    )
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 2) / 20,
      0.1
    )
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 4) / 20,
      0.1
    )
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      Math.sin(t / 2) / 4,
      0.1
    )
  })

  return (
    <group ref={group}>
      <mesh
        ref={mesh}
        position={[0, 1, 0]}
        rotation={[0, Math.PI, 0]}
        castShadow
      >
        {/* <boxBufferGeometry /> */}
        <primitive
          object={laptop.scene}
          scale={4}
          position={[-2, -1, -2]}
          rotation={[0, 0, 0]}
        />
        <Html
          scale={1}
          rotation={[0, 0, 0]}
          position={[0, 1, 0.5]}
          transform
          occlude
        >
          <div className="laptop-decor border-blue py-0 px-3">Develop</div>
        </Html>
      </mesh>
    </group>
  )
}

export default function LaptopCanvas() {
  const [enter, setEnter] = useState(false)
  return (
    <Canvas
      onPointerOver={() => setEnter(true)}
      onPointerOut={() => setEnter(false)}
    >
      <Suspense fallback={<LoaderCanvas />}>
        <ambientLight intensity={1} />
        <spotLight
          position={[0, 10, 0]}
          intensity={10}
          angle={0.15}
          color="#006dda"
          penumbra={1}
          shadow-mapSize={2048}
          castShadow
        />
        <Laptop enter={enter} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 2.2}
        />
        <Environment preset="city" />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
