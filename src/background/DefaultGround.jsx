import { useTexture } from "@react-three/drei"
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import * as THREE from "three"

const DefaultGround = () => {
    const texture = useTexture('materials/groundTexture.jpg');
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    return (
        <>
        <RigidBody type="fixed" colliders={false}>
            <mesh receiveShadow rotation-x={THREE.MathUtils.degToRad(-90)}>
                <planeGeometry args={[500, 500]}/>
                <meshLambertMaterial color={"lightgray"} map={texture} map-repeat={[100,100]}/>
            </mesh>
            <CuboidCollider args={[500, 2, 500]} position={[0, -2, 0]}/>
        </RigidBody>
        </>
    )
}

export default DefaultGround