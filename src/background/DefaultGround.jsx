import * as THREE from "three"

const DefaultGround = () => {
    return (
        <>
            <mesh receiveShadow rotation-x={THREE.MathUtils.degToRad(-90)}>
                <planeGeometry args={[50, 50]}/>
                <meshLambertMaterial color={"lightgray"}/>
            </mesh>
        </>
    )
}

export default DefaultGround