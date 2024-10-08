import * as THREE from 'three'
import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Preload } from '@react-three/drei'
import { easing } from 'maath'
import LoaderCanvas from './LoaderCanvas'
import { useWindowSize } from '../../hook/useWindowSize'
import { Mobile } from '../../constants/data'

function Tar({ isMobile, changeColor }) {
  const mesh = useRef()
  const lightBlue = useRef()
  const lightBlue2 = useRef()
  const lightPurple = useRef()
  const tar = useGLTF('./tar.gltf')
  const [dummy] = useState(() => new THREE.Object3D())

  useFrame((state, dt) => {
    dummy.lookAt(state.pointer.x, state.pointer.y, 1)
    easing.dampQ(mesh.current.quaternion, dummy.quaternion, 0.15, dt)

    lightBlue.current.rotation.y -= dt + -0.03
    lightBlue2.current.rotation.z -= dt + -0.02
    lightPurple.current.rotation.y -= dt + 0.01
    lightPurple.current.rotation.z -= dt + 0.01
  })

  return (
    <group>
      <mesh ref={mesh}>
        <primitive
          object={tar.scene}
          scale={isMobile ? 0.8 : 0.95}
          position={[0, 0, -0.5]}
        />
      </mesh>
      <mesh ref={lightBlue}>
        <spotLight
          position={[0, -5, 8]}
          angle={Math.PI / 6}
          intensity={60}
          distance={15}
          penumbra={1}
          decay={2}
          focus={1}
          color={changeColor ? '#2E073F' : '#00478d'}
          shadow-mapSize={1024}
          castShadow
        />
      </mesh>
      <mesh ref={lightBlue2}>
        <spotLight
          position={[0, -13, -1]}
          angle={Math.PI / 6}
          intensity={20}
          distance={15}
          penumbra={1}
          decay={2}
          focus={1}
          color={changeColor ? '#4500da' : '#00cfda'}
          shadow-mapSize={1024}
          castShadow
        />
      </mesh>
      <mesh ref={lightPurple}>
        <spotLight
          position={[0, -2, 8]}
          angle={Math.PI / 6}
          intensity={20}
          distance={15}
          penumbra={1}
          decay={2}
          focus={1}
          color={changeColor ? '#a945e7' : '#003f88'}
          shadow-mapSize={1024}
          castShadow
        />
      </mesh>
    </group>
  )
}

export default function TarCanvas({ changeColor }) {
  const windowSize = useWindowSize()
  return (
    <Canvas>
      <Suspense fallback={<LoaderCanvas />}>
        <ambientLight intensity={0.5} />
        <spotLight
          position={[0, 5, 10]}
          angle={Math.PI / 2}
          intensity={0.4}
          penumbra={1}
          color="#ffffff"
          shadow-mapSize={1024}
          castShadow
        />
        <Tar isMobile={windowSize <= Mobile} changeColor={changeColor} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}
