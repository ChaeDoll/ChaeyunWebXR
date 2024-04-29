import { useEffect, useState } from "react";

const usePlayerControl = () => {
    const keys = {
        KeyW: "forward",
        KeyA: "left",
        KeyS: "backward",
        KeyD: "right",
        Space: "jump"
    }
    const moveFieldByKey = (key) => keys[key];
    const [movement, setMovement] = useState({
        forward: false,
        left: false,
        backward: false,
        right: false,
        jump: false
    });
    const setMovementStatus = (code, status) => {
        setMovement((m)=>({...m, [code]: status}));
    }
    useEffect(()=>{
        const handleKeyDown = (e) => {
            setMovementStatus(moveFieldByKey(e.code), true);
        }
        const handleKeyUp = (e) => {
            setMovementStatus(moveFieldByKey(e.code), false);
        }
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        }
    },[]);
    return movement;
}

export default usePlayerControl