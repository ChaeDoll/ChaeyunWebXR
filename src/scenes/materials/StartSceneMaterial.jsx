import * as THREE from "three"
import { OrbitControls, useTexture } from "@react-three/drei";
import { useState } from "react";

const StartSceneMaterial = () => {
    const tone = useTexture('materials/fiveTone.jpg');
    tone.minFilter = THREE.NearestFilter;
    tone.magFilter = THREE.NearestFilter;
    return (
        <>
            <OrbitControls/>
            <mesh position={[0, 3, 0]} receiveShadow castShadow >
                <boxGeometry />
                <meshStandardMaterial side={THREE.FrontSide} color={'#AAFFFF'}/>
                {/* <meshToonMaterial gradientMap={tone} color={'#AAFFFF'} /> */}
            </mesh>
        </>
    )
}

export default StartSceneMaterial;