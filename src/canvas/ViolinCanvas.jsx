import * as THREE from 'three'
import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  useGLTF,
  Preload,
  PresentationControls,
  Environment,
  ContactShadows,
  CameraControls,
  Html,
} from '@react-three/drei'
import { easing } from 'maath'
import LoaderCanvas from './LoaderCanvas'

function Violin(props) {
  const mesh = useRef()
  const violin = useGLTF('./violin3D/scene.gltf')
  // const [dummy] = useState(() => new THREE.Object3D())

  // useFrame((state, dt) => {
  //   dummy.lookAt(state.pointer.x, state.pointer.y, 1)
  //   easing.dampQ(mesh.current.quaternion, dummy.quaternion, 0.15, dt)
  // })

  return (
    <mesh ref={mesh} {...props}>
      <primitive object={violin.scene} scale={0.15} />
      <meshNormalMaterial />
    </mesh>
  )
}

export default function ViolinCanvas() {
  const cameraControlRef = useRef()
  return (
    <Canvas camera={{ position: [0, 150, 0] }}>
      <Suspense fallback={<LoaderCanvas />}>
        <CameraControls
          ref={cameraControlRef}
          //   minZoom={2}
          //   maxZoom={5}
          makeDefault
        />
        <ambientLight intensity={1} />
        <spotLight
          position={[150, 200, -300]}
          angle={0.15}
          penumbra={1}
          shadow-mapSize={2048}
          castShadow
        />
        <Violin />
        {/* <ContactShadows
          position={[0, 0, -1]}
          opacity={0.75}
          scale={100}
          blur={1}
          far={5}
        /> */}
        <Environment preset="city" />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}
