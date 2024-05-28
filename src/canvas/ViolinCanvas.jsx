import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Preload, useGLTF, CameraControls } from '@react-three/drei'

const Violin = () => {
  const violin = useGLTF('./violin3D/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.2} groundColor="white" />
      {/* <spotLight
        position={[-2, -2, -2]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      /> */}
      <pointLight position={[-1, 1, 4]} intensity={1.5} />
      <primitive
        object={violin.scene}
        scale={0.03}
        position={[1.2, 1.5, 0]}
        rotation={[1.5, 0, 0.2]}
      />
    </mesh>
  )
}

const DEG45 = Math.PI / 4

export default function ViolinCanvas() {
  const cameraControlRef = useRef()

  const firstMove = () => {
    cameraControlRef.current?.reset(true)
  }

  const secondMove = async () => {
    cameraControlRef.current?.setLookAt(1.582, -8.66, 4.749, 1, -3, 0, true)
  }

  const thirdMove = async () => {
    cameraControlRef.current?.setLookAt(3.737, 11.643, 3.115, 1.5, 12, -1, true)
  }

  return (
    <div className="w-full h-screen">
      <Canvas>
        <CameraControls
          ref={cameraControlRef}
          //   minZoom={2}
          //   maxZoom={5}
          makeDefault
        />
        <Suspense fallback={null}>
          <Violin />
        </Suspense>

        <Preload all />
      </Canvas>
      <div className="absolute top-0">
        <div className="flex gap-10">
          <button type="button" onClick={firstMove}>
            first
          </button>
          <button type="button" onClick={secondMove}>
            second
          </button>
          <button type="button" onClick={thirdMove}>
            third
          </button>

          <button
            type="button"
            onClick={() => {
              const res = cameraControlRef.current?.getTarget(null, true)
              const res2 = cameraControlRef.current?.getPosition(null, true)
              console.log('orbit', res)
              console.log('position', res2)
            }}
          >
            getValue
          </button>
        </div>
      </div>
    </div>
  )
}
