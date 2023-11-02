'use client';

import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
import { MeshStandardMaterial } from 'three';
import { Box } from './components/Box';
import { createRoot } from 'react-dom/client'
import { OrbitControls } from "@react-three/drei";
import Init from './Init';
import ExhibitionApp, { Exhibition } from './Exhibition/Exhibition';

// const root = createRoot(document.getElementById('root'));
// root.render(
//       <Canvas>
//           <OrbitControls />
//           <ambientLight />
//           <pointLight position={[10, 10, 10]} />
//           <Box position={[-1.2, 0, 0]} />
//           <Box position={[1.2, 0, 0]} />
//       </Canvas>
// )

export default function Home() {
  return (
    <body>
      {/* <Init /> */}
        < ExhibitionApp />
    </body>
  );
}

