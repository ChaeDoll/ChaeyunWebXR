import { RigidBody } from "@react-three/rapier"
import { useRef } from "react";
import usePlayerControl from "../../hook/useplayercontrol";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const MOVE_SPEED = 5;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();

const PhysicsTestScenePlayer = () =>{
    const playerRef = useRef();
    const {forward, backward, left, right} = usePlayerControl();
    useFrame((state)=>{
        if (!playerRef.current) return;
        const velocity = playerRef.current.linvel();
        frontVector.set(0, 0, backward-forward);
        sideVector.set(left-right, 0, 0);
        direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(MOVE_SPEED);
        playerRef.current.wakeUp();
        playerRef.current.setLinvel({x:direction.x, y:velocity.y, z:direction.z})
    })
    return (
        <>
            <RigidBody position={[3, 1, -3]} mass={1} ref={playerRef} lockRotations>
                <mesh receiveShadow castShadow>
                    <capsuleGeometry args={[0.5, 0.5]}/>
                    <meshStandardMaterial color={'skyblue'}/>
                </mesh>
            </RigidBody>
        </>
    )
}
export default PhysicsTestScenePlayer