import * as THREE from "three"
import { OrbitControls, useTexture } from "@react-three/drei";

const StartSceneMaterial = () => {
    const tone = useTexture('materials/fiveTone.jpg');
    tone.minFilter = THREE.NearestFilter;
    tone.magFilter = THREE.NearestFilter;
    return (
        <>
            <OrbitControls/>
            <mesh position={[0, 3, 0]} receiveShadow castShadow >
                <sphereGeometry />
                <meshToonMaterial gradientMap={tone} color={'#AAFFFF'} />
            </mesh>
        </>
    )
}

export default StartSceneMaterial;