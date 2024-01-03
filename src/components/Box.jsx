import React, { useEffect, useRef } from 'react'
import {Office} from "./Office"
import {motion} from "framer-motion-3d"
import { Float, MeshDiscardMaterial, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei'
import { Avatar } from './Avatar'
import { useFrame, useThree } from '@react-three/fiber'
import { animate, useMotionValue } from 'framer-motion'
import framerMotionConfig from '../config'
import * as THREE from "three"

function Box(props) {
  const {section,menu}=props;
  const {viewport}=useThree();

 

  const cameraPositionX=useMotionValue();
  const cameraLookAtX=useMotionValue();
  

  useEffect(()=>{
    animate(cameraPositionX,menu ? -5 : 0,{
      ...framerMotionConfig
    })
    animate(cameraLookAtX,menu ? 5 : 0,{
      ...framerMotionConfig
    })

  },[menu])
  const characterContainerAbout=useRef()

  useFrame((state)=>{
    state.camera.position.x =cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(),0,0);

    // const position=new THREE.Vector3();
    // characterContainerAbout.current.getWorldPosition(position);
    // console.log([position.x,position.y,position.z])

    // const quaternion=new THREE.Quaternion();
    // characterContainerAbout.current.getWorldQuaternion(quaternion)
    
  });

 
  return (
    <>

    <motion.group
    position={[1.90,0.144000,2.6818]}
    rotation={[-3.141592653589793, 1.2053981633974482, 3.141592653589793]}
    animate={"" + section} 
    variants={{
      0:{
        scaleX:0.9,
        scaleY:0.9,
        scaleZ:0.9
      },
      1: {
        y: -viewport.height + 0.5,
        x:0,
        z: 7,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scaleX:  1,
        scaleY:  1,
        scaleZ: 1,
      },
      2: {
        x:  -2,
        y: -viewport.height * 2 + 0.5,
        z: 0,
        rotateX: 0,
        rotateY: Math.PI / 2,
        rotateZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      },
      3: {
        y: -viewport.height * 3 + 1,
        x: 0.24,
        z: 8.5,
        rotateX: 0,
        rotateY: -Math.PI / 4,
        rotateZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      },
    }}
    >
    <Avatar animation={section === 0 ? "Typing" : "Standing"} />
    </motion.group>


    <ambientLight intensity={1} />
    <motion.group
      position={[1.5, 2, 3]}
      scale={[0.9, 0.9, 0.9]}
      rotation-y={-Math.PI / 4}
      animate={{
        y: section === 0 ? 0 : -1,
      }}
    >
      <Office section={section} />

      <group name='CharacterSpot' position={[0.07,0.16,-0.57]} rotation={[-Math.PI,0.42,-Math.PI]} ref={characterContainerAbout}>
     
      </group>
    </motion.group>

    {/* SKILLS */}
    <motion.group
      position={[0, -1.5, -10]}
      animate={{
        z: section === 1 ? 0 : -10,
        y: section === 1 ? -viewport.height : -1.5,
      }}
    >
      <directionalLight position={[-5, 3, 5]} intensity={0.4} />
      <Float>
        <mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
          <sphereGeometry />
          <MeshDistortMaterial
            opacity={0.8}
            transparent
            distort={0.4}
            speed={4}
            color={"red"}
          />
        </mesh>
      </Float>
      <Float>
        <mesh scale={[3, 3, 3]} position={[3, 1, -18]}>
          <sphereGeometry />
          <MeshDistortMaterial
            opacity={0.8}
            transparent
            distort={1}
            speed={5}
            color="yellow"
          />
        </mesh>
      </Float>
      <Float>
        <mesh scale={[1.4, 1.4, 1.4]} position={[-3, -1, -11]}>
          <boxGeometry />
          <MeshWobbleMaterial
            opacity={0.8}
            transparent
            factor={1}
            speed={5}
            color={"blue"}
          />
        </mesh>
      </Float>
      {/* <group scale={[2, 2, 2]} position-y={-1.5}>
        <Avatar animation={section === 0 ? "Falling" : "Standing"} />
      </group> */}
    </motion.group>
  </>
  )
}

export default Box

