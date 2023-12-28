import React from 'react'
import { OrbitControls } from '@react-three/drei'
import { Avatar } from './Avatar'


function Experience() {
  return (
   <>
   <OrbitControls/>
   <ambientLight intensity={2}/>
   <group position-y={-1} >
      <Avatar/>
   </group>
   </>
  )
}

export default Experience
