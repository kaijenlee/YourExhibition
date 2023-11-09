import { KeyboardControls, Loader, PerspectiveCamera, PointerLockControls, useHelper } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { SpotLightHelper } from "three/src/helpers/SpotLightHelper.js";
import { Ground } from "./Ground";
import Person from "./Person";
import { Walls } from "./Walls";
import { length, width } from "./constants/constants";
import { Physics } from "@react-three/rapier";


export function Exhibition() {
    const lightRef = useRef();
    //@ts-ignore
    useHelper(lightRef, SpotLightHelper, 'Cyan')
    return (
        <>
            {/* <OrbitControls target={[0, 6, 0]} maxPolarAngle={Math.PI} /> */}
            <PerspectiveCamera makeDefault fov={75} position={[0, 6, -7.5]} />
            {/* <color args={[0, 0, 0]} attach="background" /> */}
            {/* <ambientLight /> */}
            <spotLight
                color={[1, 0.25, 0]}
                intensity={100}
                angle={Math.PI / 3}
                penumbra={0.8}
                position={[5, 10, 0]}
                castShadow
                shadow-bias={-0.0001}
                //@ts-ignore
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
            <Physics debug>
                <Person controls position={[0, 5, 0]} args={[0.4]} color="yellow" />

                <Walls />
                <Ground />
            </Physics>
            <PointerLockControls />

            <mesh rotation-x={Math.PI * 0.5} rotation-={Math.PI * 0.5} position-y={15} castShadow receiveShadow>
                <planeGeometry args={[width, length]} />
                <meshPhongMaterial />

            </mesh>
            {/* <Grid infiniteGrid={true} /> */}
        </>
    )
}

function ExhibitionApp() {
    return (
        <KeyboardControls
            map={[
                { name: "forward", keys: ["ArrowUp", "w", "W"] },
                { name: "backward", keys: ["ArrowDown", "s", "S"] },
                { name: "left", keys: ["ArrowLeft", "a", "A"] },
                { name: "right", keys: ["ArrowRight", "d", "D"] },
                { name: "jump", keys: ["Space"] },
            ]}>
            <Canvas shadows>
                <Suspense fallback={null}>
                    <Exhibition />
                </Suspense>
            </Canvas>
            <Loader />
        </KeyboardControls>

    )
}

export default ExhibitionApp; 