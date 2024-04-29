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
import { useState } from "react";
import { WebXRButton } from "../webxr/js/util/webxr-button";

const StartScene = () => {
    // const xrSample = XRSample.WebXRSampleApp();
    const [data, setData] = useState();
    return (
        <>
            <Canvas shadows camera={{
                fov:90,
                position:[0,7,7],
            }}>
                <SkyWithLight/>
                <StartSceneMaterial data={data}/>
                <DefaultGround/>
            </Canvas>
            <StartSceneInterface setData={setData}/>
        </>
    )
}

export default StartScene;