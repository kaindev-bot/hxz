import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function createHeartShape(){
  const x = 0, y = 0
  const heart = new THREE.Shape()
  heart.moveTo(x, y + 0.5)
  heart.bezierCurveTo(x + 0.5, y + 1.6, x + 2.5, y + 1.8, x + 3, y + 0.5)
  heart.bezierCurveTo(x + 3.6, y - 0.8, x + 1.5, y - 2.4, x, y - 1)
  heart.bezierCurveTo(x - 1.5, y - 2.4, x - 3.6, y - 0.8, x - 3, y + 0.5)
  heart.bezierCurveTo(x - 2.5, y + 1.8, x - 0.5, y + 1.6, x, y + 0.5)
  return heart
}

export default function HeartCore({ pointer, scrollProgressRef }){
  const mesh = useRef()
  const shape = useMemo(()=> createHeartShape(), [])

  useFrame((state, delta) => {
    if(!mesh.current) return
    // gentle breathing + rotation
    mesh.current.rotation.y += delta * 0.3
    mesh.current.rotation.x += delta * 0.05

    // pointer influenced tilt
    mesh.current.rotation.x += (pointer.y * 0.4 - mesh.current.rotation.x) * 0.03
    mesh.current.rotation.y += (pointer.x * 0.4 - mesh.current.rotation.y) * 0.03

    // scale based on scroll progress
    const p = scrollProgressRef.current || 0
    const target = 1 + 0.8 * p
    mesh.current.scale.x += (target - mesh.current.scale.x) * 0.06
    mesh.current.scale.y += (target - mesh.current.scale.y) * 0.06
    mesh.current.scale.z += (target - mesh.current.scale.z) * 0.06
  })

  return (
    <mesh ref={mesh} position={[0, -0.1, 0]}>
      <extrudeGeometry args={[shape, { depth: 0.6, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.03 }]} />
      <meshStandardMaterial color={'#b81e22'} metalness={0.2} roughness={0.3} emissive={'#5b090a'} emissiveIntensity={0.08} />
    </mesh>
  )
}
