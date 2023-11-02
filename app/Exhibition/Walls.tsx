const width = 15;
const length = 28; 
const height = 15; 
const wallThickness = 1; 


function YWall(props: {position: [number, number, number]}) { 
    return (
        <mesh 
             {...props}
             rotation-y={Math.PI * 0.5}
             castShadow 
             receiveShadow>
                <boxGeometry args={[length, height, wallThickness]} />
                <meshStandardMaterial
                    color={'light-gray'} 
                />  
        </mesh>
    )
}

function HWall(props: {position: [number, number, number]}) { 
    return (
        <mesh 
             {...props}
             rotation-z={Math.PI * 0.5}
             castShadow 
             receiveShadow>
                <boxGeometry args={[height, width , wallThickness]} />
                <meshStandardMaterial
                    color={'light-gray'} 
                />  
        </mesh>
    )
}

export function Walls() {
    return (
        <>
            <YWall position={[(width + wallThickness) /2, height /2  ,0]}/> 
            <YWall position= {[-(width + wallThickness) /2, height/2, 0]}/> 
            <HWall position= {[0, height/2, (length + wallThickness) /2]}/> 
            <HWall position= {[0, height/2, -(length + wallThickness) /2]}/>
        </>
    )
}