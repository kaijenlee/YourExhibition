import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three"
import { fpControls } from "./util/utils";
import { useEffect, useRef } from "react";
import { SPEED } from "./constants/constants";


export default function Person(props) { 
    const direction = new Vector3();
    const frontVector = new Vector3(); 
    const sideVector = new Vector3(); 
    const speed = new Vector3(); 
    
    const { camera } = useThree();

    const [ref,api] = useSphere((index) => ({
        mass: 1,
        type: 'Dynamic',
        position: [0, 10, 0], // TODO set starting position as a env var 
        ...props, 
    })); 

    const {forward, backward, left, right} = fpControls();
    const velocity = useRef([0,0,0]);

    useEffect(() => {
        api.velocity.subscribe((v) => {
            velocity.current = v;
        })
    }, []);

    useFrame((state) => { 
        ref.current?.getWorldPosition(camera.position);
        frontVector.set(0,0, Number(backward) - Number(forward));
        sideVector.set(Number(left) - Number(right), 0, 0);
        direction.subVectors(frontVector, sideVector)
            .normalize()
            .multiplyScalar(SPEED)
            .applyEuler(camera.rotation); 
        speed.fromArray(velocity.current);

        api.velocity.set(direction.x, velocity.current[1], direction.z);
    });

    return ( 
        <group>
            <mesh castShadow position={props.position} ref={ref}>
                <sphereGeometry args={props.args} />
                <meshStandardMaterial color="#FFFF00" />
            </mesh>
        </group>
    );
}