import { FirstPersonControls, Grid, OrbitControls, PerspectiveCamera, PointerLockControls, SpotLight, TransformControls, useHelper } from "@react-three/drei";
import { Ground } from "./Ground";
import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber"
import { Walls } from "./Walls";
import { width, length } from "./constants/constants";
import { SpotLightHelper } from "three/src/helpers/SpotLightHelper.js";
import { Physics } from '@react-three/cannon';
import Person from "./Person";


export function Exhibition() {
    const lightRef = useRef();
    useHelper(lightRef, SpotLightHelper, 'Cyan')
    return (
        <>
            {/* <OrbitControls target={[0, 6, 0]} maxPolarAngle={Math.PI} /> */}
            <PerspectiveCamera makeDefault fov={75} position={[0, 6, -7.5]}/>
            {/* <color args={[0, 0, 0]} attach="background" /> */}
            {/* <ambientLight/> */}
            <spotLight
                color={[1, 0.25,0]}
                intensity={100}
                angle={Math.PI/3}
                penumbra={0.8}
                position={[5, 10, 0]}
                castShadow
                shadow-bias={-0.0001}
                ref={lightRef}
            />
            <spotLight
                color={[0.14, 0.5, 1]}
                intensity={100}
                angle={0.6}
                penumbra={0.5}
                position={[-5, 10, 0]}
                castShadow
                shadow-bias={-0.0001}
            />
            <Physics>
                <Person controls position={[0, 6 , -7.5]} args={[0.5]} color="yellow" />

                <Walls/>
                <Ground />
            </Physics>
            <PointerLockControls /> 

            <mesh rotation-x={Math.PI * 0.5} rotation-={Math.PI *0.5} position-y={15} castShadow receiveShadow>
                <planeGeometry args={[width,length]}/>
                <meshPhongMaterial />

            </mesh>
            {/* <Grid infiniteGrid={true} /> */}
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