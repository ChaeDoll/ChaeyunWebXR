import { Canvas, useFrame } from "@react-three/fiber";
import StartSceneInterface from "../interfaces/StartSceneInterface";
import StartSceneMaterial from "./materials/StartSceneMaterial";
import DefaultGround from "../background/DefaultGround";
import SkyWithLight from "../background/SkyWithLight";
// import { SoftShadows } from "@react-three/drei";
import * as XRMaterial from "../webxr/js/render/core/material"
import * as XRNode from "../webxr/js/render/core/node"
import * as XRRenderer from "../webxr/js/render/core/renderer"
import * as XRSample from "../webxr/js/webxr-sample-app"

const StartScene = () => {
    // const xrSample = XRSample.WebXRSampleApp();
    // xrSample.
    return (
        <>
            <Canvas shadows camera={{
                fov:90,
                position:[0,7,7],
            }}>
                <SkyWithLight/>
                <StartSceneMaterial/>
                <DefaultGround/>
            </Canvas>
            <StartSceneInterface />
        </>
    )
}

export default StartScene;