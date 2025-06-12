import React from 'react';
/**
 * Canvas component for rendering 3D models using React Three Fiber.
 * Suspense is used to handle loading states.
 * OrbitControls allows for interactive camera control using mouse or touch gestures.
 * Preload is used to load assets before rendering helps in rendering objects when the startup is slow.
 * CanvasLoader is a custom loader component that displays a loading animation while the 3D model is being loaded.
 */
import {Canvas} from '@react-three/fiber';
import {Suspense,useState, useEffect} from 'react';
import {OrbitControls, Preload, useGLTF} from '@react-three/drei';
//import CanvasLoader from './CanvasLoader';

const Computers = () => {
  // useGLTF is a hook from @react-three/drei that loads GLTF models which are 3D models in a specific format.
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
      
      <mesh> //this tag is used to create a 3D object in the scene

      </mesh>
  )
}

export default Computers