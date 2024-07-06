/*
import {useAnimations, useGLTF} from '@react-three/drei';
import {Canvas} from "@react-three/fiber";
import {Suspense, useEffect, useRef, useState} from "react";
import luffyhat from '../assets/3d/luffy_hat.glb';

const Luffyhat = ({scale, position}) => {
    const luffyhatRef = useRef();
    const {scene, animations} = useGLTF(luffyhat);
    const {actions} = useAnimations(animations, luffyhatRef);

    useEffect(() => {
        actions['Idle'].play();
    }, [actions]);

    return (
        <mesh ref={luffyhatRef} scale={scale} position={position} rotation={[0, 2.2, 0]}>
            <primitive object={scene} />
        </mesh>
    );
};

const luffyhatCanvas = ({scrollContainer}) => {
    const [scale, setScale] = useState([1, 1, 1]);
    const [position, setPosition] = useState([0, 0, 0]);

    return (
        <Canvas className='luffyhat' camera={{near: 0.1, far: 1000}}>
            <Suspense>
                <pointLight position={[10, 10, 10]} intensity={2} />
                <ambientLight intensity={0.3} />

                <Luffyhat scale={scale} position={position} />
            </Suspense>
        </Canvas>
    );
};

export default luffyhatCanvas; */