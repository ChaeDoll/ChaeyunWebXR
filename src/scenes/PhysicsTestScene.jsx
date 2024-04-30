import { Canvas } from "@react-three/fiber"
import SkyWithLight from "../background/SkyWithLight"
import DefaultGround from "../background/DefaultGround"
import { PointerLockControls } from "@react-three/drei"
import { Physics, RigidBody } from "@react-three/rapier"
import PhysicsTestScenePlayer from "./materials/PhysicsTestScenePlayer"
import PhysicsTestSceneBox from "./materials/PhysicsTestSceneBox"

const PhysicsTestScene = () => {
    return (
        <>
            <Canvas shadows camera={{
                fov:60,
                position:[0,3,0],
                rotation:[-Math.PI/180*10, 0,0]
            }}>
                <PointerLockControls/>
                <SkyWithLight/>
                <Physics>
                    <DefaultGround/>
                    <PhysicsTestScenePlayer/>
                    <PhysicsTestSceneBox/>
                </Physics>
            </Canvas>
        </>
    )
}

export default PhysicsTestScene