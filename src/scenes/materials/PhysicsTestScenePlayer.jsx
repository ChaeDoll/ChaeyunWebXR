import { RigidBody, useRapier } from "@react-three/rapier"
import { useRef } from "react";
import usePlayerControl from "../../hook/useplayercontrol";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import * as RAPIER from "@dimforge/rapier3d-compat"

const MOVE_SPEED = 5;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();

const PhysicsTestScenePlayer = () =>{
    const playerRef = useRef();
    const {forward, backward, left, right, jump} = usePlayerControl();
    const rapier = useRapier();
    useFrame((state)=>{
        if (!playerRef.current) return;
        const velocity = playerRef.current.linvel();
        frontVector.set(0, 0, backward-forward);
        sideVector.set(left-right, 0, 0);
        direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(MOVE_SPEED).applyEuler(state.camera.rotation);
        playerRef.current.wakeUp();
        playerRef.current.setLinvel({x:direction.x, y:velocity.y, z:direction.z});

        //jump
        const world = rapier.world;
        const ray = world.castRay(new RAPIER.Ray(playerRef.current.translation(), {x:0, y:-1, z:0}));
        const grounded = ray && ray.collider && Math.abs(ray.toi) < 1.5;
        if (jump && grounded) doJump();       

        //camera moving
        const {x,y,z} = playerRef.current.translation();
        state.camera.position.set(x, y, z);
    })
    const doJump = () => {
        playerRef.current.setLinvel({x:0, y:5, z:0});
    }

    return (
        <>
            <RigidBody position={[0,0,0]} mass={1} ref={playerRef} lockRotations>
                <mesh castShadow>
                    <capsuleGeometry args={[0.5, 2]}/>
                    <meshStandardMaterial color={'skyblue'}/>
                </mesh>
            </RigidBody>
        </>
    )
}
export default PhysicsTestScenePlayer