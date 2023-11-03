import { useEffect, useState, useMemo } from "react";

export function useFpControls() { 
    const keysMap: {[key:string]: string} = useMemo(() => ({ 
        'KeyW': 'forward',
        'KeyS': 'backward',
        'KeyA': 'left',
        'KeyD': 'right'
    }), []);

    // TODO: check what useState returns
    const [movement, setMovement] = useState({
        forward: false,
        backward: false,
        left: false,
        right: false,         
    })

    // Handling key presses
    // TODO exiting focus window, reset everhthing to 0 
    useEffect(() => { 
        const handleKeyPress = (e: KeyboardEvent) => setMovement((m) => ({
                ...m,
                [keysMap[e.code]]:true
            })
        )
        const handleKeyRelease = (e: KeyboardEvent) => setMovement((m) => ({
            ...m,
            [keysMap[e.code]]:false
        })
    )

        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('keyup', handleKeyRelease);

        return (() => { 
            document.removeEventListener('keydown', handleKeyPress);
            document.removeEventListener('keyup', handleKeyRelease);
        })
    }, [keysMap]);

    return movement; 
}