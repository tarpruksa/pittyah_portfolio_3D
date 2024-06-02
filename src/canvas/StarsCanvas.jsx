import { useState, useRef, Suspense, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

const highSpeedFactor = [1, 1.25, 1.5, 1.75, 2]
const slowSpeedFactor = [9, 9.5, 10, 10.5, 11]
const getRandomFromArray = (inputArray) => {
  return inputArray[Math.floor(Math.random() * inputArray.length)]
}
const Stars = (props) => {
  const ref = useRef()
  const [speedFactor, setSpeedFactor] = useState(10)
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  )

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 2
    ref.current.rotation.y -= delta / speedFactor
  })

  useEffect(() => {
    console.log('props.currentNav', props.currentNav)
    setSpeedFactor(getRandomFromArray(highSpeedFactor))
    setTimeout(() => setSpeedFactor(getRandomFromArray(slowSpeedFactor)), 400)
  }, [props.currentNav])

  useEffect(() => {
    console.log('speedFactor', speedFactor)
  }, [speedFactor])

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = (props) => {
  return (
    <div className="w-full h-screen fixed z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars {...props} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas
