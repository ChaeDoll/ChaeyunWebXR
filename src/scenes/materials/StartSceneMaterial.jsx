import * as THREE from "three"
import { OrbitControls, useTexture } from "@react-three/drei";

const StartSceneMaterial = ({data}) => {
    const tone = useTexture('materials/fiveTone.jpg');
    tone.minFilter = THREE.NearestFilter;
    tone.magFilter = THREE.NearestFilter;
    return (
        <>
            <OrbitControls/>
            {data ? data.data.map((value, index)=>{
                return (
                <mesh position={[index, 1, index]} receiveShadow castShadow key={index}>
                    <sphereGeometry/>
                    <meshStandardMaterial color={'lightgreen'}/>
                </mesh>
                )
            }) : undefined}
            <mesh position={[0, 3, 0]} receiveShadow castShadow >
                <boxGeometry />
                <meshStandardMaterial side={THREE.FrontSide} color={'#AAFFFF'}/>
                {/* <meshToonMaterial gradientMap={tone} color={'#AAFFFF'} /> */}
            </mesh>
        </>
    )
}

export default StartSceneMaterial;