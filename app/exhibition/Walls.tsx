import { useBox } from '@react-three/cannon';
import { length, height, width, wallThickness } from './constants/constants'


function YWall(props: { position: [number, number, number] }) {
    const [ref] = useBox(() => ({
        type: 'Static',
        mass: 100,
        onCollide: (e) => {
            console.log(e);
        },
        rotation: [0, Math.PI * 0.5, 0],
        ...props,
        args: [length, height, wallThickness]
    }));

    return (
        <mesh
            {...props}
            rotation-y={Math.PI * 0.5}
            castShadow
            receiveShadow
            //@ts-ignore
            ref={ref}
        >
            <boxGeometry args={[length, height, wallThickness]} />
            <meshStandardMaterial
                color={'light-gray'}
            />

        </mesh>

    )

}

function HWall(props: { position: [number, number, number] }) {
    const [ref] = useBox(() => ({
        type: 'Static',
        mass: 1,
        onCollide: (e) => {
            console.log(e);
        },
        ...props,
        args: [width + (2 * wallThickness), height, wallThickness]
    }));

    return (
        <mesh
            {...props}
            castShadow
            receiveShadow
            //@ts-ignore
            ref={ref}>
            <boxGeometry args={[width + (2 * wallThickness), height, wallThickness]} />
            <meshStandardMaterial
                color={'light-gray'}
            />
        </mesh>
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