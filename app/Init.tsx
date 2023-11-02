import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Box } from './components/Box';

export default function Init() { 
    return (
        <Canvas shadows> {/* enables shadow */}
            <OrbitControls /> 
            <ambientLight />
            <pointLight position={[10, 10, 10]} intensity={100} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
        </Canvas>
    )
}