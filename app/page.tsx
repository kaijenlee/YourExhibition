'use client';

import ExhibitionApp from 'app/Exhibition/Exhibition';

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

