import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function CrownCore({ pointer, scrollProgressRef }){
  const group = useRef()

  useFrame((state, delta) => {
    if(!group.current) return
    // slow spin
    group.current.rotation.y += delta * 0.18
    // pointer tilt
    group.current.rotation.x += (pointer.y * 0.35 - group.current.rotation.x) * 0.04
    group.current.rotation.y += (pointer.x * 0.35 - group.current.rotation.y) * 0.04

    // scale by scroll
    const p = scrollProgressRef.current || 0
    const target = 1 + 0.7 * p
    group.current.scale.x += (target - group.current.scale.x) * 0.06
    group.current.scale.y += (target - group.current.scale.y) * 0.06
    group.current.scale.z += (target - group.current.scale.z) * 0.06
  })

  return (
    <group ref={group}>
      {/* base ring */}
      <mesh position={[0, -0.35, 0]} rotation={[Math.PI/2, 0, 0]}>
        <torusGeometry args={[1.2, 0.18, 16, 64]} />
        <meshStandardMaterial color={'#d4af37'} metalness={0.7} roughness={0.25} />
      </mesh>

      {/* spikes */}
      {Array.from({length:6}).map((_,i)=>{
        const angle = (i/6) * Math.PI * 2
        const x = Math.cos(angle) * 1.1
        const z = Math.sin(angle) * 1.1
        return (
          <mesh key={i} position={[x, 0.05, z]} rotation={[0, -angle, 0]}>
            <cylinderGeometry args={[0, 0.18, 0.7, 6]} />
            <meshStandardMaterial color={'#f0c85b'} metalness={0.6} roughness={0.35} />
          </mesh>
        )
      })}

      {/* front gem */}
      <mesh position={[0, 0.25, 1.05]}> 
        <boxGeometry args={[0.24, 0.24, 0.1]} />
        <meshStandardMaterial color={'#b81e22'} metalness={0.3} roughness={0.2} emissive={'#6b0b0b'} emissiveIntensity={0.06} />
      </mesh>
    </group>
  )
}
