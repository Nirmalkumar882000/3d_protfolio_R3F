import React, { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Avatar } from './Avatar'


function Experience() {
  return (
   <>
   <OrbitControls/>
   <ambientLight intensity={2}/>
   <Suspense fallback={null}>
   <group position-y={-1} >
      <Avatar/>
   </group>
   </Suspense>
   </>
  )
}

export default Experience
