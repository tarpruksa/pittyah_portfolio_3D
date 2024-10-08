import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Decal,
  Float,
  Preload,
  useTexture,
  CameraControls,
} from '@react-three/drei'
import LoadCanvas from './LoaderCanvas'
import { useWindowSize } from '../../hook/useWindowSize'
import { Mobile } from '../../constants/data'

const RotateDEG = Math.PI / 8
const RotateDEG2 = Math.PI * 8

const Ball = (props) => {
  const meshRef = useRef()
  const [decal] = useTexture([props.imgUrl])

  return (
    <>
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <mesh castShadow receiveShadow scale={2.75} ref={meshRef}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#fff8eb"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            flatShading
          />
          <Decal
            position={[0, 0, -1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            flatShading
          />
        </mesh>
      </Float>
    </>
  )
}

const BallCanvas = ({ name, icon, index }) => {
  const windowSize = useWindowSize()
  const isMobile = windowSize < Mobile

  const cameraControlRef = useRef()

  const spinBall = () => {
    const rotateDeg = index % 2 === 0 ? RotateDEG : -1 * RotateDEG
    cameraControlRef.current?.rotate(rotateDeg, 0, true)
  }

  const spinBall2 = () => {
    const rotateDeg = index % 2 === 0 ? RotateDEG2 : -1 * RotateDEG2
    cameraControlRef.current?.rotate(rotateDeg, 0, true)
  }

  const zoomBall = () => {
    cameraControlRef.current?.zoom(-0.15, true)
  }

  const resetBall = () => {
    setTimeout(() => cameraControlRef.current?.reset(true), 300)
  }
  return (
    <div
      className="flex flex-col items-center z-0 relative transition-all duration-300 bg-transparent 
    py-2 rounded-[20px] hover:bg-slate-900"
    >
      <div
        className={`${isMobile ? 'w-20 h-20' : 'w-24 h-24'} cursor-pointer`}
        onMouseMove={spinBall}
        onMouseEnter={() => !isMobile && zoomBall()}
        onMouseLeave={() => !isMobile && resetBall()}
        onClick={spinBall2}
      >
        <Canvas
          frameloop="demand"
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<LoadCanvas />}>
            <CameraControls
              ref={cameraControlRef}
              enableZoom={false}
              makeDefault
            />
            <Ball imgUrl={icon} />
          </Suspense>

          <Preload all />
        </Canvas>
      </div>
      <p className="mt-1 text-secondary text-center text-sm md:text-base">
        {name}
      </p>
    </div>
  )
}

export default BallCanvas
