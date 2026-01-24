import React, { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import * as THREE from 'three'

export default function CrownModel({ pointer, scrollProgressRef }){
  const group = useRef()
  const [obj, setObj] = useState(null)
  const [scale, setScale] = useState(0.12)

  // Adjust scale based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale(0.08) // mobile: smaller
      } else if (window.innerWidth < 1024) {
        setScale(0.10) // tablet: medium
      } else {
        setScale(0.12) // desktop: normal
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Load OBJ file once on mount
  useEffect(() => {
    const loader = new OBJLoader()
    const timeout = setTimeout(() => {
      console.warn('Crown OBJ load timeout - using fallback')
    }, 5000)

    loader.load(
      '/crown_Iron_v2_L1.123c9541d324-cd2f-4df6-90a2-0ffb3dc6f3ba/16895_crown_Iron_v2_NEW.obj',
      (loaded) => {
        clearTimeout(timeout)
        
        // Apply responsive scale and center
        loaded.scale.set(scale, scale, scale)
        loaded.position.set(0, 0, 0)
        
        // Apply golden material to all meshes
        loaded.traverse((child) => {
          if (child.isMesh) {
            child.material = new THREE.MeshStandardMaterial({
              color: '#d4af37',
              metalness: 0.8,
              roughness: 0.15,
              emissive: '#8b6914',
              emissiveIntensity: 0.3
            })
          }
        })
        
        setObj(loaded)
      },
      (progress) => {
        // Log progress to monitor loading
        console.log('Crown loading:', (progress.loaded / progress.total * 100).toFixed(2) + '%')
      },
      (error) => {
        clearTimeout(timeout)
        console.warn('Failed to load crown OBJ, will use fallback:', error)
      }
    )

    return () => clearTimeout(timeout)
  }, [scale])
  
  useFrame((state, delta) => {
    if(!group.current) return
    // Rotate around Y axis (vertical) - coroa em pé
    group.current.rotation.y += delta * 0.18
    // Subtle tilt with pointer movement (não muito)
    group.current.rotation.x += (pointer.y * 0.15 - group.current.rotation.x) * 0.02
    group.current.rotation.z += (pointer.x * 0.1 - group.current.rotation.z) * 0.02
    
    const p = scrollProgressRef?.current || 0
    const target = 1 + 0.7 * p
    group.current.scale.x += (target - group.current.scale.x) * 0.06
    group.current.scale.y += (target - group.current.scale.y) * 0.06
    group.current.scale.z += (target - group.current.scale.z) * 0.06
  })

  return (
    <group ref={group}>
      {/* Loaded OBJ crown only */}
      {obj && <primitive object={obj} />}
    </group>
  )
}
