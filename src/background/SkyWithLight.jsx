import { Sky } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three"

const shadowOffset = 50;

const SkyWithLight = () => {
    const [sunDegree, setSunDegree] = useState(90);
    const sunRef = useRef();
    const lightRef = useRef();
    let sun = new THREE.Vector3();
    useFrame((state, delta) => {
        if (sunDegree < -270) { setSunDegree(90);}
        else { setSunDegree(prev => prev - 0.01);}
        sun.setFromSphericalCoords(30, THREE.MathUtils.degToRad(sunDegree), 90); //반지름 30, +각도를 따라서, 동쪽에서 시작
        sunRef.current.material.uniforms.sunPosition.value.copy(sun);
        const y = Math.cos(THREE.MathUtils.degToRad(sunDegree)) * 50 ;
        const x = Math.sin(THREE.MathUtils.degToRad(sunDegree)) * 50 ;
        lightRef.current.position.set(x, y, 0);
    })
    return (
        <>
            <ambientLight intensity={0.8}/>
            <directionalLight ref={lightRef} castShadow shadow-mapSize={4096} intensity={1.5}
            shadow-camera-top={shadowOffset}
            shadow-camera-bottom={-shadowOffset}
            shadow-camera-left={shadowOffset}
            shadow-camera-right={-shadowOffset}
            >
                <Sky ref={sunRef} />
            </directionalLight>
        </>
    )
}

export default SkyWithLight;