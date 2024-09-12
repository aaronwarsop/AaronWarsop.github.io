import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {

    return (
        <section className="flex items-center justify-center h-screen w-full mx-auto">
            <div className="text-center w-full md:w-1/2 mx-auto">
                <h1 className="text-heading-col align-center ">
                    <TypeAnimation
                        sequence={["Hi, I'm Aaron."]}
                        speed={30}
                        wrapper="span"
                        repeat={false}
                        cursor={false}
                    />
                </h1>

                <p className="text-text-col text-[24px]">
                    <TypeAnimation
                        sequence={[2500, "I build stuff."]}
                        speed={30}
                        wrapper="span"
                        repeat={false}
                        cursor={false}
                    />
                </p>

                <article className="text-text-col text-[18px] mt-5">
                    {/* Show after type effect. Brief desc. */}
                    <p>asd</p>
                </article>
                <div className="mt-12">
                    {/* Down arrow here to take to next section. add motion/effect to it on hover. */}     
                </div>
            </div>
        </section>
    );
}

export default Hero;

//Ship - https://sketchfab.com/3d-models/ship-in-clouds-c475323dc7f24e26ba2009c08c8e1941#download

//Medieval Book - https://sketchfab.com/3d-models/medieval-fantasy-book-06d5a80a04fc4c5ab552759e9a97d91a#download

//Artorias - https://sketchfab.com/3d-models/knight-artorias-and-great-grey-wolf-sif-bdf57355f95a420fa0c5b3e924bea16d#download

//Lucario - https://sketchfab.com/3d-models/lucario-32ab2458321e495084fe3bc3b3bf6a91

//Going Merry - https://sketchfab.com/3d-models/one-piece-going-merry-0e1f16189e8b4b4d9d9c3c60893d692b#download

//Black Piano - https://sketchfab.com/3d-models/grand-piano-4ce9e8dbeb74425eb215e4168807dcb5#download

//White Piano - https://sketchfab.com/3d-models/grand-piano-marble-8d4142b2c2d94dc7a314764f621845c6