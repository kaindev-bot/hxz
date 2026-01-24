import React, { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'
import artist from '../data/artist'

export default function AlbumGlobe({ releases = [], scrollProgressRef, radius = 3.0 }){
  const group = useRef()
  // prepare texture urls (fallback to a placeholder if missing)
  const urls = useMemo(() => releases.slice(0, 12).map(r => r.image || r.images?.[0]?.url || artist.featuredCover || artist.image), [releases])
  const textures = useTexture(urls)

  const positions = useMemo(()=>{
    return urls.map((u, i) => {
      const phi = Math.acos(-1 + (2 * i) / urls.length)
      const theta = Math.sqrt(urls.length * Math.PI) * phi
      const x = radius * Math.cos(theta) * Math.sin(phi)
      const y = radius * Math.sin(theta) * Math.sin(phi) * 0.4 // slightly squashed
      const z = radius * Math.cos(phi)
      return new THREE.Vector3(x,y,z)
    })
  }, [urls, radius])

  useFrame((state, delta)=>{
    if(group.current){
      // base spin
      group.current.rotation.y += delta * 0.12
      // subtle tilt based on hero scroll progress
      const p = scrollProgressRef?.current || 0
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -0.2 + p * 0.6, 0.02)
    }
  })

  return (
    <group ref={group}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos} lookAt={[0,0,0]}>
          <planeGeometry args={[0.6,0.6]} />
          <meshStandardMaterial map={textures[i]} metalness={0.1} roughness={0.8} />
        </mesh>
      ))}
    </group>
  )
}
