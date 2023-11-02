import { MeshReflectorMaterial } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { useEffect } from "react"
import { LinearSRGBColorSpace, RepeatWrapping, TextureLoader, Vector2 } from "three";
import {width, height, length, wallThickness} from './constants/constants';
import { usePlane } from "@react-three/cannon";

export function Ground() { 

    // Floor physics Setup
    const [ref] = usePlane((index) => ({
        type: 'Static',
        mass: 0,
        rotation: [-Math.PI * 0.5, 0, 0],
    }));


    const [diff, disp] = useLoader(TextureLoader, [
        "/textures/wood_floor_diff.jpg",
        "/textures/wood_floor_disp.png"
    ])

    useEffect(() => { 
        [disp, diff].forEach((t) => {
            t.wrapS = RepeatWrapping;
            t.wrapT = RepeatWrapping;
            t.repeat.set(5,5);
        });
    }, [disp, diff])

    return (
        //@ts-ignore
        <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow ref={ref}>
            <planeGeometry args={[width, length]} /> 
            <MeshReflectorMaterial
                envMapIntensity={1}
                map={diff}
                // alphaMap={disp}
                displacementMap={disp}
                // isMaterial={true}
                roughnessMap={disp}
                dithering={false}
                // color={[0.015, 0.015, 0.015]}
                roughness={0.5}
                blur={[1000, 400]}
                mixBlur={30}
                mixStrength={80}
                mixContrast={1}
                resolution={1024}
                mirror={0}
                depthScale={0.01}
                minDepthThreshold={0.9}
                maxDepthThreshold={1}
                depthToBlurRatioBias={0.25}
                reflectorOffset={0.2}
                /* debug={0} */
            />
        </mesh>
    )
}