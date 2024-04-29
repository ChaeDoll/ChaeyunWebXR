import { RigidBody } from "@react-three/rapier"

const PhysicsTestSceneBox = () =>{
    return (
        <>
            <RigidBody>
                <mesh receiveShadow castShadow position={[0, 5, -5]}>
                    <boxGeometry />
                    <meshStandardMaterial color={'green'} />
                </mesh>
            </RigidBody>
        </>
    )
}
export default PhysicsTestSceneBox