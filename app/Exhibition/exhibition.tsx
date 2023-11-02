import { Grid, OrbitControls, PerspectiveCamera, TransformControls } from "@react-three/drei";
import { Ground } from "./Ground";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber"
import { Walls } from "./Walls";

export function Exhibition() {
    return (
        <>
            <OrbitControls target={[0, 6, 0]} maxPolarAngle={Math.PI} />
            <PerspectiveCamera makeDefault fov={40} position={[0, 6, -7.5]}/>
            {/* <color args={[0, 0, 0]} attach="background" /> */}
            <ambientLight/>
            <spotLight
                color={[1, 0.25,0]}
                intensity={100}
                angle={0.6}
                penumbra={0.5}
                position={[5, 5, 0]}
                castShadow
                shadow-bias={-0.0001}
            />
            <spotLight
                color={[0.14, 0.5, 1]}
                intensity={100}
                angle={0.6}
                penumbra={0.5}
                position={[-5, 5, 0]}
                castShadow
                shadow-bias={-0.0001}
            />
    
            <Ground />
            <Walls/>

            <mesh rotation-x={Math.PI * 0.5} rotation-={Math.PI *0.5} position-y={15} castShadow receiveShadow>
                <planeGeometry args={[30,30]}/>
                <meshBasicMaterial color={'pink'}/>
            </mesh>
            <Grid infiniteGrid={true} />
        </>
    )
}

function ExhibitionApp() {
    return (
        <Suspense fallback={null}>
            <Canvas shadows>
                <Exhibition />
            </Canvas>
        </Suspense>
    )
}

export default ExhibitionApp; 