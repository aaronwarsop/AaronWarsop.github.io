import {Suspense, useEffect, useState} from 'react';
import {Canvas} from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Artorias = () => {
    const artorias = useGLTF("/artorias.glb");

    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor="black" />
            <pointLight intensity={1}/>
            <primitive object={artorias.scene}></primitive>
        </mesh>
    );
};

const ArtoriasCanvas = () => {

    return (
        <div style={{ width: '100%', height: '450px', flexShrink: 0}}>
            <Canvas
                frameloop="demand"
                shadows
                camera={{position: [10, 3, 5], fov: 25}}
                gl={{preserveDrawingBuffer: true}}
            >
                <Suspense fallback={<CanvasLoader />}>
                    <OrbitControls
                        enableZoom={false}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                    />
                    <Artorias />
                </Suspense>
                <Preload all />
                
            </Canvas>
        </div>
        
    );
};

export default ArtoriasCanvas;