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

function Easel(props) {
  const mesh = useRef()
  const group = useRef()
  const easel = useGLTF('./easel/scene.gltf')

  // useFrame((state, dt) => {
  //   const t = state.clock.getElapsedTime()
  //   group.current.rotation.x = THREE.MathUtils.lerp(
  //     group.current.rotation.x,
  //     Math.cos(t / 2) / 20 + 0.5,
  //     0.1
  //   )
  //   group.current.rotation.y = THREE.MathUtils.lerp(
  //     group.current.rotation.y,
  //     Math.sin(t / 2) / 20,
  //     0.1
  //   )
  //   group.current.rotation.z = THREE.MathUtils.lerp(
  //     group.current.rotation.z,
  //     Math.sin(t / 4) / 20,
  //     0.1
  //   )
  //   group.current.position.y = THREE.MathUtils.lerp(
  //     group.current.position.y,
  //     Math.sin(t / 2) / 4,
  //     0.1
  //   )
  // })

  return (
    <group ref={group}>
      <mesh ref={mesh} position={[0, 1, 0]} rotation={[0, 0, 0]} castShadow>
        {/* <boxBufferGeometry /> */}
        <primitive
          object={easel.scene}
          scale={1.5}
          position={[-0.7, -1.5, 2]}
          rotation={[0, 0, 0]}
        />
        <Html
          scale={1}
          rotation={[0, 0, 0]}
          position={[0, 1, 0.5]}
          transform
          occlude
        >
          <div className="easel-decor border-purple1 py-0 px-3">Design</div>
        </Html>
      </mesh>
    </group>
  )
}

export default function EaselCanvas() {
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
          color="#4500da"
          penumbra={1}
          shadow-mapSize={2048}
          castShadow
        />
        <Easel enter={enter} />
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
