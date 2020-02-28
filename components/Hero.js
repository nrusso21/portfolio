import React from 'react';
import Particles from 'react-particles-js';

import particlesConfig from '../config/particlesConfig';


const Hero = () => {
    return (
        <>
            <div className="flex flex-col justify-center bg-indigo-800">
                <Particles
                    params={particlesConfig}
                    height="100vh"
                />
                <div className="absolute self-center z-50" >
                    <div className="text-5xl font-heading font-light text-gray-200 text-center select-none" >
                        Hello, I'm <span className="text-red-600 font-semibold" >Nick Russo</span>.<br/>I'm a full-stack web developer.
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;