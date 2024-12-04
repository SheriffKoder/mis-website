"use client"

// import { useEffect, useRef } from 'react'
// import { useLoader, useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// import { ContactShadows, Environment, Preload, useGLTF} from "@react-three/drei";
import { Float } from "@react-three/drei";

// import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
// import { OrbitControls } from '@react-three/drei'
// import { useTexture } from '@react-three/drei';

// import {OptPhone} from "./optPhone";
// import {OptPhone42} from "./optPhone42";
// import {OptImac} from "./optImac";

// import { orbitType } from "@/constants/constants";
// import { useSpring, useMotionValue } from 'framer-motion';
import { motion } from "framer-motion-3d";  //sep lib
// import { LightScene } from './drafts/EarthLights';

// import { Plane, TorusKnot, useHelper } from "@react-three/drei";
// import { useControls } from "leva";
// import { DirectionalLight, DirectionalLightHelper, Mesh, PointLight, PointLightHelper, RectAreaLight, SpotLight, SpotLightHelper } from "three";
// import { RectAreaLightHelper } from "three/examples/jsm/Addons.js";

import { Robot } from '../3dModelsGLTF/Robot';

function RobotControls ({bodyRotation, robotMouseTrack}) {
    // console.log(bodyRotation.y)
    return (

        <motion.group>

            {/* <OptImac
            position={[0,0,0.0]}
            scale={7}
            myWallpaper={texture_1}
            /> */}
            <Robot
            scale={0.9}
            position={[0,-1.5,0]}
            rotation={[0,bodyRotation.y,bodyRotation.z]} 
            robotMouseTrack={robotMouseTrack}
            />


        </motion.group>


    )
}

// function Shape ({orbitControl, texture_1_url, texture_2_url}) {


//     //////////////////////////////////////////////////////////////////////////////
//     //////////////////////////////////////////////////////////////////////////////
//     const springOptions = {
//         damping: 60,
//     }

    
//     const mouse = {
//         rotation_y: useSpring(useMotionValue(-0.75), springOptions),
//         scale: useSpring(useMotionValue(1), springOptions),
//         position_x: useSpring(useMotionValue(isLargeScreen() ? 1.7 : 0), springOptions),

//     };


//     //////////////////////////////////////////////////////////////////////////////
//     //////////////////////////////////////////////////////////////////////////////

//     // npx gltfjsx public/3d/computer/opt-iphone3.glb -o components/myModels/optPhone.jsx -r public
//     // const gltf1 = useLoader(GLTFLoader, "./3d/computer/imac.glb");    //gltf.scene
//     // const gltf2 = useGLTF("./3d/computer/imac/scene.gltf");

//     // const texture_1 = useTexture(`${texture_1_url}`);  //texture importing method fixes the brightness issue
//     // const texture_2 = useTexture(`${texture_2_url}`);  //texture importing method fixes the brightness issue

//     return (


//         <motion.group
//         // rotation-y={mouse.rotation_y} scale={mouse.scale} position-x={mouse.position_x}
//         >

//             {/* <OptImac
//             position={[0,0,0.0]}
//             scale={7}
//             myWallpaper={texture_1}
//             /> */}

//             {/* <OptPhone42
//             scale={1.5}
//             position={[1.8,-1,0.8]}                           
//             rotation={[-0.1,3.15,0]} 
//             myWallpaper={texture_2}
//             /> */}

//         </motion.group>

//     )
// }


export default function RobotScene({bodyRotation, robotMouseTrack}) {

    return (
        <div className="h-full">
            <Canvas
            camera={{
                position: [0, 0, 15], fov:25,
                // near: 0.1,
                // far: 200,
            }}
            >
            <Float>

            <RobotControls bodyRotation={bodyRotation} robotMouseTrack={robotMouseTrack}/>
            {/* Environment lights, float like animation */}
            {/* <Environment preset="city" background blur={4}/> */}
                {/* <Shape orbitControl={orbitControl} texture_1_url={texture_1_url} texture_2_url={texture_2_url}/> */}
                
            </Float>


            {/* ground shadows */}
            {/* <ContactShadows position-y={-1.9} opacity={0.4} blur={2}/> */}


            {/* used for light debugging */}
            {/* <LightScene/> */}

            <directionalLight intensity={0} position={[-0, 2, 20.5]}/>
            <ambientLight intensity={2} />
            {/* <spotLight
            intensity={23}
            position={[-2.3,1.85,3.7]}
            distance={8.8}
            angle={0.85}
            /> */}

            {/* <OrbitControls
                enableZoom={true}   //true by default
                enablePan={true}    //true by default with right click
            /> */}


            </Canvas>
    </div>
    );
    
};