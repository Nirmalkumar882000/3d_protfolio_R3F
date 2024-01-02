import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import Experience from "./components/Experience";
import Box from "./components/Box";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import Interface from "./components/Interface";
import ScrollManager from "./components/ScrollManager";
import Menu from "./components/Menu";
import { MotionConfig } from "framer-motion";

function App() {
  const [section,setSection]=useState(0)
  const [menu,setMenu]=useState(false)

  useEffect(()=>{
    setMenu(false)
  },[section])



  return (
    <>
      {/* <Canvas shadows camera={{position: [0,2,5],fov:30}}>
    <color attach="background" args={["#ececec"]}/>
    <Experience/>
   </Canvas> */}
   <MotionConfig
   transition={{
    type:"spring",
    mass:5,
    stiffness:500,
    damping:50,
    restDelta:0.0001,
   }}

   >
      <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
        <color attach="background" args={["#e6e7ff"]} />
        <OrbitControls />
        <ScrollControls pages={4} damping={0.1}>
          <ScrollManager section={section} onSectionChange={setSection}/>
          <Box  section={section}/>
          <Scroll html>
            <Interface/>
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Menu onSectionChange={setSection} menu={menu} setMenu={setMenu}/>
   </MotionConfig>
    </>
  );
}

export default App;
