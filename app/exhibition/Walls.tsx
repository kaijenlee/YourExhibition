import { RigidBody } from '@react-three/rapier'
import { length, height, width, wallThickness } from './constants/constants'


function YWall(props: { position: [number, number, number] }) {
    return (
        <RigidBody type='fixed' colliders='cuboid' >
            <mesh
                {...props}
                rotation-y={Math.PI * 0.5}
                castShadow
                receiveShadow
            >
                <boxGeometry args={[length, height, wallThickness]} />
                <meshStandardMaterial
                    color={'gray'}
                />
            </mesh>
        </RigidBody >

    )

}

function HWall(props: { position: [number, number, number] }) {
 return (
        <RigidBody type='fixed' colliders='cuboid' >
            <mesh
                {...props}
                castShadow
                receiveShadow
            >
                <boxGeometry args={[width + (2 * wallThickness), height, wallThickness]} />
                <meshStandardMaterial
                    color={'light-gray'}
                />
            </mesh>
        </RigidBody>
    )
}

export function Walls() {
    return (
        <>
            <YWall position={[(width + wallThickness) / 2, height / 2, 0]} />
            <YWall position={[-(width + wallThickness) / 2, height / 2, 0]} />
            <HWall position={[0, height / 2, (length + wallThickness) / 2]} />
            <HWall position={[0, height / 2, -(length + wallThickness) / 2]} />
        </>
    )
}