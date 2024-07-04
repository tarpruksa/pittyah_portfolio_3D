import React, { Suspense, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Preload, useGLTF, CameraControls } from '@react-three/drei'
import { NavState } from '../constants/type'
import LoaderCanvas from './LoaderCanvas'

const Computers = () => {
  const violin = useGLTF('./old_computers/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.2} groundColor="white" />
      <spotLight
        position={[-2, -2, -2]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[-1, 1, 4]} intensity={1.5} />
      <primitive
        object={violin.scene}
        scale={1.2}
        position={[0, -2, 1]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  )
}

const DEG45 = Math.PI / 4

export default function ComputerCanvas({ currentNav }) {
  const cameraControlRef = useRef()

  const handleNavChange = (currentNav) => {
    switch (currentNav) {
      case NavState.About:
        cameraControlRef.current?.reset(true)
        break
      case NavState.Work:
        cameraControlRef.current?.setLookAt(1.582, -8.66, 4.749, 1, -3, 0, true)
        break
      case NavState.Skill:
        cameraControlRef.current?.setLookAt(
          3.737,
          11.643,
          3.115,
          1.5,
          12,
          -1,
          true
        )
        break
      default:
        cameraControlRef.current?.reset(true)
        break
    }
  }

  useEffect(() => {
    handleNavChange(currentNav)
  }, [currentNav])

  return (
    <div className="w-full h-screen fixed cursor-grab">
      <Canvas>
        <CameraControls
          ref={cameraControlRef}
          //   minZoom={2}
          //   maxZoom={5}
          makeDefault
        />
        <Suspense fallback={<LoaderCanvas />}>
          <Computers />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}
