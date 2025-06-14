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
import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  // useGLTF is a hook from @react-three/drei that loads GLTF models which are 3D models in a specific format.
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
      //this tag is used to create a 3D object in the scene
      <mesh> 
        <hemisphereLight intensity={0.15} groundColor="black" /> {/* Adds ambient light to the scene */}
        <pointLight intensity={1} /> {/* Adds a point light to the scene */}
        <spotLight
          position={[-20,50,10]}
          angle={0.12} //sets the angle of the spotlight
          penumbra={1} //sets the softness of the spotlight's edges
          intensity={1} //sets the brightness of the spotlight
          castShadow //allows the spotlight to cast shadows
          shadow-mapSize={1024} //sets the size of the shadow map for better shadow quality
        />
        <primitive
          object={computer.scene} //the 3D computer model is added to the scene
          scale={isMobile ? 0.7 : 0.75}
          position={isMobile ? [0, -3, -2.2]:[0, -3.25, -1.5]} //sets the position of the computer model in the 3D space 
          rotation={[-0.01, -0.2, -0.1]} //sets the rotation of the computer model
          />
      </mesh>
  )
}


const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false); //state to check if the device is mobile

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)'); //media query to check if the device width is less than or equal to 500px
    setIsMobile(mediaQuery.matches); //sets the isMobile state based on the media query result
    
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches); //updates the isMobile state when the media query changes
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange); //adds an event listener to the media query to listen for changes

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange); //removes the event listener when the component unmounts
    }
  } , []);
  return(
    <Canvas
      frameloop = "demand"
      shadows
      camera = {{position: [20, 3, 5], fov: 25}}  
      gl={{preserveDrawingBuffer: true}} //preserves the drawing buffer for better rendering quality
      >
      <Suspense fallback={<CanvasLoader />} >
        <OrbitControls 
          enableZoom={false} //disables zooming in and out
          maxPolarAngle={Math.PI / 2} //limits the camera's vertical rotation to prevent flipping
          minPolarAngle={Math.PI / 2} //limits the camera's vertical rotation to prevent flipping
        />
        <Computers isMobile={isMobile}/> {/* Renders the Computers component which contains the 3D model */}
      </Suspense>
      <Preload all /> {/* Preloads all assets to improve performance */}
    </Canvas>
  )
}

export default ComputersCanvas;