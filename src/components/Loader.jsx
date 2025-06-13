/**
 * Loader component to display loading progress in a 3D scene.
 * It uses the useProgress hook from @react-three/drei to get the loading progress.
 * The Html component is used to display HTML content in the 3D scene.
 */
import React from 'react'
import {Html, useProgress} from '@react-three/drei'; 

const  Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className='canvas-load'> </span>
       <p
        style={{
          fontSize: 14,
          color: '#f1f1f1',
          fontWeight: 800,
          marginTop: 40}}
       >{progress.toFixed(2)}%</p>

    </Html>
  )
}

export default Loader;