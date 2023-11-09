import { useKeyboardControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { CapsuleCollider, RapierRigidBody, RigidBody, useRapier } from "@react-three/rapier";
import { useRef } from "react";
import { Vector3 } from "three";
import { SPEED } from "./constants/constants";


export default function Person(props: any) {
    const direction = new Vector3();
    const frontVector = new Vector3();
    const sideVector = new Vector3();
    const { camera } = useThree();
    const ref = useRef<RapierRigidBody>(null);
    const [, get] = useKeyboardControls();

    useFrame(() => {
        const { forward, backward, left, right } = get();

        if (ref.current) {
            const velocity = ref.current.linvel();
            const trans = ref.current.translation();
            camera.position.set(trans.x, trans.y + 1.6, trans.z);

            if (forward) {
                console.log('RIGHTONNNN')
            }

            frontVector.set(0, 0, Number(backward) - Number(forward));
            sideVector.set(Number(left) - Number(right), 0, 0);
            direction.subVectors(frontVector, sideVector)
                .normalize()
                .multiplyScalar(SPEED)
                .applyEuler(camera.rotation);
            // // jumping
            // const world = rapier.world.raw()
            // const ray = world.castRay(new RAPIER.Ray(ref.current.translation(), { x: 0, y: -1, z: 0 }))
            // const grounded = ray && ray.collider && Math.abs(ray.toi) <= 1.75
            // if (jump && grounded) ref.current.setLinvel({ x: 0, y: 7.5, z: 0 })

            ref.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z }, true);
        }

    });

    return (
        <>
            <RigidBody ref={ref} colliders={false} mass={1} type="dynamic" position={props.position} enabledRotations={[false, false, false]}>
                <CapsuleCollider args={[0.9, 0.4]} />
                {/* TODO swap with character model */}
                <mesh castShadow position={[0, 0.9, 0]}>
                    <sphereGeometry args={props.args} />
                    <meshStandardMaterial color="#FFFF00" />
                </mesh>
                <mesh castShadow position={[0, -0.4, 0]}>
                    <cylinderGeometry args={[0.4, 0.4, 1.8]} />
                    <meshStandardMaterial color="#FFFF00" />
                </mesh>
            </RigidBody>
        </>

    );
}