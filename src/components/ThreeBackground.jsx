import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles({ count = 200 }) {
  const mesh = useRef()
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const particles = useMemo(() => Array.from({ length: count }, () => ({
    position: [(Math.random() - 0.5) * 22, (Math.random() - 0.5) * 22, (Math.random() - 0.5) * 22],
    speed: Math.random() * 0.004 + 0.001,
    offset: Math.random() * Math.PI * 2,
    scale: Math.random() * 0.5 + 0.2
  })), [count])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    particles.forEach((p, i) => {
      dummy.position.set(
        p.position[0] + Math.sin(t * p.speed + p.offset) * 0.4,
        p.position[1] + Math.cos(t * p.speed * 0.7 + p.offset) * 0.4,
        p.position[2]
      )
      dummy.scale.setScalar(p.scale)
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
    mesh.current.rotation.y = t * 0.02
    mesh.current.rotation.x = t * 0.008
  })

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[0.04, 6, 6]} />
      <meshBasicMaterial color="#729146" transparent opacity={0.6} />
    </instancedMesh>
  )
}

function FloatingRings() {
  const r1 = useRef(), r2 = useRef()
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (r1.current) { r1.current.rotation.x = t * 0.12; r1.current.rotation.y = t * 0.08 }
    if (r2.current) { r2.current.rotation.x = -t * 0.09; r2.current.rotation.z = t * 0.06 }
  })
  return (
    <>
      <mesh ref={r1} position={[3, 0, -3]}>
        <torusGeometry args={[2.2, 0.02, 8, 80]} />
        <meshBasicMaterial color="#3C603C" transparent opacity={0.35} />
      </mesh>
      <mesh ref={r2} position={[-3, 1, -2]}>
        <torusGeometry args={[1.5, 0.015, 8, 60]} />
        <meshBasicMaterial color="#729146" transparent opacity={0.25} />
      </mesh>
    </>
  )
}

export default function ThreeBackground() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} gl={{ antialias: true, alpha: true }}>
        <Particles count={200} />
        <FloatingRings />
      </Canvas>
    </div>
  )
}