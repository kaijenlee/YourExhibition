import { KeyboardControls, Loader, PerspectiveCamera, PointerLockControls, SpotLight, useHelper } from "@react-three/drei";
import { Canvas, useLoader, } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense, useRef, useState } from "react";
import { Object3D, SpotLight as SpotLight3, TextureLoader } from "three";
import { SpotLightHelper } from "three/src/helpers/SpotLightHelper.js";
import { Ground } from "./components/Ground";
import Person from "./components/Person";
import { Walls } from "./components/Walls";
import { height, length, width } from "./constants/constants";


export function ExhibitionScene() {
    const lightRef1 = useRef<SpotLight3>(null);
    const lightRef2 = useRef<SpotLight3>(null);

    //@ts-ignore
    useHelper(lightRef1, SpotLightHelper, 'Cyan')
    //@ts-ignore
    useHelper(lightRef2, SpotLightHelper, 'Green')

    const [photo ,eric1, eric2] = useLoader(TextureLoader, [
        "/photo/bnwClub.jpg",
        "/photo/eric1.jpg",
        "/photo/eric2.jpg"
    ])
    const [bnwClubTarget] = useState(() => new Object3D())
    const [eric1Target] = useState(() => new Object3D())
    const [eric2Target] = useState(() => new Object3D())



    return (
        <>
            {/* <OrbitControls target={[0, 6, 0]} maxPolarAngle={Math.PI} /> */}
            <PerspectiveCamera makeDefault fov={75} position={[0, 6, -7.5]} />
            <hemisphereLight intensity={0.2} color={[1,0.5,0.25]}/>
            {/* <ambientLight /> */}
            <SpotLight
                castShadow
                // ref={lightRef1}
                penumbra={0.7}
                distance={25}
                angle={0.25}
                attenuation={0.4}
                anglePower={1.5}
                intensity={500}
                color={'white'}
                position={[0, 10, -12]}
                target={bnwClubTarget}
            />
            <primitive object={bnwClubTarget} position={[0, 2, -14.5]} />

            <SpotLight
                castShadow
                // ref={lightRef1}
                penumbra={0.7}
                distance={25}
                angle={0.25}
                attenuation={0.4}
                anglePower={1.5}
                intensity={500}
                color={'white'}
                position={[-4, 10, -12]}
                target={eric1Target}
            />
            <primitive object={eric1Target} position={[-4, 2, -14.5]} />
            <SpotLight
                castShadow
                // ref={lightRef1}
                penumbra={0.7}
                distance={25}
                angle={0.25}
                attenuation={0.4}
                anglePower={1.5}
                intensity={500}
                color={'white'}
                position={[4, 10, -12]}
                target={eric2Target}
            />
            <primitive object={eric2Target} position={[4, 2, -14.5]} />

            <Physics>
                <Person controls position={[0, 5, -5]} args={[0.4]} color="yellow" />
                <Walls />
                <Ground />
            </Physics>
            <PointerLockControls />

            <mesh castShadow position={[0, 3, -14.5]}>
                <boxGeometry args={[2, 3, 0.1]} />
                <meshStandardMaterial map={photo} />
            </mesh>
            <mesh castShadow position={[-4, 3, -14.5]}>
                <boxGeometry args={[2, 3, 0.1]} />
                <meshStandardMaterial map={eric1} />
            </mesh>
            <mesh castShadow position={[4, 3, -14.5]}>
                <boxGeometry args={[2, 3, 0.1]} />
                <meshStandardMaterial map={eric2} />
            </mesh>

            <mesh rotation-x={Math.PI * 0.5} rotation-={Math.PI * 0.5} position-y={height} castShadow receiveShadow>
                <planeGeometry args={[width, length]} />
                <meshPhongMaterial color={'beige'} />

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
                    <ExhibitionScene />
                </Suspense>
            </Canvas>
            <Loader />
        </KeyboardControls>

    )
}

export default ExhibitionApp; 